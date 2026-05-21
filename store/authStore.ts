import { create } from 'zustand';
import type { Member, Tier } from '@/types/member';

export interface AuthState {
  token: string | null;
  refreshToken: string | null;
  member: Member | null;
  tier: Tier | null;
  isHydrated: boolean;
  setAuth: (payload: { token: string; refreshToken: string; member: Member }) => void;
  setTier: (tier: Tier) => void;
  logout: () => void;
}

// TODO: MAR-2 / MAR-23 / MAR-60 — persist token+refresh via Expo SecureStore; hydrate on app launch.
export const useAuthStore = create<AuthState>(() => ({
  token: null,
  refreshToken: null,
  member: null,
  tier: null,
  isHydrated: false,
  setAuth: () => {
    // TODO
  },
  setTier: () => {
    // TODO
  },
  logout: () => {
    // TODO: MAR-60 — clear SecureStore, reset state, navigate to welcome
  },
}));
