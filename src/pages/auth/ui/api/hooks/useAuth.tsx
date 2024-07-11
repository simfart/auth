import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { verifyTokenFn, verifyTokenlFn } from "shared/api/auth/authApi";
// import { QUERY_KEY } from "shared/constants/queryKeys";
import { Header } from "shared/ui";

export const useAccessToken = () => {
  //   const tokenObj = JSON.parse(localStorage.getItem("token"));
  // const accessToken = tokenObj?.access_token || null;

  const token = localStorage.getItem("token");
  const { data: accessToken } = useQuery(
    "accessToken",
    async () => await verifyTokenlFn(token),
    {
      // enabled: !!token,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      // initialData: token,
      // onSuccess: (accessToken) => {
      //   console.log(accessToken);
      //   // stateContext.dispatch({ type: "SET_USER", payload: data });
      // },
      onError: (err) => {
        console.log("useAccessToken", err);
        localStorage.removeItem("token");
      },
    }
  );

  // if (accessToken.isLoading && token) {
  //   return <Header />;
  // }
  console.log("accessToken", accessToken);
  return accessToken ?? null;
};

export const useVerify = () => {
  useQuery({
    queryKey: ["accessToken"],
    queryFn: async () => {
      const token = localStorage.getItem("token");
      const response = await verifyTokenlFn(token);
      return response;
    },
  });
};
