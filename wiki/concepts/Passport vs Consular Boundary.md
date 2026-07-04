---
type: concept
title: "Passport vs Consular Boundary"
created: 2026-07-05
tags:
  - architecture
  - boundary
  - government-tech
  - konsuler
  - critical-distinction
status: developing
sources:
  - "[[indonesian-passport-biometric]]"
  - "[[singapore-ica-model]]"
related:
  - "[[Consular Service Management]]"
  - "[[CV-Syamil-Protkons]]"
---

# Passport vs Consular Boundary

A critical architectural distinction: KBRI/KJRI handles **consular services** (legalisir, akta, surat keterangan), but **NOT passport issuance**. Passports are issued by Dirjen Imigrasi (Direktorat Jenderal Imigrasi), with KBRI/KJRI acting only as collection/distribution intermediaries.

## Boundary Matrix

| Function | Issuer | KBRI/KJRI Role | System |
|----------|--------|----------------|--------|
| Paspor (ordinary) | Dirjen Imigrasi | Collection + forwarding | SIAP (Imigrasi) |
| Paspor (diplomatik) | Dirjen Imigrasi | Collection + forwarding | SIAP |
| Paspor (dinas) | Dirjen Imigrasi | Collection + forwarding | SIAP |
| KTP-el | Dukcapil (Kemendagri) | None — domestic only | SIAK |
| Legalisir | Kemlu via KBRI | Direct issuance | PROTKONS |
| Surat Keterangan | Kemlu via KBRI | Direct issuance | PROTKONS |
| Akta Pencatatan WNI LN | Kemlu via KBRI | Direct issuance | PROTKONS |
| KITAS / KITAP | Dirjen Imigrasi | Collection + forwarding | SIAP / APEC |

## Why This Boundary Matters

**PROTKONS scope** is limited to direct consular services (legalisir, surat keterangan, akta). Passport workflows are out of scope — they require bridging to Dirjen Imigrasi's SIAP system. Adding passport integration to PROTKONS would require:

1. API access to SIAP (Dirjen Imigrasi)
2. Biometric capture compatibility (already met by polycarbonate biometric passport standard since May 2023)
3. Statutory alignment with UU No. 6 Tahun 2011 tentang Keimigrasian

**Chatbot KJRI Dubai scope** is even narrower: information-only. The chatbot answers questions about consular services but cannot initiate any transaction, including passport applications.

## Pattern

```
                   ┌─────────────────────────────────────┐
                   │     Indonesian Citizen (WNI)         │
                   └────────────┬────────────────────────┘
                                │
                  ┌─────────────┼─────────────┐
                  ↓             ↓             ↓
         KBRI/KJRI      Imigrasi       Dukcapil
        (Kemlu)        (Kemenhumham)   (Kemendagri)
            │              │              │
            ↓              ↓              ↓
       PROTKONS         SIAP           SIAK
       (legalisir,      (paspor,       (KTP-el,
        surat ket,       visa,          akta,
        akta LN)         KITAS)         catatan sipil)
```

KBRI/KJRI is one node among three. PROTKONS is the software for that one node. The chatbot sits in front as a G2C information layer.

## Source Confidence

- **high** for the boundary (agency jurisdictions are stable)
- **medium** for the API integration claims (SIAP API availability not directly verified)