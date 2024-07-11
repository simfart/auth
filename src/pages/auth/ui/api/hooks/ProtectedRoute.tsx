import { useAccessToken, useVerify } from "./useAuth";
import { Navigate } from "react-router-dom";
import { FC } from "react";

type ProtectedRouteProps = {
  children: React.ReactElement;
  isAuthenticated: boolean;
  authenticationPath: string;
};

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = useVerify();
  console.log("ProtectedRoute", isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" />;
};
