export type BookingType = 'pool' | 'gym' | 'restaurant' | 'rooms' | 'shisha';

export type BookingStatus = 'upcoming' | 'confirmed' | 'cancelled' | 'past';

export interface Booking {
  id: string;
  type: BookingType;
  memberId: string;
  startsAt: string; // ISO 8601
  endsAt?: string;
  status: BookingStatus;
  partySize?: number;
  // Per-amenity fields (filled depending on `type`)
  pool?: { cabanaId?: string; sunbedIds?: string[] };
  gym?: { classId?: string; trainerId?: string };
  restaurant?: { sevenroomsReservationId?: string };
  rooms?: { synxisConfirmationCode?: string; checkIn?: string; checkOut?: string };
  shisha?: { loungeId?: string; flavour?: string };
}
