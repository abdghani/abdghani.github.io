#!/usr/bin/env bash
# Rebuild the ATS-friendly resume PDF from resume/resume.html using headless Chrome.
set -euo pipefail
cd "$(dirname "$0")/.."
CHROME="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
"$CHROME" --headless=new --disable-gpu --no-pdf-header-footer \
  --print-to-pdf="Abdullah_Ghani_Resume.pdf" "file://$PWD/resume/resume.html"
echo "Wrote Abdullah_Ghani_Resume.pdf"
