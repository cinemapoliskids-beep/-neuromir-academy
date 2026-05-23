Add-Type -AssemblyName System.Drawing
foreach ($i in 1..9) {
    $ext = "jpg"
    if ($i -eq 1) { $ext = "JPG" }
    $path = "C:\Users\User\.gemini\antigravity\scratch\neuromir-academy\back${i}.${ext}"
    if (Test-Path $path) {
        $img = [System.Drawing.Image]::FromFile($path)
        Write-Output "back${i}: $($img.Width)x$($img.Height)"
        $img.Dispose()
    } else {
        Write-Output "back${i} not found"
    }
}
