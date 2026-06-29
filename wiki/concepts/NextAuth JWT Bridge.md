---
type: concept
title: "NextAuth JWT Bridge"
created: 2026-06-29
tags:
  - concept
  - auth
  - nextjs
  - django
  - jwt
status: developing
source: "[[absensi-sistem-kehadiran]]"
related:
  - "[[Django DRF Backend Pattern]]"
---

# NextAuth JWT Bridge

Pola autentikasi yang menghubungkan Next.js frontend (NextAuth v5) dengan Django backend (DRF simplejwt) melalui httpOnly cookies + Bearer token.

## Arsitektur

```
Browser → Next.js (NextAuth v5) → httpOnly cookie
  → proxy route `/api/v2/` → Bearer token → Django DRF
```

Frontend Next.js mem-proxy request ke backend lewat `fuse/src/app/api/v2/`. Session NextAuth menyimpan JWT token; setiap API call inject Bearer token secara server-side.

## Key Decisions

- httpOnly cookies (tidak expose token ke client-side JS)
- NextAuth v5 untuk session management (React 19 compatible)
- `djangorestframework-simplejwt` untuk JWT issuance di backend
- Tidak menggunakan OAuth flow — direct credential exchange
