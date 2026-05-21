import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import type { Member, Tier } from '@/types/member';

export interface AuthState {
  token: string | null;
  member: Member | null;
  tier: Tier;
  isAuthenticated: boolean;
}

export interface AuthActions {
  setAuth: (token: string, member: Member) => void;
  setTier: (tier: Tier) => void;
  logout: () => void;
}

// NOTE: tech spec calls for SecureStore for auth tokens (Keychain/Keystore).
// Per current foundation brief, persisting both token and member to AsyncStorage.
// TODO: MAR-23 / MAR-60 — migrate token (only) to Expo SecureStore before launch.
export const useAuthStore = create<AuthState & AuthActions>()(
  persist(
    (set) => ({
      token: null,
      member: null,
      tier: 'visitor',
      isAuthenticated: false,
      setAuth: (token, member) =>
        set({
          token,
          member,
          tier: member.tier,
          isAuthenticated: true,
        }),
      setTier: (tier) => set({ tier }),
      logout: () =>
        set({
          token: null,
          member: null,
          tier: 'visitor',
          isAuthenticated: false,
        }),
    }),
    {
      name: 'mdlbeast-auth',
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ token: state.token, member: state.member }),
      onRehydrateStorage: () => (state) => {
        if (!state) return;
        state.tier = state.member?.tier ?? 'visitor';
        state.isAuthenticated = Boolean(state.token && state.member);
      },
    },
  ),
);
