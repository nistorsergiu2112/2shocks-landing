# 2Shocks landing site

The static presentation site for the UK-first 2Shocks rider app. It uses Next.js App Router and exports a fully static build for Vercel.

## Local development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run lint
npm run typecheck
npm test
npm run build
npm run test:e2e
```

## Before public launch

Replace the mock operator identity in `data/site.ts` and set `legalEntity.isMock` to `false`. Add official store URLs by changing the typed store configuration only when the app listings are live.
