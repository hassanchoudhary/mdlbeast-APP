import { View, Text } from 'react-native';

export interface Country {
  code: string;
  name: string;
  dialCode: string;
  flag?: string;
}

export interface CountrySelectorProps {
  value?: Country;
  onSelect: (country: Country) => void;
  placeholder?: string;
}

// TODO: MAR-17 — searchable modal listing countries with dial codes. FlatList. Persist selection.
export function CountrySelector(_props: CountrySelectorProps) {
  return (
    <View>
      <Text>[CountrySelector] placeholder</Text>
    </View>
  );
}
