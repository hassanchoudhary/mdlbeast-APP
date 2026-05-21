import { View, Text } from 'react-native';

export interface AmenityCardProps {
  title: string;
  subtitle?: string;
  imageUrl: string;
  blurhash?: string;
  statusBadge?: string;
  href: string;
  disabled?: boolean;
  onPress?: () => void;
}

// TODO: MAR-25/26/27 — used on home and amenity LPs. Expo Image with blurhash placeholder.
export function AmenityCard(_props: AmenityCardProps) {
  return (
    <View>
      <Text>[AmenityCard] placeholder</Text>
    </View>
  );
}
