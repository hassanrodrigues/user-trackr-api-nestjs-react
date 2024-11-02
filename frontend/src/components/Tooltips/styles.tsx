/* eslint-disable @typescript-eslint/no-explicit-any */
import { styled as styledMui } from '@mui/material';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import styled from 'styled-components';
import { IGlobalStyled } from '../types';
import { setSpacing } from '../../utils';

export const LightTooltip = styledMui(({ className, ...props }: any) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ styled_theme, color, text_color, fontSize }: any) => ({
  [`& .${tooltipClasses?.tooltip}`]: {
    backgroundColor: !color ? styled_theme?.color.primary.main : color,
    color: text_color ? text_color : styled_theme?.color.text.default.light,
    boxShadow: styled_theme?.shadow[2],
    fontSize: fontSize || 12,
    fontWeight: 'bold'
  },

  [`& .${tooltipClasses?.arrow}`]: {
    '&::before': {
      boxShadow: styled_theme?.shadow[1],
      color: !color ? styled_theme?.color.primary.main : color
    }
  }
}));
export const DarkTooltip = styledMui(({ className, ...props }: any) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ styled_theme, color, text_color, fontSize }: any) => ({
  [`& .${tooltipClasses?.tooltip}`]: {
    backgroundColor: '#0B2B25',
    color: text_color ? text_color : styled_theme?.color.text.default.light,
    boxShadow: styled_theme?.shadow[2],
    fontSize: fontSize || 12,
    fontWeight: 'bold'
  },

  [`& .${tooltipClasses?.arrow}`]: {
    '&::before': {
      boxShadow: styled_theme?.shadow[1],
      color: !color ? styled_theme?.color.primary.main : color
    }
  }
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
  theme
}) => `
    display: ${display ?? 'flex'};
		flex: ${flex ?? null};
		flex-direction: ${direction === 'inherit' ? 'row' : 'column'};
		flex-wrap: ${wrap ?? 'null'};

		justify-content: ${justify ?? 'flex-start'};
		align-items: ${align ?? 'flex-start'};

		gap: ${setSpacing(gap ?? 'none')};
		padding: ${padding ?? 'auto'};
		height: ${height ?? 'auto'};
        margin-top: ${top};
        margin-right: ${right};
		background-color: ${background};

        border-bottom: ${border_bottom ? `1px solid ${theme.color.borderBottom}` : 'none'
    };
	`};

  width: ${({ width, fullWidth: full_width }) => {
    if (full_width) {
      return '100%';
    } else {
      return width ?? 'auto';
    }
  }};

  @media (max-width: 800px) {
    flex-direction: column;
    flex-wrap: wrap;
    width: 100%;
  }
`;