$shell = New-Object -COMObject Shell.Application
$folder = $shell.NameSpace("C:\Users\User\.gemini\antigravity\scratch\neuromir-academy")

foreach ($i in 1..7) {
    $file = $folder.ParseName("video$i.mp4")
    $res = "video$i.mp4:"
    for ($col = 0; $col -le 350; $col++) {
        $name = $folder.GetDetailsOf($null, $col)
        $val = $folder.GetDetailsOf($file, $col)
        if ($name -match 'width|height|Ширина|Высота' -and $val -and $val -match '\d') {
            $res += " $name = $val;"
        }
    }
    Write-Output $res
}
