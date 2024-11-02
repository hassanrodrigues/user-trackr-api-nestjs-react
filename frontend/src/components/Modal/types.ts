import { CSSProperties } from "styled-components";

export interface IModalProps {
  isOpen: boolean;
  title?: string;
  description?: string;
  strong?: boolean;
  actions?: any;
  children?: React.ReactNode;
  width?: string;
  height?: string;
  onClose?: () => void;
  closeIcon?: any;
  closeModal?: any;
  enableScroll?: boolean;
  justifyTitle?: string;
  justifyActions?: string;
  padding?: string;
  secondWidth?: string;
}

export interface IModalStyled extends CSSProperties {
  scroll?: boolean;
  justify?: string;
  secondWidth?: string;
}
