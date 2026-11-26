Set-Location 'C:\Users\inanj\OneDrive\Documents\GitHub\articles'
$files = Get-ChildItem _posts\*.md
$fixedCount = 0
$imageFixedCount = 0
foreach ($f in $files) {
    $lines = Get-Content $f.FullName
    $newLines = @()
    $inFM = $false
    $fmEnd = $false
    $hasPermalink = $false
    $hasImage = $false
    $hasDate = $false
    $dateValue = $null
    $titleValue = $null
    
    # First pass: parse front matter
    foreach ($line in $lines) {
        if ($line -eq '---') {
            if (-not $inFM) { $inFM = $true; $newLines += $line; continue }
            else { $fmEnd = $true; $inFM = $false; $newLines += $line; continue }
        }
        if ($inFM) {
            if ($line -match '^permalink:\s*(.*)$') { $hasPermalink = $true }
            if ($line -match '^image:\s*(.*)$') { $hasImage = $true }
            if ($line -match '^date:\s*(.*)$') { $hasDate = $true; $dateValue = $matches[1].Trim() }
            if ($line -match '^dateModified:\s*(.*)$') { if (-not $dateValue) { $dateValue = $matches[1].Trim() } }
            if ($line -match '^title:\s*"?(.*?)"?\s*$') { $titleValue = $matches[1].Trim() }
        }
        $newLines += $line
    }
    
    # Fix missing permalink
    if (-not $hasPermalink -and $dateValue -and $titleValue) {
        $slug = $f.BaseName -replace '^\d{4}-\d{2}-\d{2}-', ''
        $dateParts = $dateValue -split '-'
        $year = $dateParts[0]
        $month = $dateParts[1].PadLeft(2, '0')
        $day = $dateParts[2].PadLeft(2, '0')
        $permalink = "/$year/$month/$day/$slug.html"
        
        # Insert permalink before the closing ---
        $finalLines = @()
        $inFM2 = $false
        foreach ($line in $newLines) {
            if ($line -eq '---') {
                if (-not $inFM2) { $inFM2 = $true; $finalLines += $line; continue }
                else {
                    # Insert permalink before closing ---
                    $finalLines += "permalink: $permalink"
                    $fmEnd = $true
                    $inFM2 = $false
                    $finalLines += $line
                    continue
                }
            }
            if ($inFM2) { $finalLines += $line; continue }
            $finalLines += $line
        }
        Set-Content -Path $f.FullName -Value $finalLines -Encoding utf8
        $fixedCount++
        Write-Host "Fixed permalink: $($f.Name) -> $permalink"
    }
    
    # Fix missing image for mobile SEO audit post
    if ($f.Name -eq '2026-11-22-mobile-seo-audit-new-wordpress-site-guide.md' -and -not $hasImage) {
        $finalLines = @()
        $inFM3 = $false
        foreach ($line in $newLines) {
            if ($line -eq '---') {
                if (-not $inFM3) { $inFM3 = $true; $finalLines += $line; continue }
                else {
                    $finalLines += 'image: "https://f9xr.org/articles/assets/post-images/google-deep-review-header.webp"'
                    $finalLines += 'image_width: 1200'
                    $finalLines += 'image_height: 630'
                    $inFM3 = $false
                    $finalLines += $line
                    continue
                }
            }
            if ($inFM3) { $finalLines += $line; continue }
            $finalLines += $line
        }
        Set-Content -Path $f.FullName -Value $finalLines -Encoding utf8
        $imageFixedCount++
        Write-Host "Fixed image: $($f.Name)"
    }
}

Write-Host "=== SEO CONSISTENCY FIX SUMMARY ==="
Write-Host "Permalinks fixed: $fixedCount"
Write-Host "Images fixed: $imageFixedCount"