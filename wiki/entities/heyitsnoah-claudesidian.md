---
type: entity
title: "heyitsnoah/claudesidian"
created: 2026-06-29
updated: 2026-06-29
tags:
  - github-repo
  - llm-wiki-pattern
  - multi-vault
  - memory-system
status: current
related:
  - "[[Ar9av-obsidian-wiki]]"
  - "[[LLM Wiki Pattern]]"
  - "[[claude-obsidian-ecosystem]]"
source: "[[claude-obsidian-ecosystem-research]]"
---

# heyitsnoah/claudesidian

Claude Code plugin for Obsidian with multi-vault support and memory decay scoring.

## Key Features

- **Multi-vault**: personal + work + team shared vaults in one session
- **Memory system**: `remember X` / `forget X` with decay scoring (older memories deprioritized automatically)
- **Auto-stubs**: orphaned `[[wikilinks]]` → stub pages created automatically
- **Confidence levels**: AI-generated claims tagged with confidence markers
- **Multi-model**: Claude + GPT-4 + Gemini support
- **Commands**: `/session`, `/relate`

## Standout

Memory decay scoring is unique in the ecosystem — most wiki patterns treat all memories equally. Claudesidian ages them.

Auto-stub creation closes the orphaned wikilink problem that plagues large vaults.

## Comparison to claude-obsidian

| Feature | claudesidian | claude-obsidian |
|---------|-------------|-----------------|
| Multi-vault | ✅ | ❌ |
| Memory decay | ✅ | ❌ |
| Auto-stubs | ✅ | ❌ |
| Hot cache | ❌ | ✅ |
| Canvas skill | ❌ | ✅ |
| Marketplace | ❌ | ✅ |

## Links

- GitHub: https://github.com/heyitsnoah/claudesidian
- Category: [[LLM Wiki Pattern]]
