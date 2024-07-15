import { FC } from 'react';
import { useUser } from 'pages/auth/ui/hooks/useUser';

export const Header: FC = () => {
  const { user } = useUser();

  return <nav className="navbar navbar-light"></nav>;
};
