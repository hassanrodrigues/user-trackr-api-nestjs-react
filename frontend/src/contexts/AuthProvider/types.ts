

 
import { Dispatch, SetStateAction } from 'react';
export interface IAuthProvider {
    children: JSX.Element;
  }
  export interface ILoginCredentials {
    username: string;
    password: string;
  }
  export interface IForgetPassword {
    email: string;  
  }
  export interface IFirstAcess {
    new_password: string;
    confirmation_password: string;
  }
  export interface IResetPass {
    password: string;
    confirmPassword: string;
  }
  export interface IUser {
    name: string;
    profile?: string;
    access_token: string;
    first_access: string;
    refresh_token: string;
  }
  export interface IAuthContext {
    transactions?: number[];
    login?: string | null;
    profile?: string | null;
    name?: string | null;
    Logout?: (boolean: boolean) => void;
    setVisivleModalLogout: (boolean: boolean) => void;
    handleLogin: (identifier: string, password: string) => void;
    visibleModalLogout?: boolean;
    errorLogin: string | undefined;
    setErrorLogin: (value: string | undefined) => void;
    isAuthenticated: () => boolean;
    authenticated: boolean;
    setAuthenticated: Dispatch<SetStateAction<boolean>>;
  }

  export interface IJwtPayload {
    sub: number;
    name: string;
    login: string;
    profile: string[];
    iat: number;
    exp: number;
  }
  