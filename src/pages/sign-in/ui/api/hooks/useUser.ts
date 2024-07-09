import { useEffect } from "react";
import { useQuery } from "react-query";
import { authApi, getUserFn } from "shared/api/auth/authApi";
import { IUser, IUserResponse } from "shared/api/auth/types";
import { QUERY_KEY } from "shared/constants/queryKeys";
import { useUserStore } from "shared/store/user";

interface IUseUser {
  user: IUser | null;
}

export const useUser = (): IUseUser => {
  const { data: user } = useQuery(
    [QUERY_KEY.user],
    async (): Promise<IUser | null> => getUserFn(),
    {
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      // initialData: userLocalStorage.getUser,
      onError: (err) => {
        console.log(err);
        //   userLocalStorage.removeUser();
      },
    }
  );

  // useEffect(() => {
  //   if (!user) userLocalStorage.removeUser();
  //   else userLocalStorage.saveUser(user);
  // }, [user]);

  return {
    user: user ?? null,
  };
};
