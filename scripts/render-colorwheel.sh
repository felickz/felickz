#!/usr/bin/env bash
# Renders the first mermaid block of README-colorwheel.md to colorwheel.svg
set -euo pipefail
src="README-colorwheel.md"
out="colorwheel.svg"
tmp="$(mktemp -d)"

awk '/^```mermaid/{f=1;next} /^```/{f=0} f' "$src" > "$tmp/colorwheel.mmd"
[ -s "$tmp/colorwheel.mmd" ] || { echo "no mermaid block found in $src" >&2; exit 1; }

echo '{"args":["--no-sandbox"]}' > "$tmp/puppeteer.json"
npx --yes @mermaid-js/mermaid-cli@11 -p "$tmp/puppeteer.json" -b transparent -i "$tmp/colorwheel.mmd" -o "$out"