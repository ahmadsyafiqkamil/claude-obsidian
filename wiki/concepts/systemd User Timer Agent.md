---
type: concept
title: "systemd User Timer Agent"
domain: infrastructure
address: c-000016
tags:
  - infrastructure
  - linux
  - systemd
  - agent-architecture
created: 2026-07-10
status: current
related:
  - "[[Basecamp Mention Agent]]"
  - "[[Claude Code Headless Agent]]"
---

# systemd User Timer Agent

Pola menjalankan agent script secara periodik menggunakan systemd user-level timer. Digunakan sebagai trigger mechanism untuk autonomous agent yang mem-poling external service.

## Unit Files

### Service (`~/.config/systemd/user/bc-agent.service`)
```ini
[Unit]
Description=Basecamp mention agent (oneshot)
After=network-online.target
Wants=network-online.target

[Service]
Type=oneshot
ExecStart=%h/bc-agent/bc-agent.sh
```

### Timer (`~/.config/systemd/user/bc-agent.timer`)
```ini
[Unit]
Description=Run Basecamp mention agent every 30s

[Timer]
OnBootSec=30
OnUnitActiveSec=30
AccuracySec=1s
Persistent=false

[Install]
WantedBy=timers.target
```

## Key Parameters

| Parameter | Value | Rationale |
|-----------|-------|-----------|
| `Type` | oneshot | Script completes; tidak perlu long-running daemon |
| `OnUnitActiveSec` | 30 | Next run 30s setelah previous run selesai |
| `AccuracySec` | 1s | Systemd default accuracy 1 menit — akan smear 30s cadence |

## Deployment

```bash
loginctl enable-linger "$USER"        # Allow tanpa active login session
systemctl --user daemon-reload
systemctl --user enable --now bc-agent.timer
systemctl --user list-timers | grep bc-agent
```

## Properties

- **User-level**: inherit auth dari `$HOME` (Basecamp token, Claude auth)
- **`enable-linger`**: required untuk headless server tanpa interactive login
- **`Persistent=false`**: tidak catch-up missed runs setelah system downtime
- **PATH**: user services dapat PATH minimal — export explicitly di script

## Relevance

Pola systemd user timer adalah mekanisme trigger yang robust dan zero-dependency untuk autonomous agent. Tidak memerlukan cron, webhook server, atau message queue — cukup systemd yang sudah tersedia di semua distro Linux modern.
