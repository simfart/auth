import { FC, useState } from 'react';
import { useUserStore } from 'shared/store';

import './UpdatePage.scss';
import { Link } from 'react-router-dom';
import { useUpdateUser } from './hooks/useUpdateUser';
import { Loader } from '../loader/Loader';
export const UpdatePage: FC = () => {
  const user = useUserStore().authUser;

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

  if (isLoading) {
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
