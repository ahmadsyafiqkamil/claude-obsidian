// tools/dexscreener.js — momentum data source.
//
// DexScreener is free, reliable, and exposes fixed price-change windows
// (m5/h1/h6/h24) independent of the Meteora screening timeframe. We use it as
// the core momentum metric for entry filtering, bins sizing, and re-entry gating.
//
// Fail-soft by design: network/parse errors return nulls instead of throwing,
// so the screening loop never crashes on a flaky third-party call. Callers
// decide fail-open vs fail-closed via config.

import { log } from "../logger.js";

const DEXSCREENER_BASE = "https://api.dexscreener.com/latest/dex/tokens";
const CACHE_TTL_MS = 60_000; // DexScreener token endpoint allows ~300 req/min
const REQUEST_TIMEOUT_MS = 8_000;

const _cache = new Map(); // mint -> { at: number, data: MomentumData }

const EMPTY = Object.freeze({
  m5: null,
  h1: null,
  h6: null,
  h24: null,
  priceUsd: null,
  liquidityUsd: null,
  pairAddress: null,
  available: false,
});

function num(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

/**
 * Pick the best pair for a mint: prefer the one matching `poolAddress`,
 * otherwise the highest-liquidity Solana pair.
 */
function selectPair(pairs, poolAddress) {
  const solana = pairs.filter((p) => p?.chainId === "solana");
  if (!solana.length) return null;
  if (poolAddress) {
    const match = solana.find((p) => p.pairAddress?.toLowerCase() === String(poolAddress).toLowerCase());
    if (match) return match;
  }
  return solana.reduce((best, p) => {
    const liq = num(p?.liquidity?.usd) ?? 0;
    const bestLiq = num(best?.liquidity?.usd) ?? 0;
    return liq > bestLiq ? p : best;
  }, solana[0]);
}

/**
 * Fetch price-change momentum for a Solana token.
 * @param {string} mint
 * @param {string} [poolAddress] - preferred pair to read momentum from
 * @returns {Promise<{m5:number|null,h1:number|null,h6:number|null,h24:number|null,priceUsd:number|null,liquidityUsd:number|null,pairAddress:string|null,available:boolean}>}
 */
export async function getMomentumData(mint, poolAddress) {
  if (!mint) return { ...EMPTY };

  const cached = _cache.get(mint);
  if (cached && Date.now() - cached.at < CACHE_TTL_MS) return cached.data;

  try {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
    let res;
    try {
      res = await fetch(`${DEXSCREENER_BASE}/${mint}`, { signal: controller.signal });
    } finally {
      clearTimeout(timer);
    }
    if (!res.ok) {
      log("dexscreener", `HTTP ${res.status} for ${String(mint).slice(0, 8)} — momentum unavailable`);
      return { ...EMPTY };
    }
    const body = await res.json();
    const pairs = Array.isArray(body?.pairs) ? body.pairs : [];
    const pair = selectPair(pairs, poolAddress);
    if (!pair) return { ...EMPTY };

    const pc = pair.priceChange || {};
    const data = {
      m5: num(pc.m5),
      h1: num(pc.h1),
      h6: num(pc.h6),
      h24: num(pc.h24),
      priceUsd: num(pair.priceUsd),
      liquidityUsd: num(pair?.liquidity?.usd),
      pairAddress: pair.pairAddress ?? null,
      available: true,
    };
    _cache.set(mint, { at: Date.now(), data });
    return data;
  } catch (error) {
    log("dexscreener", `Fetch failed for ${String(mint).slice(0, 8)}: ${error.message}`);
    return { ...EMPTY };
  }
}

/** Test/maintenance helper: clear the in-memory cache. */
export function clearMomentumCache() {
  _cache.clear();
}
