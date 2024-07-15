import { useQuery } from "react-query";
import { verifyTokenlFn } from "shared/api/auth/authApi";
import { QUERY_KEY } from "shared/constants/queryKeys";

export const useToken = () => {
  useQuery({
    queryKey: [QUERY_KEY.accessToken],
    queryFn: async () => {
      const token = localStorage.getItem("token");
      const response = await verifyTokenlFn(token);
      return response;
    },
  });
};

export const useVerifyToken = () => {
  const token = localStorage.getItem("token");
  const { data: accessToken } = useQuery(
    [QUERY_KEY.accessToken],
    async () => await verifyTokenlFn(token),
    {
      enabled: !!token,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      initialData: token,
      onError: (err) => {
        console.log("useAccessToken", err);
        localStorage.removeItem("token");
      },
    }
  );

  return accessToken ?? null;
};
