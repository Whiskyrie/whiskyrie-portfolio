import React from 'react';
import styled from 'styled-components';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import Card from './Card';
import Button from './Button';

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  imageSrc?: string;
}

const StyledProjectCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ProjectImage = styled.div<{ $imageSrc?: string }>`
  height: 200px;
  background-color: ${({ theme }) => theme.colors.secondaryLight};
  background-image: ${({ $imageSrc }) => $imageSrc ? `url(${$imageSrc})` : 'none'};
  background-size: cover;
  background-position: center;
  border-radius: ${({ theme }) => theme.borderRadius.md} ${({ theme }) => theme.borderRadius.md} 0 0;
`;

const ProjectContent = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
  flex-grow: 1;
  display: flex;
  flex-direction: column;
`;

const ProjectTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  color: ${({ theme }) => theme.colors.text};
`;

const ProjectDescription = styled.p`
  margin-bottom: ${({ theme }) => theme.spacing.lg};
  flex-grow: 1;
  color: ${({ theme }) => theme.colors.text}; // Adicionar referência explícita à cor do texto
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.xs};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const TechTag = styled.span`
  background-color: ${({ theme }) => theme.colors.primaryLight};
  color: #fff;
  padding: ${({ theme }) => theme.spacing.xs} ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.sm};
  font-size: ${({ theme }) => theme.fontSizes.xs};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;

const ProjectLinks = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing.md};
`;

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  techStack,
  githubUrl,
  demoUrl,
  imageSrc
}) => {
  return (
    <StyledProjectCard>
      <ProjectImage $imageSrc={imageSrc} />
      <ProjectContent>
        <ProjectTitle>{title}</ProjectTitle>
        <ProjectDescription>{description}</ProjectDescription>
        <TechStack>
          {techStack.map((tech) => (
            <TechTag key={tech}>{tech}</TechTag>
          ))}
        </TechStack>
        <ProjectLinks>
          <Button
            as="a"
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="outline"
            size="sm"
          >
            <FiGithub style={{ marginRight: '4px' }} /> GitHub
          </Button>
          {demoUrl && (
            <Button
              as="a"
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary"
              size="sm"
            >
              <FiExternalLink style={{ marginRight: '4px' }} /> Demo
            </Button>
          )}
        </ProjectLinks>
      </ProjectContent>
    </StyledProjectCard>
  );
};

export default ProjectCard;