import { motion } from "framer-motion";
import styled from "styled-components";
import { setSpacing } from "../styles/utils";
import { IGlobalStyled } from "./types";
import { PAGE_ANIMATION } from "./utils";

export const Page = styled(motion.div).attrs(() => ({
  variants: PAGE_ANIMATION,
  initial: "hidden",
  animate: "visible",
}))<IGlobalStyled>`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${({ justify, align, height }) => `
  justify-content: ${justify ? justify : "flex-start"};
  align-items: ${align ? align : "flex-start"};
  height: ${height ? height : "auto"} ;
  gap: 16px
`};
  opacity: 0;
  transform: translateX(-20px);
  animation: animeLeft 0.3s forwards;
  @keyframes animeLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }
`;

export const PageHeader = styled.header<IGlobalStyled>`
  display: flex;
  flex-direction: column;
  gap: ${setSpacing("medium")};
`;

export const PageTitle = styled.h2<IGlobalStyled>`
  ${({ theme, justify, fullWidth: full_width }) => `
		font-size: ${theme.font.size.large};
		color:${theme.color.text.default.h2};
		text-align: ${justify ?? "left"};
		width: ${full_width ? "100%" : "auto"};
        font-weight: bold;
	`};
`;

export const SubTitle = styled.span<IGlobalStyled>`
  ${({ theme }) => `
        font-size: ${theme.font.size.medium};
        color: #061121;
        font-weight: bold;
        margin-top: 20px;
        margin-bottom: 15px;
        text-align: center;
        white-space: nowrap;
    `};
`;

export const LineDivider = styled.div<any>`
  margin-top: 30px;
  height: 1px;
  background-color: ${({ theme }) => theme.color.disabled};
  width: 100%;
  border: 1.5px solid #061121;
  opacity: 0.3;
`;

export const PageActions = styled.div<IGlobalStyled>`
  display: flex;
  justify-content: ${({ justify }) => justify ?? "space-between"};
  align-items: center;

  ${({ width }) => `
		gap: ${setSpacing("small")};
		width: ${width ?? "100%"};
	`}

  @media (max-width: 800px) {
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.small};
    height: auto;
  }

  ::-webkit-scrollbar {
    width: 10px !important;
    height: 10px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 8px;
  }
`;

export const Card = styled.div<IGlobalStyled>`
  ${({
    theme,
    direction,
    justify,
    align,
    padding,
    gap,
    width,
    maxWidth,
    maxHeight,
    overflow,
    wrap,
    display,
  }) => `
        display: ${display ? display : "flex"};
        flex-wrap: ${wrap ? wrap : "auto"};
        flex-direction: ${direction ? direction : "row"};
        justify-content: ${justify ? justify : "flex-start"};
        align-items: ${align ? align : "flex-start"};
        gap: ${setSpacing(gap ? gap : "medium")};

        max-width: ${maxWidth ? maxWidth : "auto"};
        width: ${width ? width : "100%"};
        max-height: ${maxHeight ? maxHeight : "auto"};
        padding: ${setSpacing(padding ? padding : "large")};

        background-color: #ffffff;
        border-radius:${theme.shape.radius.small};
        box-shadow: 0px 1px 4px #00000029;

        overflow: ${overflow ? overflow : "hidden"};
        opacity: 0;
        transform: translateX(-20px);
        animation: animeLeft .3s forwards;
    `}
  @keyframes animeLeft {
    to {
      opacity: 1;
      transform: initial;
    }
  }

  @media (max-width: 800px) {
    flex-direction: column;
    width: auto;
    max-width: auto;
    max-height: auto;
  }
`;

export const SectionTitle = styled.span<IGlobalStyled>(({ theme, flex }) => ({
  fontSize: theme.font.size.small,
  fontWeight: "bold",
  flex: flex,
}));

export const Box = styled.div<IGlobalStyled>`
  ${({
    flex,
    justify,
    align,
    wrap,
    direction,
    gap,
    padding,
    height,
    top,
    right,
    border_bottom,
    background,
    display,
    theme,
  }) => `
    display: ${display ?? "flex"};
		flex: ${flex ?? null};
		flex-direction: ${direction === "inherit" ? "row" : "column"};
		flex-wrap: ${wrap ?? "null"};

		justify-content: ${justify ?? "flex-start"};
		align-items: ${align ?? "flex-start"};

		gap: ${setSpacing(gap ?? "none")};
		padding: ${padding ?? "auto"};
		height: ${height ?? "auto"};
        margin-top: ${top};
        margin-right: ${right};
		background-color: ${background};

        border-bottom: ${
          border_bottom ? `1px solid ${theme.color.borderBottom}` : "none"
        };
	`};

  width: ${({ width, fullWidth: full_width }) => {
    if (full_width) {
      return "100%";
    } else {
      return width ?? "auto";
    }
  }};

  @media (max-width: 800px) {
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
  }
`;

export const Row = styled.div<IGlobalStyled>`
  ${({ top, auto, gap, wrap, justifyContent }) => `
        display: flex;
        flex-wrap:${wrap ? wrap : "auto"};
        flex-direction: row;
        margin-top: ${top ?? "auto"};
        width: ${auto ? "auto" : "100%"};
        justify-content: ${justifyContent ? justifyContent : "flex-start"};
        gap: ${setSpacing(gap ? gap : "medium")};
        justify-content: ${justifyContent};
    `};

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const FooterActions = styled.div`
  display: flex;
  width: 100%;
  gap: ${setSpacing("small")};
  justify-content: flex-end;
`;

export const SectionForm = styled.form<IGlobalStyled>`
  display: flex;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.small};
  flex-direction: column;

  padding: ${({ theme }) => theme.spacing.medium};
  width: 100%;

  background-color: ${({ theme }) => theme.color.background.fullWhite};

  border-radius: ${({ theme }) => theme.shape.radius.medium};
`;

export const Article = styled.article<IGlobalStyled>`
  display: flex;
  gap: ${({ theme }) => theme.spacing.large};
  flex-direction: column;
`;
