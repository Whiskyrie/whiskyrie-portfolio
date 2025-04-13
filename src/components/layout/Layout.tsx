// src/components/layout/Layout.tsx
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';

const Main = styled.main`
  min-height: 100vh;
  padding-top: 80px; // Ajustável com base na altura real da navbar
  padding-bottom: 2rem;
`;

const Content = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.container};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Estado para armazenar a altura real da navbar
  const [navbarHeight, setNavbarHeight] = useState(80);

  // Medir a altura real da navbar após montagem do componente
  useEffect(() => {
    const navbar = document.querySelector('nav');
    if (navbar) {
      const height = navbar.getBoundingClientRect().height;
      setNavbarHeight(height);
    }
  }, []);

  return (
    <>
      <Navbar />
      <Main style={{ paddingTop: `${navbarHeight}px` }}>
        <Content>{children}</Content>
      </Main>
      <Footer />
    </>
  );
};

export default Layout;