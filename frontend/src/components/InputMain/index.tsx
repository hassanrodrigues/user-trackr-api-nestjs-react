import { useState } from "react";
import { IconButton, InputAdornment, InputLabel } from "@mui/material";
import { Eye as Visibility, EyeSlash as VisibilityOff } from "phosphor-react";
import { useTheme } from "styled-components";

import { HelperText, InputBase, InputControl } from "./styles";
import { IInputProps } from "./types";

function InputMain({
  id,
  name,
  label,
  value,
  type,
  variant,
  full_width,
  flex,
  error,
  helpertext,
  onKeyDown,
  multiline,
  maxRows,
  minRows,
  shrink,
  borderColor,
  ...rest
}: IInputProps) {
  const styledTheme = useTheme();
  const [showPassword, setShowPassword] = useState(false);

  const IS_PASSWORD = showPassword === true ? "text" : "password";

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const InputIcon = () => {
    return showPassword ? <Visibility /> : <VisibilityOff />;
  };

  const QWS_KEY_ID = "QWS-" + id;
  return (
    <InputControl variant={variant} fullWidth={full_width}>
      <InputLabel
        error={error}
        htmlFor="outlined-adornment-password"
        shrink={shrink}
      >
        {label}
      </InputLabel>
      <InputBase
        id={QWS_KEY_ID}
        name={name}
        type={type !== "password" ? type : IS_PASSWORD}
        value={value}
        flex={flex}
        label={label}
        onKeyDown={onKeyDown}
        multiline={multiline}
        minRows={minRows}
        maxRows={maxRows}
        inputProps={{
          autoComplete: "off",
        }}
        styled_theme={styledTheme}
        error={error}
        helpertext={error && helpertext}
        endAdornment={
          type === "password" && (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleShowPassword}
                edge="end"
              >
                <InputIcon />
              </IconButton>
            </InputAdornment>
          )
        }
        {...rest}
      />
      <HelperText styled_theme={styledTheme} error={error}>
        {helpertext}
      </HelperText>
    </InputControl>
  );
}

export default InputMain;
