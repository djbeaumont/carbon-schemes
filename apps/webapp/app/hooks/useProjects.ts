import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { api } from '~/hooks/api';

// TODO - shared types package
export type Project = {
  id: string;
  url: string;
  status: string;
  country: string;
};

export function useProjects(): UseQueryResult<Project[]> {
  return useQuery<Project[]>({
    queryKey: ['projects'],
    queryFn: async () => {
      return await api('/projects');
    },
  });
}
