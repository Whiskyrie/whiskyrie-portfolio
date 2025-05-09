/* eslint-disable react-refresh/only-export-components */
// src/contexts/ThemeContext.tsx
import React, { createContext, useState, useContext, useEffect } from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { theme, darkTheme } from '../styles/theme';

type ThemeContextType = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType>({
  isDarkMode: false,
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Usa localStorage para persistir a preferência de tema
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    // Verifica a preferência salva ou a preferência do sistema
    return savedTheme === 'dark' || 
      (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });

  useEffect(() => {
    // Salva a preferência quando mudar
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <StyledThemeProvider theme={isDarkMode ? darkTheme : theme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};