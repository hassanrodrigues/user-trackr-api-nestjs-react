/* eslint-disable @typescript-eslint/no-explicit-any */
import { CSSObject, Theme } from '@mui/material/styles';

export const openedMixin = (theme: Theme): CSSObject => ({
 width: "80%",
  transition: theme.transitions.create('all', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),

  left: '320px',

  overflowX: 'hidden',

  '@media (min-width: 300px) and (max-width: 600px)': {
    left: '80px',
    width: '85%'
  },
  '@media (min-width: 600px) and (max-width: 960px)': {
    left: '130px',
    width: '85%'
  },
  '@media (min-width: 960px) and (max-width: 1200px)': {
    left: '320px',
    width: '70%'
  },

  '@media (min-width: 1200px) and (max-width: 1300px)': {
    left: '329px',
    width: '73%'
  },
  '@media (min-width: 1300px) and (max-width: 1500px)': {
    left: '329px',
    width: '77%'
  },
  '@media (min-width: 1500px) and (max-width: 1700px)': {
    left: '329px',
    width: '78%'
  },

  '@media (min-width: 1700px) and (max-width:1920px)': {
    left: '340px',
    width: '80%'
  },
  '@media (min-width: 1920px)': {
    left: '340px',
    width: '82%'
  },

});

export const closedMixin = (theme: Theme, styled_theme: any): CSSObject => ({
  transition: theme.transitions.create('all', {
    easing: theme.transitions.easing.easeIn,
    duration: theme.transitions.duration.leavingScreen
  }),

  left: '76px',

  overflowX: 'hidden',
  width: `calc(100vw - ${styled_theme.shape.sidebar.close.width})`

});
