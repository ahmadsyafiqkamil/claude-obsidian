---
type: source
title: "Indonesian Passport & Biometric Standards"
created: 2026-07-05
source_url: "https://en.wikipedia.org/wiki/Indonesian_passport"
source_type: wikipedia
author: "Wikimedia Foundation"
date_published: "2026-07-02"
tags:
  - regulation
  - indonesia
  - biometric
  - passport
status: current
related:
  - "[[Consular Service Management]]"
  - "[[Tanda Tangan Elektronik]]"
---

# Source: Indonesian Passport & Biometric Standards

**Type**: Wikipedia summary of Indonesian passport issuance
**Confidence**: medium (Wikipedia summary; Permenkumham primary docs would be higher)

## Key Claims

- Indonesian passport issued by **Directorate General of Immigration** (Direktorat Jenderal Imigrasi), NOT by Ministry of Foreign Affairs
- Biometric passport first issued 26 January 2011
- Latest version: 30 October 2014
- Next-gen polycarbonate biometric passport: 4 May 2023
- Types: ordinary, diplomatic (Paspor diplomatik), service (Paspor dinas)

## Significance for Consular Service Management

Critical structural fact for KBRI/KJRI service architecture:

```
Passport Issuance (outside Indonesia):
  → KBRI/KJRI accepts application
  → Forwards to Dirjen Imigrasi (Jakarta)
  → Applicant picks up at KBRI/KJRI
  → KBRI/KJRI is INTERMEDIARY, not issuer
```

[[CV-Syamil-Protkons|PROTKONS]] handles consular certificates (legalisir, surat keterangan, etc.), NOT passport issuance. This is a different agency flow. Passport workflows involve Dirjen Imigrasi's separate SIAP (Sistem Informasi Administrasi Penerbitan Paspor) — PROTKONS would need an API bridge to SIAP if it were to expand scope.

The polycarbonate biometric page (2023) aligns with international ICAO Doc 9303 standards — Indonesian passports now meet the same e-passport baseline as Estonian, Singaporean, and EU passports.