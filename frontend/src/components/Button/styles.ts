/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@mui/material";
import { styled as styledMui } from "@mui/material";
import { color } from "framer-motion";

export const ButtonStyled = styledMui(Button)<any>(
  ({ flex, width, height, justify, disabled }) => ({
    "&&": {
      textWrap: "nowrap",
      display: "flex",
      justifyContent: justify ?? "center",
      alignItems: "center",
      padding: "9px 20px",
      borderRadius: 6,
      fontSize: "17px",
      fontFamily: "DM Sans, sans-serif",
      ...(width
        ? {
            width: width ?? "auto",
          }
        : {
            flex: flex ?? "auto",
          }),

      height: height ?? "56px",

      transition: "0.3s",
      boxShadow: "none",
      cursor: disabled ? "auto" : "pointer",
      backgroundColor: color,

      textTransform: "unset",
    },
  })
);
