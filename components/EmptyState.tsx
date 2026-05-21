import { View, Text } from 'react-native';
import type { ComponentProps } from 'react';

export interface EmptyStateProps {
  iconName?: string;
  title: string;
  message?: string;
  ctaLabel?: string;
  onCtaPress?: () => void;
  testID?: ComponentProps<typeof View>['testID'];
}

// TODO: shown when no bookings exist on any amenity LP.
export function EmptyState(_props: EmptyStateProps) {
  return (
    <View>
      <Text>[EmptyState] placeholder</Text>
    </View>
  );
}
