/* eslint-disable @typescript-eslint/no-explicit-any */
const APP_BASE_URL = import.meta.env.VITE_API_BASE_URL;
import axios, {
   AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";
import { IUser } from "../contexts/AuthProvider/types";
import { getLocalStorage, setLocalStorage } from "../utils/local-storage.utils";
import { refreshToken } from "../contexts/AuthProvider/AuthService";


const api = axios.create({
  baseURL: APP_BASE_URL,
});

api.interceptors.request.use((request: InternalAxiosRequestConfig) => {
  const user = getLocalStorage<IUser>("user");
  const language = getLocalStorage<string>("language");

  request.headers["Accept-Language"] = language ?? "pt-BR";

  if (user) {
    const defaultToken =
      request.headers.Authorization ?? `Bearer ${user?.access_token}`;
    request.headers["Authorization"] = defaultToken;
  }

  return request;
});

let refreshTokenAttempts = 0;
const maxRefreshTokenAttempts = 3;
api.interceptors.response.use(
  async (response: AxiosResponse) => response,
  async (error: any) => {
    const pathsToExclude = ["auth/login", "auth/first_access"];
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !pathsToExclude.includes(error.config?.url || "") &&
      !originalRequest?._retry &&
      refreshTokenAttempts < maxRefreshTokenAttempts
    ) {
      originalRequest._retry = true;
      refreshTokenAttempts++;

      const user = getLocalStorage<IUser>("user");

      if (user) {
        return await refreshToken(user.refresh_token)
          .then((response) => {
            user.access_token = response.data.access_token;
            user.refresh_token = response.data.refresh_token;
            setLocalStorage("user", user);
            originalRequest.headers[
              "Authorization"
            ] = `Bearer ${user.access_token}`;
            return api(originalRequest);
          })
          .catch(() => {
            window.location.href = "/";
            localStorage.clear();
          });
      } else {
        localStorage.clear();
        window.location.href = "/";
      }
    } else {
      if (error.response?.status === 401) {
        window.location.href = "/";
        localStorage.clear();
      }
    }
    return Promise.reject(error);
  }
);
export default api;
