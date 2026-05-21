import { View, Text } from 'react-native';

// TODO: MAR-28 — read tier from authStore and redirect to the correct home variant.
// visitor → home/visitor, pool_club → home/pool-club, prive → home/prive, unstable → home/unstable.
export default function TierRouterScreen() {
  return (
    <View>
      <Text>[MAR-28] Tier router placeholder</Text>
    </View>
  );
}
