import { useQuery } from '@tanstack/react-query';
import { fetchHero, fetchAmenity, fetchFaqs, fetchLegal } from '@/services/strapi';

export function useStrapiHero(slug: string) {
  // TODO: amenity hero content
  return useQuery({
    queryKey: ['strapi', 'hero', slug],
    queryFn: () => fetchHero(slug),
  });
}

export function useStrapiAmenity(slug: string) {
  // TODO: MAR-6 / MAR-41 / MAR-33 — full amenity body
  return useQuery({
    queryKey: ['strapi', 'amenity', slug],
    queryFn: () => fetchAmenity(slug),
  });
}

export function useStrapiFaqs() {
  // TODO: MAR-52
  return useQuery({
    queryKey: ['strapi', 'faqs'],
    queryFn: fetchFaqs,
  });
}

export function useStrapiLegal(slug: 'terms' | 'privacy') {
  // TODO: MAR-53
  return useQuery({
    queryKey: ['strapi', 'legal', slug],
    queryFn: () => fetchLegal(slug),
  });
}
