$s = New-Object -COMObject Shell.Application
$f = $s.NameSpace("C:\Users\User\.gemini\antigravity\scratch\neuromir-academy")
foreach ($i in 8..10) {
    $file = $f.ParseName("video${i}.mp4")
    $str = "video${i}:"
    for ($c=0; $c -le 350; $c++) {
        $v = $f.GetDetailsOf($file, $c)
        if ($v -match '1920|1080|720|1280|2160|3840|1440|2560|640|480|848|608') {
            $str += " c${c}=${v}"
        }
    }
    Write-Output $str
}
