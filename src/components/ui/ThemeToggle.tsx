// src/components/ui/ThemeToggle.tsx
import React from 'react';
import styled from 'styled-components';
import { FiMoon, FiSun } from 'react-icons/fi';
import { useTheme } from '../../contexts/ThemeContext';

// Estilizamos o botão para ter uma aparência mais atraente e interativa
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
  padding: 0.5rem;
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  color: ${({ theme }) => theme.colors.text};
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({ theme }) => theme.colors.primary};
    opacity: 0;
    border-radius: 50%;
    transition: opacity ${({ theme }) => theme.transitions.normal};
    z-index: -1;
  }
  
  &:hover {
    color: ${({ theme }) => theme.colors.background};
    transform: scale(1.1);
    
    &::before {
      opacity: 0.8;
    }
  }
  
  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary};
  }
  
  svg {
    transition: transform ${({ theme }) => theme.transitions.normal};
  }
  
  &:active svg {
    transform: rotate(30deg);
  }
`;

// Tooltip que aparece ao passar o mouse sobre o botão
const Tooltip = styled.span`
  position: absolute;
  bottom: -30px;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  background-color: ${({ theme }) => theme.colors.secondary};
  color: #fff;
  padding: 0.25rem 0.5rem;
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  opacity: 0;
  transform: translateY(10px);
  transition: all ${({ theme }) => theme.transitions.normal};
  pointer-events: none;
  white-space: nowrap;
  
  ${ToggleButton}:hover & {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Wrapper para posicionar o botão e o tooltip
const ToggleWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ThemeToggle: React.FC = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  
  return (
    <ToggleWrapper>
      <ToggleButton 
        onClick={toggleTheme} 
        aria-label={isDarkMode ? "Mudar para tema claro" : "Mudar para tema escuro"}
      >
        {isDarkMode ? <FiSun /> : <FiMoon />}
        <Tooltip>{isDarkMode ? "Tema Claro" : "Tema Escuro"}</Tooltip>
      </ToggleButton>
    </ToggleWrapper>
  );
};

export default ThemeToggle;