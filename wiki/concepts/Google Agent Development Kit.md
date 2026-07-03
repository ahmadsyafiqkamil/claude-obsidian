---
type: concept
title: "Google Agent Development Kit"
created: 2026-07-03
tags:
  - ai
  - agent-framework
  - google
  - llm
status: developing
sources:
  - "[[chatbot-kjri-dubai]]"
related:
  - "[[chatbot-kjri-dubai]]"
  - "[[MCP Toolbox]]"
---

# Google Agent Development Kit (ADK)

Framework dari Google untuk membangun AI agent. Digunakan dalam [[chatbot-kjri-dubai|Chatbot KJRI Dubai]] sebagai lapisan orkestrasi agent.

## Karakteristik

- Mendefinisikan agent dengan system prompt dan tool definitions
- Mendukung web UI built-in (`adk web`)
- Integrasi dengan [[MCP Toolbox]] untuk akses database via tool calls
- Routing LLM melalui LiteLLM (mendukung berbagai provider)

## Dalam Konteks Chatbot KJRI Dubai

ADK bertindak sebagai orkestrator utama:
1. Menerima input user (Web UI atau Telegram)
2. Menjalankan tool calls ke MCP Toolbox untuk query database layanan konsuler
3. Menggunakan LLM (Ollama lokal atau Gemini cloud) untuk reasoning
4. Mengembalikan respons dalam Bahasa Indonesia

## Referensi

- https://google.github.io/adk-docs/
