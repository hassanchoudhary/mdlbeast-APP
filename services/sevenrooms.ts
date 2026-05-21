export interface SevenRoomsReservation {
  id: string;
  venueId: string;
  partySize: number;
  startsAt: string;
  status: 'confirmed' | 'cancelled';
}

export async function getReservation(_reservationId: string): Promise<SevenRoomsReservation> {
  // TODO: MAR-40 — fetch reservation detail from SevenRooms API
  throw new Error('sevenrooms.getReservation: not implemented (MAR-40)');
}
