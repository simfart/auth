import { useQuery } from "react-query";
import { getUserFn } from "shared/api/auth/authApi";
import { IUser } from "shared/api/auth/types";
import { QUERY_KEY } from "shared/constants/queryKeys";

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
      onError: (err) => {
        console.log(err);
      },
    }
  );

  return {
    user: user ?? null,
  };
};
