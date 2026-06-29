---
type: entity
title: "ussumant/llm-wiki-compiler"
created: 2026-06-29
updated: 2026-06-29
tags:
  - github-repo
  - llm-wiki-pattern
  - knowledge-compression
status: current
related:
  - "[[LLM Wiki Pattern]]"
  - "[[claude-obsidian-ecosystem]]"
source: "[[claude-obsidian-ecosystem-research]]"
---

# ussumant/llm-wiki-compiler

Batch knowledge distillation tool: takes 20-30 wiki pages → produces 1 compiled synthesis note.

## Key Features

- **Batch distillation**: selects N related pages, generates a single compressed synthesis
- **Scheduled compilation**: runs on a schedule to keep compiled notes fresh
- **Knowledge compression focus**: reducing vault sprawl into dense summaries

## Standout

Unique niche in the ecosystem — while other tools grow the vault, this one compresses it. Addresses the "too many notes" problem that affects mature wikis.

Related to [[wiki-fold]] (Mechanism 1 of DragonScale) but operates at semantic level, not temporal log-rollup level.

## Links

- GitHub: https://github.com/ussumant/llm-wiki-compiler
- Category: [[LLM Wiki Pattern]]
