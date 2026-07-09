---
type: concept
title: "Compound Engineering Loop"
domain: agent-architecture
address: c-000014
tags:
  - agent-architecture
  - claude-code
  - software-engineering
created: 2026-07-10
status: current
related:
  - "[[Basecamp Mention Agent]]"
  - "[[Claude Code Headless Agent]]"
---

# Compound Engineering Loop

Autonomous software engineering workflow: Brainstorm → Plan → Work → Review → Compound → PR. Satu human checkpoint (BRAINSTORM), sisanya fully autonomous.

## Fase

### BRAINSTORM (Human Checkpoint)
- Research codebase area yang relevan
- Kumpulkan SEMUA clarifying question dalam satu comment
- Simpan ke `docs/brainstorms/<slug>.md`
- End run; tunggu @mention berikutnya

### PLAN
- Incorporate brainstorm answers dari thread
- Research paralel: repo + docs + best practices
- Output: `docs/plans/<slug>.md` (structured plan)
- Diterima secara default — tidak perlu approval

### WORK
- Checkout branch `bc/<slug>` — never commit to main
- Implement plan
- Run tests, linter, type checks → fix → re-run sampai green
- Commit dalam logical chunks, push branch (no PR yet)

### REVIEW
- Run review agents terhadap branch diff
- Prioritaskan findings: P1 (must fix), P2 (should fix), P3 (nice to fix)
- Fix all P1 + P2, re-run validations

### COMPOUND
- Write solution document `docs/solutions/<slug>.md`
- Update `CLAUDE.md` dengan reusable patterns

### PR
- `gh pr create` sebagai langkah terakhir
- Body mencakup: summary, plan reference, review summary

## Looping Discipline

Setelah setiap fase, check own work. Jika validasi gagal, fix dan ulangi fase tersebut. Jangan stop sampai PR terbuka atau truly blocked.

## Relevance

Pattern ini adalah "software factory" untuk autonomous agent — cocok untuk integrasi dengan project management tools (Basecamp, Jira, Linear, GitHub Issues) di mana agent di-trigger oleh issue/card dan menghasilkan PR secara otonom.
