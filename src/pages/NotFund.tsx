// src/pages/NotFound.tsx
import React from 'react';
import styled from 'styled-components';
import Button from '../components/ui/Button';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px);
  text-align: center;
  padding: ${({ theme }) => theme.spacing.xl};
`;

const NotFoundCode = styled.h1`
  font-size: 6rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 4rem;
  }
`;

const NotFoundTitle = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes['2xl']};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.xl};
  }
`;

const NotFoundText = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  max-width: 600px;
`;

const NotFound: React.FC = () => {
  return (
    <NotFoundContainer>
      <NotFoundCode>404</NotFoundCode>
      <NotFoundTitle>Página Não Encontrada</NotFoundTitle>
      <NotFoundText>
        A página que você está procurando não existe ou foi movida.
      </NotFoundText>
      <Button to="/" variant="primary" size="lg">
        Voltar para Home
      </Button>
    </NotFoundContainer>
  );
};

export default NotFound;