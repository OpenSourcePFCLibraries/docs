// pdfnames.js <in.pdf> <out.pdf> [map.json]
//
// Gives a PDF named destinations in a /Names /Dests name tree, the form every viewer reads
// (Edge's and WebView2's viewer ignore the older /Dests dictionary), so that
// file.pdf#nameddest=<name> opens it at that place.  The names come from
//  - the PDF's /Dests dictionary, if it has one (Edge's print to PDF writes one for each
//    element with an id that a link in the document points to), and
//  - map.json, if given: { "<outline (bookmark) title>": "<name>" }, for a PDF whose outline
//    has the places but which has no names (Word's export to PDF, for example).
// The PDF is changed with an incremental update: the original bytes are kept as they are.
const fs = require('fs'), zlib = require('zlib');
const [inp, out, mapFile] = process.argv.slice(2);
if (!inp || !out) { console.error('usage: node pdfnames.js <in.pdf> <out.pdf> [map.json]'); process.exit(2); }
const buf = fs.readFileSync(inp); const raw = buf.toString('latin1');
const map = mapFile ? JSON.parse(fs.readFileSync(mapFile, 'utf8').replace(/^\uFEFF/, '')) : {};

// Every object's text, by number: the uncompressed ones and those in object streams
const objs = {};
for (const m of raw.matchAll(/(?:^|[\r\n\s])(\d+) 0 obj\b([\s\S]*?)\bendobj/g)) objs[+m[1]] = m[2];
const streamData = body => {
  const i = raw.indexOf(body); const s = raw.indexOf('stream', i + body.indexOf('stream'));
  let st = s + 6; if (raw[st] === '\r') st++; if (raw[st] === '\n') st++;
  const len = (body.match(/\/Length (\d+)(?! \d+ R)/) || [])[1];
  const end = len ? st + +len : raw.indexOf('endstream', st);
  return zlib.inflateSync(buf.subarray(st, end)).toString('latin1');
};
for (const [n, body] of Object.entries(objs)) {
  if (!/\/Type\s*\/ObjStm/.test(body)) continue;
  const first = +body.match(/\/First (\d+)/)[1], count = +body.match(/\/N (\d+)/)[1];
  const data = streamData(body);
  const head = data.slice(0, first).trim().split(/\s+/).map(Number);
  for (let k = 0; k < count; k++) {
    const num = head[2 * k], off = head[2 * k + 1], next = k + 1 < count ? head[2 * k + 3] : data.length - first;
    if (!(num in objs)) objs[num] = data.slice(first + off, first + next);
  }
}

// The last trailer: from the last classic trailer, or the last cross-reference stream
const startxref = +[...raw.matchAll(/startxref\s+(\d+)/g)].pop()[1];
let trailer = '';
const at = raw.slice(startxref, startxref + 20);
if (at.startsWith('xref')) trailer = raw.slice(raw.indexOf('trailer', startxref), raw.indexOf('startxref', startxref));
else trailer = raw.slice(startxref, raw.indexOf('stream', startxref));
const root = +trailer.match(/\/Root (\d+) 0 R/)[1];
const info = trailer.match(/\/Info \d+ 0 R/), id = trailer.match(/\/ID\s*\[[^\]]*\]/);
const size = Math.max(+trailer.match(/\/Size (\d+)/)[1], ...Object.keys(objs).map(Number).map(n => n + 1));

const catalog = objs[root].trim().replace(/^<<|>>$/g, '');
if (/\/Names\b/.test(catalog)) { console.error('The PDF already has a /Names dictionary; not changed.'); process.exit(1); }

