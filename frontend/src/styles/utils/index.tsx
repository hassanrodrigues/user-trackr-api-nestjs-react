import STYLED_THEME from '../theme';

export const setFontSize = (gap: string) => {
  switch (gap) {
    case 'none':
      return '0px';

    case 'mini':
      return STYLED_THEME.font.size.mini;

    case 'small':
      return STYLED_THEME.font.size.small;

    case 'medium':
      return STYLED_THEME.font.size.medium;

    case 'large':
      return STYLED_THEME.font.size.large;

    default:
      return STYLED_THEME.font.size.large;
  }
};

export const setSpacing = (gap: string | number) => {
  switch (gap) {
    case 'none':
      return '0px';

    case 'minium':
      return STYLED_THEME.spacing.minium;

    case 'small':
      return STYLED_THEME.spacing.small;

    case 'medium':
      return STYLED_THEME.spacing.medium;

    case 'large':
      return STYLED_THEME.spacing.large;

    default:
      return gap || STYLED_THEME.spacing.small;
  }
};


