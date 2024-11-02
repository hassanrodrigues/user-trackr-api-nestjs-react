import { css } from "@emotion/react";
import styled from "styled-components";
import { IGlobalStyled } from "../types";

interface ITypography {
  $fontColor?: string;
  $align?: string;
  $underline?: boolean;
  $bold?: boolean;
  $textIdent?: string;
  $noWrap?: boolean;
  $width?: string;
  $wordBreak?: boolean;
  $textWrap?: string;
}

interface IWrapper {
  $justify?: string;
  $maxWidth?: string;
}
interface IInfoBox {
  $scroll?: boolean;
  $height?: string;
}

export const Header3 = styled.h2<ITypography>`
  ${({ $fontColor }) => css`
    color: ${$fontColor ? $fontColor : "black"};
  `}
`;

export const DrawerBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  width: 100%;
  height: 100%;
  background-color: white;
`;

export const CloseBtn = styled.button`
  height: 2.3vh;
  width: 2.3vh;
  top: 3vh;
  left: 3vh;
  background-color: transparent;
  border: none;

  svg {
    color: black;
    height: 100%;
    width: 100%;

    &:hover {
      color: black;
    }
  }
`;

export const InfoBox = styled.div<IInfoBox>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  overflow-y: ${({ $scroll }) => ($scroll ? "scroll" : "hidden")};
  height: ${({ $height }) => ($height ? $height : "auto")};
`;

export const Wrapper = styled.div<IWrapper>`
  display: flex;
  width: 100%;
  max-width: ${({ $maxWidth }) => ($maxWidth ? `${$maxWidth}` : "auto")};
  height: 100%;
  flex-direction: column;
  justify-content: ${({ $justify }) => ($justify ? `${$justify}` : "center")};
  align-items: center;
`;

export const SubTitleDrawerBox = styled.span<IGlobalStyled>`
  ${({ theme }) => `
        font-size: ${theme.font.size.medium};
        color: #061121;
        margin-top: 20px;
        margin-bottom: 25px;
        text-align: center;
        white-space: nowrap;
    `};
`;

export const Body1 = styled.p<ITypography>`
  ${({ theme }) => css`
    font-size: ${theme.font.size.medium};
    color: #061121;
    margin-bottom: 8px;
    text-align: start;
    width: auto;
  `}
`;

export const Body2 = styled.p<ITypography>`
  ${({ theme }) => css`
    font-size: ${theme.font.size.medium};
    color: #061121;
    margin-bottom: 45px;
    text-align: start;
    width: auto;
    font-weight: bold;
  `}
`;

export const ButtonClose = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  width: 100%;
  height: 100%;
`;

export const TitleModalCancel = styled.p<ITypography>`
  ${({ theme }) => css`
    font-size: ${theme.font.size.medium};
    color: #061121;
    margin-bottom: 22px;
    text-align: center;
    width: auto;
    font-weight: bold;
  `}
`;

export const SubTitleModalCancel = styled.p<ITypography>`
  ${({ theme }) => css`
    font-size: ${theme.font.size.medium};
    color: #061121;
    margin-bottom: 22px;
    text-align: center;
    width: auto;
    font-weight: 500;
  `}
`;
