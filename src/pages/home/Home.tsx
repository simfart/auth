import { FC } from "react";
import { useUserStore } from "shared/store";
import { Header } from "shared/ui";

export const HomePage: FC = () => {
  const currentUser = useUserStore();
  return (
    <div className="home-page">
      <Header />
      <div>{currentUser.authUser?.name}</div>
      <div>{currentUser.authUser?.email}</div>
    </div>
  );
};
