import { View, Text } from 'react-native';

export type CTAVariant = 'primary' | 'secondary' | 'ghost';

export interface CTAButtonProps {
  label: string;
  variant?: CTAVariant;
  onPress?: () => void;
  loading?: boolean;
  disabled?: boolean;
}

// TODO: primary/secondary/ghost variants, loading + disabled states, NativeWind styled.
export function CTAButton(_props: CTAButtonProps) {
  return (
    <View>
      <Text>[CTAButton] placeholder</Text>
    </View>
  );
}
