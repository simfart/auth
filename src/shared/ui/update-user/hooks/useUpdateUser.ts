import { useMemo } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { uptateUserFn } from 'shared/api/auth/authApi';
import { QUERY_KEY } from 'shared/constants/queryKeys';
import { useUserStore } from 'shared/store';

export const useUpdateUser = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const store = useUserStore();

  const { mutate, isLoading } = useMutation({
    mutationKey: ['mutateUser'],
    mutationFn: uptateUserFn,
    onSuccess: (data) => {
      queryClient.invalidateQueries([QUERY_KEY.user]);

      store.setAuthUser(data);
      navigate('/', { replace: true });
    },
  });
  return useMemo(() => ({ mutate, isLoading }), [mutate, isLoading]);
};
