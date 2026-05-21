export interface SynxisStay {
  confirmationCode: string;
  propertyCode: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  roomType: string;
  status: 'confirmed' | 'cancelled';
}

export async function getStay(_confirmationCode: string): Promise<SynxisStay> {
  // TODO: MAR-45 — fetch stay detail from SynXis API
  throw new Error('synxis.getStay: not implemented (MAR-45)');
}
