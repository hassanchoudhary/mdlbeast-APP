import { Stack } from 'expo-router';

// TODO: MAR-23 / MAR-28 — wire QueryClientProvider, auth bootstrap, tier-aware redirect
export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(auth)" />
      <Stack.Screen name="(tabs)" />
    </Stack>
  );
}
