import 'styled-components';

import {
  ISizes,
  IThemeBreakpoints,
  IThemeColors,
  IThemeFonts,
  IThemeShapes
} from './types';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    font: IThemeFonts;
    shadow: Array<string>;
    color: IThemeColors;
    shape: IThemeShapes;
    spacing: ISizes;
    breakpoints: IThemeBreakpoints;
  }
}
