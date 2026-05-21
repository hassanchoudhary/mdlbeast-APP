import { Tabs } from 'expo-router';

// TODO: MAR-54 — tier-aware tab bar. Filter visible tabs based on auth tier.
export default function TabsLayout() {
  return <Tabs screenOptions={{ headerShown: false }} />;
}
