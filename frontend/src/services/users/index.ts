import { AxiosResponse } from "axios";
import api from "../api";

export async function getUserById(id: number | string): Promise<AxiosResponse> {
  return await api.get(`/user/${id}`);
}

export async function getUserEditId(id: string): Promise<AxiosResponse> {
  return await api.get(`/user/${id}`);
}

export default {
  userRegister: async (data: any) => {
    return await api.post("/user", data);
  },

  userIdEdit: async (id: number | string, data: any) => {
    return await api.patch(`/user/${id}`, data);
  },

  userIdStatus: async (id: number | string) => {
    return await api.patch(`/user/change-status/${id}`);
  },
};
