import React from 'react';
import styled from 'styled-components';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../../contexts/ThemeContext';

const ToggleButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
  font-size: 1.25rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  
  @media (prefers-color-scheme: dark) {
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
`;

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  
  return (
    <ToggleButton 
      onClick={toggleTheme} 
      aria-label={isDarkMode ? "Ativar modo claro" : "Ativar modo escuro"}
    >
      {isDarkMode ? <FiSun /> : <FiMoon />}
    </ToggleButton>
  );
};

export default ThemeToggle;