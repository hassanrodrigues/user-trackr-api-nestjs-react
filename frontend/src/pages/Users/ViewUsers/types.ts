import { Dispatch, SetStateAction } from "react";
import { ISelectedOptions } from "../../../types/users";

export interface IUsersAllProps {
  isOpen?: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  setKeyId?: Dispatch<SetStateAction<ISelectedOptions | null>>;
  keyId?: number | undefined;
  title?: string;
}
