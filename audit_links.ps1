Set-Location 'C:\Users\inanj\OneDrive\Documents\GitHub\articles'
$files = Get-ChildItem _posts\*.md
$allLinks = @()
$internalLinks = @()
$externalLinks = @()
foreach ($f in $files) {
    $content = Get-Content $f.FullName -Raw
    $matches = [regex]::Matches($content, '\[([^\]]*)\]\(([^)]+)\)')
    foreach ($m in $matches) {
        $url = $m.Groups[2].Value
        $text = $m.Groups[1].Value
        $allLinks += [PSCustomObject]@{ File = $f.Name; Text = $text; URL = $url }
        if ($url -match '^https?://') {
            $externalLinks += $url
        } elseif ($url -match '^/') {
            $internalLinks += [PSCustomObject]@{ File = $f.Name; URL = $url }
        } elseif ($url -match '\.md$|\.html$') {
            $internalLinks += [PSCustomObject]@{ File = $f.Name; URL = $url }
        }
    }
}
$checkedInternal = @()
foreach ($link in $internalLinks) {
    $targetPath = $null
    if ($link.URL -match '\.md$') {
        $targetPath = Join-Path -Path '_posts' -ChildPath (Split-Path -Leaf $link.URL)
    } elseif ($link.URL -match '\.html$') {
        $targetPath = Join-Path -Path '_posts' -ChildPath ($link.URL -replace '\.html$', '.md')
    } else {
        $targetPath = Join-Path -Path '.' -ChildPath $link.URL.TrimStart('/')
    }
    $exists = Test-Path $targetPath
    $checkedInternal += [PSCustomObject]@{ File = $link.File; URL = $link.URL; Exists = if ($exists) { 'OK' } else { 'BROKEN' } }
}
$brokenInternal = $checkedInternal | Where-Object { $_.Exists -eq 'BROKEN' }
Write-Host "=== BROKEN LINKS AUDIT ==="
Write-Host "Total links found: $($allLinks.Count)"
Write-Host "Internal links: $($internalLinks.Count)"
Write-Host "External links: $($externalLinks.Count)"
Write-Host "Broken internal links: $($brokenInternal.Count)"
if ($brokenInternal.Count -gt 0) {
    $brokenInternal | Format-Table -AutoSize -Wrap
}
$checkedInternal | Export-Csv -Path 'broken_links_audit.csv' -NoTypeInformation -Encoding utf8
Write-Host "Broken links audit saved to broken_links_audit.csv"