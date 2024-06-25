import { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "shared/store";

export type IRequireAuth = {
  children: JSX.Element;
};

export const RequireAuth: FC<IRequireAuth> = ({ children }) => {
  const auth = useAuthStore();

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};
