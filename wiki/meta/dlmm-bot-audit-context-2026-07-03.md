# Context Handoff: DLMM Bot Audit Session

**Date**: 2026-07-03 | **Session**: claude-obsidian vault + VPS inspection

---

## What We Did

1. **Ingested a tweet** about DLMM bot token screening lessons (exit liquidity risk + volatility execution gap) into the Obsidian vault
2. **Inspected the bot live** on VPS (`[REDACTED_IP]`, user: `[REDACTED_USER]`, pass: `[REDACTED]`)
3. **Analyzed performance data** from 354 closed positions

---

## VPS: meridian_experimental/

```
SSH: ssh [REDACTED_USER]@[REDACTED_IP]  (pass: [REDACTED])
Dir: ~/meridian_experimental/
```

### Key Files
| File | Purpose |
|------|---------|
| `user-config.json` | Current config (degen preset, spot strategy) |
| `lessons.json` | 354 position performance records |
| `state.json` | Current state (no open positions) |
| `decision-log.json` | Structured LLM decision logs |
| `pool-memory.json` | Per-pool deploy history + win rates |
| `config.js` | Config loader + defaults |
| `lessons.js` | Darwin evolution + lesson extraction |
| `logs/agent-2026-07-03.log` | Today's log |
| `logs/actions-2026-07-03.jsonl` | Structured action log |

### Performance Data (lessons.json)
```
Total positions: 354
Win Rate: 55.1% (195W / 159L)
Avg Win: +0.88%
Avg Loss: -2.04%
R:R Ratio: 0.43:1  (losses 2.3x bigger than wins)
EV per position: -0.43%  ← NEGATIVE
Cumulative PnL sum: -153%

Last 20 positions:
  WR: 65% (13W / 7L)
  Avg Win: +1.49%
  Avg Loss: -2.60%
```

### Current Wallet: 0.824 SOL

### Today's Activity
- Closed RTM-SOL at +8.08% TP ($1.97 profit)
- Since then: 10+ screening cycles, all rejected
- Only candidate (CATWIF-SOL) consistently rejected by pool memory
- Bot idling, burning LLM tokens every 5 min

---

## 4 Problems Found

### 1. Fixed sizing 0.3 SOL = 36% wallet (not 9%)
Config says `positionSizePct: 0.09` but `deployAmountSol: 0.3` acts as minimum floor.
0.3 / 0.824 = 36.4% per position. Tweet's key lesson: "small market cap + large LP sizing = you become exit liquidity."

### 2. Bot can't find deployable pools
Screening too strict for current market conditions:
- `momentumEntryMinH1Pct: 5` removes 5-8 candidates/cycle
- Pool memory blocks remaining candidates
- Indicator filter (supertrend_break) rejects more
- Result: bot idling, wallet too small to fix with more lenient filters

### 3. Darwin evolution can't fix sizing problem
Winner fee/TVL avg = 0.52 vs loser = 0.48 — gap too small.
Evolution adjusts thresholds but root cause is sizing + R:R ratio.

### 4. No circuit breaker
No daily loss limit. Bot bleeds -0.43% EV per position with no auto-pause.

### 5. Known code issue
Darwin evolution key name mismatch: `lessons.js:29` references `"volatility"` but `user-config.json` doesn't have `maxVolatility` — some evolutions are no-ops. (Already documented in vault CLAUDE.md)

---

## Recommendations (Priority Order)

| # | Action | File to edit | Value to change |
|---|--------|-------------|-----------------|
| 1 | Lower deploy amount | `user-config.json` | `deployAmountSol: 0.3` → `0.1` |
| 2 | Add daily loss limit | `user-config.json` | Add `maxDailyLossUsd: 5` |
| 3 | Loosen momentum filter | `user-config.json` | `momentumEntryMinH1Pct: 5` → `3` or `null` |
| 4 | Top-up wallet | VPS wallet | 0.824 → 2-3 SOL minimum |

---

## Vault Knowledge Created

| Page | Path |
|------|------|
| Source | `wiki/sources/DLMM-Bot-Lessons-Tweet.md` |
| Concept | `wiki/concepts/Exit Liquidity Risk.md` |
| Concept | `wiki/concepts/Volatility Execution Gap.md` |
| Raw | `.raw/articles/dlmm-bot-lessons-tweet-2026-07-03.md` |

Updated with cross-refs: LP Scanner, Gas Reserve, Trailing TP, Momentum-to-Bins, Bundler Detection, Meteora DLMM, concepts/_index, sources/_index

---

## Follow-up Session (2026-07-03 evening): What-If EV Analysis + Config Tune APPLIED

### Analysis results (354 positions, lessons.json)

