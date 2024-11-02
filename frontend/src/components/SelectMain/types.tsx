export type ISelectProps = {
  id: string;
  options: any;
  label: string;
  onChange?: (event: any) => void;
  onBlur?: (event: any) => void;
  value?: any;
  fullwidth?: boolean;
  width?: string;
  flex?: any;
  colorMode?: boolean;
  data?: any;
  shrink?: boolean;
  size?: "small" | "medium";
  variant?: "standard" | "outlined" | "filled";
  readOnly?: boolean;
  disabled?: boolean;
  noPaddingTop?: boolean;
  name: string;
};

export interface OptionsProps {
  name: string;
  value: number;
}
