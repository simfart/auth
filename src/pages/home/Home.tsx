import { useAuth } from "pages/sign-in/ui/api/AuthMiddleware";
import { useGetUser, useUser } from "pages/auth/ui/api/hooks/useUser";
import { FC } from "react";
import { useUserStore } from "shared/store/user";
import { Header } from "shared/ui";

export const HomePage: FC = () => {
  // const curIser = useUser();
  // console.log(curIser);
  return (
    <div className="home-page">
      <Header />
    </div>
  );
};
