// src/components/layout/Footer.tsx
import React from 'react';
import styled from 'styled-components';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

const FooterContainer = styled.footer`
  background-color: ${({ theme }) => theme.colors.secondaryDark};
  color: ${({ theme }) => theme.colors.darkText};
  padding: 2rem;
  text-align: center;
`;

const FooterContent = styled.div`
  max-width: ${({ theme }) => theme.maxWidth.container};
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.darkText};
  font-size: 1.5rem;
  margin: 0 1rem;
  transition: color ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    color: ${({ theme }) => theme.colors.accent};
  }
`;

const Copyright = styled.p`
  margin-top: 1rem;
  font-size: ${({ theme }) => theme.fontSizes.sm};
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <FooterContainer>
      <FooterContent>
        <SocialLinks>
          <SocialLink href="https://github.com/Whiskyrie" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FiGithub />
          </SocialLink>
          <SocialLink href="https://linkedin.com/in/evandroropelattofilho" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </SocialLink>
          <SocialLink href="mailto:evandroropfilho@gmail.com" aria-label="Email">
            <FiMail />
          </SocialLink>
        </SocialLinks>
        <Copyright>
          &copy; {currentYear} Evandro Filho. Todos os direitos reservados.
        </Copyright>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;