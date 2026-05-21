import type { Member } from '@/types/member';
import type { Booking } from '@/types/booking';

// TODO: MAR-23 — create Axios instance with Bearer interceptor + 401 refresh retry.

export interface LoginResult {
  token: string;
  refreshToken: string;
  member: Member;
}

export async function login(_mobile: string, _otp: string): Promise<LoginResult> {
  // TODO: MAR-4 / MAR-18 — verify OTP and return token + member
  throw new Error('peoplevine.login: not implemented (MAR-4)');
}

export async function refreshToken(_token: string): Promise<{ token: string; refreshToken: string }> {
  // TODO: MAR-23 — silent re-auth via PeopleVine refresh endpoint
  throw new Error('peoplevine.refreshToken: not implemented (MAR-23)');
}

export async function getMember(_id: string): Promise<Member> {
  // TODO: MAR-28 / MAR-61 — fetch full member profile incl. tier
  throw new Error('peoplevine.getMember: not implemented (MAR-28)');
}

export async function getBookings(_memberId: string): Promise<Booking[]> {
  // TODO: MAR-3 / MAR-9 — fetch upcoming bookings across amenities
  throw new Error('peoplevine.getBookings: not implemented (MAR-29)');
}
