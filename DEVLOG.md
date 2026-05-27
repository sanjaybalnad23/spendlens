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

## 2026-05-26 — Audit engine + architecture work

**Done**

- Designed rule-based audit engine architecture
- Added initial recommendation rules and pricing-backed savings logic
- Implemented MongoDB models + server actions
- Built landing page, custom 404 page, and error boundary

**Learnings / Challenges**

- Adoption ratio alone was insufficient for recommendations
- Needed to combine adoption percentage with absolute team scale
- Rule prioritization and overlapping recommendations were harder than expected
- Spent significant time refining rules to avoid unrealistic savings suggestions

**Next**

- [ ] Connect audit form to persistence flow
- [ ] Improve rule coverage and recommendation quality

## 2026-05-27 — Final integration + AI summary stuff

**Done**

- Connected audit form → audit engine → AI summary → MongoDB persistence flow
- Added shareable audit result pages
- Added AI-generated summaries using AI SDK + Gemini
- Built lead capture modal + Credex popup logic
- Added Open Graph metadata + social preview support
- Added markdown rendering for AI summaries
- Added localStorage-based form persistence
- Wrote README, TESTS, PROMPTS, REFLECTION and other assignment docs

**Learnings / Challenges**

- Audit engine logic was way harder than expected
- Spent a lot of time researching rule-engine architecture and recommendation heuristics
- Explored libraries like json-rules-engine but ended up building custom logic instead
- Realized procurement/savings recommendations are extremely subjective and context dependent
- Even now the engine is still inaccurate in many situations honestly 😭
- UI ended up becoming the easiest part near the end

**Blockers / Problems**

- Time constraints near the end
- Some parts of codebase could definitely be cleaner/readable with more time
- Did not get enough time for proper automated testing
- Rule quality still needs much more refinement

**Next**

- [ ] Improve audit recommendation accuracy
- [ ] Add proper automated tests
- [ ] Improve code readability/refactoring
- [ ] Better caching and optimization
