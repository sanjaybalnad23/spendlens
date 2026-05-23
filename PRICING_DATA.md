# Pricing Data

Last Updated: 2026-05-23

This file contains pricing assumptions and references used by the AI Spend Audit engine.

Prices are stored internally in USD.

---

# ChatGPT

Official URL:
https://openai.com/chatgpt/pricing

Verified At:
2026-05-23

| Plan | Monthly Price | Billing Type |
|---|---|---|
| Plus | $20 | per-user |
| Business | $25 | per-user |
| Enterprise | Custom | custom |

Notes:
- Business includes workspace/admin features
- Enterprise pricing varies by contract

Audit Assumptions:
- Business may be excessive for <=2 users

---

# Claude

Official URL:
https://claude.ai/pricing

Verified At:
2026-05-23

| Plan | Monthly Price | Billing Type |
|---|---|---|
| Free | $0 | per-user |
| Pro | $20 | per-user |
| Max | $100 | per-user |

Notes:
- Max intended for power users
- Team/Enterprise pricing not publicly fixed

Audit Assumptions:
- Max may be unnecessary for smaller/general workflows

---

# Cursor

Official URL:
https://cursor.com/pricing

Verified At:
2026-05-23

| Plan | Monthly Price | Billing Type |
|---|---|---|
| Hobby | $0 | per-user |
| Pro | $20 | per-user |
| Business | $40 | per-user |
| Enterprise | Custom | custom |

Notes:
- Business includes SSO/admin/team analytics
- Enterprise pricing negotiated separately

Audit Assumptions:
- Business may be unnecessary for <=3 developers

---

# GitHub Copilot

Official URL:
https://github.com/features/copilot/plans

Verified At:
2026-05-23

| Plan | Monthly Price | Billing Type |
|---|---|---|
| Free | $0 | per-user |
| Pro | $10 | per-user |
| Pro+ | $39 | per-user |

Notes:
- Pro supports most individual coding workflows
- Pro+ targeted at heavier AI usage

Audit Assumptions:
- Copilot Pro may replace higher-cost coding assistants in some cases

---

# Gemini

Official URL:
https://gemini.google.com/pricing

Verified At:
2026-05-23

| Plan | Monthly Price | Billing Type |
|---|---|---|
| Free | $0 | per-user |
| Pro | $20 | per-user |
| Ultra | $100 | per-user |

Notes:
- Ultra targeted at advanced/power usage

Audit Assumptions:
- Ultra may be excessive for smaller/general teams

---

# Windsurf

Official URL:
https://windsurf.com/pricing

Verified At:
2026-05-23

| Plan | Monthly Price | Billing Type |
|---|---|---|
| Free | $0 | per-user |
| Pro | $20 | per-user |
| Teams | $40 | per-user |
| Enterprise | Custom | custom |

Notes:
- Teams includes centralized billing/admin features

Audit Assumptions:
- Teams plan may be unnecessary for very small teams

---

# OpenAI API

Official URL:
https://openai.com/api/pricing

Verified At:
2026-05-23

| Model | Input Tokens | Output Tokens |
|---|---|---|
| GPT-5.5 | $5 / 1M | $30 / 1M |
| GPT-5.4 | $2.5 / 1M | $15 / 1M |
| GPT-5.4 Mini | $0.75 / 1M | $4.5 / 1M |

Notes:
- Token pricing varies by processing mode
- Cached token pricing excluded from audit engine

---

# Anthropic API

Official URL:
https://docs.anthropic.com/en/docs/about-claude/pricing

Verified At:
2026-05-23

| Model | Input Tokens | Output Tokens |
|---|---|---|
| Claude Opus 4.7 | $5 / 1M | $25 / 1M |
| Claude Sonnet 4.6 | $3 / 1M | $15 / 1M |
| Claude Haiku 4.5 | $1 / 1M | $5 / 1M |

Notes:
- Cache pricing excluded from audit engine
- API pricing intended only for reference comparisons

---

# Important Notes

- Pricing may change over time
- Enterprise contracts may differ significantly
- Audit recommendations are heuristic-based
- Savings are estimates, not guarantees
- Official vendor pricing pages should always be treated as source of truth