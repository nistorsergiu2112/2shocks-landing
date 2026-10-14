---
name: "2shocks Website"
description: "The established 2shocks identity adapted to motorcycle product marketing."
colors:
  ink: "#0b0b0f"
  graphite: "#1c1c22"
  paper: "#f7f7f8"
  surface: "#fff"
  line: "#e6e6ea"
  muted: "#62626b"
  plate: "#f8cd47"
  green: "#18794e"
  amber: "#925b16"
  red: "#b63830"
typography:
  display:
    fontFamily: "Space Grotesk Variable, Arial Narrow, sans-serif"
    fontSize: "clamp(42px, 5.8vw, 82px)"
    fontWeight: 650
    lineHeight: 1.03
    letterSpacing: "-.04em"
  headline:
    fontFamily: "Space Grotesk Variable, Arial Narrow, sans-serif"
    fontSize: "clamp(36px, 4.4vw, 62px)"
    fontWeight: 650
    lineHeight: 1.06
    letterSpacing: "-.035em"
  title:
    fontFamily: "Space Grotesk Variable, Arial Narrow, sans-serif"
    fontSize: "23px"
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: "-.035em"
  body:
    fontFamily: "Inter Variable, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "16px"
    lineHeight: 1.55
  label:
    fontFamily: "Inter Variable, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "15px"
    fontWeight: 600
    lineHeight: 1.5
    letterSpacing: ".005em"
rounded:
  "control": "12px"
  "tag": "7px"
  "tabs": "10px"
  "tab": "7px"
  "card": "20px"
  "feature-panel": "26px"
  "device": "34px"
  "screen": "27px"
  "full": "50%"
spacing:
  "gutter": "clamp(20px, 4vw, 64px)"
  "section-desktop": "104px 40px"
  "section-mobile": "65px 22px"
  "cta": "16px 26px"
  "tabs": "3px"
  "tab": "10px 18px"
  "card": "38px"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.surface}"
    rounded: "{rounded.control}"
    padding: "{spacing.cta}"
    height: "56px"
  launch-tag:
    backgroundColor: "#ffda4a"
    textColor: "{colors.ink}"
    padding: "10px 17px"
    rounded: "7px 7px 7px 0"
  feature-tab:
    backgroundColor: "transparent"
    textColor: "#55555e"
    rounded: "{rounded.tab}"
    padding: "{spacing.tab}"
  feature-tab-selected:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.ink}"
    rounded: "{rounded.tab}"
    padding: "{spacing.tab}"
  plan-card:
    rounded: "{rounded.card}"
    padding: "{spacing.card}"
  feature-panel:
    backgroundColor: "{colors.paper}"
    rounded: "{rounded.feature-panel}"
  phone-frame:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.device}"
    padding: "7px"
---

# Design System: 2shocks Website

## Overview

**Creative North Star: "The Motorcycle Passport"**

Preserve the established 2shocks identity: graphite, paper and registration-plate yellow; Space Grotesk and Inter; and the existing twin-shock logo. The user rejected replacement visual directions. Refine this system through clearer hierarchy, readable metadata, consistent controls and restrained depth.

The native app helps riders operate: identify the motorcycle, understand its record and act on the next maintenance task. The sibling website persuades through larger typography and screenshots of these same flows. They share an identity, while density and control sizes follow their platform.

The website carries the established identity into a more spacious marketing surface. The descriptive North Star names the existing product signature; it does not authorize a redesign. Confirmed brand commitments live in the sibling app's `PRODUCT.md`. Sources here are `app/globals.css`, the effective cascade in `app/home.module.css`, and the screen-tour components. Verification scope is recorded in `docs/DESIGN_VERIFICATION.md`.

**Key Characteristics:**
- Graphite identity and white surfaces on paper.
- Registration yellow as a recognizable motorcycle accent.
- Space Grotesk headings and numerals; Inter for reading and controls.
- Immediate content and short, interruptible feedback.

## Colors

### Primary

Graphite and ink anchor actions and headings. Registration-plate yellow marks motorcycle identity, launch tags, small section accents and selected details. The launch tag has an incumbent brighter local fill, recorded on its component token rather than made into a new global accent.

### Neutral

White and paper alternate across the page. Muted gray supports readable secondary copy; fine neutral lines divide content. Dark footer surfaces stay within the graphite family. Green, amber and red retain their semantic purpose.

**The Shared Identity Rule.** Preserve the palette, font pairing and twin-shock logo across app and website; adapt layout and size to the platform.

## Typography

**Display Font:** Space Grotesk Variable, with Arial Narrow and sans-serif fallbacks.
**Body Font:** Inter Variable, with platform UI sans-serif fallbacks.

