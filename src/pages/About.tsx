// src/pages/About.tsx
import React from 'react';
import styled, { keyframes } from 'styled-components';
import SectionTitle from '../components/ui/SectionTitle';
import ProfileImage from '../components/ui/ProfileImage';

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

const AboutSection = styled.section`
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  animation: ${fadeIn} 0.8s ease;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const TextContent = styled.div`
  p {
    margin-bottom: ${({ theme }) => theme.spacing.lg};
    line-height: ${({ theme }) => theme.lineHeights.loose};
  }
`;

const ImageContainer = styled.div`
  position: relative;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    margin-top: ${({ theme }) => theme.spacing.xl};
    grid-row: 1;
  }
`;

const InfoBox = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.boxShadow.md};
  transition: transform ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const InfoTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.primary};
`;

const InfoList = styled.ul`
  list-style-type: none;
  padding: 0;
  
  li {
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    display: flex;
    align-items: center;
    
    &::before {
      content: '→';
      color: ${({ theme }) => theme.colors.primary};
      margin-right: ${({ theme }) => theme.spacing.sm};
    }
  }
`;

// URL da imagem de placeholder - substitua pela URL de sua imagem real
const profileImageUrl = "https://via.placeholder.com/400x400?text=Evandro+Filho";

const About: React.FC = () => {
  return (
    <AboutSection>
      <SectionTitle>Sobre Mim</SectionTitle>
      <Content>
        <TextContent>
          <p>
            Olá! Sou Evandro, um desenvolvedor web e mobile em formação, atualmente cursando 
            Ciências da Computação na Universidade Tecnológica Federal do Paraná (UTFPR-MD).
          </p>
          <p>
            Minha jornada na programação começou com o interesse em criar soluções tecnológicas 
            para problemas do cotidiano. Desde então, venho me aprimorando em tecnologias como 
            JavaScript/TypeScript, React Native e Node.js, sempre buscando aprender e aplicar 
            novas habilidades em projetos práticos.
          </p>
          <p>
            Estou em constante evolução, buscando oportunidades de estágio onde possa contribuir 
            com equipes de desenvolvimento e expandir meus conhecimentos em um ambiente profissional.
          </p>
          
          <InfoBox>
            <InfoTitle>Educação</InfoTitle>
            <InfoList>
              <li>Bacharelado em Ciências da Computação - UTFPR-MD (2023-2027)</li>
            </InfoList>
            
            <InfoTitle>Interesses</InfoTitle>
            <InfoList>
              <li>Desenvolvimento Backend</li>
              <li>Arquitetura de Software</li>
              <li>Microsserviços</li>
              <li>Sistemas Distribuídos</li>
            </InfoList>
          </InfoBox>
        </TextContent>
        
        <ImageContainer>
          <ProfileImage src={profileImageUrl} alt="Evandro Filho" />
        </ImageContainer>
      </Content>
    </AboutSection>
  );
};

export default About;