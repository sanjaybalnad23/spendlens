# SpendLens

SpendLens is an AI SaaS audit platform that analyzes a team’s AI tooling stack, detects optimization opportunities using a deterministic rule engine, estimates monthly/yearly savings, generates an AI-written summary, and produces a shareable audit report page.

## Project Overview

### What SpendLens does

- Collects your team context (use case, team size) and current AI tools (plan, seats, monthly spend).
- Runs a **rule-based audit engine** to compute savings opportunities and recommendations.
- Uses an AI model to generate a concise, business-friendly **audit summary**.
- Persists results to MongoDB and renders a shareable report at a stable URL.

### Problem it solves

Teams often accumulate overlapping AI subscriptions and pay for higher tiers that don’t match actual adoption. SpendLens provides a quick, explainable audit with concrete savings estimates.

### Core workflow

1. User visits `/audit` and completes the audit form.
2. A deterministic audit engine computes recommendations + savings.
3. An AI summary is generated from the input + audit result.
4. The audit is stored in MongoDB.
5. User is redirected to a shareable report at `/audit/[id]`.

## Features (implemented)

- **Rule-based audit engine** (`lib/auditengine/`)
  - Deterministic rules with conditions, savings math, and human-readable recommendations.
  - Adoption-ratio logic (e.g., seats/team size) and spend heuristics.
  - Outputs monthly + annual savings and a set of recommendations.

- **AI-generated audit summary** (`lib/ai/generateAudit.ts`)
  - Generates a concise summary from the audit input and rule-engine output.
  - Uses the Vercel AI SDK (`ai`) with Google provider (`@ai-sdk/google`).

- **Shareable audit report pages** (`app/audit/[id]/page.tsx`, `components/AuditViewer.tsx`)
  - Server-rendered audit page that loads persisted data by MongoDB ObjectId.
  - Optional native share button via the browser Web Share API (when supported).

- **Savings calculations**
  - Monthly savings computed across all matched rules.
  - Annual savings computed as `monthlySavings * 12`.

- **Lead capture modal** (`components/LeadCaptureModel.tsx`, `actions/lead.action.ts`)
  - Modal appears after a delay on the report page (for qualifying audits).
  - Captures name/email/company and persists to MongoDB (deduped by email).

- **Credex CTA modal** (`components/CredexModel.tsx`)
  - Displays for “high savings” audits (currently `totalSavings >= 500`) and links out.

- **Responsive UI**
  - App uses Tailwind CSS (via `@import "tailwindcss";`) and responsive layout patterns.

- **MongoDB persistence via Mongoose**
  - `Audit` and `Lead` models stored in MongoDB with timestamps.
  - Connection caching to support hot reload/dev behavior (`lib/db/db.ts`).

- **Next.js App Router + Server Actions**
  - Routes under `app/`
  - Server actions under `actions/` for creating/fetching audits and creating leads.

## Tech Stack

- **Framework**: Next.js (`next`)
- **UI**: React (`react`, `react-dom`), Tailwind CSS (`tailwindcss`, `@tailwindcss/postcss`)
- **Database**: MongoDB via Mongoose (`mongoose`)
- **AI**: Vercel AI SDK (`ai`), Google provider (`@ai-sdk/google`)
- **Markdown rendering**: `react-markdown`
- **Tooling**: TypeScript, ESLint (`eslint`, `eslint-config-next`), Prettier, Husky + lint-staged

## Architecture Overview

### Audit engine

- Implemented as `AuditEngine` (`lib/auditengine/AuditEngine.ts`) which accepts a list of rules (`lib/auditengine/rules.ts`).
- Each rule defines:
  - `condition(context)` to decide if it applies
  - `calculateSavings(context)` for monthly savings math
  - `getRecommendation(context)` to produce a structured recommendation
- The engine aggregates savings and returns recommendations plus annualized savings.

### AI summary flow

- `lib/ai/generateAudit.ts` runs the audit engine, then calls `generateText(...)`.
- The AI prompt includes:
  - audit input (use case, team size, tools)
  - audit result (savings + recommendations)
- The generated summary is stored on the audit document and rendered via `react-markdown` in the report UI.

### MongoDB storage

- Connection helper: `lib/db/db.ts` (caches the Mongoose connection/promise).
- Models:
  - `lib/db/models/audit.model.ts`
  - `lib/db/models/lead.model.ts`

### Server actions

- `actions/audit.action.ts`
  - `createAudit(data)` stores the generated audit
  - `getAuditById(id)` fetches an audit by MongoDB `_id`
- `actions/lead.action.ts`
  - `createLead(data)` inserts a lead or returns an existing record by email

### Audit page rendering

- `/audit` renders the client-side form (`components/AuditForm.tsx`).
- `/audit/[id]` validates ObjectId, fetches the audit via server action, then renders `AuditViewer`.

## Folder Structure

```text
spendlens/
  app/
    audit/
      [id]/page.tsx        # Shareable audit report route
      page.tsx             # Audit form route
    globals.css            # Tailwind import
    layout.tsx             # Root layout + metadataBase
    page.tsx               # Marketing home page
  actions/
    audit.action.ts        # Server actions for audits
    lead.action.ts         # Server actions for leads
  components/
    AuditForm.tsx          # Client form + submission flow
    AuditViewer.tsx        # Report UI + modals + share (when supported)
    LeadCaptureModel.tsx   # Lead capture modal
    CredexModel.tsx        # Credex CTA modal
    Header.tsx
    Footer.tsx
  lib/
    ai/
      generateAudit.ts     # Audit engine + AI summary generation
    auditengine/
      AuditEngine.ts
      rules.ts
      types.ts
    db/
      db.ts                # Mongo connection helper
      models/
        audit.model.ts
        lead.model.ts
  constants.ts             # Pricing/supported platforms/features + AI system prompt
  next.config.ts
  package.json
```
