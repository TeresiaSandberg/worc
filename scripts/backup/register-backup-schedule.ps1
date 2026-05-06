param(
  [string]$ProjectRoot = (Resolve-Path "$PSScriptRoot/../..").Path,
  [string]$TaskPrefix = "worc-backup"
)

$ErrorActionPreference = "Stop"

$runner = Join-Path $ProjectRoot "scripts\backup\create-backup.ps1"
$times = @("00:00", "06:00", "12:00", "18:00")

foreach ($time in $times) {
  $taskName = "$TaskPrefix-$($time.Replace(':', ''))"
  $command = "powershell.exe -NoProfile -ExecutionPolicy Bypass -File `"$runner`" -ProjectRoot `"$ProjectRoot`""

  schtasks /Create `
    /TN $taskName `
    /TR $command `
    /SC DAILY `
    /ST $time `
    /F | Out-Null
}

Write-Output "Scheduled tasks created:"
foreach ($time in $times) {
  $taskName = "$TaskPrefix-$($time.Replace(':', ''))"
  schtasks /Query /TN $taskName /FO LIST | Out-String | Write-Output
}
