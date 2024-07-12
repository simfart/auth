import { useMemo } from "react";
import { useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
import { loginUserFn } from "shared/api/auth/authApi";
import { QUERY_KEY } from "shared/constants/queryKeys";
import { useUserStore } from "shared/store/user";

export const useLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const store = useUserStore();

  const { mutate, isLoading } = useMutation(loginUserFn, {
    onSuccess: (data) => {
      window.localStorage.setItem("token", data["user-token"]);
      window.localStorage.setItem("ownerId", data.ownerId);

      queryClient.setQueryData([QUERY_KEY.user], data);
      store.setAuthUser(data);
      // setIsLoggedIn(true)
      //   queryClient.invalidateQueries(QUERY_KEY.user);

      navigate("/", { replace: true });
    },
    onError: (err) => {
      console.log(err);
    },
  });

  return useMemo(() => ({ mutate, isLoading }), [mutate, isLoading]);
};
