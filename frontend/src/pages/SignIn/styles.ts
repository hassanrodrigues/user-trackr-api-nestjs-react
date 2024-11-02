import styled from "styled-components";
import { IGlobalStyled } from "../../components/types";
import { setSpacing } from "../../utils/index";
import backgroundInitial from "../../assets/user_management.png";

const breakpoints = {
  xs: 0,
  sm: 300,
  md: 800,
  lg: 1024,
  xl: 1200,
};

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background: url(${backgroundInitial}) no-repeat;
  background-size: cover;
`;

export const Content = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Estilos para telas pequenas (entre 300 e 800) */
  @media (min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.md}px) {
    flex-direction: column;
    gap: 32px;
  }
`;
export const Title = styled.h1`
  font-size: 64px;
  color:  #1A3E5C;
  padding-bottom: 28px;
`;

export const LoginSide = styled.div`
  flex: 1;

  max-width: 668px;
  height: 100%;
  padding: 54px 40px;
  ${({ theme } ) => `
        border-radius: ${theme.shape.small};
        box-shadow: ${theme.shadow[2]};
        background-color: ${theme.color.default.light};
    `};

  @media (max-width: 1024px) and (min-width: 300px) {
    width: 100%;
  }

  @media (max-width: 400px) {
    padding: 20px;
  }
`;

export const Description = styled.p<IGlobalStyled>`
  font-size: 18px;
  color: #2a2a2a;
  font-weight: 600;
  line-height: 23.44px;
  white-space: nowrap;
  padding-bottom: 14px;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
`;

export const Row = styled.div<IGlobalStyled>`
  ${({ top, auto, gap, wrap }) => `
        display: flex;
        flex-wrap:${wrap ?? "auto"};
        flex-direction: row;
        
        margin-top: ${top ?? top};
        
        width: ${auto ? "auto" : "100%"};
        gap: ${setSpacing(gap ?? "medium")};
    `};
`;

export const CardLogo = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  @media (min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.md}px) {
    width: auto;
  }
`;

export const Logo = styled.img`
  max-width: 600px;
  width: 80%;

  @media (min-width: ${breakpoints.sm}px) and (max-width: ${breakpoints.md}px) {
    width: 250px;
  }
`;

export const Text = styled.p<IGlobalStyled>`
  ${({ theme, color, fontWeight }) => `
       font-weight: ${fontWeight ?? "bold"};
       font-size: 18px;
       margin: auto;
       color: ${color ?? theme.color.text.dark};

       &:hover {
        color: #054032;
        cursor: pointer;
      }
    `};
`;

export const CardBottom = styled.div<IGlobalStyled>`
  ${({ gap }) => `
    display: flex;
    margin: auto;
    gap:${setSpacing(gap ?? "small")} ;

`}
`;