**Temuan #1 — tail loss adalah seluruh masalah, dan penyebabnya OOR timeout, bukan SL:**
- 14 posisi loss < -4% menyumbang **-253.6%** (dari total kumulatif -153%). Sisanya net positif.
- 4 loss terburuk (-82%, -50%, -23%, -22%) semuanya exit via **"Out of range for 30m (limit)"** — bukan stop loss. Token dump keluar range, bot menunggu 30 menit sambil memegang token yang kolaps. Exit reason "OOR 30m" bucket: n=6, avgL **-32%**, EV -15.7%/posisi.
- SL yang tereksekusi di -8% terealisasi -6.7% s/d -12% (slippage/[[Volatility Execution Gap]]).
- SL sweep: cap loss di -4% → EV berbalik dari -0.43% menjadi **+0.13%**.

**Temuan #2 — high fee/TVL justru toksik:** fee/TVL Q3–Q4 (>0.252) EV -1.69% dan -0.77%; Q1–Q2 breakeven+. Filter `minFeeActiveTvlRatio` menyaring sisi yang salah — sisi bawah aman, sisi atas yang berbahaya (tidak ada key max di config → follow-up kode).

**Temuan #3 — volatility Q3 (2.68–3.99) EV -1.91%** — semua tail killer ada di sana. `maxVolatility` tidak bisa difilter via config (Darwin key mismatch, CLAUDE.md:227) → follow-up kode.

**Temuan #4 —** 73% win ≤ +1%; hold 120–360m EV -2.67%; pool memory hanya memblok 10/108 pool (bukan penyebab idling utama — momentum gate + indicator yang menyaring).

**Temuan #5 — recency positif:** last-50 EV **+0.50%**, tuning terakhir sudah membaik sebelum sesi ini.

### Config changes applied (backup: `user-config.json.bak-2026-07-03` di VPS)

| Key | Lama | Baru | Alasan |
|-----|------|------|--------|
| `deployAmountSol` | 0.3 | **0.1** | 36% → 12% wallet per posisi ([[Exit Liquidity Risk]]) |
| `outOfRangeWaitMinutes` | 45 | **20** | Tail killer #1 — OOR 30m bucket avgL -32% |
| `stopLossPct` | -8 | **-4** | SL sweep: EV flip ke +0.13% |
| `emergencyPriceDropPct` | -10 | **-6** | Mengikuti SL baru |
| `trailingTriggerPct` / `trailingDropPct` | 5 / 3 | **6 / 2** | Worst locked profit +2% → +4% |
| `minFeeActiveTvlRatio` | 0.1 | **0.05** | Q1 fee/TVL aman; kurangi idling |
| `momentumEntryMinH1Pct` | 5 | **3** | Kurangi idling |

Bot **di-restart via pm2** (`pm2 restart all`, PID baru 3628391) — config load hanya saat startup. Verifikasi log: `Computed deploy amount: 0.1 SOL`. Koreksi audit sebelumnya: bot **memang di bawah pm2** (nama app `meridian`, pm2 via nvm `~/.nvm/versions/node/v24.14.1/bin/pm2`).

### Follow-up (butuh perubahan kode, belum dikerjakan)
1. **maxFeeTvlRatio filter** — sisi atas fee/TVL toksik, tidak ada key-nya.
2. **maxVolatility filter + fix Darwin key mismatch** (lessons.js vs config.js).
3. **Circuit breaker daily-loss** — belum ada mekanisme wallet-level.
4. Top-up wallet ke ≥2–3 SOL; `positionSizePct` baru hidup di ≈3.9 SOL.
5. Review ulang setelah ~20 posisi baru; bandingkan dengan baseline EV -0.43% (proyeksi sweep: ≥ +0.1%).

---

## Commands for VPS

```bash
# Connect
ssh [REDACTED_USER]@[REDACTED_IP]

# Check bot status (no pm2 — runs via cron or manual)
ls -lt ~/meridian_experimental/logs/ | head -3
tail -50 ~/meridian_experimental/logs/agent-2026-07-03.log

# Performance stats
python3 -c "
import json
with open('meridian_experimental/lessons.json') as f:
    data = json.load(f)
perf = data['performance']
wins = [p for p in perf if p.get('pnl_pct',0)>0]
losses = [p for p in perf if p.get('pnl_pct',0)<=0]
wr = len(wins)/len(perf)*100
print(f'Total: {len(perf)} | WR: {wr:.1f}% | EV: {(wr/100*sum(p[\"pnl_pct\"] for p in wins)/len(wins)+(100-wr)/100*sum(p[\"pnl_pct\"] for p in losses)/len(losses)):.3f}%')
"

# Edit config
nano ~/meridian_experimental/user-config.json
```
