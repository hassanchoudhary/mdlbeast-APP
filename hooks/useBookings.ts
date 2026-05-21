import { useQuery } from '@tanstack/react-query';
import { getBookings } from '@/services/peoplevine';
import type { Booking } from '@/types/booking';

// TODO: MAR-29 / MAR-30 — used on amenity LPs to show upcoming bookings.
export function useBookings(memberId: string | undefined) {
  return useQuery<Booking[]>({
    queryKey: ['bookings', memberId],
    queryFn: () => {
      if (!memberId) throw new Error('memberId is required');
      return getBookings(memberId);
    },
    enabled: Boolean(memberId),
  });
}
