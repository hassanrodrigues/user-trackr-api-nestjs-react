import {
  FormControl,
  FormControlProps,
  FormHelperText,
  InputLabel,
  TextField,
  styled as styledMui
} from '@mui/material';
import STYLED_THEME from '../../styles/theme';

interface IFormControlStyledProps extends FormControlProps {
  flex?: string;
  width?: string;
  label?: string;
  isSearch?: boolean;
  maxWidth?: string;
}

export const FormControlBase = styledMui(FormControl)<IFormControlStyledProps>(
  ({ flex, width, label, isSearch, maxWidth }) => ({
    display: 'flex',
    flexDirection: 'column',
    minWidth: '150px',
    maxWidth: maxWidth ? maxWidth : 'auto',
    marginTop: label && 16,
    borderRadius: STYLED_THEME.shape.radius.small,
    backgroundColor: isSearch
    ? STYLED_THEME.color.background.default
    : STYLED_THEME.color.background.fullWhite,
    ...(width ? { width: width || 'auto' } : { flex: flex ?? 'auto' }),
    
    '& .MuiFormControl-root': {
      boxShadow: 'none',
      borderBottomStyle: 'hidden',
    }
  })
);

export const InputBase = styledMui(TextField)<any>(
  ({
    theme,
    flex,
    width,
    icon,
    icon_position,
    multiline,
    isSearch
  }) => ({
    '& .MuiInputBase-root': {
      borderBottomStyle: 'hidden',
      color: STYLED_THEME.color.text.main,
      boxShadow: isSearch ? '0px 3px 6px #00000029' : 'none',
      height: '56px',
      backgroundColor: isSearch
        ? '#ffffff'
        : STYLED_THEME.color.background.fullWhite,
      borderRadius: STYLED_THEME.shape.radius.small,
      ...(icon === 'true' && {
        borderTopRightRadius: icon_position === 'end' && 0,
        borderBottomRightRadius: icon_position === 'end' && 0,
        borderTopLeftRadius: icon_position === 'start' && 0,
        borderBottomLeftRadius: icon_position === 'start' && 0,
        borderRight: icon_position === 'end' && 'none',
        borderLeft: icon_position === 'start' && 'none'
      }),
      ...(multiline && { border: 0 }),
      fontSize: 16,
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
        backgroundColor: "white"
      }
    },
    '&& .Mui-disabled': {
      backgroundColor: '#D9DDE5',
      borderBottom: 'none',
      borderBottomStyle: 'hidden',
      borderRadius: '4px 4px 0px 0px'
    },
    '&& .Mui-disabled:before': {
     
      borderBottom: 'none',
      borderBottomStyle: 'hidden',
    },
    '&& .Mui-disabled:after': {
     
      borderBottom: 'none',
      borderBottomStyle: 'hidden',
    },
    '&& .MuiOutlinedInput-notchedOutline': {
     
      borderBottomStyle: 'hidden',
    },
    '& .MuiInputBase-root::before': {
      borderBottom: 'none'
    },

    '&:hover .MuiInputBase-root:hover::before': {
      borderBottom: 'none',
      borderBottomStyle: 'hidden',
    },

    '& .MuiInputBase-input::placeholder': {
      color: '#0A453A',
      opacity: 1
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

export const HelperTextCharacters = styledMui(FormHelperText)<any>(() => ({
  color: '#0B2B25',
  textAlign: 'end',
  margin: '0',
  overflow: 'hidden !important',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  fontSize: `${STYLED_THEME.font.size.small}`,
  background: STYLED_THEME.color.default.light
}));

export const Label = styledMui(InputLabel)<any>(() => ({
  '&': { color: '#0B2B25' },
  '& .required': { color: STYLED_THEME.color.error.main },
  marginLeft: -11,
  marginTop: -10
}));
