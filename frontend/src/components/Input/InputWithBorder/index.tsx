/* eslint-disable @typescript-eslint/no-explicit-any */
import { GLOBAL_TEXTS } from '../../configs';
import { FormControlBase, HelperText, InputBase } from './styles';
import { IInputProps } from './types';

import { IconButton, InputAdornment } from '@mui/material';

function InputBorder({ ...rest }: IInputProps) {
  function renderAdornment(position: 'end' | 'start', icon: any) {
    if (rest.hasIcon && position === 'end') {
      return (
        <InputAdornment position={position}>
          <IconButton onClick={rest.iconAction}>{icon}</IconButton>
        </InputAdornment>
      );
    } else {
      return (
        <InputAdornment position={position}>
          <IconButton >{icon}</IconButton>
        </InputAdornment>
      )
    }
  }
  const USER_SCAN_KEY_ID = GLOBAL_TEXTS.project_name + rest.id;

  return (
    <>
      <FormControlBase width={rest.width}>
        <InputBase
          id={USER_SCAN_KEY_ID}
          name={rest.name}
          type={rest.type ?? 'text'}
          value={rest.value}
          onKeyDown={rest.onKeyDown}
          error={rest.error}
          variant={'outlined'}
          label={rest.label}
          onChange={rest.onChange}
          InputProps={{
            endAdornment: renderAdornment('end', rest.icon),
            startAdornment: renderAdornment('start', rest.iconStart),
            placeholder: rest.placeholder
          }}

          sx={{
            'input::-ms-reveal': {
              display: 'none'
            },
            'input::-ms-clear': {
              display: 'none'
            }
          }}
        />

        {rest.error && (
          <HelperText error={rest.error}>{rest.helperText}</HelperText>
        )}
      </FormControlBase>
    </>
  );
}

export default InputBorder;
