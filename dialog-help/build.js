// Writes build\pfcdlg.htm: every topic in topics.json, in that order, as one HTML document for
// Edge to print to PDF.  Each topic's heading has its destination as its id, and the contents
// link to them, so the PDF has a named destination for each topic.  Only the topics' titles
// (and the contents) are headings, so that the PDF's bookmarks are the topics.
//
// The Markdown is the small subset the topics use: headings, paragraphs, lists (one level of
// nesting), bold, italics, code, fenced code blocks, links and rules.
const fs = require('fs'), path = require('path');
const root = __dirname;
const topics = JSON.parse(fs.readFileSync(path.join(root, 'topics.json'), 'utf8'));
const dests = new Set(topics.map(t => t.destination));

const esc = s => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
function inline(s) {
  const code = [];
  s = s.replace(/`([^`]+)`/g, (m, c) => { code.push('<code>' + esc(c) + '</code>'); return '\u0000' + (code.length - 1) + '\u0000'; });
  s = esc(s);
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>').replace(/\*([^*]+)\*/g, '<em>$1</em>');
  // links to other topics become links within the document; the link to the contents is dropped
  s = s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (m, text, href) => {
    const d = href.replace(/\.md$/, '');
    if (dests.has(d)) return '<a href="#' + d + '">' + text + '</a>';
    return '<a href="' + href + '">' + text + '</a>';
  });
  return s.replace(/\u0000(\d+)\u0000/g, (m, i) => code[+i]);
}

function convert(md, id) {
  const lines = md.replace(/\r/g, '').split('\n');
  let html = '', para = [], list = null;   // list: { items: [[lines]] }
  const flushPara = () => { if (para.length) { html += '<p>' + inline(para.join(' ')) + '</p>\n'; para = []; } };
  const renderItem = item => {
    // an item's lines: the first, then indented paragraphs and a nested list
    let out = '', p = [], sub = [];
    const fp = () => { if (p.length) { out += (out ? '<p>' : '') + inline(p.join(' ')) + (out ? '</p>' : ''); p = []; } };
    for (const l of item) {
      if (/^\s*- /.test(l) && l.startsWith('  ')) { fp(); sub.push(l.replace(/^\s*- /, '')); continue; }
      if (sub.length && l.trim() !== '') { out += '<ul>' + sub.map(x => '<li>' + inline(x) + '</li>').join('') + '</ul>'; sub = []; }
      if (l.trim() === '') { fp(); continue; }
      p.push(l.trim());
    }
    fp(); if (sub.length) out += '<ul>' + sub.map(x => '<li>' + inline(x) + '</li>').join('') + '</ul>';
    return '<li>' + out + '</li>';
  };
  const flushList = () => { if (list) { html += '<ul>' + list.map(renderItem).join('\n') + '</ul>\n'; list = null; } };
  for (let i = 0; i < lines.length; i++) {
    const l = lines[i];
    if (l.startsWith('```')) {
      flushPara(); flushList(); const code = [];
      for (i++; i < lines.length && !lines[i].startsWith('```'); i++) code.push(lines[i]);
      html += '<pre><code>' + esc(code.join('\n')) + '</code></pre>\n'; continue;
    }
    if (list && (l.startsWith('  ') || (l.trim() === '' && i + 1 < lines.length && lines[i + 1].startsWith('  ')))) { list[list.length - 1].push(l); continue; }
    const h = l.match(/^(#{1,3}) (.*)$/);
    if (h) {
      flushPara(); flushList();
      const n = h[1].length;
      html += n === 1 ? '<h1 id="' + id + '">' + inline(h[2]) + '</h1>\n' : '<p class="sub">' + inline(h[2]) + '</p>\n';
      continue;
    }
    if (l === '---') { flushPara(); flushList(); break; }   // the footer: the link back to the contents
    if (l.startsWith('- ')) { flushPara(); (list = list || []).push([l.slice(2)]); continue; }
    if (l.trim() === '') { flushPara(); flushList(); continue; }
    para.push(l.trim());
  }
  flushPara(); flushList();
  return '<section>\n' + html + '</section>\n';
}

let body = '<h1 class="title">PFC Dialog Help</h1>\n<p class="intro">Help for the dialog boxes of the PowerBuilder Foundation Class Library.</p>\n';
body += '<nav><h2>Contents</h2><ol>' + topics.map(t => '<li><a href="#' + t.destination + '">' + esc(t.title) + '</a></li>').join('') + '</ol></nav>\n';
for (const t of topics) body += convert(fs.readFileSync(path.join(root, t.destination + '.md'), 'utf8'), t.destination);

const css = fs.readFileSync(path.join(root, 'style.css'), 'utf8');
const html = '<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><title>PFC Dialog Help</title>\n<style>\n' + css + '</style></head>\n<body>\n' + body + '</body></html>\n';
fs.mkdirSync(path.join(root, 'build'), { recursive: true });
fs.writeFileSync(path.join(root, 'build', 'pfcdlg.htm'), html);
console.log('build\\pfcdlg.htm: ' + topics.length + ' topics');
