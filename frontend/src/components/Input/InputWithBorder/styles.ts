/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  FormControl,
  FormControlProps,
  FormHelperText,
  InputLabel,
  TextField,
  Theme,
  styled as styledMui
} from '@mui/material';
import STYLED_THEME from '../../../styles/theme';

interface IFormControlStyledProps extends FormControlProps {
  flex?: string;
  width?: string;
  label?: string;
}

interface ITextFieldStyledProps {
  theme?: Theme;
  error?: boolean;
  flex?: string | number;
  width?: string | number;
  icon?: any;
  icon_position?: string;
  multiline?: boolean;
  readOnly?: boolean;
}

export const FormControlBase = styledMui(FormControl)<IFormControlStyledProps>(
  ({ flex, width, label }) => ({
    display: 'flex',
    flexDirection: 'column',
    minWidth: '150px',
    marginTop: label && 16,
    borderRadius: STYLED_THEME.shape.radius.small,
    backgroundColor: STYLED_THEME.color.background.default,
    ...(width ? { width: width || 'auto' } : { flex: flex ?? 'auto' }),

    '& .MuiFormControl-root': {
      boxShadow: 'none'
    }
  })
);

export const InputBase = styledMui(TextField)<ITextFieldStyledProps>(
  ({
    theme,
    error,
    flex,
    width,
    icon,
    multiline,
    readOnly
  }) => ({
    '& .MuiInputBase-root': {
      borderBottom: error ? '0px solid' : '',
      color: STYLED_THEME.color.text.main,
      backgroundColor: '#ffffff',
      borderRadius: STYLED_THEME.shape.radius.small,
      ...(icon === 'true' && {
    
      }),
      ...(multiline && { border: 0 }),
      fontSize: STYLED_THEME.font.size.large,
      fontFamily: STYLED_THEME.font.family,
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow'
      ]),
      ...(width ? { width: width || 'auto' } : { flex: flex ?? 'auto' }),
      '&[type=number]::-webkit-inner-spin-button, &[type=number]::-webkit-outer-spin-button':
        { webkitAppearance: 'none', appearance: 'none', margin: 0 },
      '&:hover': {
        backgroundColor: STYLED_THEME.color.neutral[7]
      }
    },
    '&& .MuiOutlinedInput-notchedOutline': {
      ...(readOnly
        ? {
            border: `2px solid ${STYLED_THEME.color.primary.main}`
          }
        : {
            border: `2px solid ${error ? STYLED_THEME.color.error.main : null}`
          })
    },

    '&:hover .MuiInputBase-root::before': {
      borderBottom: '0px solid',
      borderColor: error ? theme.palette.error.main : 'rgba(0, 0, 0, 0.42)'
    },
    '& .MuiInputBase-root.Mui-focused::before': {
      borderBottom: 'none'
    },
    '& .MuiInputBase-root.Mui-focused': {
      borderBottom: 'none'
    },
    '& .MuiInputBase-root::before': {
      borderBottom: 'none'
    },

    '& .MuiInputBase-root.Mui-focused::after': {
      borderBottom: `2px solid ${theme.palette.primary.main}`
    },
    '& .MuiInputBase-root.Mui-error::before': {
      borderBottom: `2px solid ${theme.palette.error.main}`
    },
    '& .MuiInputBase-root.Mui-error:hover::before': {
      borderBottom: `2px solid ${theme.palette.error.main}`
    },
    '& .MuiInputBase-root.Mui-error.Mui-focused::after': {
      borderBottom: `2px solid ${theme.palette.error.main}`
    },
    '& .MuiInputBase-root:hover:not(.Mui-disabled, .Mui-error)::before': {
      borderBottom: 'none'
    }
  })
);

InputBase.defaultProps = {
  variant: 'filled'
};

export const HelperText = styledMui(FormHelperText)<any>(({ error }) => ({
  color: error ? STYLED_THEME.color.error.main : STYLED_THEME.color.text.main,
  textAlign: 'start',
  margin: '0',
  overflow: 'hidden !important',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  fontSize: `${STYLED_THEME.font.size.medium}`,
  background: STYLED_THEME.color.default.light
}));

export const Label = styledMui(InputLabel)<any>(() => ({
  '&': { color: '#0B2B25' },
  '& .required': { color: STYLED_THEME.color.error.main },
  
}));
