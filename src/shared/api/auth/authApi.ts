import axios from "axios";
// const APP_ID = "1888D58B-90FC-489F-8002-A10CF38E8293";
// const API_KEY = "CF077EE2-514A-479F-B602-84BD78EE8FBB";
//api.backendless.com/<application-id>/<api-key>/<operation-specific-path>
const BASE_URL = "https://keywire-us.backendless.app/api/";
// const BASE_URL = `https://api.backendless.com/${APP_ID}/${API_KEY}/`;

const API_HEADER = {
  "Content-Type": "application/json",
  "user-token": `${localStorage.getItem("token")}`,
};

// export const authApi = axios.create({
//   baseURL: API_BASE_URL,
//   // timeout: INSTANCE_TIMEOUT,
//   headers: API_HEADER,
// });

// authApi.interceptors.request.use(async (config) => {
//   const accessToken = await localStorage.getItem("user-auth-cookie");

//   if (config.headers && accessToken) {
//     config.headers.Authorization = `Bearer ${accessToken}`;
//   }
//   return config;
// });

export const authApi = axios.create({
  baseURL: BASE_URL,
  // withCredentials: true,
  headers: API_HEADER,
});

// authApi.defaults.headers.common["Content-Type"] = "application/json";

import { GenericResponse, ILoginResponse, IUserResponse } from "./types";
import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";
import { useAccessToken, useTokenValid } from "pages/auth/ui/api/hooks/useAuth";

export const refreshAccessTokenFn = async () => {
  const response = await authApi.get<ILoginResponse>("auth/refresh");
  return response.data;
};

authApi.interceptors.response.use(
  (response) => {
    const token = localStorage.getItem("token");
    if (token) {
      response.headers.Authorization = token;
      // config.withCredentials = true;
    }
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    const errMessage = error.response.data.message as string;
    if (errMessage.includes("not logged in") && !originalRequest._retry) {
      originalRequest._retry = true;
      await refreshAccessTokenFn();
      return authApi(originalRequest);
    }
    return Promise.reject(error);
  }
);

export const signUpUserFn = async (user: {
  name: string;
  email: string;
  password: string;
}) => {
  const response = await authApi.post<GenericResponse>("/users/register", user);
  return response.data;
};

export const verifyTokenlFn = async (token: string | null) => {
  const response = await authApi.get(`/users/isvalidusertoken/${token}`);
  return response.data;
};

export const verifyTokenFn = async () => {
  const token = localStorage.getItem("token");
  const response = await authApi.get<GenericResponse>(
    `/users/isvalidusertoken/${token}`
  );
  return response.data;
};

export const loginUserFn = async (user: {
  login: string;
  password: string;
}) => {
  const response = await authApi.post<ILoginResponse>("/users/login", user);
  // const token = response.data["user-token"];

  // window.localStorage.setItem("token", token);

  return response.data;
};

//xxxx.backendless.app/api/users/isvalidusertoken/<userToken>

// const loginRequest = async ({ email, password }) => {
//   try {
//     const res = await api.post("/auth/login", { email, password });
//     console.log(res);
//     setToken(res.data.access_token);
//     userTokenStore.getState().setRole(res.data.role[0]); // Use getState to call setRole
//     setIsLoggedIn(true);
//   } catch (error) {
//     throw error;
//   }
// };

export const verifyEmailFn = async (verificationCode: string) => {
  const response = await authApi.get<GenericResponse>(
    `auth/verifyemail/${verificationCode}`
  );
  return response.data;
};

export const logoutUserFn = async () => {
  const response = await authApi.get<GenericResponse>("auth/logout");
  return response.data;
};

export const getUserFn = async () => {
  const ownerId = localStorage.getItem("ownerId");
  const response = await authApi.get<IUserResponse>(`data/Users/${ownerId}`);
  return response.data;
};

//111@11.qq
//1111
