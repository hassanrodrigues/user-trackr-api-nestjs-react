import { InputLabel, ThemeProvider } from "@mui/material";
import { InputControl, Option, SelectMUI } from "./styles";
import { MUI_DEFAULT_THEME } from "../../styles/muiTheme";
import { ISelectProps, OptionsProps } from "./types";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
    },
  },
};

function SelectMain({
  id,
  options,
  label,
  onChange,
  onBlur,
  value,
  fullwidth,
  width,
  flex,
  name,
  colorMode,
  data,
  shrink,
  size,
  readOnly,
  disabled,
  noPaddingTop,
  ...rest
}: ISelectProps) {

  const disableOptions = (option: OptionsProps, _value: string | number) => {
    let isSelected = false;

    data?.map((item: any) => {
      if (item.shiftweek === _value) {
        isSelected = true;
      }
    });
    return isSelected || option?.value === null || option?.value === 0;
  };

  return (
    <ThemeProvider theme={MUI_DEFAULT_THEME}>
      <InputControl
        fullWidth={fullwidth}
        flex={flex}
        size={size}
        no_padding_top={noPaddingTop?.toString()}
      >
        <InputLabel id={id} shrink={shrink}>
          {label}
        </InputLabel>

        <SelectMUI
          name={name}
          readOnly={readOnly}
          id={id}
          displayEmpty
          label={label}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          width={width}
          color_mode={colorMode}
          disabled={disabled}
          size={size}
          {...rest}
          MenuProps={MenuProps}
        >
          {options?.map((option: OptionsProps) => (
            <Option
              key={option?.value}
              value={option?.value}
              _value={option?.value}
              color_mode={colorMode}
              disabled={disableOptions(option, option.value)}
            >
              {option?.name}
            </Option>
          ))}
        </SelectMUI>
      </InputControl>
    </ThemeProvider>
  );
}
export default SelectMain;
