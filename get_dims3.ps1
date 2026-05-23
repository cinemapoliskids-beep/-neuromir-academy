Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("C:\Users\User\.gemini\antigravity\scratch\neuromir-academy\back15.jpg")
Write-Output "back15: $($img.Width)x$($img.Height)"
$img.Dispose()

$s = New-Object -COMObject Shell.Application
$f = $s.NameSpace("C:\Users\User\.gemini\antigravity\scratch\neuromir-academy")
foreach ($i in 1..7) {
    $file = $f.ParseName("video$i.mp4")
    $str = "video$i:"
    for ($c=0; $c -le 350; $c++) {
        $v = $f.GetDetailsOf($file, $c)
        if ($v -match '1920|1080|720|1280|2160|3840|1440|2560|640|480|848|480|608|1080') {
            $str += " c${c}=${v}"
        }
    }
    Write-Output $str
}
