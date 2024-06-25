import axios from "axios";
const APP_ID = "1888D58B-90FC-489F-8002-A10CF38E8293";
const API_KEY = "CF077EE2-514A-479F-B602-84BD78EE8FBB";
//api.backendless.com/<application-id>/<api-key>/<operation-specific-path>
const API_BASE_URL = "https://keywire-us.backendless.app/api";
// const API_BASE_URL = `https://api.backendless.com/${APP_ID}/${API_KEY}/`;

const API_HEADER = {
  "Content-Type": "application/json",
};

export const authApi = axios.create({
  baseURL: API_BASE_URL,
  // timeout: INSTANCE_TIMEOUT,
  headers: API_HEADER,
});

authApi.interceptors.request.use(async (config) => {
  const accessToken = await localStorage.getItem("user-auth-cookie");

  if (config.headers && accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});
