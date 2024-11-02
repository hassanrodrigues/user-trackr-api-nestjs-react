/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  FormControlBase,
  HelperText,
  HelperTextCharacters,
  InputBase,
} from "./styles";
import { IInputProps } from "./types";

import { InputAdornment } from "@mui/material";
import { GLOBAL_TEXTS } from "../configs";

function Input({
  name,
  label,
  value,
  type,
  variant,
  width,
  flex,
  error,
  onKeyDown,
  iconAction,
  onChange,
  onBlur,
  icon,
  iconPosition,
  id,
  readOnly,
  hasIcon,
  helperText,
  placeholder,
  isSearch = false,
  messageCharacters = " ",
  maxChar,
  maxWidth,
  ...rest
}: Readonly<IInputProps>) {
  function renderAdornment(position: "end" | "start", icon: any) {
    if (hasIcon && position === iconPosition) {
      return (
        <InputAdornment position={position}>
          {/* <IconButton onClick={iconAction}>{icon}</IconButton> */}
          {icon}
        </InputAdornment>
      );
    } else {
      return null;
    }
  }
  const USER_SCAN_KEY_ID = GLOBAL_TEXTS.project_name + id;

  return (
    <>
      <FormControlBase width={width} isSearch={isSearch} maxWidth={maxWidth}>
        <InputBase
          isSearch={isSearch}
          id={USER_SCAN_KEY_ID}
          name={name}
          type={type ?? "text"}
          value={value}
          flex={flex}
          onKeyDown={onKeyDown}
          error={error}
          variant={variant}
          label={label}
          readOnly={readOnly}
          onChange={onChange}
          onBlur={onBlur}
          InputProps={{
            endAdornment: renderAdornment("end", icon),
            startAdornment: renderAdornment("start", icon),
            placeholder: placeholder,
            inputProps: {
              maxLength: maxChar,
              max: maxChar,
            },
          }}
          sx={{
            "input::-ms-reveal": {
              display: "none",
            },
            "input::-ms-clear": {
              display: "none",
            },
          }}
          {...rest}
        />
        <div
          style={{
            display: error ? "flex" : "block",
            justifyContent: "space-between",
            marginTop: "20px",
            background: "#ffffff",
          }}
        >
          {error ? <HelperText error={error}>{helperText}</HelperText> : null}
          {!isSearch && (
            <HelperTextCharacters>{messageCharacters}</HelperTextCharacters>
          )}
        </div>
      </FormControlBase>
    </>
  );
}

export default Input;
