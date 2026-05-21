import { create } from 'zustand';
import type { Booking } from '@/types/booking';

export interface BookingState {
  bookings: Booking[];
  setBookings: (next: Booking[]) => void;
  upsertBooking: (booking: Booking) => void;
  removeBooking: (id: string) => void;
}

// TODO: lightweight cache of upcoming bookings — actual source of truth is TanStack Query.
// Used to surface counts on the homepage without refetching.
export const useBookingStore = create<BookingState>(() => ({
  bookings: [],
  setBookings: () => {
    // TODO
  },
  upsertBooking: () => {
    // TODO
  },
  removeBooking: () => {
    // TODO
  },
}));
