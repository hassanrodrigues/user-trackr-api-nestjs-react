/* eslint-disable @typescript-eslint/no-explicit-any */
import { Divider, Menu } from '@mui/material';
import styled from 'styled-components';

function MenuNotification({ anchor, open, handleClose }: any) {
  const mock = [
    {
      title: 'Consumo elevado na linha Manaus',
      desc: '15min atrás'
    },
    {
      title: 'Eficiência do forno 1 aumentou',
      desc: 'Seg, 8 Janeiro | 16:47'
    },
    {
      title: 'Consumo elevado na linha Manaus',
      desc: 'Seg, 8 Janeiro | 16:47'
    }
  ];
  return (
    <Menu
      anchorEl={anchor}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          margin:0,
          width: 450,
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1
          },
          '&::before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0
          }
        }
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <Title>Notificações (2)</Title>
      <Divider />
      {mock.map((item: any) => (
        <>
          <MenuItem>
            <div className="itemTitle">{item.title}</div>
            <div className="itemDesc">{item.desc}</div>
          </MenuItem>
          <Divider />
        </>
      ))}
      <SeeAll>Ver Todas notificações</SeeAll>
    </Menu>
  );
}

export default MenuNotification;

export const Title = styled.div`
  color: #03624c;
  font-size: 18px;
  font-weight: bold;
  padding: 0px 16px 10px 16px;
`;
export const SeeAll = styled.div`
  color: #17876d;
  font-size: 16px;
  font-weight: bold;
  padding: 10px 16px 10px 16px;
`;
export const MenuItem = styled.div`
  padding: 12px 16px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  .itemTitle {
    color: #0b2b25;
    font-size: 16px;
    font-weight: bold;
    opacity: 80%;
  }
  .itemDesc {
    color: #090909;
    font-size: 13px;
    font-weight: 500;
    opacity: 70%;
  }
`;
