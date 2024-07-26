import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { useUpdateUser } from './hooks/useUpdateUser';
import { Loader } from '../../../shared/ui/loader/Loader';
import { useUser } from 'pages/auth/ui/hooks';

import './UpdatePage.scss';

export const UpdatePage: FC = () => {
  const { user, isLoading: isLoadingUser } = useUser();

  const initialFormState = {
    email: user?.email,
    name: user?.name,
  };
  const [formState, setFormState] = useState(initialFormState);
  const { mutate, isLoading } = useUpdateUser();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate({
      name: formState.name,
      email: formState.email,
    });
  };

  if (isLoading || isLoadingUser) {
    return <Loader />;
  }
  return (
    <>
      <form className="updateUser" onSubmit={handleSubmit}>
        <h1 className="updateUser-title">Редактировать</h1>
        <input
          type="email"
          placeholder="Email"
          value={formState.email}
          onChange={(event) =>
            setFormState((prevState) => ({
              ...prevState,
              email: event.target.value,
            }))
          }
        />
        <input
          type="text"
          placeholder="Name"
          value={formState.name}
          onChange={(event) =>
            setFormState((prevState) => ({
              ...prevState,
              name: event.target.value,
            }))
          }
        />
        <button type="submit">Обновить</button>
        <Link to="/" className="updateUser-iconlink">
          На главную
        </Link>
      </form>
    </>
  );
};
