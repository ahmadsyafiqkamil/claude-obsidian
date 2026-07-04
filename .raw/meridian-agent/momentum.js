// momentum.js — pure, config-driven momentum helpers used by the screener.
//
// Momentum is derived from DexScreener price-change %. These functions are
// intentionally side-effect free so they can be unit-tested in isolation and
// reused by screening.js (entry filter + re-entry gate) and prompt.js (bins).

/**
 * Ordered momentum classes, strongest first. Each class has a `min` price-change
 * threshold (in %) and a bins band {min,max} used to size the LP range.
 * Strong momentum → tighter (fewer) bins; weak momentum → wider (more) bins.
 * Defaults match the user's "momentum_sculpt" strategy image.
 */
export const DEFAULT_MOMENTUM_CLASSES = [
  { name: "extreme",  min: 100, bins: { min: 70,  max: 100 } },
  { name: "high",     min: 50,  bins: { min: 70,  max: 100 } },
  { name: "moderate", min: 20,  bins: { min: 100, max: 150 } },
  { name: "low",      min: 10,  bins: { min: 100, max: 150 } },
  { name: "minimal",  min: -Infinity, bins: { min: 100, max: 150 } },
];

/**
 * Dynamic re-entry rules, evaluated top-to-bottom. The first rule whose time
 * window matches decides the outcome. Mirrors the tweet's example logic:
 *   <1h        → drop
 *   1h–6h      → allow only if 1h price change > 100%
 *   6h–12h     → allow only if 1h price change > 20%
 *   otherwise  → drop (no recent close → not a re-entry, handled by caller)
 * `minH1` is the minimum 1h price-change % required to allow re-entry in that window.
 */
export const DEFAULT_REENTRY_RULES = [
  { maxHours: 1, allow: false },
  { minHours: 1, maxHours: 6, minH1: 100 },
  { minHours: 6, maxHours: 12, minH1: 20 },
  { minHours: 12, allow: true },
];

function toFiniteNumber(value) {
  // null/undefined/"" must be "unknown" (null), not coerced to 0 by Number().
  if (value === null || value === undefined || value === "") return null;
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

/**
 * Classify a price-change % into a momentum class name.
 * @param {number} pct - price change percentage (e.g. 42.5)
 * @param {Array} [classes] - ordered class table (strongest first)
 * @returns {string|null} class name, or null when pct is not a finite number
 */
export function classifyMomentum(pct, classes = DEFAULT_MOMENTUM_CLASSES) {
  const value = toFiniteNumber(pct);
  if (value === null) return null;
  for (const cls of classes) {
    if (value >= cls.min) return cls.name;
  }
  return classes.length ? classes[classes.length - 1].name : null;
}

/**
 * Map a momentum class name to its bins band {min,max}.
 * @param {string} category
 * @param {Array} [classes]
 * @returns {{min:number,max:number}|null}
 */
export function momentumToBins(category, classes = DEFAULT_MOMENTUM_CLASSES) {
  if (!category) return null;
  const cls = classes.find((c) => c.name === category);
  return cls ? { ...cls.bins } : null;
}

/**
 * Decide whether a previously-traded token may be re-entered now, based on how
 * long ago it closed and its current 1h price-change momentum.
 * @param {object} args
 * @param {number} args.hoursSinceClose
 * @param {number} args.priceChange1h
 * @param {Array} [args.rules]
 * @returns {{ allow: boolean, reason: string }}
 */
export function shouldAllowReentry({ hoursSinceClose, priceChange1h, rules = DEFAULT_REENTRY_RULES } = {}) {
  const hours = toFiniteNumber(hoursSinceClose);
  if (hours === null) return { allow: true, reason: "no recent close" };
  const h1 = toFiniteNumber(priceChange1h);

  for (const rule of rules) {
    const min = rule.minHours ?? -Infinity;
    const max = rule.maxHours ?? Infinity;
    if (hours < min || hours >= max) continue;

    if (rule.allow === false) {
      return { allow: false, reason: `re-entry blocked: closed ${hours.toFixed(1)}h ago (<${max}h)` };
    }
    if (rule.minH1 != null) {
      if (h1 === null) {
        return { allow: false, reason: `re-entry blocked: 1h momentum unknown (need >${rule.minH1}%)` };
      }
      if (h1 < rule.minH1) {
        return { allow: false, reason: `re-entry blocked: 1h momentum ${h1.toFixed(1)}% < ${rule.minH1}% (closed ${hours.toFixed(1)}h ago)` };
      }
      return { allow: true, reason: `re-entry ok: 1h momentum ${h1.toFixed(1)}% ≥ ${rule.minH1}% (closed ${hours.toFixed(1)}h ago)` };
    }
    return { allow: true, reason: `re-entry ok: closed ${hours.toFixed(1)}h ago` };
  }
  return { allow: false, reason: `re-entry blocked: no matching rule for ${hours.toFixed(1)}h` };
}
