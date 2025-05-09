// src/components/layout/Navbar.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FiMenu, FiX } from 'react-icons/fi';
import ThemeToggle from '../ui/ThemeToggle';

const NavbarContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  z-index: 100;
  transition: all ${({ theme }) => theme.transitions.normal};
`;

const Logo = styled(Link)`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  
  &:hover {
    color: ${({ theme }) => theme.colors.primaryLight};
  }
`;

const NavItems = styled.div<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 70%;
    max-width: 300px;
    flex-direction: column;
    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
    padding: 2rem;
    transform: translateX(${({ isOpen }) => (isOpen ? '0' : '100%')});
    transition: transform 0.3s ease-in-out;
    z-index: 200;
  }
`;

const NavLink = styled(Link)`
  margin: 0 1rem;
  color: ${({ theme }) => theme.colors.text};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  text-decoration: none;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: width ${({ theme }) => theme.transitions.fast};
  }
  
  &:hover, &.active {
    color: ${({ theme }) => theme.colors.primary};
    
    &::after {
      width: 100%;
    }
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin: 1rem 0;
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

// Novo container para agrupar o botão de tema com os itens de navegação
const NavActionsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: 1rem;
    align-self: center;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 300;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    display: block;
  }
`;

const Overlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  z-index: 150;
`;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <NavbarContainer>
      <Logo to="/">Evandro Filho</Logo>
      
      <MenuButton onClick={toggleMenu}>
        {isOpen ? <FiX /> : <FiMenu />}
      </MenuButton>
      
      <Overlay isOpen={isOpen} onClick={closeMenu} />
      
      <NavItems isOpen={isOpen}>
        <NavLink to="/" onClick={closeMenu}>Home</NavLink>
        <NavLink to="/sobre" onClick={closeMenu}>Sobre</NavLink>
        <NavLink to="/projetos" onClick={closeMenu}>Projetos</NavLink>
        <NavLink to="/habilidades" onClick={closeMenu}>Habilidades</NavLink>
        <NavLink to="/contato" onClick={closeMenu}>Contato</NavLink>
        <NavActionsContainer>
          <ThemeToggle />
        </NavActionsContainer>
      </NavItems>
    </NavbarContainer>
  );
};

export default Navbar;