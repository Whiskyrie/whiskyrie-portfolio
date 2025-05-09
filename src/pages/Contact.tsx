// src/pages/Contact.tsx
import styled, { keyframes } from "styled-components";
import SectionTitle from "../components/ui/SectionTitle";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiLinkedin,
  FiGithub,
} from "react-icons/fi";

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

const ContactSection = styled.section`
  padding: ${({ theme }) => theme.spacing["3xl"]} 0;
  animation: ${fadeIn} 0.8s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 800px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

const ContactInfo = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.boxShadow.md};
  transition: transform ${({ theme }) => theme.transitions.normal};

  &:hover {
    transform: translateY(-5px);
  }
`;

const ContactInfoTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  color: ${({ theme }) => theme.colors.primary};
`;

const ContactInfoText = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  line-height: ${({ theme }) => theme.lineHeights.loose};
`;

const ContactInfoList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
`;

const ContactInfoItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.md};

  svg {
    margin-right: ${({ theme }) => theme.spacing.md};
    color: ${({ theme }) => theme.colors.primary};
    font-size: 1.5rem;
    background-color: ${({ theme }) => theme.colors.primary}20;
    padding: ${({ theme }) => theme.spacing.sm};
    border-radius: 50%;
  }
`;

const ContactSocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
  justify-content: center;
`;

const ContactSocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #fff;
  font-size: 1.25rem;
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryDark};
    transform: translateY(-3px);
  }
`;

const Contact = () => {
  return (
    <ContactSection>
      <SectionTitle>Entre em Contato</SectionTitle>
      <ContactContainer>
        <ContactInfo>
          <ContactInfoTitle>Vamos Conversar!</ContactInfoTitle>
          <ContactInfoText>
            Se você tem uma oportunidade de estágio, projeto ou apenas quer
            trocar ideias, sinta-se à vontade para entrar em contato comigo.
            Estou disponível para conversas sobre desenvolvimento, tecnologia e
            oportunidades de colaboração.
          </ContactInfoText>
          <ContactInfoList>
            <ContactInfoItem>
              <FiMail />
              <span>evandroropfilho@gmail.com</span>
            </ContactInfoItem>
            <ContactInfoItem>
              <FiPhone />
              <span>(45) 99839-3375</span>
            </ContactInfoItem>
            <ContactInfoItem>
              <FiMapPin />
              <span>Foz do Iguaçu, Paraná, Brasil</span>
            </ContactInfoItem>
          </ContactInfoList>
          <ContactSocialLinks>
            <ContactSocialLink
              href="https://github.com/Whiskyrie"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub />
            </ContactSocialLink>
            <ContactSocialLink
              href="https://linkedin.com/in/evandroropelattofilho"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiLinkedin />
            </ContactSocialLink>
          </ContactSocialLinks>
        </ContactInfo>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;
