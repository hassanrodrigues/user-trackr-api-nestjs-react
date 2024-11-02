/* eslint-disable @typescript-eslint/no-explicit-any */
import { DrawerProps } from '@mui/material';

export interface ISidebarProps {
  open: boolean;
  handleVisibility: () => void;
  menuItems?: any;
  openSidebarDiagram?: boolean;
  handleVisibilitySidebarDiagram?: () => void;
}

export interface IDrawerProps extends DrawerProps {
  styled_theme: any;
}

export interface IDrawerHeaderProps {
  styled_theme: any;
}
