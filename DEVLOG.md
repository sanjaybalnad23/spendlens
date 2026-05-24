# Devlog

## 2026-05-22 — Project bootstrap

**Done**
- Next.js 16 app scaffold (App Router, Tailwind v4)
- Rebranded to SpendLens (metadata, favicon, logo)
- Added mongoose dependency (not connected yet)
- Stubbed planning docs; stripped Create Next App landing to minimal home

**Decisions**
- MongoDB via mongoose for persistence (TBD: schema, connection pattern)
- Placeholder home page until landing copy is ready

**Blockers**
- No `MONGODB_URI` / connection helper yet
- Planning docs empty — need product scope before building features

**Next**
- [ ] Mongo connection + first model (e.g. usage events or API keys)
- [ ] Real landing page from `LANDING_COPY.md`
- [ ] Fill `ARCHITECTURE.md` with data flow

## 2026-05-23 — Vendor pricing reference for audit engine

**Done**
- Added `PRICING_DATA.md` with verified vendor pricing (2026-05-23)
- Covered subscription tools: ChatGPT, Claude, Cursor, GitHub Copilot, Gemini, Windsurf
- Covered API token pricing: OpenAI and Anthropic (per 1M input/output tokens)
- Documented audit heuristics per vendor (e.g. Business tier may be excessive for small teams)

**Decisions**
- Prices stored internally in USD; official vendor pages are source of truth
- Subscription audits use per-user plan tiers; API pricing is reference-only for comparisons
- Cached token pricing excluded from audit engine assumptions
- Recommendations are heuristic estimates, not guaranteed savings

**Blockers**
- No code yet to load or query this data in the audit engine
- Enterprise/custom pricing not modeled (marked as custom in tables)

**Next**
- [ ] Define audit engine schema that references these plan tiers and assumptions
- [ ] Add refresh/verification workflow when vendor prices change
- [ ] Wire pricing lookups into first audit recommendation prototype