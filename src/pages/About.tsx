// src/pages/About.tsx
import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/ui/SectionTitle';

const AboutSection = styled.section`
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  
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

const AboutImage = styled.div`
  width: 100%;
  height: 400px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  position: relative;
  z-index: 1;
  
  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    border: 2px solid ${({ theme }) => theme.colors.primary};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    top: 20px;
    left: 20px;
    z-index: -1;
  }
`;

const InfoBox = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  padding: ${({ theme }) => theme.spacing.lg};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-top: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.boxShadow.md};
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
          <AboutImage />
        </ImageContainer>
      </Content>
    </AboutSection>
  );
};

export default About;