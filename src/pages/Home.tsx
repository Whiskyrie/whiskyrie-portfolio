// src/pages/Home.tsx
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Button from '../components/ui/Button';
import { FiArrowRight, FiGithub, FiLinkedin } from 'react-icons/fi';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const typewriter = keyframes`
  from { width: 0 }
  to { width: 100% }
`;

const blink = keyframes`
  from, to { border-color: transparent }
  50% { border-color: ${({ theme }) => theme.colors.primary}; }
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  min-height: calc(100vh - 80px);
  padding: ${({ theme }) => theme.spacing['2xl']} 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    text-align: center;
    align-items: center;
  }
`;

const Greeting = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  opacity: 0;
  animation: ${fadeIn} 0.5s ease forwards;
  animation-delay: 0.2s;
`;

const NameContainer = styled.div`
  overflow: hidden;
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

const Name = styled.h1`
  font-size: 3.5rem;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  animation: ${typewriter} 1.5s steps(20, end) forwards;
  border-right: 3px solid ${({ theme }) => theme.colors.primary};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 2.5rem;
  }
`;

const Role = styled.h2`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  color: ${({ theme }) => theme.colors.lightText};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  opacity: 0;
  animation: ${fadeIn} 0.5s ease forwards;
  animation-delay: 1.5s;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.fontSizes.lg};
  }
`;

const Description = styled.p`
  font-size: ${({ theme }) => theme.fontSizes.md};
  max-width: 600px;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  line-height: ${({ theme }) => theme.lineHeights.loose};
  opacity: 0;
  animation: ${fadeIn} 0.5s ease forwards;
  animation-delay: 1.8s;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  opacity: 0;
  animation: ${fadeIn} 0.5s ease forwards;
  animation-delay: 2.1s;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    width: 100%;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  opacity: 0;
  animation: ${fadeIn} 0.5s ease forwards;
  animation-delay: 2.4s;
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.card};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.25rem;
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: #fff;
    transform: translateY(-3px);
  }
`;

const Home: React.FC = () => {
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCursor(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <HeroSection>
      <Greeting>Olá, meu nome é</Greeting>
      <NameContainer>
        <Name style={{ borderRight: showCursor ? undefined : 'none' }}>
          Evandro Filho
        </Name>
      </NameContainer>
      <Role>Desenvolvedor Web & Mobile</Role>
      <Description>
        Graduando em Ciências da Computação com foco em desenvolvimento de software,
        experiência acadêmica em JavaScript/TypeScript, React Native, Node.js e bancos de dados relacionais.
        Apaixonado por criar soluções tecnológicas e aprender novas habilidades.
      </Description>
      <ButtonContainer>
        <Button to="/projetos" variant="primary" size="lg">
          Ver Projetos <FiArrowRight style={{ marginLeft: '8px' }} />
        </Button>
        <Button to="/contato" variant="outline" size="lg">
          Entre em Contato
        </Button>
      </ButtonContainer>
      <SocialLinks>
        <SocialLink href="https://github.com/Whiskyrie" target="_blank" rel="noopener noreferrer">
          <FiGithub />
        </SocialLink>
        <SocialLink href="https://linkedin.com/in/evandroropelattofilho" target="_blank" rel="noopener noreferrer">
          <FiLinkedin />
        </SocialLink>
      </SocialLinks>
    </HeroSection>
  );
};

export default Home;