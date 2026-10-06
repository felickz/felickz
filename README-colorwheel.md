👋

Based on ~15.6 years of appsec work (2011 to 2026), mapped onto the InfoSec colour wheel.

## All colors

Orange (attackers inspiring builders) is the biggest slice. White (governance and audit) is my own addition to the wheel.

<!-- svg: colorwheel -->
```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'pie1': '#FFA500', 'pie2': '#FFFF00', 'pie3': '#FFFFFF', 'pie4': '#00FF00', 'pie5': '#800080', 'pie6': '#0000FF', 'pie7': '#ff0000', 'pieOpacity': '1', 'pieStrokeColor': '#808080', 'pieOuterStrokeColor': '#808080', 'pieTitleTextColor': '#808080', 'pieLegendTextColor': '#808080', 'pieSectionTextColor': '#808080'}}}%%
pie
  title My career infosec colorwheel
  "Orange Team" : 41
  "Yellow Team" : 30
  "White Team" : 10
  "Green Team" : 8
  "Purple Team" : 6
  "Blue Team" : 3
  "Red Team" : 2
```

## Primary colors only

Secondary colors split evenly between their parents (Orange = Red + Yellow, Green = Blue + Yellow, Purple = Red + Blue). White excluded.

<!-- svg: colorwheel-primary -->
```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'pie1': '#FFFF00', 'pie2': '#ff0000', 'pie3': '#0000FF', 'pieOpacity': '1', 'pieStrokeColor': '#808080', 'pieOuterStrokeColor': '#808080', 'pieTitleTextColor': '#808080', 'pieLegendTextColor': '#808080', 'pieSectionTextColor': '#808080'}}}%%
pie
  title Primary colors only (builder, attacker, defender)
  "Yellow Team" : 60
  "Red Team" : 29
  "Blue Team" : 11
```

## Red vs Blue only

Builder work counts as defence, Orange and Purple split evenly. If Red means actual offensive operations, it is closer to 2%.

<!-- svg: colorwheel-redblue -->
```mermaid
%%{init: {'theme': 'base', 'themeVariables': { 'pie1': '#0000FF', 'pie2': '#ff0000', 'pieOpacity': '1', 'pieStrokeColor': '#808080', 'pieOuterStrokeColor': '#808080', 'pieTitleTextColor': '#808080', 'pieLegendTextColor': '#808080', 'pieSectionTextColor': '#808080'}}}%%
pie
  title Red vs Blue only
  "Blue Team" : 72
  "Red Team" : 28
```

[Introducing the InfoSec colour wheel — blending developers with red and blue security teams.](https://gh.io/infosec-color-wheel)