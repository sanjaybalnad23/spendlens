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