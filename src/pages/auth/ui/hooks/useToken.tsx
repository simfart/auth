import { useMemo } from 'react';
import { useQuery } from 'react-query';
import { verifyTokenFn } from 'shared/api/auth/authApi';
import { QUERY_KEY } from 'shared/constants/queryKeys';

export const useToken = () => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY.accessToken],
    queryFn: verifyTokenFn,
  });

  return useMemo(
    () => ({ isAuthenticated: data, isLoading }),
    [data, isLoading],
  );
};

// export const useVerifyToken = () => {
//   const token = localStorage.getItem("token");
//   const { data: accessToken } = useQuery(
//     [QUERY_KEY.accessToken],
//     async () => await verifyTokenlFn(token),
//     {
//       enabled: !!token,
//       refetchOnMount: false,
//       refetchOnWindowFocus: false,
//       refetchOnReconnect: false,
//       initialData: token,
//       onError: (err) => {
//         console.log("useAccessToken", err);
//         localStorage.removeItem("token");
//       },
//     }
//   );

//   return accessToken ?? null;
// };
