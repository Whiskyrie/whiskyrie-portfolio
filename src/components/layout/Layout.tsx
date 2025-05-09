// src/components/layout/Layout.tsx
import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';

// Container principal que envolve toda a aplicação
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; // Garantir que ocupe pelo menos toda a altura da viewport
`;

// Área principal de conteúdo
const Main = styled.main`
  flex: 1 0 auto; // Importante: permite que o conteúdo cresça e empurre o footer para baixo
  padding-top: 80px; // Espaço para a navbar fixa
  padding-bottom: 3rem; // Espaço adicional para separar do footer
`;

const Content = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.container};
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.lg};
`;

// Wrapper do footer para garantir que ele fique no final
const FooterWrapper = styled.footer`
  flex-shrink: 0; // Impede que o footer encolha
  width: 100%;
  margin-top: auto; // Ajuda a empurrar o footer para o final quando o conteúdo é curto
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <PageContainer>
      <Navbar />
      <Main>
        <Content>{children}</Content>
      </Main>
      <FooterWrapper>
        <Footer />
      </FooterWrapper>
    </PageContainer>
  );
};

export default Layout;