import { FC } from "react";
import { useUserStore } from "shared/store/user";

export const Header: FC = () => {
  const currentUser = useUserStore().authUser;
  console.log(currentUser);

  return <nav className="navbar navbar-light"></nav>;
};
