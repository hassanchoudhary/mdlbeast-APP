import { useQuery } from '@tanstack/react-query';
import { getMember } from '@/services/peoplevine';
import type { Member } from '@/types/member';

// TODO: MAR-28 / MAR-61 — fetch member from PeopleVine, drive tier routing.
export function useMember(memberId: string | undefined) {
  return useQuery<Member>({
    queryKey: ['member', memberId],
    queryFn: () => {
      if (!memberId) throw new Error('memberId is required');
      return getMember(memberId);
    },
    enabled: Boolean(memberId),
  });
}
