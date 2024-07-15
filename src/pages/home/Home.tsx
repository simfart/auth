import { useUser } from 'pages/auth/ui/hooks/useUser';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import { getUserFn } from 'shared/api/auth/authApi';
import { Header } from 'shared/ui';

export const HomePage: FC = () => {
  const { user } = useUser();
  getUserFn();
  return (
    <div className="home-page">
      <Header />
      <Link to="/login">Login</Link>
      <div>{user?.name}</div>
      <div>{user?.email}</div>
    </div>
  );
};
