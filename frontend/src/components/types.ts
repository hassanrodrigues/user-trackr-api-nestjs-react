import { CSSProperties } from 'styled-components';

export interface IGlobalStyled extends CSSProperties {
  fullWidth?: boolean;
  auto?: boolean;
  wrap?: string;
  nowrap?: boolean;
  align?: string;
  justify?: string;
  direction?: CSSProperties['direction'] | any;
  overflow?: string;
  border_bottom?: boolean;
  gap?: string;
}
