/* eslint-disable @typescript-eslint/no-explicit-any */
import { styled as styledMui } from '@mui/material';
import MuiDrawer, { DrawerProps } from '@mui/material/Drawer';
import styled from 'styled-components';
import tinycolor from 'tinycolor2';
import {
  closedMixin,
  closedMixinLabel,
  openedMixin,
  openedMixinLabel
} from './utils';

interface IDrawerProps extends DrawerProps {
  styled_theme: any;
}
export const Logotype = styledMui(
  'div',
  {}
)<any>(({ open }) => ({
  backgroundRepeat: 'no-repeat',
  backgroundSize: open ? '100%' : 'contain',
  backgroundImage: `url(${open ? `/logoSidebar.svg` : `/logo_closed.svg`})`,
  width: open ? '80%' : 'auto',
  height: open ? 86 : 'auto',
  padding: open ? '25px' : '16px',
  border: open ? 'none' : '1px solid #021B1A',
  position: open ? 'relative' : 'fixed',

  '@media (max-width: 800px)': {
    width: '47px',
    height: '51px'
  }
}));
export const LogoClose = styledMui(
  'div',
  {}
)<any>(() => ({
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'contain',
  backgroundImage: `url("/closeLogo.svg")`,
  width: 'auto',
  height: 'auto',
  padding: '16px',
  border: '1px solid #021B1A',
  position: 'fixed',

  '@media (max-width: 800px)': {
    width: '47px',
    height: '51px'
  }
}));
export const CloseLogo = styled.div<any>`
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${({ background }) => background});
  width: auto;
  height: auto;
  padding: 16px;
  border: 1px solid #021b1a;
  position: fixed;

  @media (max-width: 800px) {
    width: 47px;
    height: 51px;
  }
`;
export const ItemLabel = styledMui('span')<any>(({ theme, open }) => ({
  ...(open && {
    ...openedMixinLabel(theme),
    '&': openedMixinLabel(theme)
  }),
  ...(!open && {
    ...closedMixinLabel(theme),
    '&': closedMixinLabel(theme)
  })
}));

export const DrawerHeader = styledMui('div')<any>(({ open }) => ({
  border: '1px solid #021B1A',
  padding: open ? '0px 10px 0px 16px' : '0px 0 0px 18px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: 30,
  marginBottom: 10

}));
export const DrawerBottom = styledMui('div')<any>(({ open }) => ({
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: open ? 'flex-start' : 'center',
  flexDirection: 'column',
  gap: 3,
  padding: open ? '15px 38px' : '12px',
  flexShrink: 0,
  boxSizing: 'border-box',
  width: 'auto',
  '@media (max-width: 600px)': {
    ...(open && {
      width: '10%',
      padding: '0px 10px 0px 12px'
    })
  },
  '@media (min-width: 600px) and (max-width: 960px)': {
    ...(open && {
      width: '14%',
      padding: '0px 10px 0px 12px'
    })
  },
  position: 'relative'
}));
export const TextBottomTitle = styled.div<any>`
  font-size: 18px;
  color: #ffffff;
  font-weight: bold;
  display: ${({ open }) => (open ? 'block' : 'none')};
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const SubTitleBottom = styled.div<any>`
  font-size: 12px;
  color: #aacbc4;
  font-weight: normal;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: ${({ open }) => (open ? 'block' : 'none')};

  &.version {
    display: block;
  }
`;

export const Drawer = styledMui(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open'
})<IDrawerProps>(({ theme, open }) => ({
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  overflowX: 'visible',
  backgroundColor: 'red',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
    overflowX: 'visible'
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
    overflowX: 'visible'
  }),
  '@media (max-width: 600px)': {
    ...(open && {
      width: '0px',
      '& .MuiDrawer-paper': {
        width: '66px'
      }
    }),
    ...(!open && {
      width: '20px',
      '& .MuiDrawer-paper': {
        width: '66px'
      }
    })
  },
  '@media (min-width: 600px) and (max-width: 960px)': {
    ...(open && {
      width: '30%',
      '& .MuiDrawer-paper': {
        width: '120px'
      }
    }),
    ...(!open && {
      width: '30%',
      '& .MuiDrawer-paper': {
        width: '66px'
      }
    })
  },
  '@media (min-width: 960px)': {
    ...(open && {
      width: '30%',
      '& .MuiDrawer-paper': {
        width: '30%'
      }
    }),
    ...(!open && {
      width: '30%',
      '& .MuiDrawer-paper': {
        width: '66px'
      }
    })
  },
  '@media (min-width: 1080px)': {
    ...(open && {
      width: '320px',
      '& .MuiDrawer-paper': {
        width: '320px'
      }
    }),
    ...(!open && {
      width: '320x',
      '& .MuiDrawer-paper': {
        width: '66px'
      }
    })
  }
}));

export const Stack = styled.ul<any>`
  display: flex;
  flex-direction: column;
  gap: 5px;

`;

export const Navigator = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  gap: 20px;
  overflow-x: hidden;

  height: 100%;

  box-sizing: border-box;
  ::-webkit-scrollbar {
    width: 12px;
  }
  ::-webkit-scrollbar-track {
    background-color: ${({ theme }) =>
      tinycolor(theme.color.background.soft).darken(6).toHex8String()};
    border-radius: 0px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.color.fade.primary};

    border-radius: ${({ theme }) =>
      `${theme.shape.radius.small} 0px  0px ${theme.shape.radius.small}`};
  }
`;

export const CardVersion = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 29px;
  position: absolute;
  bottom: 29px;
  gap: 4px;
`;

export const Item = styled.small`
  color: #dddddd;
`;
export const Title = styled.p`
  color: #ffffff;
  font-weight: bold;
`;
