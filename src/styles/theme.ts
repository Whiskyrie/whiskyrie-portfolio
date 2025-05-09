// src/styles/theme.ts
export const theme = {
    colors: {
      // Cores principais
      primary: '#800020', // Borgonha/vinho
      secondary: '#2C2C3C', // Azul escuro acinzentado
      
      // Variações da cor primária
      primaryLight: '#A13046',
      primaryDark: '#600018',
      
      // Variações da cor secundária
      secondaryLight: '#3F3F52',
      secondaryDark: '#1E1E2A',
      
      // Cores de destaque/acento
      accent: '#D4AF37', // Dourado
      
      // Cores de fundo
      background: '#F8F7F7', // Off-white
      darkBackground: '#1A1A24', // Quase preto
      
      // Cores de texto
      text: '#333340', // Cinza escuro com tom azulado
      lightText: '#6A6A7C', // Cinza médio
      darkText: '#F0F0F5', // Quase branco
      
      // Cores de componentes
      card: '#F0EEF0', // Off-white mais escuro para cards
      darkCard: '#25252F', // Versão escura para cards
      border: '#E0DFE3', // Borda clara
      darkBorder: '#3A3A48', // Borda escura
      
      // Cores de feedback
      success: '#2E7D32', // Verde
      error: '#C62828', // Vermelho
      warning: '#F9A825', // Amarelo
    },
    fonts: {
      main: "'Poppins', sans-serif",
      code: "'Fira Code', monospace",
    },
    fontSizes: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
      '3xl': '2.5rem',
      '4xl': '3rem',
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
    lineHeights: {
      normal: '1.5',
      tight: '1.25',
      loose: '1.8',
    },
    borderRadius: {
      sm: '0.25rem',
      md: '0.5rem',
      lg: '1rem',
      full: '9999px',
    },
    boxShadow: {
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
      lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    },
    transitions: {
      fast: '0.2s ease',
      normal: '0.3s ease',
      slow: '0.5s ease',
    },
    breakpoints: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    spacing: {
      xs: '0.25rem',
      sm: '0.5rem',
      md: '1rem',
      lg: '1.5rem',
      xl: '2rem',
      '2xl': '2.5rem',
      '3xl': '3rem',
    },
    maxWidth: {
      container: '1200px',
    },
  };
  
  
  export const darkTheme = {
    ...theme,
    colors: {
      ...theme.colors,
      background: '#1A1A24',
      darkBackground: '#121218',
      
      text: '#F0F0F5',
      lightText: '#A0A0B2',
      darkText: '#FFFFFF',
      
      card: '#25252F',
      darkCard: '#1E1E28',
      border: '#3A3A48',
      darkBorder: '#4A4A58',
      
      primaryLight: '#B54058', 
      secondaryLight: '#4F4F62',
      
      success: '#4CAF50', 
      error: '#F44336',
      warning: '#FFC107', 
    },
    
    boxShadow: {
      sm: '0 1px 3px rgba(0, 0, 0, 0.3)',
      md: '0 4px 6px rgba(0, 0, 0, 0.4), 0 1px 3px rgba(0, 0, 0, 0.3)',
      lg: '0 10px 15px rgba(0, 0, 0, 0.5), 0 4px 6px rgba(0, 0, 0, 0.4)',
    },
  };

  
  // Definição de tipos para o tema
  export type Theme = typeof theme;