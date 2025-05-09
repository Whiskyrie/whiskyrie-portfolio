import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import SectionTitle from "../components/ui/SectionTitle";
import ProjectCard from "../components/ui/ProjectCard";

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

// Ajustamos para garantir espaçamento adequado no final da página
const ProjectsSection = styled.section`
  padding: ${({ theme }) => theme.spacing["3xl"]} 0;
  margin-bottom: 2rem; // Margem adicional no final da seção
  animation: ${fadeIn} 0.8s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
  max-width: 1200px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr;
    padding: 0 ${({ theme }) => theme.spacing.md};
  }
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: ${({ theme }) => theme.spacing.xl};
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};
  animation: ${fadeIn} 1s ease forwards;
`;

const FilterButton = styled.button<{ $active: boolean }>`
  background-color: ${({ theme, $active }) =>
    $active ? theme.colors.primary : "transparent"};
  color: ${({ theme, $active }) => ($active ? "#fff" : theme.colors.text)};
  border: 1px solid
    ${({ theme, $active }) =>
      $active ? theme.colors.primary : theme.colors.border};
  padding: ${({ theme }) => `${theme.spacing.sm} ${theme.spacing.md}`};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  cursor: pointer;
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  transition: all ${({ theme }) => theme.transitions.fast};

  &:hover {
    background-color: ${({ theme, $active }) =>
      $active ? theme.colors.primary : theme.colors.border};
  }
`;

interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  demoUrl?: string;
  category: string;
  logoSrc?: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "TransportManager",
    description:
      "Projeto final de disciplina focado em desenvolvimento mobile com React Native. Criação de aplicação com frontend em TypeScript e backend em Node.js.",
    techStack: ["React Native", "TypeScript", "Node.js"],
    githubUrl: "https://github.com/Whiskyrie/TransportManager",
    category: "mobile",
    logoSrc: "https://i.postimg.cc/sDzxxJnc/image.png", // Verifique se esta URL está acessível
  },
  {
    id: 2,
    title: "RubiRide",
    description:
      "Sistema de gerenciamento de transportes desenvolvido para otimizar administração de frotas e logística. Implementação com frontend em Uno Platform e backend em C# e SQLite.",
    techStack: ["C#", "Uno Platform", "SQLite"],
    githubUrl: "https://github.com/Whiskyrie/TrabalhoFinal-RubiRide",
    category: "desktop",
    logoSrc: "https://i.postimg.cc/4mgGzv7C/icon.png",
  },
  {
    id: 3,
    title: "TaskSyncApp",
    description:
      "Aplicativo de sincronização de tarefas desenvolvido com Node.js. Sincronização de tarefas feitas quando identifica-se que o usuário está online.",
    techStack: ["Node.js", "JavaScript"],
    githubUrl: "https://github.com/Whiskyrie/TaskSyncApp",
    category: "mobile",
    logoSrc: "https://i.postimg.cc/5Xgy643C/icon.png",
  },
];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "Todos" },
    { id: "web", label: "Web" },
    { id: "mobile", label: "Mobile" },
    { id: "desktop", label: "Desktop" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  return (
    <ProjectsSection>
      <SectionTitle>Meus Projetos</SectionTitle>

      <FilterContainer>
        {categories.map((category) => (
          <FilterButton
            key={category.id}
            $active={activeFilter === category.id}
            onClick={() => setActiveFilter(category.id)}
          >
            {category.label}
          </FilterButton>
        ))}
      </FilterContainer>

      <ProjectsGrid>
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            githubUrl={project.githubUrl}
            demoUrl={project.demoUrl}
            logoSrc={project.logoSrc}
            category={project.category} // Passando a categoria correta
          />
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
};

export default Projects;
