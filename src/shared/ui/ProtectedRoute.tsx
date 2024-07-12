import { Navigate } from "react-router-dom";
import { FC } from "react";
import { useVerifyToken } from "../../pages/auth/ui/api/hooks/useVerifyToken";

type ProtectedRouteProps = {
  children: React.ReactElement;
  isAuthenticated: boolean;
  authenticationPath: string;
};

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const isAuthenticated = useVerifyToken();
  return isAuthenticated ? children : <Navigate to="/login" />;
};
