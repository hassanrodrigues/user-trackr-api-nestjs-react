/* eslint-disable @typescript-eslint/no-explicit-any */
import { ButtonProps } from "@mui/material";
import { ButtonStyled } from "./styles";

interface IButton extends ButtonProps {
  iconPosition?: string;
  icon?: any;
  flex?: any;
  isFetching?: boolean;
  width?: string;
  justify?: string;
  height?: string;
  gap?: string;
  uppercase?: boolean;
  iconColor?: string;
  isOpen?: boolean;
}

export default function Button({
  icon,
  flex,
  variant,
  onClick,
  isFetching,
  value,
  width,
  justify,
  height,
  gap,
  uppercase,
  disabled,
  startIcon,
  type = "button",
  isOpen,
  sx,
  endIcon,
  ...rest
}: IButton) {
  return (
    <ButtonStyled
      loading={isFetching}
      type={type}
      onClick={onClick}
      width={width}
      is_open={isOpen?.toString()}
      gap={gap}
      height={height}
      justify={justify}
      flex={flex}
      uppercase={uppercase}
      variant={variant ?? "contained"}
      endIcon={endIcon}
      startIcon={startIcon}
      disabled={disabled}
      sx={sx}
      {...rest}
    >
      <div style={{ display: "flex", gap: "10px" }}>
        {icon}
        {value}
      </div>
    </ButtonStyled>
  );
}
