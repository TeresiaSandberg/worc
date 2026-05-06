param(
  [string]$ProjectRoot = (Resolve-Path "$PSScriptRoot/../..").Path
)

$ErrorActionPreference = "Stop"

$timestamp = Get-Date -Format "yyyyMMdd-HHmmss"
$isoTime = (Get-Date).ToString("s")

$backupDir = Join-Path $ProjectRoot "backups"
$logFile = Join-Path $backupDir "backup.log"
$lastRunFile = Join-Path $backupDir "last-run.txt"
$patchFile = Join-Path $backupDir "code-snapshot-$timestamp.patch"
$zipFile = Join-Path $backupDir "project-snapshot-$timestamp.zip"

if (-not (Test-Path $backupDir)) {
  New-Item -ItemType Directory -Path $backupDir | Out-Null
}

Push-Location $ProjectRoot
try {
  if (-not (Test-Path (Join-Path $ProjectRoot ".git"))) {
    git init | Out-Null
  }

  git add -A
  git diff --cached --quiet
  $hasStagedChanges = ($LASTEXITCODE -ne 0)

  if ($hasStagedChanges) {
    git commit -m "backup $timestamp" | Out-Null
  }

  git format-patch -1 HEAD --stdout | Out-File -FilePath $patchFile -Encoding utf8

  $excludeDirs = @(
    "node_modules",
    ".next",
    ".git",
    "backups"
  )

  $files = Get-ChildItem -Path $ProjectRoot -Recurse -File | Where-Object {
    foreach ($dir in $excludeDirs) {
      $segment = [IO.Path]::DirectorySeparatorChar + $dir + [IO.Path]::DirectorySeparatorChar
      if ($_.FullName.Contains($segment)) {
        return $false
      }
    }
    return $true
  }

  $relativeFiles = $files | ForEach-Object {
    $_.FullName.Substring($ProjectRoot.Length + 1)
  }

  if (Test-Path $zipFile) {
    Remove-Item $zipFile -Force
  }

  Compress-Archive -Path $relativeFiles -DestinationPath $zipFile -CompressionLevel Optimal

  $summary = "$isoTime OK created $(Split-Path $patchFile -Leaf) and $(Split-Path $zipFile -Leaf)"
  Add-Content -Path $logFile -Value $summary
  Set-Content -Path $lastRunFile -Value $isoTime -Encoding utf8
}
catch {
  $err = "$isoTime ERROR $($_.Exception.Message)"
  Add-Content -Path $logFile -Value $err
  throw
}
finally {
  Pop-Location
}
