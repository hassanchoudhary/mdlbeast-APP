import { View, Text } from 'react-native';

export interface OTPInputProps {
  length?: 6;
  value: string;
  onChange: (next: string) => void;
  onComplete?: (value: string) => void;
  resendSeconds?: number;
  onResend?: () => void;
  errorMessage?: string;
}

// TODO: MAR-18 — 6 boxes, auto-advance on input, paste support, 60s resend timer, 3-attempt lockout.
export function OTPInput(_props: OTPInputProps) {
  return (
    <View>
      <Text>[OTPInput] placeholder</Text>
    </View>
  );
}
