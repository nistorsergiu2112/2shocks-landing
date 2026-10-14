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

See [HOSTING-HANDOFF.md](./HOSTING-HANDOFF.md) for deployment, domain/email preservation and live verification. Company details are confirmed in `data/site.ts`. Website and app legal pages use separate routes.

## Marketing and app readiness

See [MARKETING-STRATEGY.md](./MARKETING-STRATEGY.md) for positioning and roadmap, and [LEGAL-READINESS.md](./LEGAL-READINESS.md) for the separate app release requirements.

Contact links open an enquiry to `info@2shocks.com`. No newsletter, waitlist or hosted signup is configured. Existing Vercel Web Analytics remains enabled by default, with a browser opt-out on `/privacy`. Proposed rider prices live in `data/site.ts`; website changes do not update mobile store products or entitlements.

## App advertising and legal handoff

See [APP-LEGAL-REVIEW.md](./APP-LEGAL-REVIEW.md) for the October 2026 review, deployment gates and final URL handoff. Website and app notices have separate routes. Existing Vercel Web Analytics is disclosed; app AdMob is not loaded by the website.

Owner-approved retention and request responsibilities are documented in [PRIVACY-OPERATIONS.md](./PRIVACY-OPERATIONS.md). Current app release work is in [LEGAL-READINESS.md](./LEGAL-READINESS.md); the September assumptions are archived.

## Current production launch sequence

Start with [PRODUCTION-LAUNCH-PLAN.md](./PRODUCTION-LAUNCH-PLAN.md), audited 8 October 2026: recent repository changes, live provider evidence, release blockers, exact configuration names, owners and chronological Android/iOS launch steps. It supersedes older package and infrastructure assumptions for this release.
