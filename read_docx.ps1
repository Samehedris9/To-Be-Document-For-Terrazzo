Add-Type -AssemblyName System.IO.Compression.FileSystem
$dir = 'C:\Users\Sameh Edris\.gemini\antigravity\brain\7eae638f-8974-440e-8743-81786780e194\.user_uploaded'
Get-ChildItem $dir -Filter *.docx | ForEach-Object {
    Write-Host "=== File:" $_.Name
    $zip = [System.IO.Compression.ZipFile]::OpenRead($_.FullName)
    $entry = $zip.GetEntry('word/document.xml')
    if ($entry) {
        $reader = New-Object System.IO.StreamReader($entry.Open(), [System.Text.Encoding]::UTF8)
        $text = $reader.ReadToEnd()
        $reader.Close()
        $clean = [System.Text.RegularExpressions.Regex]::Replace($text, '<[^>]+>', ' ')
        $clean = [System.Text.RegularExpressions.Regex]::Replace($clean, '\s+', ' ')
        Write-Host "Length:" $clean.Length
        $matches = [System.Text.RegularExpressions.Regex]::Matches($clean, '.{0,50}(تكويد|كود|Coding|رمز|ID|ترقيم|باركود).{0,50}')
        Write-Host "Matches found:" $matches.Count
        foreach ($m in ($matches | Select-Object -First 20)) {
            Write-Host "  Match:" $m.Value
        }
    }
    $zip.Dispose()
}
