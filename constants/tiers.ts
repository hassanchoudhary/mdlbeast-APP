import type { Tier } from '@/types/member';

export const TIER_LABELS: Record<Tier, string> = {
  visitor: 'Visitor',
  pool_club: 'Pool Club',
  prive: 'Privé',
  unstable: 'UNSTABLE',
};

// Index in this array = tier rank. Higher rank = more access.
export const TIER_ORDER = ['visitor', 'pool_club', 'prive', 'unstable'] as const satisfies readonly Tier[];

// Tailwind colour token (defined in tailwind.config.ts) used by each tier's homepage.
export const TIER_PRIMARY_COLOR: Record<Tier, string> = {
  visitor: 'mdl-gold',
  pool_club: 'pool-blue',
  prive: 'prive-dark',
  unstable: 'unstable-red',
};

export interface TierNavItem {
  label: string;
  route: string;
  ticket: string;
}

// TODO: MAR-54 — tier-aware navigation menu. Fill once nav design is locked.
export const TIER_NAV: Record<Tier, ReadonlyArray<TierNavItem>> = {
  visitor: [],
  pool_club: [],
  prive: [],
  unstable: [],
};

export function tierRank(tier: Tier): number {
  return TIER_ORDER.indexOf(tier);
}

export function tierMeetsMinimum(current: Tier | null, minimum: Tier): boolean {
  if (!current) return false;
  return tierRank(current) >= tierRank(minimum);
}
