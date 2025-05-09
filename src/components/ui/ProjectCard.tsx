import React from "react";
import styled, { keyframes } from "styled-components";
import { FiGithub, FiExternalLink, FiCode, FiStar } from "react-icons/fi";
import Card from "./Card";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  logoSrc?: string;
  category: string; // Adicionando a propriedade category
}

const StyledProjectCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform ${({ theme }) => theme.transitions.normal},
    box-shadow ${({ theme }) => theme.transitions.normal};
  animation: ${fadeIn} 0.6s ease forwards;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.card};

  &:hover {
    transform: translateY(-10px);
    box-shadow: ${({ theme }) => theme.boxShadow.lg};
  }
`;

const CardHeader = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const LogoContainer = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ProjectLogo = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HeaderContent = styled.div`
  flex-grow: 1;
`;

const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.text};
  margin: 0;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

const ProjectCategory = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.lightText};
  text-transform: capitalize;
`;

const ProjectContent = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectDescription = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.text};
  line-height: 1.5;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const TechTag = styled.span`
  background-color: ${({ theme }) => theme.colors.primaryLight}20;
  color: ${({ theme }) => theme.colors.primary};
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  transition: transform ${({ theme }) => theme.transitions.fast};

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectStats = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  padding-top: ${({ theme }) => theme.spacing.md};
  margin-top: auto;
`;

const StatItem = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fontSizes.xs};
  color: ${({ theme }) => theme.colors.lightText};

  svg {
    margin-right: ${({ theme }) => theme.spacing.xs};
    font-size: ${({ theme }) => theme.fontSizes.sm};
  }
`;

const CardFooter = styled.div`
  padding: ${({ theme }) => theme.spacing.md};
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FooterButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing.xs};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  background: none;
  border: none;
  cursor: pointer;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  transition: background-color ${({ theme }) => theme.transitions.fast};
  text-decoration: none;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight}10;
  }
`;

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  githubUrl,
  demoUrl,
  logoSrc,
  category, // Usando a propriedade category passada
}) => {
  // Removendo a lógica de determinação de categoria baseada na URL
  // const category = githubUrl.includes("mobile")
  //   ? "mobile"
  //   : githubUrl.includes("desktop")
  //   ? "desktop"
  //   : "web";

  return (
    <StyledProjectCard>
      <CardHeader>
        <LogoContainer>
          {logoSrc ? (
            <ProjectLogo
              src={logoSrc}
              alt={`${title} Logo`}
              onError={(e) => {
                e.currentTarget.onerror = null; // Evita loop infinito
                e.currentTarget.src =
                  "https://via.placeholder.com/40?text=Logo"; // URL de fallback
              }}
            />
          ) : (
            <FiCode />
          )}
        </LogoContainer>
        <HeaderContent>
          <ProjectTitle>{title}</ProjectTitle>
          <ProjectCategory>{category}</ProjectCategory>
        </HeaderContent>
      </CardHeader>

      <ProjectContent>
        <ProjectDescription>{description}</ProjectDescription>
        <TechStack>
          {techStack.map((tech) => (
            <TechTag key={tech}>{tech}</TechTag>
          ))}
        </TechStack>

        <ProjectStats>
          <StatItem>
            <FiCode />
            <span>{techStack.length} tecnologias</span>
          </StatItem>
          <StatItem>
            <FiStar />
            <span>Projeto {category}</span>
          </StatItem>
        </ProjectStats>
      </ProjectContent>

      <CardFooter>
        <FooterButton
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FiGithub /> GitHub
        </FooterButton>
        {demoUrl && (
          <FooterButton
            href={demoUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiExternalLink /> Demo
          </FooterButton>
        )}
      </CardFooter>
    </StyledProjectCard>
  );
};

export default ProjectCard;
