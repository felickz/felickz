#!/usr/bin/env bash
# Renders every mermaid block in README-colorwheel.md to an SVG.
# The output name comes from the preceding "<!-- svg: name -->" comment.
set -euo pipefail
src="README-colorwheel.md"
tmp="$(mktemp -d)"

awk -v dir="$tmp" '
  /^<!-- svg: [A-Za-z0-9_-]+ -->/ { name=$3; next }
  /^```mermaid/ { if (name != "") { f=1; out=dir "/" name ".mmd" }; next }
  /^```/ { f=0; name=""; next }
  f { print > out }
' "$src"

shopt -s nullglob
files=("$tmp"/*.mmd)
[ ${#files[@]} -gt 0 ] || { echo "no mermaid blocks found in $src" >&2; exit 1; }

echo '{"args":["--no-sandbox"]}' > "$tmp/puppeteer.json"
for f in "${files[@]}"; do
  name="$(basename "$f" .mmd)"
  npx --yes @mermaid-js/mermaid-cli@11 -p "$tmp/puppeteer.json" -b transparent -i "$f" -o "$name.svg"
done