import { useEffect } from "react";
import { useQuery } from "react-query";
import { verifyTokenlFn } from "shared/api/auth/authApi";

export const useAccessToken = (token: string) => {
  const accessToken = useQuery(
    "accessToken",
    async () => verifyTokenlFn(token),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      initialData: localStorage.getItem("token"),
      onError: () => {
        localStorage.removeItem("token");
      },
    }
  );

  useEffect(() => {
    if (!token) localStorage.removeItem("token");
    else console.log(token);
  }, [token]);

  return accessToken;
};
