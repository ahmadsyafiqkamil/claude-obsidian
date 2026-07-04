---
type: source
title: "E-Government Frameworks for Public Service Delivery"
created: 2026-07-05
source_url: "https://en.wikipedia.org/wiki/E-government"
source_type: wikipedia
author: "Wikimedia Foundation"
date_published: "2026-06-27"
tags:
  - academic
  - e-government
  - workflow
  - reference-framework
status: current
related:
  - "[[Consular Service Management]]"
  - "[[CodeIgniter 3]]"
  - "[[MCP Toolbox]]"
---

# Source: E-Government Frameworks for Public Service Delivery

**Type**: Academic / overview reference
**Confidence**: high (UN EGDI framework widely cited)

## Key Claims

- E-government uses ICT to deliver public services across four relationship types: G2C (Government-to-Citizen), G2B (Government-to-Business), G2G (Government-to-Government), G2E (Government-to-Employee)
- UN E-Government Development Index (EGDI) ranks countries on online service index, telecom infrastructure, human capital
- Delivery models include one-stop portals, single-sign-on identity layers, life-event service bundling, mobile-first services
- Common workflow stages: information → interaction → transaction → integration (back-office automation)

## Significance for Consular Service Management

KBRI/KJRI consular services sit at the **G2C** intersection. The four-stage workflow (information → interaction → transaction → integration) maps directly to:

| E-Gov Stage | Consular Equivalent | PROTKONS Implementation |
|-------------|---------------------|-------------------------|
| Information | Service catalogue | `tb_layanan` table + Chatbot KJRI Dubai |
| Interaction | Form submission | `pelayanan` online portal (KonsulerPublic) |
| Transaction | Document generation + signing | PHPWord + TTE API |
| Integration | Back-office archive + reporting | `tbl_berkas` + ApexCharts dashboard |

[[chatbot-kjri-dubai|Chatbot KJRI Dubai]] operates at Stage 1 (information). [[CV-Syamil-Protkons|PROTKONS]] operates at Stages 2-4. Combined, they cover the full e-government lifecycle.