const decode = s => {
  // a PDF string: (literal) or <hex>, in PDFDocEncoding or UTF-16BE with a byte order mark
  let bytes;
  if (s.startsWith('<')) { const h = s.slice(1, -1).replace(/\s/g, ''); bytes = Buffer.from(h.length % 2 ? h + '0' : h, 'hex'); }
  else {
    const t = s.slice(1, -1); const b = [];
    for (let i = 0; i < t.length; i++) {
      const c = t[i];
      if (c !== '\\') { b.push(c.charCodeAt(0)); continue; }
      const d = t[++i];
      if (/[0-7]/.test(d)) { let o = d; while (o.length < 3 && /[0-7]/.test(t[i + 1])) o += t[++i]; b.push(parseInt(o, 8)); }
      else if (d === '\r' || d === '\n') { if (d === '\r' && t[i + 1] === '\n') i++; }
      else b.push({ n: 10, r: 13, t: 9, b: 8, f: 12 }[d] !== undefined ? { n: 10, r: 13, t: 9, b: 8, f: 12 }[d] : d.charCodeAt(0));
    }
    bytes = Buffer.from(b);
  }
  if (bytes[0] === 0xFE && bytes[1] === 0xFF) { const u = Buffer.from(bytes.subarray(2)); u.swap16(); return u.toString('utf16le'); }
  return bytes.toString('latin1');
};
const STR = /\((?:[^()\\]|\\[\s\S])*\)|<[0-9A-Fa-f\s]*>/;

const names = {};
// 1. the /Dests dictionary
const destsRef = catalog.match(/\/Dests (\d+) 0 R/);
if (destsRef) for (const m of objs[+destsRef[1]].matchAll(/\/([^\s\/\[\]<>()]+)\s*(\[[^\]]*\])/g)) names[m[1].replace(/#([0-9A-Fa-f]{2})/g, (x, h) => String.fromCharCode(parseInt(h, 16)))] = m[2];
// 2. outline items named in the map
const wanted = new Set(Object.keys(map)), found = new Set();
for (const body of Object.values(objs)) {
  const t = body.match(new RegExp('/Title\\s*(' + STR.source + ')'));
  if (!t) continue;
  const title = decode(t[1]).trim();
  if (!wanted.has(title)) continue;
  const d = body.match(/\/Dest\s*(\[[^\]]*\])/) || body.match(/\/D\s*(\[[^\]]*\])/);
  if (!d) continue;
  if (!found.has(title)) { names[map[title]] = d[1]; found.add(title); }
}
const missing = [...wanted].filter(t => !found.has(t));
if (missing.length) { console.error('Not in the outline: ' + missing.join(' | ')); process.exit(1); }
const keys = Object.keys(names).sort((a, b) => (a < b ? -1 : a > b ? 1 : 0));   // a name tree is sorted by the bytes of the names
if (!keys.length) { console.error('No destinations found.'); process.exit(1); }
const lit = s => '(' + s.replace(/[\\()]/g, c => '\\' + c) + ')';

// The update: the name tree, the /Names dictionary, and the catalog with /Names added
let add = '\n'; const offs = {};
const put = (n, body) => { offs[n] = buf.length + Buffer.byteLength(add, 'latin1'); add += n + ' 0 obj\n' + body + '\nendobj\n'; };
const tree = size, namesDict = size + 1;
put(tree, '<< /Names [' + keys.map(k => lit(k) + ' ' + names[k]).join('\n') + ']\n/Limits [' + lit(keys[0]) + ' ' + lit(keys[keys.length - 1]) + '] >>');
put(namesDict, '<< /Dests ' + tree + ' 0 R >>');
put(root, '<<' + catalog + ' /Names ' + namesDict + ' 0 R >>');
const xref = buf.length + Buffer.byteLength(add, 'latin1');
const entry = n => String(offs[n]).padStart(10, '0') + ' 00000 n \n';
add += 'xref\n0 1\n0000000000 65535 f \n' + root + ' 1\n' + entry(root) + tree + ' 2\n' + entry(tree) + entry(namesDict);
add += 'trailer\n<< /Size ' + (size + 2) + ' /Root ' + root + ' 0 R' + (info ? ' ' + info[0] : '') + (id ? ' ' + id[0] : '') + ' /Prev ' + startxref + ' >>\nstartxref\n' + xref + '\n%%EOF\n';
fs.writeFileSync(out, Buffer.concat([buf, Buffer.from(add, 'latin1')]));
console.log(keys.length + ' named destinations');
