import { useMemo } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { registerUserFn } from 'shared/api/auth/authApi';
import { QUERY_KEY } from 'shared/constants/queryKeys';

export const useRegister = () => {
  const navigate = useNavigate();

  // const store = useUserStore();

  const { mutate, isLoading } = useMutation({
    mutationKey: [QUERY_KEY.user],
    mutationFn: registerUserFn,
    onSuccess: () => {
      navigate('/login', { replace: true });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return useMemo(() => ({ mutate, isLoading }), [mutate, isLoading]);
};
