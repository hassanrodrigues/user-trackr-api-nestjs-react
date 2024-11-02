import { FormikProps } from "formik";

export interface IUserRegister {
  user_name: string;
  user_surname: string;
  user_email: string;
  profile: string;
}

export interface ISelectedOptions {
  id: number;
  value: string;
}

export interface IUserRegisterController {
  userFormik: FormikProps<IUserRegister>;
  createNewUser: (e?: React.MouseEvent) => void;
  goToUserList: (e?: React.MouseEvent) => void;
  nameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  surnameChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  emailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  profileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
}

export interface IUserEditController {
  userEditFormik: FormikProps<IUserRegister>;
  editUser: (e?: React.MouseEvent) => void;
  nameEditChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  surnameEditChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  emailEditChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  profileEditChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isLoading: boolean;
  openModalEdit: (e?: React.MouseEvent) => void;
  closeModalEdit: (e?: React.MouseEvent) => void;
  OutEdit: (e?: React.MouseEvent) => void;
  openCancelEdit: boolean;
}

export interface IUserEdit {
  user_id?: number;
  user_name: string;
  user_surname: string;
  user_email: string;
  profile: string;
}

export interface IUsersTableRow {
  id?: number | string;
  user_name?: string;
  user_surname?: string;
  user_email?: string;
  user_profile?: string;
  created_at?: string;
  updated_at?: string;
}
export type IdUser = {
  id: number;
};
export interface IStatus {
  name?: string;
  value?: string;
}