Large, tightly tracked headings create the marketing hierarchy. Reading text and controls use Inter with quieter tracking. The frontmatter captures the existing hero, section, step-title, base-body and kicker roles. Lede text is larger than base body (18px) and constrained to (570px); feature copy is commonly constrained to (40ch).

Preserve meaningful hierarchy across small screens. Existing mobile feature headings become (27px), while carousel caption headings become (22px). Do not copy native display sizes into the marketing hero or website clamps into native controls.

## Layout

The global container is capped at (1240px), with fluid gutters carried in frontmatter. Home sections cap at (1220px); their desktop and mobile padding are recorded as existing spacing tokens. The hero centers its message and phone tour; feature, plan and FAQ sections use responsive grids.

At the (900px) breakpoint section insets narrow and gaps reduce. At (600px), feature panels and plan/FAQ grids stack, compact tab labels appear and the screenshot precedes feature copy. Navigation uses its effective final switch at (1250px), not earlier superseded declarations in the stylesheet. The header becomes shorter at (560px); footer grids stack at (700px).

The website persuades with readable descriptions and source app screens; the app operates with denser task controls. Retain this difference while keeping identity synchronized.

## Elevation & Depth

Fine borders and alternating paper/white surfaces carry most structure. Shadows emphasize phone frames, small selected controls and floating utilities. The sidecar preserves the exact CSS shadow strings from the implementation. Phone frames give screenshots physical context without recreating their UI in marketing code.

## Shapes

The page uses softly rounded controls and containers, with larger feature-panel and phone-frame corners. Phone screenshot clipping follows the inner screen radius. The small yellow launch tag retains its asymmetrical corner and slight rotation. Circular carousel and floating controls remain visually distinct from text CTAs. Preserve the existing twin-shock artwork.

## Components

### Buttons

The main CTA uses ink, white text, a fine ink border and the size/padding recorded in frontmatter. Inter Semibold (17px) carries the label; an adjacent accent can use plate yellow. Fine-pointer hover shifts the background to a lighter graphite. Pointer press scales (0.97) over the shared press timing; release uses the shared release timing. Focused keyboard activation skips scaling. Disabled actions remain visibly unavailable.

Global keyboard focus uses an amber outline (3px) and offset (4px). Keep focus immediate. The sidecar includes the full focus and motion treatments, which cannot fit component frontmatter.

### Chips

The launch tag is an informational label, not an interactive filter. Plate-yellow tags and Plus badges communicate status or tier without becoming the default action treatment.

### Cards / Containers

Plan cards use a border and the existing card corner and padding; mobile padding reduces to (28px 24px). Feature panels use paper and larger corners. Avoid giving every text section a card; retain the incumbent open section layout.

### Navigation

Desktop uses horizontal Inter links and an outlined contact action. Smaller widths use an accessible native details menu with a dark dropdown and scrollable height. The footer retains the shared brand, readable contact details and grouped links.

### Feature Tabs

A neutral track contains compact labels; selected tabs use white, a border and subtle shadow. The tablist uses arrow keys, Home and End with a roving tab stop. The active panel alone is visible. Pointer selection may scroll the tour into view on mobile; keyboard selection remains immediate. Reduced motion skips animated reveals.

### Phone Tour

Use the existing screenshots from `public/screens`, preserving full phone content and accurate alt text. Desktop shows one active phone with neighboring screens; mobile emphasizes one complete phone. Arrow, dot and swipe input all select a screen. Rotation runs every (10000ms) only on desktop when visible, in view, unpaused and not hovered/focused; reduced motion disables rotation. Manual selection announces the caption politely. Keyboard selection skips transition delays.

### FAQ

Border-separated questions use native buttons with expanded state and an associated answer region. The existing disclosure transitions animate grid height and opacity together; reduced motion removes them. Content remains readable without invented card decoration.

**The Immediate Feedback Rule.** Routine content is visible immediately. Press feedback is short and interruptible; reduced motion removes unnecessary transforms.

## Do's and Don'ts

### Do:
- Do preserve the twin-shock logo and the established palette and font pairing.
- Do keep source app screenshots, alt text and feature descriptions in sync.
- Do use the website typography clamps and responsive layout from current CSS.
- Do retain source labels and distinguish official information, rider entries and parts guidance.
- Do respect reduced motion and expose selected, disabled, busy and error states.

### Don't:
- Don't introduce a replacement visual direction or logo.
- Don't turn registration yellow into the default fill for every action.
- Don't stagger routine screen content or delay keyboard feedback.
- Don't imply that prepared garage enquiries or booking requests have already been sent.
