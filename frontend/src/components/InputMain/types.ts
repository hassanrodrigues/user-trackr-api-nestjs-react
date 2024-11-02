import { FocusEvent } from "react";

import { OutlinedInputProps } from "@mui/material";

export interface IInputProps extends OutlinedInputProps {
  id?: string;
  name?: string;
  label?: any;
  value?: string | number;
  full_width?: boolean;
  onBlur?: (e: FocusEvent<any, Element>) => void;
  autoFocus?: boolean;
  type?: any;
  variant?: "filled" | "outlined" | "standard";
  multiline?: boolean;
  shrink?: boolean;
  flex?: number;
  error?: any;
  helpertext?: string | boolean | any;
  InputProps?: any;
  onKeyDown?: any;
  maxRows?: any;
  minRows?: any;
  placeholder?: any;
  required?: any;
  descriptionValidation?: string;
  borderColor?: string;
}
