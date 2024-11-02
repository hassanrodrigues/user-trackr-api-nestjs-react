import {
  FormControl,
  FormHelperText,
  OutlinedInput,
  styled as styledMui,
} from "@mui/material";
import styled from "styled-components";

export const InputBase = styledMui(OutlinedInput)<any>(
  ({ theme, styled_theme, error }) => ({
    "& .MuiInputBase-input": {

      backgroundColor: "white",

      fontSize: styled_theme.font.size.large,
      fontFamily: styled_theme.font.family,

      transition: theme.transitions.create([
        "border-color",
        "background-color",
        "box-shadow",
      ]),

      "&:focus": {
        borderWidth: 1.5,
        borderColor: error
          ? styled_theme.color.error.main
          : styled_theme.color.primary.main,
      },

      "&:hover": {
        borderColor: error ? "#B00020" : styled_theme.color.neutral[5],
        backgroundColor: "#00000029",
        opacity: 0.4,
      },
      "& .MuiOutlinedInput-notchedOutline": {
        border: `1px solid ${
          error ? styled_theme.color.error.main : styled_theme.color.neutral[5]
        }`,
      },
    },
  })
);

export const InputControl = styled(FormControl)({
  "&&& .MuiInputBase-root:before": {
    border: "none",
  },
  "&&& .MuiInputBase-root .Mui-disabled": {
    background: "#F2F4FA 0% 0% no-repeat padding-box",
  },
});

export const HelperText = styledMui(FormHelperText)<any>(
  ({ styled_theme, error }) => ({
    color: error ? styled_theme.color.error.main : styled_theme.color.text.main,
    textAlign: "end",
    margin: "0px 0px 0px 3px",
    overflow: "hidden !important",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  })
);
