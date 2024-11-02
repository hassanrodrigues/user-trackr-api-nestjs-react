/* eslint-disable @typescript-eslint/no-explicit-any */
import { NavLink } from 'react-router-dom';
import { styled as styledMui } from '@mui/material';
import styled from 'styled-components';

import {
  closedMixinGroupLabel,
  closedMixinItemLabel,
  closedMixinMenuItem,
  openedMixinGroupLabel,
  openedMixinItemLabel,
  openedMixinMenuItem
} from './utils';

export const ItemLabel = styled.span<any>(({ theme, active }) => ({
  color: active ? '#021B1A' : theme.color.default.light,

  fontWeight: active ? 'bold' : 500,
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  fontSize: '16px',
  '@media (max-width: 950px)': {
    display: 'none'
  },
  '&:hover': {
    color: '#FFFFFF'
  }
}));

export const Link = styledMui(NavLink)<any>(
  ({ theme, styled_theme, open, active }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: open ? 'auto' : 'center',
    position: 'relative',
    height: '48px',
    borderRadius: styled_theme.shape.radius.small,
    gap: !open ? '0px' : '15px',
    margin: '0px 10px',
    backgroundColor: active ? '#D1E7F7' : '',
    fontSize: '16px',
 
    textDecoration: 'none',
    cursor: 'pointer',

    '::before': {
      content: "''",
      position: open ? 'static' : 'absolute',
      left: open ? 'static' : '0px',
      height: '24px',
      width: '5px',
      borderRadius: '0px 3px 3px 0px'
    },

    '&:hover': {
      background: '#3B6D9A',
      '.itemLabel': {
        color: '#FFFFFF'
      },
      svg: {
        color: '#FFFFFF'
      }
    },
    svg: {
      color: active ? '#021B1A' : '#FFFFFF',
      minWidth: 24
    },

    [`${ItemLabel}`]: {
      ...(open && {
        ...openedMixinItemLabel(theme),
        '&': openedMixinItemLabel(theme)
      }),

      ...(!open && {
        ...closedMixinItemLabel(theme),
        '&': closedMixinItemLabel(theme)
      })
    },

    ...(open && {
      ...openedMixinMenuItem(theme),
      '&': openedMixinMenuItem(theme)
    }),

    ...(!open && {
      ...closedMixinMenuItem(theme),
      '&': closedMixinMenuItem(theme)
    })
  })
);
export const SubLink = styledMui(NavLink)<any>(
  ({ theme, styled_theme, open, active }) => ({
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: open ? 'auto' : 'center',
    position: 'relative',
    height: '48px',
    borderRadius: styled_theme.shape.radius.small,
    gap: !open ? '0px' : '15px',
    color: styled_theme.color.text.light,
    margin: '5px 17%',
    backgroundColor: active ? '#00E081' : '',
    ...(open
      ? {
          width: `calc(275px - 20px)`
        }
      : {
          width: `calc(${styled_theme.shape.sidebar.close.width} - 20px)`
        }),

    textDecoration: 'none',
    cursor: 'pointer',

    '::before': {
      content: "''",
      position: open ? 'static' : 'absolute',
      left: open ? 'static' : '0px',
      height: '24px',
      width: '5px',
      borderRadius: '0px 3px 3px 0px'
    },

    '&:hover': {
      background: '#024C34',
      '.itemLabel': {
        color: '#FFFFFF'
      },
      svg: {
        color: '#FFFFFF'
      }
    },

    svg: {
      color: active ? '#021B1A' : '#FFFFFF',
      minWidth: 24
    },
    ul: {
      listStylePosition: 'outside',
      listStyle: 'disc',
      color: active ? '#0B2B25' : '#FFFFFF'
    },

    ...(open && {
      ...openedMixinMenuItem(theme),
      '&': openedMixinMenuItem(theme)
    }),

    ...(!open && {
      ...closedMixinMenuItem(theme),
      '&': closedMixinMenuItem(theme)
    })
  })
);
export const SubLinkTooltip = styledMui(NavLink)<any>(
  ({ styled_theme, open, active }) => ({
    fontSize: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: open ? 'auto' : 'center',
    position: 'relative',
    height: '48px',
    borderRadius: styled_theme.shape.radius.small,
    gap: !open ? '0px' : '15px',
    color: styled_theme.color.text.light,

    backgroundColor: active ? '#00E081' : '',
    textDecoration: 'none',
    cursor: 'pointer',

    '::before': {
      content: "''",
      position: open ? 'static' : 'absolute',
      left: open ? 'static' : '0px',
      height: '24px',
      width: '5px',
      borderRadius: '0px 3px 3px 0px'
    },

    '&:hover': {
      background: '#024C34',
      '.itemLabel': {
        color: '#FFFFFF'
      },
      svg: {
        color: '#FFFFFF'
      }
    },

    svg: {
      color: active ? '#021B1A' : '#FFFFFF',
      minWidth: 24
    },
    ul: {
      listStylePosition: 'outside',
      listStyle: 'disc',
      color: active ? '#0B2B25' : '#FFFFFF'
    },
  })
);

export const GroupBox = styled.div<any>(() => ({
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap'
}));

export const GroupLabel = styledMui('h4')<any>(
  ({ theme, styled_theme, open }) => ({
    color: styled_theme.color.text.main,
    fontSize: styled_theme.font.size.small,

    ...(open && {
      ...openedMixinGroupLabel(theme),
      '&': openedMixinGroupLabel(theme)
    }),

    ...(!open && {
      ...closedMixinGroupLabel(theme),
      '&': closedMixinGroupLabel(theme)
    })
  })
);
