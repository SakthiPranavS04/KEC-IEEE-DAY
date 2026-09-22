Add-Type -AssemblyName System.Drawing
$sourcePath = "D:\KEC IEEE DAY\public\assets\ieee-day-splash.jpg"
$destPath = "D:\KEC IEEE DAY\public\assets\ieee-day-splash-hd.png"
$source = [System.Drawing.Image]::FromFile($sourcePath)
$newWidth = $source.Width * 3
$newHeight = $source.Height * 3
$target = New-Object System.Drawing.Bitmap($newWidth, $newHeight)
$graphics = [System.Drawing.Graphics]::FromImage($target)
$graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
$graphics.DrawImage($source, 0, 0, $newWidth, $newHeight)
$target.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Png)
$graphics.Dispose()
$target.Dispose()
$source.Dispose()
Write-Output "Successfully upscaled to $newWidth x $newHeight"
