# 2Shocks brand assets v2

Refined **Coil + Shaft** twin-shock symbol. This is the production master: an even 3-turn helix, damper body below the spring, and transparent mounting eyelets.

## SVG masters

- `svg/2shocks-symbol.svg` — primary near-black symbol, transparent background.
- `svg/2shocks-symbol-white.svg` — white symbol for dark surfaces.
- `svg/2shocks-symbol-yellow.svg` — plate-yellow symbol for near-black surfaces.
- `svg/2shocks-symbol-currentcolor.svg` — inherits CSS `color`; best for web interfaces.
- `svg/2shocks-symbol-small.svg` — optically strengthened compact mark for 16–32 px.

Do not recolour the plate-yellow master. Use `currentColor` when a contextual colour is required. Masters use a square `viewBox` and no baked background. Each file has unique mask, title and desc ids so they can be inlined together.

## Platform artwork

- `platform/2shocks-app-icon.svg` / `.png` — 1024 × 1024 App Store artwork as an opaque RGB PNG. Do not add rounded corners; Apple applies its own mask.
- `platform/2shocks-android-foreground.svg` / `.png` — plate-yellow foreground on a transparent 432 × 432 adaptive-icon canvas.
- `platform/2shocks-android-background.svg` / `.png` — opaque `#0B0B0F` adaptive-icon background.
- `platform/2shocks-android-monochrome.svg` / `.png` — single-colour adaptive-icon artwork for themed icons.
- `platform/2shocks-favicon.svg`, `2shocks-favicon-32.png`, `2shocks-favicon-16.png` — compact website icon set.
- `platform/2shocks-splash-symbol.svg` / `.png` — transparent plate-yellow splash artwork (512 × 512).
- `platform/2shocks-notification-icon.svg` / `.png` — white transparent notification artwork from the compact two-turn mark; Android applies the configured notification colour.
- `platform/2shocks-symbol-512.png` — near-black master at 512 × 512.

Android adaptive-icon background: `#0B0B0F`. Brand foreground: `#F8CD47`. The monochrome foreground must remain a single solid colour; Android supplies the themed colour.

## Web / Next.js

Copy `components/TwoShocksSymbol.tsx` into the application:

```tsx
import { TwoShocksSymbol } from "./TwoShocksSymbol";

<TwoShocksSymbol
  width={32}
  height={32}
  style={{ color: "#F8CD47" }}
  title="2Shocks"
/>

<TwoShocksSymbol compact width={24} height={24} title="2Shocks" />
```

For static markup:

```html
<img src="/brand/2shocks-symbol.svg" width="48" height="48" alt="2Shocks" />
<img src="/brand/2shocks-symbol-small.svg" width="24" height="24" alt="" />
```

Use an empty `alt` when the adjacent wordmark already says “2shocks”.

## React Native / Expo

```sh
npx expo install react-native-svg
```

Copy `components/TwoShocksSymbol.native.tsx` into the app:

```tsx
import { TwoShocksSymbol } from "./TwoShocksSymbol.native";

<TwoShocksSymbol size={32} color="#0B0B0F" accessibilityLabel="2Shocks" />
<TwoShocksSymbol compact size={24} color="#F8CD47" />
```

For Expo config, use `2shocks-app-icon.png` as `expo.icon`. Use the Android background colour `#0B0B0F` with `2shocks-android-foreground.png` as `android.adaptiveIcon.foregroundImage`, and `2shocks-android-monochrome.png` as `android.adaptiveIcon.monochromeImage`.

## Minimum use

- Primary symbol: 48 px and larger.
- Compact symbol: 16–32 px.
- Keep clear space equal to one mounting-eyelet diameter.
- Do not rotate, stretch, outline, add a motorcycle silhouette, or place the symbol inside another invented badge.

## Rasterize

```sh
node scripts/rasterize.mjs
```
