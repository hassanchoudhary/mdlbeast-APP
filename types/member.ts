export type Tier = 'visitor' | 'pool_club' | 'prive' | 'unstable';

export interface Member {
  id: string;
  name: string;
  email: string;
  mobile: string;
  tier: Tier;
  avatarUrl?: string;
}
