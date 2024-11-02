import { CSSObject, Theme } from '@mui/material/styles';

export const openedMixin = (theme: Theme): CSSObject => ({
  width:"320px",
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen
  }),
  overflow: 'visible',
  backgroundColor: '#061121'
});

export const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen
  }),
  overflow: 'visible',
  width: "120px",
  backgroundColor: '#061121'
});

export const closedLogo = (): CSSObject => ({

  overflow: 'visible',
  width:36,
  backgroundColor: '#061121'
});

export const openedMixinLabel = (theme: Theme): CSSObject => ({
  opacity: 1,
  transition: theme.transitions.create('all', {
    easing: theme.transitions.easing.easeIn,
    duration: theme.transitions.duration.enteringScreen
  })
});

export const closedMixinLabel = (theme: Theme): CSSObject => ({
  opacity: 0,
  transition: theme.transitions.create('all', {
    easing: theme.transitions.easing.easeOut,
    duration: theme.transitions.duration.leavingScreen
  })
});
