import { createTheme } from '@mui/material';

import theme from '../theme';

export const MUI_DEFAULT_THEME = createTheme({
  typography: { fontFamily: theme.font.family },

  palette: {
    primary: {
      main: theme.color.primary.main,
      contrastText: '#FFFFFF'
    },

    secondary: {
      main: theme.color.secondary.main,
      contrastText: '#FFFFFF'
    },

    warning: {
      main: theme.color.warning.main
    },

    error: {
      main: theme.color.error.main
    },

    success: {
      main: theme.color.success.main
    },

    info: {
      main: theme.color.info.main
    },

    text: {
      primary: theme.color.text.main
    },

    background: {
      default: theme.color.background.default
    },

    contrastThreshold: 3,
    tonalOffset: 0.2
  }
});
