// src/types/styled.d.ts
import 'styled-components';

// Estenda a definição do módulo 'styled-components'
declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string;
      primaryLight: string;
      primaryDark: string;
      secondary: string;
      secondaryLight: string;
      secondaryDark: string;
      accent: string;
      background: string;
      darkBackground: string;
      text: string;
      lightText: string;
      darkText: string;
      card: string;
      darkCard: string;
      border: string;
      darkBorder: string;
      success: string;
      error: string;
      warning: string;
    };
    fonts: {
      main: string;
      code: string;
    };
    fontSizes: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
    };
    fontWeights: {
      regular: number;
      medium: number;
      semiBold: number;
      bold: number;
    };
    lineHeights: {
      normal: string;
      tight: string;
      loose: string;
    };
    borderRadius: {
      sm: string;
      md: string;
      lg: string;
      full: string;
    };
    boxShadow: {
      sm: string;
      md: string;
      lg: string;
    };
    transitions: {
      fast: string;
      normal: string;
      slow: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
    };
    spacing: {
      xs: string;
      sm: string;
      md: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
    };
    maxWidth: {
      container: string;
    };
  }
}