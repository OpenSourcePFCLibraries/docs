<#
.SYNOPSIS
    Builds pfcdlg.pdf, the PFC dialog help, from the topics in this folder.

.DESCRIPTION
    1. node build.js writes every topic in topics.json to one HTML document, build\pfcdlg.htm.
    2. Microsoft Edge prints it to PDF (headless, with a profile of its own in build\edge).
    3. node pdfnames.js gives the PDF a named destination for each topic, so that
       pfcdlg.pdf#nameddest=<destination> opens it at the topic.

    Needs Node.js and Microsoft Edge.
#>
$ErrorActionPreference = 'Stop'
$root = $PSScriptRoot
$build = Join-Path $root 'build'

node (Join-Path $root 'build.js')
if ($LASTEXITCODE -ne 0) { throw 'build.js failed' }

$edge = @("${env:ProgramFiles(x86)}\Microsoft\Edge\Application\msedge.exe", "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe") | Where-Object { Test-Path $_ } | Select-Object -First 1
if (-not $edge) { throw "Microsoft Edge isn't installed" }
$printed = Join-Path $build 'printed.pdf'
Remove-Item $printed -ErrorAction SilentlyContinue
$url = 'file:///' + ((Join-Path $build 'pfcdlg.htm') -replace '\\', '/' -replace ' ', '%20')
$edgeArgs = @('--headless', '--disable-gpu', '--no-first-run', "--user-data-dir=`"$(Join-Path $build 'edge')`"",
    '--no-pdf-header-footer', '--generate-pdf-document-outline', "--print-to-pdf=`"$printed`"", "`"$url`"")
Start-Process $edge -ArgumentList $edgeArgs -Wait -WindowStyle Hidden
if (-not (Test-Path $printed)) { throw 'Edge did not print the PDF' }

node (Join-Path $root 'pdfnames.js') $printed (Join-Path $root 'pfcdlg.pdf')
if ($LASTEXITCODE -ne 0) { throw 'pdfnames.js failed' }
Write-Host 'pfcdlg.pdf'
