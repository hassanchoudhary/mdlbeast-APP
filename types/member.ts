export type Tier = 'visitor' | 'pool_club' | 'prive' | 'unstable';

export interface Member {
  id: string;
  mobile: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  tier: Tier;
  marketingOptIn?: boolean;
  // TODO: MAR-28 / MAR-61 — extend with additional PeopleVine fields once tier field name is confirmed.
}
