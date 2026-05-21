import type { StrapiResponse } from '@/types/strapi';

export interface HeroContent {
  title: string;
  subtitle?: string;
  imageUrl: string;
  blurhash?: string;
}

export interface AmenityContent {
  hero: HeroContent;
  body: string;
}

export interface FaqEntry {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface LegalContent {
  title: string;
  body: string;
  updatedAt: string;
}

export async function fetchHero(_slug: string): Promise<StrapiResponse<HeroContent>> {
  // TODO: MAR-6 / MAR-34 / MAR-38 / MAR-42 / MAR-46 — fetch amenity hero
  throw new Error('strapi.fetchHero: not implemented');
}

export async function fetchAmenity(_slug: string): Promise<StrapiResponse<AmenityContent>> {
  // TODO: MAR-6 / MAR-33 / MAR-41 — fetch full amenity content
  throw new Error('strapi.fetchAmenity: not implemented');
}

export async function fetchFaqs(): Promise<StrapiResponse<FaqEntry[]>> {
  // TODO: MAR-52
  throw new Error('strapi.fetchFaqs: not implemented (MAR-52)');
}

export async function fetchLegal(_slug: 'terms' | 'privacy'): Promise<StrapiResponse<LegalContent>> {
  // TODO: MAR-53
  throw new Error('strapi.fetchLegal: not implemented (MAR-53)');
}
