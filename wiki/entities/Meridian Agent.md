---
type: entity
title: "Meridian Agent (Public Product)"
created: 2026-07-03
tags:
  - product
  - defi
  - solana
  - agent
  - dlmm
  - meteora
status: current
sources:
  - "[[meridian-agent-architecture]]"
related:
  - "[[meridian-agent-vps]]"
  - "[[yunus-0x-meridian]]"
  - "[[Meteora DLMM]]"
---

# Meridian Agent

Autonomous DLMM liquidity management agent untuk Solana. Produk publik dengan 490+ GitHub stars.

**Links:** [Website](https://agentmeridian.xyz) | [Telegram](https://t.me/agentmeridian) | [X](https://x.com/meridian_agent) | [GitHub](https://github.com/yunus-0x/meridian)

## Core Capabilities

- **Screens pools** — continuously scan Meteora DLMM pools against configurable thresholds
- **Manages positions** — opens, monitors, closes LP positions autonomously (STAY/CLOSE/REDEPLOY)
- **Claims fees** — tracks unclaimed fees per position
- **Learns from performance** — studies top LPers, saves lessons, evolves thresholds
- **Monitors any wallet** — lookup open DLMM positions for any Solana wallet

## Interface

- **REPL** — interactive terminal with live countdown, free-form chat
- **Telegram bot** — full agent chat + cycle reports + OOR alerts
- **HiveMind** — collective intelligence layer across all agents

## Running Instance

User runs instance di VPS → lihat [[meridian-agent-vps]] untuk config dan stats semasa.
