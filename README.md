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

## Hosting handoff

See [HOSTING-HANDOFF.md](./HOSTING-HANDOFF.md) for deployment, domain/email preservation and live verification. Company details are confirmed in `data/site.ts`. Public legal pages cover the presentation website only.

## Marketing and app readiness

See [MARKETING-STRATEGY.md](./MARKETING-STRATEGY.md) for positioning and roadmap, and [LEGAL-READINESS.md](./LEGAL-READINESS.md) for the separate app release requirements.

Contact links open an enquiry to `info@2shocks.com`. No newsletter, waitlist, analytics or hosted signup is configured. Proposed rider prices live in `data/site.ts`; website changes do not update mobile store products or entitlements.
