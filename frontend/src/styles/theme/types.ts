export interface ISizesPlus {
    mini: string;
    small: string;
    medium: string;
    large: string;
    grand: string;
    superGrand: string;
  }
  
  export interface ISizes {
    small: string;
    medium: string;
    large: string;
    minium: string;
  }
  
  export interface IThemeFonts {
    family: string;
    size: ISizesPlus;
  }
  
  export interface IColors {
    main: string;
    light: string;
    dark: string;
  }
  
  export interface IThemeColors {
    default: { light: string; dark: string };
    disabled: string;
    neutral: Array<string>;
  
    primary: IColors;
    secondary: IColors;
    info: IColors;
    warning: IColors;
    success: IColors;
    error: IColors;
    scrollbar: string;
  
    skeleton: {
      light: string;
      dark: string;
    };
  
    fade: {
      primary: string;
      secondary: string;
      info: string;
      success: string;
      warning: string;
      error: string;
      light: string;
      dark: string;
      transparent: string;
    };
  
    background: {
      default: string;
      overlay: string;
      soft: string;
      fullWhite: string;
    };
  
    text: {
      default: { light: string; dark: string; h2: string };
      main: string;
      light: string;
      dark: string;
    };
  
    border: string;
    borderBottom: string;
  }
  
  export interface IThemeShapes {
    radius: { small: string; medium: string; large: string };
    small: string;
    medium: string;
    large: string;
    minium: string;
  
    appbar: { height: string };
    input: { height: string };
    sidebar: {
      open: { width: string };
      close: { width: string };
    };
  }
  
  export interface IThemeBreakpoints {
    tablet: string;
  }
  