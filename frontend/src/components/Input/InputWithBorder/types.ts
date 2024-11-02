/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChangeEvent, ElementType, FocusEvent } from 'react';

import { FilledInputProps } from '@mui/material';

export interface IInputProps extends FilledInputProps {
  id: string;
  name: string;
  label?: string;
  labelInfo?: string;
  value: string | number | null;
  width?: string;
  onBlur?: (e: FocusEvent<any, Element>) => void;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
  type?: string;
  variant?: 'standard' | 'filled' | 'outlined';
  multiline?: boolean;
  flex?: number;
  error?: boolean;
  helperText?: string;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  maxRows?: number;
  minRows?: number;
  placeholder?: string;
  required?: boolean;
  icon?: ElementType | any;
  iconAction?: () => void;
  iconPosition?: 'end' | 'start';
  maxChar?: number;
  minChar?: number;
  readOnly?: boolean;
  hasIcon?: boolean;
  iconStart?:any;
}
