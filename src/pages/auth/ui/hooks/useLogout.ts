import { useMemo } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { logoutUserFn } from 'shared/api/auth/authApi';
import { useUserStore } from 'shared/store';

export const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const store = useUserStore();

  const { mutate, isLoading } = useMutation(logoutUserFn, {
    onSuccess: () => {
      window.localStorage.removeItem('token');
      window.localStorage.removeItem('ownerId');
      queryClient.removeQueries();
      navigate('/login', { replace: true });
      store.setAuthUser(null);
    },
    onError: (err) => {
      store.setAuthUser(null);
      console.log(err);
    },
  });

  return useMemo(() => ({ mutate, isLoading }), [mutate, isLoading]);
};
