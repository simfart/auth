import { Navigate } from 'react-router-dom';
import { FC } from 'react';
import { useToken } from 'pages/auth/ui/hooks/useToken';

type ProtectedRouteProps = {
  children: React.ReactElement;
};

export const ProtectedRoute: FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, isLoading } = useToken();

  if (isLoading) return null;

  return isAuthenticated ? children : <Navigate to="/login" />;
};
