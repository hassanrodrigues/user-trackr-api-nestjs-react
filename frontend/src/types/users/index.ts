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
