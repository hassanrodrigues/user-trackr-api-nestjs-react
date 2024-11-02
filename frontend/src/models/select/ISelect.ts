/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IUserSignIn {
  login: string;
  password: string;
}

export interface IShowUserSignIn {
  access_token?: string;
  refresh_token: string;
}

export interface ICreateUser {
  name: string;
  email: string;
  surname: string | null;
  profile_id: any;
}

export interface IShowUser {
  id?: number;
  name?: string;
  surname?: string;
  email?: string;
  active?: boolean;
  createdAt?: Date;
  updatedAt?: Date;

  profileManipulation?: string;
  createdAtManipulation?: string;
  updatedAtManipulation?: string;
  resendEmailFirstAccessValid?: boolean;
}

interface IPageable {
  pageNumber: number;
  pageSize: number;
}
export interface IResponseUser {
  items: IShowUser[];
  pageable?: IPageable;
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;
  currentPage: number;
}

export interface IRequestUserDataParams {
  search?: string | null;
  active?: number | null;
  page?: number | null;
  size?: number | null;
  type?: string | null;
}

export type IRequestTariffDataParams = Omit<
  IRequestUserDataParams,
  "active" | "type"
>;

export interface FieldConfig {
  [key: string]: {
    label: string;
    focusMessage: string;
    blurMessage: string;
  };
}
