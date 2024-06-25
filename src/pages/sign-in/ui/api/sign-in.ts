import { authApi } from "shared/api/auth/authApi";

export const signIn = async (payload: { email: string; password: string }) => {
  return await authApi
    .post<{ token: string }>(`/users/login`, payload)
    .then((res) => res.data);
};
