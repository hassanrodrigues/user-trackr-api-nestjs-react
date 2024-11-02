import { DefaultTheme } from 'styled-components';
import tinycolor from 'tinycolor2';

export const primary = '#D1E7F7';
export const secondary = '#D1E7F7';
export const soft = '#F6F8FA';
export const warning = '#FF7700';
export const success = '#00C857';
export const error = '#FF4B4A';
export const info = '#2196F3';
export const text = '#464A53';
export const neutral = '#2d3745';
export const dark = '#000000';
export const light = '#FFFFFF';
export const scrollbar = '#6F7D7D';
export const lightRate = 6;
export const darkRate = 7;

const STYLED_THEME: DefaultTheme = {
  title: 'USER MANAGEMENT',

  font: {
    family: 'DM Sans, sans-serif',

    size: {
      mini: '10px',
      small: '12px',
      medium: '14px',
      large: '18px',
      grand: '22px',
      superGrand: '32px'
    }
  },

  shadow: [
    '3px 3px 5px rgba(0, 0, 0, 0.05)',
    '1px 1px 2px rgba(0, 0, 0, 0.1)',
    '0px 3px 6px #00000029',
    '0px 1px 2px #00000029',
    '20px 20px 80px #00000010;'
  ],

  color: {
    default: { light: '#ffffff', dark: '#292929' },
    disabled: '#0000000B',
    scrollbar: scrollbar,
    neutral: [
      tinycolor(neutral).lighten(0).toHex8String(),
      tinycolor(neutral).lighten(10).toHex8String(),
      tinycolor(neutral).lighten(20).toHex8String(),
      tinycolor(neutral).lighten(30).toHex8String(),
      tinycolor(neutral).lighten(40).toHex8String(),
      tinycolor(neutral).lighten(50).toHex8String(),
      tinycolor(neutral).lighten(60).toHex8String(),
      tinycolor(neutral).lighten(71).toHex8String(),
      tinycolor(neutral).lighten(74).toHex8String(),
      tinycolor(neutral).lighten(90).toHex8String(),
      tinycolor(neutral).lighten(100).toHex8String()
    ],

    primary: {
      main: primary,
      light: tinycolor(primary).lighten(lightRate).toHex8String(),
      dark: tinycolor(primary).darken(darkRate).toHex8String()
    },

    secondary: {
      main: secondary,
      light: tinycolor(secondary).lighten(lightRate).toHex8String(),
      dark: tinycolor(secondary).darken(darkRate).toHex8String()
    },

    info: {
      main: info,
      light: tinycolor(info).lighten(57).toHex8String(),
      dark: tinycolor(info).lighten(13).toHex8String()
    },

    warning: {
      main: warning,
      light: tinycolor(warning).lighten(50).toHex8String(),
      dark: tinycolor(warning).darken(35).toHex8String()
    },

    success: {
      main: success,
      light: tinycolor(success).lighten(40).toHex8String(),
      dark: tinycolor(success).darken(50).toHex8String()
    },

    error: {
      main: error,
      light: tinycolor(error).lighten(20).toHex8String(),
      dark: tinycolor(error).darken(35).toHex8String()
    },

    skeleton: {
      light: 'grey.700',
      dark: 'grey.500'
    },

    fade: {
      primary: tinycolor(primary).setAlpha(0.2).toHex8String(),
      secondary: tinycolor(secondary).setAlpha(0.2).toHex8String(),
      info: tinycolor(info).setAlpha(0.2).toHex8String(),
      success: tinycolor(success).setAlpha(0.2).toHex8String(),
      warning: tinycolor(warning).setAlpha(0.2).toHex8String(),
      error: tinycolor(error).setAlpha(0.2).toHex8String(),
      light: light,
      dark: tinycolor(dark).setAlpha(0.1).toHex8String(),
      transparent: tinycolor(light).setAlpha(0).toHex8String()
    },

    background: {
      fullWhite: '#FFFFFF',
      default: '#F4F4F4',
      overlay: 'rgba(71, 107, 184, 0)',
      soft: soft
    },

    text: {
      default: { light: '#ffffff', dark: '#000', h2: '#0B2B25' },
      main: text,
      light: tinycolor(text).lighten(30).toHex8String(),
      dark: tinycolor(text).darken(15).toHex8String()
    },

    border: '#54565F61',
    borderBottom: '#E0E0E0'
  },

  shape: {
    radius: { small: '4px', medium: '8px', large: '16px' },
    minium: '6px',
    small: '8px',
    medium: '16px',
    large: '24px',

    appbar: { height: '20px' },
    input: { height: '42px' },
    sidebar: {
      open: { width: '320px' },
      close: { width: '70px' }
    }
  },

  spacing: { small: '16px', medium: '32px', large: '48px', minium: '8px' },

  breakpoints: { tablet: '800px' }
};

export default STYLED_THEME;
