import { Navigate } from "react-router-dom";
import { FC } from "react";
import { useToken } from "pages/auth/ui/hooks/useToken";

type ProtectedRouteProps = {
  children: React.ReactElement;
  isAuthenticated: boolean;
  authenticationPath: string;
};

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = useToken();
  return isAuthenticated ? children : <Navigate to="/login" />;
};
