import { FormControl, MenuItem, Select } from "@mui/material";
import styled from "styled-components";

interface SelectMUIProps {
    width?: string;
    color_mode?: boolean;
    theme?: any;
    value?: number;
    size?: string;
}

export const SelectMUI = styled(Select)<SelectMUIProps>(
    ({ width, color_mode, theme, value, size }) => ({
        "&&": {
            width: width ? width : "auto",
            border: "none",

            color: color_mode
                ? value === 1
                    ? theme.colors.success.main
                    : theme.colors.error.main
                : undefined,

            fontWeight: color_mode ? "bold" : undefined,
        },

        "&&& .MuiFilledInput-input": {
            paddingTop: size === "small" ? "10px" : undefined,
        },

        "&&& .MuiFilledInput-root:before": {
            border: "none",
        },
    })
);

interface InputControlProps {
    size?: string;
    no_padding_top?: string;
    flex?: string;
}

export const InputControl = styled(FormControl)<InputControlProps>(
    ({ size, no_padding_top, flex }) => ({
        "&&": {
            paddingTop:
                size === "small" && no_padding_top === "false" ? "10px" : "0px",
            flex: flex ? flex : "auto",
        },

        "&&& .MuiInputBase-root:before": {
            border: "none",
            flex: 1,
        },

        "&&& .MuiFormControl-root": {
            paddingTop: "0px",
            backgroundColor: "red",
        },
        "&&& .MuiInputBase-root .Mui-disabled": {
            background: "#F2F4FA 0% 0% no-repeat padding-box",
        },
    })
);

interface OptionProps {
    color_mode?: boolean;
    theme?: any;
    _value?: number;
}

export const Option = styled(MenuItem)<OptionProps>(
    ({ color_mode, theme, _value }) => ({
        "&&": {
            color: color_mode
                ? _value === 1
                    ? theme.colors.success.main
                    : _value === 2
                    ? theme.colors.error.main
                    : undefined
                : undefined,
        },
    })
);
