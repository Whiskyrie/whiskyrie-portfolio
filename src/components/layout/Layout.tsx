// src/components/layout/Layout.tsx
import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';

const Main = styled.main`
  min-height: 100vh;
  padding-top: 80px; // Para compensar a navbar fixa
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
  return (
    <>
      <Navbar />
      <Main>
        <Content>{children}</Content>
      </Main>
      <Footer />
    </>
  );
};

export default Layout;