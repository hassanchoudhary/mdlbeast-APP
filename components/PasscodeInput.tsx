import { View, Text } from 'react-native';

export interface PasscodeInputProps {
  length?: 4 | 6;
  value: string;
  onChange: (next: string) => void;
  onComplete?: (value: string) => void;
  errorMessage?: string;
}

// TODO: MAR-5 / MAR-19 — 4-dot display, numeric keyboard, confirm flow uses two instances.
export function PasscodeInput(_props: PasscodeInputProps) {
  return (
    <View>
      <Text>[PasscodeInput] placeholder</Text>
    </View>
  );
}
