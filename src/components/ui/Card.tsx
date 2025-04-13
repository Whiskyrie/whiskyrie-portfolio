// src/components/ui/Card.tsx
import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  box-shadow: ${({ theme }) => theme.boxShadow.md};
  overflow: hidden;
  transition: transform ${({ theme }) => theme.transitions.normal}, box-shadow ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.boxShadow.lg};
  }
`;

const CardContent = styled.div`
  padding: ${({ theme }) => theme.spacing.xl};
`;

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <CardContainer className={className}>
      <CardContent>{children}</CardContent>
    </CardContainer>
  );
};

export default Card;