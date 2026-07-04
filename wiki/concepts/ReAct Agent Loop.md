---
type: concept
title: "ReAct Agent Loop"
created: 2026-07-03
tags:
  - agent
  - llm
  - architecture
  - pattern
status: current
sources:
  - "[[meridian-agent-architecture]]"
related:
  - "[[Hunter-Healer Dual Agent]]"
  - "[[Meridian Agent]]"
---

# ReAct Agent Loop

Pattern agent autonomy: **Re**ason → **Act** → observe → repeat. Core dari Meridian agent.

## Flow

```
┌──────────────────────────────────────┐
│            REACT LOOP                │
│                                      │
│  System Prompt                       │
│       ↓                              │
│  LLM reasons over live data          │
│       ↓                              │
│  LLM calls tool (function call)      │
│       ↓                              │
│  Executor dispatches tool            │
│       ↓                              │
│  Tool returns result                 │
│       ↓                              │
│  Result fed back to LLM              │
│       ↓                              │
│  Repeat (max 20 steps)               │
│       ↓                              │
│  Final: STAY / CLOSE / REDEPLOY      │
└──────────────────────────────────────┘
```

## Implementation (agent.js)

```javascript
while (steps < maxSteps) {
  const response = await callLLM(messages, tools);
  if (response.finish_reason === "stop") break;
  const toolCall = response.tool_calls[0];
  const result = await executeTool(toolCall);
  messages.push({ role: "tool", content: result });
}
```

## Key Properties

- **Stateful** — LLM sees conversation history including prior tool results
- **Bounded** — max 20 steps prevents infinite loops
- **Role-filtered** — SCREENER/MANAGER/GENERAL see different tool sets
- **Observable** — every decision logged to `decision-log.json`

## Dalam Konteks Meridian

1. SCREENER loop: `get_top_candidates` → filter → `deploy_position`
2. MANAGER loop: `get_my_positions` → `get_position_pnl` → `close_position` / STAY
3. GENERAL loop: free-form chat with all tools available
