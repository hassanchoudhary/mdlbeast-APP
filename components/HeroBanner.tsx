import { View, Text } from 'react-native';

export interface HeroBannerProps {
  imageUrl: string;
  blurhash?: string;
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  onCtaPress?: () => void;
}

// TODO: full-width Expo Image + dark gradient overlay + title + optional CTA. Used on all amenity LPs.
export function HeroBanner(_props: HeroBannerProps) {
  return (
    <View>
      <Text>[HeroBanner] placeholder</Text>
    </View>
  );
}
