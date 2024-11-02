/* eslint-disable @typescript-eslint/no-explicit-any */
import { styled as styledMui } from "@mui/material";

import { closedMixin, openedMixin } from "./utils";
import styled from "styled-components";

export const Content = styledMui("div", {
    shouldForwardProp: (prop) => prop !== "open",
})<any>(({ theme, open, styled_theme }) => ({
    display: "flex",
    position: "relative",

    ...(open && {
        ...openedMixin(theme),
        "&": openedMixin(theme),
    }),

    ...(!open && {
        ...closedMixin(theme, styled_theme),
        "&": closedMixin(theme, styled_theme),
    }),
}));

export const MainContainer = styled.main`

  background-color: #F3F3F3;
  position: relative;
`;

export const OutletContainer = styled.section`
  height: calc(100% - 5rem);
  padding: 20px;
  width: 100%;
`;
export const NavStyled = styled.section({
  height: '4rem',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  alignContent: 'center',
  padding: ' 0 3% 0% 0',
  borderBottom: '2px solid #F8F8F8',
  width: '100%',
  backgroundColor: 'white',
  boxShadow: '0px 1px 4px #00000029',
   marginBottom:'2px'
});