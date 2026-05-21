import { View, Text } from 'react-native';
import type { Booking, BookingType, BookingStatus } from '@/types/booking';

export interface BookingCardProps {
  booking: Booking;
  type: BookingType;
  status: BookingStatus;
  onManage?: (id: string) => void;
  onCancel?: (id: string) => void;
}

// TODO: used on pool/gym/restaurant/rooms/shisha LPs. Date/time, status, manage/cancel CTAs.
export function BookingCard(_props: BookingCardProps) {
  return (
    <View>
      <Text>[BookingCard] placeholder</Text>
    </View>
  );
}
