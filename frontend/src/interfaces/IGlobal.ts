/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ILogin {
    identifier: string;
    password: string;
  }
  
  export interface IUser {
    user_id?: number;
    user_identifier: string;
    user_name: string;
    user_email: string;
    access_token?: boolean;
    refresh_token?: null | string;
    user_status?: boolean;
    profile?: IProfile;
    profile_name?: string;
  }


  
  export interface IUserTableRow {
    user_id?: number;
    user_name: string;
    status?: boolean;
    user_identifier: string;
    user_profile?: string;
  }
  
  export interface IADATAUser {
    user_identifier: string;
    user_name: string;
    user_email: string;
  }
  
  export interface IProfile {
    profile_id: number;
    profile_name: string;
    transactions: ITransaction[];
  }
  
  export interface ITransaction {
    transaction_id: number;
    transaction_name: string;
    transaction_number: number;
    transaction_status: boolean;
  }
  
  export interface IErrors {
    field: string;
    message: string;
  }
  
  export interface ModalProps {
    isModalActive?: boolean;
    closeModal: () => void;
    firstPassword?: string;
    keyId?: number | string;
  }
  
  export interface IRevenue {
    id: number;
    name: string;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
    partNumbers: IPartNumber[];
  }
  
  export interface IRevenueTableRow {
    revenue_id: number;
    revenue_name: string;
    status: boolean;
    revenue_created_at: string;
    revenue_updated_at: Date;
  }
  
  export interface IPartNumber {
    id: number;
    name: string;
    is_active: boolean;
    created_at: Date;
    updated_at: Date;
  }
  
  export interface DataListInterface {
    items?:any;
    meta?:any
  }