const fs = require('fs');
const cp = require('child_process');

const ps = `
Add-Type -AssemblyName System.IO.Compression.FileSystem
$dir = 'C:\\Users\\Sameh Edris\\.gemini\\antigravity\\brain\\7eae638f-8974-440e-8743-81786780e194\\.user_uploaded'
Get-ChildItem $dir -Filter *.docx | ForEach-Object {
    Write-Host "====================================="
    Write-Host "FILE:" $_.Name
    $zip = [System.IO.Compression.ZipFile]::OpenRead($_.FullName)
    $entry = $zip.GetEntry('word/document.xml')
    if ($entry) {
        $reader = New-Object System.IO.StreamReader($entry.Open(), [System.Text.Encoding]::UTF8)
        $text = $reader.ReadToEnd()
        $reader.Close()
        $clean = [System.Text.RegularExpressions.Regex]::Replace($text, '<[^>]+>', ' ')
        $clean = [System.Text.RegularExpressions.Regex]::Replace($clean, '\s+', ' ')
        Write-Host "START:" $clean.Substring(0, [Math]::Min(800, $clean.Length))
    }
    $zip.Dispose()
}
`;

fs.writeFileSync('read_titles.ps1', ps, 'utf8');
const res = cp.execSync('powershell -ExecutionPolicy Bypass -File read_titles.ps1', { encoding: 'utf8' });
console.log(res);
try { fs.unlinkSync('read_titles.ps1'); } catch(e){}
