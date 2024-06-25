import Backendless from "backendless";

const APP_ID = "1888D58B-90FC-489F-8002-A10CF38E8293";
const API_KEY = "CF077EE2-514A-479F-B602-84BD78EE8FBB";
const API_DOMEIN = "keywire-us.backendless.app";

Backendless.initApp(APP_ID, API_KEY);

export const useBackendless = Backendless.UserService;

import axios from "axios";

export const api = axios.create({
  baseURL: API_DOMEIN,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("jwt");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      config.withCredentials = true;
    }
    return config;
  },
  (error) => Promise.reject(error)
);
