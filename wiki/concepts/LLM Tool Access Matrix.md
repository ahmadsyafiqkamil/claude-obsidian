---
type: concept
title: "LLM Tool Access Matrix"
created: 2026-07-03
tags:
  - agent
  - llm
  - security
  - architecture
status: current
sources:
  - "[[meridian-agent-architecture]]"
related:
  - "[[Hunter-Healer Dual Agent]]"
  - "[[ReAct Agent Loop]]"
---

# LLM Tool Access Matrix (Meridian)

Role-based access control (RBAC) untuk tool access di Meridian agent. Setiap agent role melihat subset tools yang berbeda — mencegah SCREENER dari close position, mencegah MANAGER dari deploy baru.

## Definisi

```javascript
// agent.js:6-7
const SCREENER_TOOLS = new Set([
  "deploy_position", "get_top_candidates", "get_token_info",
  "get_token_holders", "check_smart_wallets_on_pool", "lookup_wallet"
]);

const MANAGER_TOOLS = new Set([
  "close_position", "claim_fees", "swap_token",
  "get_position_pnl", "get_my_positions", "set_position_note"
]);

// GENERAL = all tools (chat/manual mode)
```

## Filosofi

| Role | Boleh | Tidak Boleh | Kenapa |
|------|-------|-------------|--------|
| SCREENER | Deploy, screen, research | Close, claim, swap | Hunter finds opportunities; tidak manage existing |
| MANAGER | Close, claim, swap, evaluate | Deploy | Healer manage existing; tidak buka posisi baru |
| GENERAL | Semua | — | Human-in-the-loop via chat |

## Write Tools Safety

Tool yang menulis on-chain state masuk ke `WRITE_TOOLS` set di executor.js:
- `deploy_position` — harus lolos 8+ safety checks
- `close_position` — hanya bisa close punya sendiri
- `swap_token` — dicek nilai token ≥ $0.10
- `claim_fees` — dicek jumlah claim ≥ minClaimAmount

## Extending

Tambah tool baru:
1. `tools/definitions.js` — tambah OpenAI schema
2. `tools/executor.js` — tambah `tool_name: functionImpl`
3. `agent.js` — tambah ke SCREENER_TOOLS / MANAGER_TOOLS jika role-restricted
4. Jika write tool → tambah ke WRITE_TOOLS
