/* eslint-disable @typescript-eslint/no-explicit-any */

import { useTheme } from 'styled-components';

import { LightTooltip } from './styles';
import { Box } from './styles';

function Tooltips({
  isActiveHover,
  text_color,
  placement,
  children,
  noArrow,
  color,
  open,
  title,
  icon: Icon,
  fontSize,
  disableInteractive,
  ...rest
}: any) {
  const styledTheme = useTheme();

  if (!children.props?.disabled) {
    return (
      <LightTooltip
        PopperProps={{
          disablePortal: true,
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, -14]
              }
            }
          ]
        }}

        open={open}
        color={color}
        text_color={text_color}
        disableHoverListener={isActiveHover}
        placement={placement ? placement : 'top'}
        arrow={!noArrow}
        styled_theme={styledTheme}
        disableInteractive={disableInteractive}
        fontSize={fontSize}
        title={
          Icon ? (
            <Box justify="center" align="center" gap="4px">
              <Icon weight="fill" />
              {title}
            </Box>
          ) : (
            title
          )
        }
        {...rest}
      >
        {children}
      </LightTooltip>
    );
  } else {
    return <div>{children}</div>;
  }
}

export default Tooltips;
