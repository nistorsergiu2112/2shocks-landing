# 2shocks design and screen synchronization

Preserve the incumbent graphite, paper and plate-yellow identity, Space Grotesk / Inter pairing and twin-shock logo. The native app operates; the website persuades. Share identity without forcing identical type sizes or layouts.

## Token authority

- Native: `constants/theme.ts` and `constants/motion.ts`; named font files are loaded in `app/_layout.tsx`.
- Website: `app/globals.css` root properties and the final cascade in `app/home.module.css`.
- Matching identity values: native `foreground` → website `--ink`; `background` → `--paper`; `surface` → `--surface`; `border` → `--line`; `mutedForeground` → `--muted`; `plateRear` → `--plate`; `success` → `--green`; `warning` → `--amber`; `destructive` → `--red`.
- Website `--graphite` matches the native hero gradient's first stop. Native `primary` is a different, darker action color; do not collapse these roles.
- Native registration placeholder text uses `platePlaceholder` as an opaque color on `plateRear`; this input-specific token is not a website global color.
- Native small buttons and chips use minimum heights (48 on Android, 44 on iOS). Keep these platform targets when translating controls; website geometry remains defined by website CSS.
- Both platforms use press/release durations (120ms/160ms) and easing `cubic-bezier(.23, 1, .32, 1)`, with platform reduced-motion handling.

Update both root `DESIGN.md` files and `.impeccable/design.json` extension sidecars when reusable tokens or component treatments change. Frontmatter owns primitives. Sidecar tonal ramps are synthesized preview aids, not product colors; native HTML/CSS component previews are translations, not replacement app code.

## Screenshot authority

The website consumes static app-screen assets from `public/screens`. `HeroScreens.tsx` names nine tour screens: home, add-bike, bike-record, service-work, plan-summary, add-history, ready-for-garage, collection and notification-center. `PhoneShowcase.tsx` reads additional feature-screen mapping from `data/site`.

When the app's visible layout changes, capture the corresponding source app state with representative, non-sensitive data; verify the screen and its copy; then update the exact consumed asset and its alt text as needed. Keep screenshots consistent with the implemented Free/Plus behavior, source distinctions and garage-enquiry flow. Preserve complete phone content, image aspect ratio and meaningful alt text. Do not substitute a separately mocked interface for a verified source app capture.

## Review status

These files record source extraction, identity constraints and the synchronization process. They do not certify that every screenshot is fresh or that all native, responsive, accessibility and functional checks have passed. The implementation review is complete: the independent reviewer cleared both final fixes (registration contrast and Android compact-target dimensions) and verified synchronized asset hashes. Verification scope and remaining platform limitations are recorded in `docs/DESIGN_VERIFICATION.md`.
