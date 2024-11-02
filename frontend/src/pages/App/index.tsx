
import { Outlet } from 'react-router-dom';

import { useState } from 'react';
import { Content, MainContainer, NavStyled, OutletContainer } from './styles';
import { useTheme } from 'styled-components';
import { Box } from '@mui/material';
import Sidebar from '../../components/SideBar/SideBar';
import TopActions from '../../components/TopActions';

export interface IAppProps {
  isHiddenSidebar?: boolean;
}

export default function App() {

  const [open, setOpen] = useState(true);

  const handleVisibility = () => {
    setOpen((prev) => !prev);
  };

  const styledTheme = useTheme();

  return (
    <div>
      <Sidebar
        open={open}
        handleVisibility={handleVisibility}

      />
      {/* )} */}
      <MainContainer>
        <NavStyled>
          <Box>
            <TopActions />
          </Box>
        </NavStyled>
        <Content open={open} styled_theme={styledTheme}>
          <OutletContainer>
            <Outlet />
          </OutletContainer>
        </Content>
      </MainContainer>
    </div>
  );
}
