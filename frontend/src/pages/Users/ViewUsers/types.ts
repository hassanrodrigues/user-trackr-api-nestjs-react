import { Dispatch, SetStateAction } from "react";
import { ISelectedOptions } from "../../../types/users";

export interface IUsersAllProps {
  readonly isOpen?: boolean;
  readonly setIsOpen?: Dispatch<SetStateAction<boolean>>;
  readonly setKeyId?: Dispatch<SetStateAction<ISelectedOptions | null>>;
  readonly keyId?: number | undefined;
  readonly title?: string;
}
