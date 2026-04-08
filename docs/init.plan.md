# KISS! Skills — Landing Page

## Context

A landing page for the KISS! Skills GitHub org — a collection of MIT-licensed Claude Code
agent skills. The page lists available skills and lets users navigate them with keyboard
arrows, matching the aesthetic of the Claude Code terminal welcome screen.

## Tech stack

- React 19.2 + TypeScript + Vite (zero other runtime deps)
- Raw CSS Modules (`*.module.css`) — no CSS framework
- `pnpm` as package manager

## Design

8-bit / Game Boy aesthetic:
- Warm parchment background (`#f0ebe0`)
- Burnt-orange accent (`#c84820`) for highlights
- `Courier New` monospace throughout
- Double-border retro frame (`outline` + `border` on the terminal wrapper)
- Pixel art dog via SVG with `shapeRendering="crispEdges"`

Two-panel layout inside a centered terminal frame:

```
┌── ♛ KISS! Skills ────────────────── v1.0 ─┐
│  [pixel dog]     │  pr-buddy               │
│  ♛ KISS! Skills  │  code review companion  │
│                  │  ─────────────────────  │
│  ▶ pr-buddy      │  detail text…           │
│    coming soon…  │                         │
│                  │  github → kiss-skills/… │
│  ↑↓ navigate · ↵ │  press ↵ to open        │
├──────────────────────────────────────────  ┤
│  MIT License · open source · free to use  │
└────────────────────────────────────────────┘
```

## File structure

```
src/
  main.tsx
  app.tsx + app.module.css
  index.css                   (CSS custom properties + reset)
  data/
    skills.ts                 (Skill type + skills array)
  components/
    terminal.tsx              (outer frame + two-panel layout)
    terminal.module.css
    skill-menu.tsx            (left panel: mascot + navigation)
    skill-menu.module.css
    skill-detail.tsx          (right panel: selected skill details)
    skill-detail.module.css
    pixel-dog.tsx             (SVG pixel art dog, 12×9 grid at 6px/pixel)
```

## Keyboard interactions

| Key        | Action                        |
|------------|-------------------------------|
| ArrowUp    | select previous skill (wraps) |
| ArrowDown  | select next skill (wraps)     |
| Enter      | open skill GitHub URL         |

## Adding a new skill

Add an entry to `src/data/skills.ts`. The `mascot` field is typed as
`'dog' | 'cat' | 'frog' | 'duck'` matching the banner artwork — future
`pixel-cat.tsx`, `pixel-frog.tsx`, `pixel-duck.tsx` components can be
wired in as those skills ship.
