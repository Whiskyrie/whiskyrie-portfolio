// src/pages/Contact.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/ui/SectionTitle';
import Button from '../components/ui/Button';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiGithub } from 'react-icons/fi';

const ContactSection = styled.section`
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
`;

const ContactContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.boxShadow.md};
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
    font-size: 1.25rem;
  }
`;

const ContactSocialLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
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

const ContactForm = styled.form`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.boxShadow.md};
`;

const FormGroup = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const FormInput = styled.input`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fontSizes.md};
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const FormTextarea = styled.textarea`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ theme }) => theme.fontSizes.md};
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

const FormSuccess = styled.div`
  background-color: ${({ theme }) => theme.colors.success};
  color: #fff;
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você implementaria a lógica para enviar o formulário
    // Por enquanto, apenas simulamos o sucesso
    setIsSubmitted(true);
  };
  
  return (
    <ContactSection>
      <SectionTitle>Entre em Contato</SectionTitle>
      <ContactContainer>
        <ContactInfo>
          <ContactInfoTitle>Vamos Conversar!</ContactInfoTitle>
          <ContactInfoText>
            Se você tem uma oportunidade de estágio, projeto ou apenas quer trocar ideias, 
            sinta-se à vontade para entrar em contato comigo. Estou disponível para 
            conversas sobre desenvolvimento, tecnologia e oportunidades de colaboração.
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
            <ContactSocialLink href="https://github.com/Whiskyrie" target="_blank" rel="noopener noreferrer">
              <FiGithub />
            </ContactSocialLink>
            <ContactSocialLink href="https://linkedin.com/in/evandroropelattofilho" target="_blank" rel="noopener noreferrer">
              <FiLinkedin />
            </ContactSocialLink>
          </ContactSocialLinks>
        </ContactInfo>
        
        <ContactForm onSubmit={handleSubmit}>
          {isSubmitted && (
            <FormSuccess>
              Mensagem enviada com sucesso! Entrarei em contato em breve.
            </FormSuccess>
          )}
          
          <FormGroup>
            <FormLabel htmlFor="name">Nome</FormLabel>
            <FormInput
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="email">Email</FormLabel>
            <FormInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="subject">Assunto</FormLabel>
            <FormInput
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="message">Mensagem</FormLabel>
            <FormTextarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>
          
          <Button type="submit" variant="primary" size="lg">
            Enviar Mensagem
          </Button>
        </ContactForm>
      </ContactContainer>
    </ContactSection>
  );
};

export default Contact;