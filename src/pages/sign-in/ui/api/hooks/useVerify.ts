import { useMemo } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { verifyTokenlFn } from "shared/api/auth/authApi";
// import { GenericResponse } from "shared/api/auth/types";
import { QUERY_KEY } from "shared/constants/queryKeys";

export const useVerify = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  // const { setIsLoggedIn } = useAuthStore()

  const { mutate, isLoading } = useMutation(verifyTokenlFn, {
    onSuccess: (data) => {
      window.localStorage.setItem("verify-token", data);

      // setIsLoggedIn(true)

      queryClient.invalidateQueries(QUERY_KEY.accessToken);
      console.log("useVerify", data);

      navigate("/", { replace: true });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return useMemo(() => ({ mutate, isLoading }), [mutate, isLoading]);
};
