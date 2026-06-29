---
type: concept
title: "Docker Compose Multi-Service"
created: 2026-06-29
tags:
  - concept
  - devops
  - docker
  - infrastructure
status: developing
source: "[[absensi-sistem-kehadiran]]"
related:
  - "[[Django DRF Backend Pattern]]"
---

# Docker Compose Multi-Service

Pola multi-container Docker Compose yang digunakan di [[absensi-sistem-kehadiran]] untuk development environment.

## Services

| Service | Container | Port |
|---------|-----------|------|
| MySQL 8.0 | `fuse_mysql_dev` | 3307 |
| Django Backend | `fuse_backend_dev` | 8001 |
| Next.js Frontend | `fuse_frontend_dev` | 3002 |
| phpMyAdmin | `fuse_phpmyadmin_dev` | 8081 |
| DOCX Converter | `fuse_docx_converter_dev` | 3003 |

## Pattern

- Development: `docker-compose up -d` (semua service dalam satu network)
- Production: `docker-compose -f docker-compose.prod.yml up` (Caddy reverse proxy)
- Database init scripts di `mysql/init/`
- Deploy scripts: `deploy.sh`, `deploy-prod.sh`, `deploy-remote.sh`
- Maintenance scripts: `backup.sh`, `maintenance.sh`, `monitor.sh`
