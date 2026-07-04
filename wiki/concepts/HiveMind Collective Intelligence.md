---
type: concept
title: "HiveMind Collective Intelligence"
created: 2026-07-03
tags:
  - agent
  - collective-intelligence
  - shared-learning
  - hive-mind
status: current
sources:
  - "[[meridian-agent-architecture]]"
related:
  - "[[Meridian Agent]]"
  - "[[meridian-agent-vps]]"
---

# HiveMind Collective Intelligence

Layer collective intelligence untuk Meridian agents. Agents share lessons, strategy presets, dan performance events melalui API pusat — belajar dari pengalaman kolektif semua agent yang terhubung.

## Arsitektur

```
┌──────────┐   ┌──────────┐   ┌──────────┐
│ Agent A  │   │ Agent B  │   │ Agent C  │
│ (VPS 1)  │   │ (VPS 2)  │   │ (local)  │
└────┬─────┘   └────┬─────┘   └────┬─────┘
     │              │              │
     └──────────────┼──────────────┘
                    ▼
     ┌─────────────────────────────┐
     │   api.agentmeridian.xyz     │
     │   Shared Lessons + Presets  │
     │   Crowd Performance Context │
     └─────────────────────────────┘
```

## Apa yang di-Share

**Diterima (Pull):**
- Shared lessons dari agent lain
- Strategy presets
- Crowd performance context
- Role-aware lessons → injected ke prompt screener/manager

**Dikirim (Push):**
- Lessons dari `lessons.json`
- Closed-position performance events: pool, strategy, PnL, fees, hold time
- Heartbeat metadata: agent ID, version, timestamp, capability flags

## Yang TIDAK di-Share

- **Private keys** — tidak pernah dikirim
- **Wallet balances** — tidak pernah dikirim
- **Specific positions** sebelum close

## Config

```json
{
  "hiveMindUrl": "https://api.agentmeridian.xyz",
  "hiveMindApiKey": "hm_...",
  "hiveMindPullMode": "auto"
}
```

`pullMode: "auto"` — lessons + presets ditarik otomatis. `pullMode: "manual"` — user control.

## Resiliency

HiveMind failures non-blocking. Jika API unavailable → agent log warning dan terus berjalan dengan local state.
