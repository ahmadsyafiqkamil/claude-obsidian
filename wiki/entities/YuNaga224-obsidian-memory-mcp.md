---
type: entity
title: "YuNaga224/obsidian-memory-mcp"
created: 2026-06-29
updated: 2026-06-29
tags:
  - github-repo
  - mcp-server
  - memory-system
  - anthropic-fork
status: current
related:
  - "[[jacksteamdev-obsidian-mcp-tools]]"
  - "[[claude-obsidian-ecosystem]]"
source: "[[claude-obsidian-ecosystem-research]]"
---

# YuNaga224/obsidian-memory-mcp

Fork of Anthropic's official memory MCP server — stores AI memories as Markdown files with Obsidian graph support.

## Key Features

- **Obsidian-native storage**: memories stored as individual `.md` files (not JSON entities)
- **Graph view integration**: uses `[[link]]` syntax → entities appear in Obsidian's graph view automatically
- **YAML frontmatter**: `entityType`, `created`, `updated`
- **Sections per entity**: Observations + Relations
- **MCP tools**: `create_entities`, `create_relations`, `add_observations`, `search_nodes`, `read_graph`
- **Config**: `MEMORY_DIR` env var points to vault folder

## Standout

Bridges Anthropic's official memory pattern with Obsidian's visual graph. Entities become first-class vault nodes visible in graph view — memory becomes browsable, not just queryable.

## Links

- GitHub: https://github.com/YuNaga224/obsidian-memory-mcp
- Upstream: Anthropic official memory MCP server
- Category: MCP Server
