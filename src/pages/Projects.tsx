// src/pages/Projects.tsx
import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/ui/SectionTitle';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const ProjectsSection = styled.section`
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
  }
`;

const ProjectCard = styled(Card)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ProjectImage = styled.div`
  height: 200px;
  background-color: ${({ theme }) => theme.colors.secondaryLight};
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

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: 'TransportManager',
    description: 'Projeto final de disciplina focado em desenvolvimento mobile com React Native. Criação de aplicação com frontend em TypeScript e backend em Node.js.',
    techStack: ['React Native', 'TypeScript', 'Node.js'],
    githubUrl: 'https://github.com/Whiskyrie/TransportManager',
  },
  {
    id: 2,
    title: 'RubiRide',
    description: 'Sistema de gerenciamento de transportes desenvolvido para otimizar administração de frotas e logística. Implementação com frontend em Uno Platform e backend em C# e SQLite.',
    techStack: ['C#', 'Uno Platform', 'SQLite'],
    githubUrl: 'https://github.com/Whiskyrie/TrabalhoFinal-RubiRide',
  },
  {
    id: 3,
    title: 'TaskSyncApp',
    description: 'Aplicativo de sincronização de tarefas desenvolvido com Node.js. Sincronização de tarefas feitas quando identifica-se que o usuário está online.',
    techStack: ['Node.js', 'JavaScript'],
    githubUrl: 'https://github.com/Whiskyrie/TaskSyncApp',
  },
];

const Projects: React.FC = () => {
  return (
    <ProjectsSection>
      <SectionTitle>Meus Projetos</SectionTitle>
      <ProjectsGrid>
        {projectsData.map((project) => (
          <ProjectCard key={project.id}>
            <ProjectImage />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <TechStack>
                {project.techStack.map((tech) => (
                  <TechTag key={tech}>{tech}</TechTag>
                ))}
              </TechStack>
              <ProjectLinks>
                <Button
                  as="a"
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="sm"
                >
                  <FiGithub style={{ marginRight: '4px' }} /> GitHub
                </Button>
                {project.demoUrl && (
                  <Button
                    as="a"
                    href={project.demoUrl}
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
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;