import api from "../../services/api";
import { IFirstAcess, IForgetPassword, ILoginCredentials, IResetPass } from "./types";

export async function login(credentials: ILoginCredentials): Promise<any> {
  return await api.post("/auth/login", credentials);
}
export async function firstAcess(
  credentials: IFirstAcess,
  first_access: any
): Promise<any> {
  return await api.post("/auth/first_access", credentials, {
    headers: {
      Authorization: `Bearer ${first_access}`,
    },
  });
}
export async function resetPassword(
  credentials: IResetPass,
  first_access: any
): Promise<any> {
  return await api.post("/auth/reset_password", credentials, {
    headers: {
      Authorization: `Bearer ${first_access}`,
    },
  });
}
export async function forgetPassword(email: IForgetPassword): Promise<any> {
  return await api.post("/auth/forgot_password", email);
}

export async function logout(): Promise<any> {
  return await api.post("/auth/logout");
}

export async function refreshToken(refresh_token: string): Promise<any> {
  return await api.post(
    "/auth/refresh_token",
    {},
    {
      headers: {
        Authorization: `Bearer ${refresh_token}`,
      },
    }
  );
}
