// src/components/ui/Button.tsx
import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonStyleProps {
  variant: ButtonVariant;
  size: ButtonSize;
  fullWidth?: boolean;
}

const ButtonStyles = css<ButtonStyleProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.main};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  cursor: pointer;
  transition: all ${({ theme }) => theme.transitions.fast};
  text-decoration: none;
  
  /* Variante */
  ${({ theme, variant }) => 
    variant === 'primary' && css`
      background-color: ${theme.colors.primary};
      color: #fff;
      border: 2px solid ${theme.colors.primary};
      
      &:hover {
        background-color: ${theme.colors.primaryDark};
        border-color: ${theme.colors.primaryDark};
      }
    `
  }
  
  ${({ theme, variant }) => 
    variant === 'secondary' && css`
      background-color: ${theme.colors.secondary};
      color: #fff;
      border: 2px solid ${theme.colors.secondary};
      
      &:hover {
        background-color: ${theme.colors.secondaryDark};
        border-color: ${theme.colors.secondaryDark};
      }
    `
  }
  
  ${({ theme, variant }) => 
    variant === 'outline' && css`
      background-color: transparent;
      color: ${theme.colors.primary};
      border: 2px solid ${theme.colors.primary};
      
      &:hover {
        background-color: ${theme.colors.primary};
        color: #fff;
      }
    `
  }
  
  /* Tamanho */
  ${({ size }) => 
    size === 'sm' && css`
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
    `
  }
  
  ${({ size }) => 
    size === 'md' && css`
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    `
  }
  
  ${({ size }) => 
    size === 'lg' && css`
      padding: 1rem 2rem;
      font-size: 1.125rem;
    `
  }
  
  /* Largura */
  ${({ fullWidth }) => 
    fullWidth && css`
      width: 100%;
    `
  }
  
  /* Estados */
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const StyledButton = styled.button<ButtonStyleProps>`
  ${ButtonStyles}
`;

const StyledLink = styled(Link)<ButtonStyleProps>`
  ${ButtonStyles}
`;

const StyledExternalLink = styled.a<ButtonStyleProps>`
  ${ButtonStyles}
`;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, ButtonStyleProps {
  to?: string;
  external?: boolean;
  as?: string;
  href?: string;
  target?: string;
  rel?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  to,
  external,
  as,
  href,
  target,
  rel,
  ...props
}) => {
  // Se "as" for "a" e temos href, renderizamos como link externo
  if (as === 'a' && href) {
    return (
      <StyledExternalLink 
        href={href}
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        target={target}
        rel={rel}
      >
        {children}
      </StyledExternalLink>
    );
  }
  
  // Lógica existente para links internos e externos
  if (to && external) {
    return (
      <StyledExternalLink 
        href={to}
        variant={variant}
        size={size}
        fullWidth={fullWidth}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </StyledExternalLink>
    );
  }
  
  if (to) {
    return (
      <StyledLink 
        to={to}
        variant={variant}
        size={size}
        fullWidth={fullWidth}
      >
        {children}
      </StyledLink>
    );
  }
  
  // Padrão: renderiza como botão
  return (
    <StyledButton 
      variant={variant}
      size={size}
      fullWidth={fullWidth}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default Button;