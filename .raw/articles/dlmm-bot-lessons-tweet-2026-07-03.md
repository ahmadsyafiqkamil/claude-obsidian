---
source_type: tweet
source_url: "https://x.com/user/status/unknown"
fetched: 2026-07-03
title: "DLMM Bot Lessons: Token Screening Before Position"
---

# DLMM Bot Lessons: Token Screening Before Position

A thread on the single most expensive lesson learned running an automated DLMM bot on Solana. Not about a fancier exit strategy. Not about a new indicator. It's about token screening — before a position is even opened.

## 1. Market Cap vs Sizing: Don't Become Your Own Exit Liquidity

The pattern that most often caused big losses: small market cap, but large LP sizing.

In small-cap tokens, pool liquidity is THIN. Your own position becomes a significant chunk of market depth. The moment price dumps, who absorbs that panic selling first? Your LP position. You become exit liquidity for everyone else — when the whole point was just to provide liquidity and earn fees.

The correlation is simple: the smaller the market cap, the smaller the sizing should be. It's not about "how confident are you in this token" — it's about how much of the market's depth you're personally on the hook for if it moves against you.

## 2. Volatility: Friend or Enemy?

High volatility isn't just "price moving up and down fast" — it's a danger signal for any bot running rule-based TP/SL.

Real example: the bot triggers take-profit because price hits the threshold. But because volatility is high, by the time the TP fires, price has already dumped before execution completes (slippage, execution delay, etc.).

Result: PnL that looked positive on paper turns negative by the time it's actually realized.

High volatility = a narrow execution window. The higher the volatility, the bigger the gap between "price when the signal fired" and "price when the position actually closed."

## 3. Same Root Cause

These two points look like separate topics, but they're really the same problem: a bot (or trader) screening based on signal alone, without screening based on market structure.

Small market cap + large sizing = the depth can't absorb your position. High volatility + rigid TP = execution can't keep up with the price move.

The signal can look great, but if the market's structure doesn't "fit" how you're entering or exiting, you still end up losing.

## 4. Practical Takeaway

Two questions worth asking before every entry:

- What percentage of pool depth does my sizing represent? (not just "what % of my capital")
- If volatility spikes right as I try to exit, how big is the gap between my exit signal and my actual execution?

The turning point from negative to positive didn't come from adding a new feature. It came from rethinking whether screening actually respects market structure — or just chases signals.

## Tags

#DLMM #SolanaDeFi #LiquidityProvider #Meteora #LPArmy

**Disclaimer**: This thread reflects personal experience and observations from running an automated DLMM bot. Not financial advice.
