import axios from 'axios';
import { GenericResponse, ILoginResponse, IUserResponse } from './types';

const BASE_URL = 'https://keywire-us.backendless.app/api';

const API_HEADER = {
  'Content-Type': 'application/json',
  'user-token': `${localStorage.getItem('token')}`,
};

export const authApi = axios.create({
  baseURL: BASE_URL,
  // headers: API_HEADER,
  // withCredentials: true,
});

authApi.interceptors.request.use(
  async (config) => {
    if (config.headers.isTokenNeed) {
      const token = localStorage.getItem('token');
      config.headers['user-token'] = `${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

export const registerUserFn = async (user: {
  name: string;
  email: string;
  password: string;
}) => {
  const response = await authApi.post<GenericResponse>('/users/register', user);
  return response.data;
};

export const verifyTokenFn = async () => {
  const token = localStorage.getItem('token');
  return await authApi
    .get<boolean>(`/users/isvalidusertoken/${token}`)
    .then((res) => res.data);
};

export const loginUserFn = async (user: {
  login: string;
  password: string;
}) => {
  const response = await authApi.post<ILoginResponse>('/users/login', user);
  return response.data;
};

export const verifyEmailFn = async (verificationCode: string) => {
  const response = await authApi.get<GenericResponse>(
    `/auth/verifyemail/${verificationCode}`,
  );
  return response.data;
};

export const logoutUserFn = async () => {
  const response = await authApi.get('/users/logout', {
    headers: {
      isTokenNeed: true,
    },
  });
  return response.data;
};

export const getUserFn = async () => {
  const ownerId = localStorage.getItem('ownerId');
  const response = await authApi.get<IUserResponse>(`/data/Users/${ownerId}`, {
    headers: {
      isTokenNeed: true,
    },
  });

  return response.data;
};

//111@12.qq
//1111
