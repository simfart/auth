import { authApi } from "shared/api/auth/authApi";

export const register = async (payload: {
  email: string;
  password: string;
}) => {
  return await authApi
    .post<{ token: string }>(`/users/register`, payload)
    .then((res) => res.data);
};
