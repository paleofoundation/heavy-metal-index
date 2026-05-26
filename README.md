# Heavy Metal Index

The engineering foundation for the Heavy Metal Index — a Cochrane-style
scientific library for heavy-metal contamination evidence, plus a
brand-certification program built on top of it.

This repo holds the public-facing web app and API. The Index itself
(schema, data, methodology) lives in the database that this app reads.

## Stack

- Next.js 16 (App Router) on Vercel Fluid Compute
- TypeScript, Node.js 24 LTS
- Postgres via Vercel Marketplace (Neon)
- Configuration in `vercel.ts` (preferred over `vercel.json`)
- CI: GitHub Actions — lint + typecheck + build on PRs

## Local dev loop

Prerequisites: Node 24+, npm, and the Vercel CLI (`npm i -g vercel`).

```bash
# 1. clone
git clone <repo-url> hmi && cd hmi

# 2. install
npm install

# 3. link to the Vercel project (one-time per checkout)
vercel link

# 4. pull env vars from Vercel (DATABASE_URL etc.)
vercel env pull .env.local

# 5. dev server
npm run dev
```

Then hit:

- App: <http://localhost:3000>
- Health check: <http://localhost:3000/api/health>

`/api/health` runs `SELECT NOW()` against the linked Postgres and returns
`{ status: "ok", db: { ok, now, latencyMs }, timestamp }`. If the DB is
unreachable the route returns `503` with the error message — that is the
canary for "is this checkout wired up correctly".

## Scripts

```bash
npm run dev        # next dev (Turbopack)
npm run build      # next build
npm run start      # next start (production)
npm run lint       # eslint
npm run typecheck  # tsc --noEmit
```

## Deployments

- `main` deploys to production on Vercel.
- Every PR gets a preview URL.
- Environment variables live in Vercel — never commit `.env*` files.

## Directory layout

```
app/              Next.js App Router routes
  api/health/     DB-touching liveness probe
lib/              Shared server helpers (e.g. db pool)
.github/workflows CI definitions
vercel.ts         Vercel project configuration
```

## Out of scope (for now)

- Auth — not yet wired up; will land via Clerk on the Vercel Marketplace
  when we need user accounts.
- UI polish — the app shell is the create-next-app default until we have
  something to show.
- AI features — will go through the Vercel AI Gateway when the time
  comes; do not import provider SDKs directly.
