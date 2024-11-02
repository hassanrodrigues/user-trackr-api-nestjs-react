import { Dialog, styled as styledMui } from "@mui/material";
import styled from "styled-components";
import { IModalStyled } from "./types";

export const Overlay = styledMui(Dialog)({
  zIndex: 10000,
});

export const CardModal = styled.div<IModalStyled>`
  align-items: center;
  flex-direction: column;
  position: relative;
  border-radius: 4px;

  ${({ theme, width, height, scroll }) => `
        width: ${width ? width : "372px"};
        height: ${height ? height : "auto"};
     
        padding: ${theme.spacing.medium};
        border-radius: ${theme.shape.radius.medium};
        box-shadow: ${theme.shadow[1]};
        overflow-y: ${scroll ? "scroll" : "hidden"};
    `}

  @media (max-width: 1280px) {
    width: ${({ secondWidth }) => (secondWidth ? secondWidth : "100%")};
    height: auto;
  }

  @media (max-width: 800px) {
    width: 100%;
    height: auto;
  }
`;

export const Header = styled.div<any>`
  height: 41px;

  display: flex;
  justify-content: center;
  position: relative;

  .custom-icon {
    svg {
      background: none;
    }
  }

  svg {
    position: absolute;
    top: 30px;
    z-index: 6;
    color: #ffff;
    background: #fff;
    border-radius: 100%;
  }
`;

export const HeaderModal = styled.header<IModalStyled>`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${({ theme }) => `
        padding: ${theme.spacing.small},
        background-color: ${theme.color.primary.main},
        border-radius: ${theme.shape.radius.medium} 0px 0px;
    `}

  @media (max-width: 800px) {
    justify-content: center;
    button {
      width: 100%;
    }
  }
`;

export const TitleModal = styled.h2<IModalStyled>`
  ${({ theme, justify }) => `
    margin-bottom: ${theme.spacing.small};
        text-align: ${justify ? justify : "center"},
        font-size: ${theme.font.size.medium},
        color: ${theme.color.text.default.light};
    `}
  @media (max-width: 800px) {
    text-align: center;
  }
`;

export const DescriptionModal = styled.p<IModalStyled>`
  justify-content: center;
  align-items: center;
  ${({ theme, justify }) => `
    margin-bottom: ${theme.spacing.small};
        text-align: ${justify ? justify : "center"},
        font-size: ${theme.font.size.small},
        color: ${theme.color.text.default.light},
    `}
  @media (max-width: 800px) {
    text-align: center;
  }
`;

export const TextStrong = styled.p<IModalStyled>`
  display: contents;
  font-weight: bold;
`;

export const IconClose = styled.div<IModalStyled>`
  display: flex;
  /* override property */
  justify-content: flex-end !important;
  /* end override property */
  align-items: center;
  background: transparent;
  border: none;
  cursor: pointer;
`;

export const ContentModal = styled.main<IModalStyled>`
  display: flex;
  justify-content: left;
  flex-direction: column;
  ${({ theme, padding }) => `
        padding: ${padding ? padding : theme.spacing.large},
        gap: ${theme.spacing.small},
        height: 100%;
    `}
  @media (max-width: 800px) {
    flex-wrap: wrap;
  }
`;

export const ActionsModal = styled.footer<IModalStyled>`
  background: transparent;
  border: none;
  display: flex;
  gap: ${({ theme }) => theme.spacing.small};
  ${({ theme, justify }) => `
    margin-bottom: ${theme.spacing.small};
        justify-content: ${justify ? justify : "center"};
        gap: ${theme.spacing.small},
    `}
  width: 100%;

  @media (max-width: 800px) {
    flex-wrap: wrap;

    button {
      width: 100%;
    }
  }
`;
