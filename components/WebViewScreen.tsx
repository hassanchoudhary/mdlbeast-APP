import { View, Text } from 'react-native';

export interface WebViewScreenProps {
  url: string;
  confirmPathPrefix?: string;
  cancelPathPrefix?: string;
  onConfirm?: (returnUrl: string) => void;
  onCancel?: (returnUrl: string) => void;
  onError?: (message: string) => void;
}

// TODO: MAR-36/39/43/44/45/47 — shared WebView shell for SevenRooms, SynXis, MDLBeast webstore.
// Loading spinner, error state, deep-link return URL handling.
export function WebViewScreen(_props: WebViewScreenProps) {
  return (
    <View>
      <Text>[WebViewScreen] placeholder</Text>
    </View>
  );
}
