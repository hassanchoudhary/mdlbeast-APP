import type { ReactNode } from 'react';
import { View, Text } from 'react-native';
import type { Tier } from '@/types/member';

export interface TierGateProps {
  minimum: Tier;
  children: ReactNode;
  fallback?: ReactNode;
}

// TODO: read current tier from authStore, render children if tier >= minimum, else fallback (or null).
// Used to gate Privé (MAR-48/49/50) and Attaché (MAR-57/58/59) content.
export function TierGate(_props: TierGateProps) {
  return (
    <View>
      <Text>[TierGate] placeholder — renders children unconditionally until wired</Text>
    </View>
  );
}
