import { Dispatch, ReactNode, SetStateAction } from "react";

export interface DrawerViewProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  title: string;
  children: ReactNode;
  resetData: () => void;
}
