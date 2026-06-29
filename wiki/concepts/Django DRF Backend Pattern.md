---
type: concept
title: "Django DRF Backend Pattern"
created: 2026-06-29
tags:
  - concept
  - backend
  - django
  - drf
  - api
status: developing
source: "[[absensi-sistem-kehadiran]]"
related:
  - "[[NextAuth JWT Bridge]]"
  - "[[Docker Compose Multi-Service]]"
---

# Django DRF Backend Pattern

Pola arsitektur backend yang digunakan di [[absensi-sistem-kehadiran]]: Django 5 + Django REST Framework + MySQL 8.0.

## Stack

- Django 5 sebagai web framework
- Django REST Framework (DRF) untuk REST API di `/api/v2/`
- MySQL 8.0 via Docker container
- `djangorestframework-simplejwt` untuk JWT authentication
- `python-docx` + LibreOffice untuk DOCX → PDF conversion

## Pattern

- API versioning via URL prefix (`/api/v2/`)
- Modular apps: `overtime`, `attendance`, `leave`, `correction`, `performance`, `employee`
- Unit test per app dengan `python manage.py test apps.[feature] -v2`
- Contract test dengan curl + jq (seed data → JWT login → verify response shape)

## Komponen Kunci

- Docker-based development: backend container di `fuse_backend_dev`
- phpMyAdmin untuk database management (port 8081)
- DOCX converter microservice (port 3003)
- Production deployment via Caddy reverse proxy
