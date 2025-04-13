// src/pages/Skills.tsx
import React from 'react';
import styled from 'styled-components';
import SectionTitle from '../components/ui/SectionTitle';
import { FiCode, FiDatabase, FiGitBranch, FiGlobe, FiServer, FiSmartphone } from 'react-icons/fi';

const SkillsSection = styled.section`
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: ${({ theme }) => theme.spacing.xl};
`;

const SkillCategory = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding: ${({ theme }) => theme.spacing.xl};
  box-shadow: ${({ theme }) => theme.boxShadow.md};
  transition: transform ${({ theme }) => theme.transitions.normal};
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

const CategoryIcon = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${({ theme }) => theme.spacing.md};
  
  svg {
    color: #fff;
    font-size: 1.5rem;
  }
`;

const CategoryTitle = styled.h3`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  color: ${({ theme }) => theme.colors.text};
`;

const SkillList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SkillItem = styled.li`
  margin-bottom: ${({ theme }) => theme.spacing.md};
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SkillName = styled.h4`
  font-size: ${({ theme }) => theme.fontSizes.md};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

const SkillLevel = styled.div`
  height: 10px;
  background-color: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  overflow: hidden;
`;

const SkillProgress = styled.div<{ level: number }>`
  height: 100%;
  width: ${({ level }) => `${level}%`};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
`;

interface Skill {
  name: string;
  level: number; // 0-100
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: Skill[];
}

const skillsData: SkillCategory[] = [
  {
    title: 'Linguagens de Programação',
    icon: <FiCode />,
    skills: [
      { name: 'JavaScript/TypeScript', level: 70 },
      { name: 'C#', level: 60 },
      { name: 'C', level: 40 },
    ],
  },
  {
    title: 'Backend',
    icon: <FiServer />,
    skills: [
      { name: 'Node.js', level: 65 },
      { name: 'Nest.js', level: 60 },
      { name: 'APIs RESTful', level: 70 },
      { name: 'Express', level: 65 },
    ],
  },
  {
    title: 'Frontend/Mobile',
    icon: <FiSmartphone />,
    skills: [
      { name: 'React Native', level: 70 },
      { name: 'TypeScript', level: 65 },
    ],
  },
  {
    title: 'Banco de Dados',
    icon: <FiDatabase />,
    skills: [
      { name: 'PostgreSQL', level: 60 },
      { name: 'Oracle', level: 55 },
      { name: 'PL/SQL', level: 50 },
    ],
  },
  {
    title: 'Ferramentas & Metodologias',
    icon: <FiGitBranch />,
    skills: [
      { name: 'Git', level: 75 },
      { name: 'GitHub', level: 70 },
      { name: 'Scrum', level: 65 },
      { name: 'Desenvolvimento Ágil', level: 60 },
      { name: 'Testes Unitários', level: 50 },
    ],
  },
  {
    title: 'Idiomas',
    icon: <FiGlobe />,
    skills: [
      { name: 'Português', level: 100 },
      { name: 'Inglês', level: 70 },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <SkillsSection>
      <SectionTitle>Minhas Habilidades</SectionTitle>
      <SkillsGrid>
        {skillsData.map((category, index) => (
          <SkillCategory key={index}>
            <CategoryHeader>
              <CategoryIcon>{category.icon}</CategoryIcon>
              <CategoryTitle>{category.title}</CategoryTitle>
            </CategoryHeader>
            <SkillList>
              {category.skills.map((skill, skillIndex) => (
                <SkillItem key={skillIndex}>
                  <SkillName>{skill.name}</SkillName>
                  <SkillLevel>
                    <SkillProgress level={skill.level} />
                  </SkillLevel>
                </SkillItem>
              ))}
            </SkillList>
          </SkillCategory>
        ))}
      </SkillsGrid>
    </SkillsSection>
  );
};

export default Skills;