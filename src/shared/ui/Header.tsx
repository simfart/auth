import { useUser } from "pages/auth/ui/api/hooks/useUser";
import { FC, useContext } from "react";
import { useMutation, useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { getUserFn, loginUserFn } from "shared/api/auth/authApi";
import { CurrentUser } from "shared/api/currentUser";
import { User } from "shared/api/models";
import { QUERY_KEY } from "shared/constants/queryKeys";
import { useUserStore } from "shared/store/user";

export const Header: FC = () => {
  const currentUser = useUserStore().authUser;
  console.log(currentUser);

  return <nav className="navbar navbar-light"></nav>;
};
