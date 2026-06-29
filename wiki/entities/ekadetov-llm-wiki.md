---
type: entity
title: "ekadetov/llm-wiki"
created: 2026-06-29
updated: 2026-06-29
tags:
  - github-repo
  - llm-wiki-pattern
  - hybrid-search
  - pdf-ingestion
status: current
related:
  - "[[LLM Wiki Pattern]]"
  - "[[claude-obsidian-ecosystem]]"
source: "[[claude-obsidian-ecosystem-research]]"
---

# ekadetov/llm-wiki

Feature-rich LLM Wiki plugin with hybrid BM25+vector search and PDF ingestion via Docling.

## Key Features

- **Hybrid search**: qmd format — BM25 + vector (cosine) combined. Higher quality results than keyword-only search in large vaults
- **PDF ingestion**: Docling (layout-aware extraction — preserves headers, tables, columns)
- **Multi-vault**: shared base vault + personal overlay
- **Export**: Marp slides, matplotlib charts from wiki content
- **Memory-augmented generation**: context injected at generation time

## Standout

Most feature-complete LLM Wiki implementation after claude-obsidian. The BM25+vector hybrid search is a meaningful quality improvement over keyword-only approaches for large vaults.

PDF ingestion with layout awareness (Docling) is significantly better than naive PDF text extraction.

## Gaps vs claude-obsidian

- No hot cache
- No marketplace / plugin format
- No canvas skill
- Output formats (slides, charts) are unique — claude-obsidian outputs only Markdown

## Links

- GitHub: https://github.com/ekadetov/llm-wiki
- Category: [[LLM Wiki Pattern]]
