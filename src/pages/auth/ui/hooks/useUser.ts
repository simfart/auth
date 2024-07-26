import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { getUserFn } from 'shared/api/auth/authApi';
import { QUERY_KEY } from 'shared/constants/queryKeys';
import { useUserStore } from 'shared/store';

export const useUser = () => {
  const store = useUserStore();

  const { data: user, isLoading } = useQuery({
    queryKey: [QUERY_KEY.user],
    queryFn: getUserFn,
    onSuccess: (data) => {
      store.setAuthUser(data);
    },
  });

  return useMemo(() => ({ user, isLoading }), [user, isLoading]);
};
