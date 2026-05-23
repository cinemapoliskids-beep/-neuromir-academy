Add-Type -AssemblyName System.Drawing
foreach ($i in 10..14) {
    $path = "C:\Users\User\.gemini\antigravity\scratch\neuromir-academy\back${i}.jpg"
    if (Test-Path $path) {
        $img = [System.Drawing.Image]::FromFile($path)
        Write-Output "back${i}: $($img.Width)x$($img.Height)"
        $img.Dispose()
    } else {
        # Check JPG uppercase just in case
        $pathUpper = "C:\Users\User\.gemini\antigravity\scratch\neuromir-academy\back${i}.JPG"
        if (Test-Path $pathUpper) {
            $img = [System.Drawing.Image]::FromFile($pathUpper)
            Write-Output "back${i}: $($img.Width)x$($img.Height)"
            $img.Dispose()
        } else {
            Write-Output "back${i} not found"
        }
    }
}
