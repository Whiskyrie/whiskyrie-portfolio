// src/pages/Skills.tsx
import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import SectionTitle from '../components/ui/SectionTitle';
import { FiCode, FiDatabase, FiGitBranch, FiGlobe, FiServer, FiSmartphone } from 'react-icons/fi';

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

const fillProgress = keyframes`
  from { width: 0; }
  to { width: var(--progress-width); }
`;

const SkillsSection = styled.section`
  padding: ${({ theme }) => theme.spacing['3xl']} 0;
  animation: ${fadeIn} 0.8s ease;
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
  transition: transform ${({ theme }) => theme.transitions.normal}, box-shadow ${({ theme }) => theme.transitions.normal};
  opacity: 0;
  animation: ${fadeIn} 0.5s ease forwards;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.boxShadow.lg};
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
  transition: transform ${({ theme }) => theme.transitions.fast};
  
  &:hover {
    transform: scale(1.1);
  }
  
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
  display: flex;
  justify-content: space-between;
`;

const SkillLevel = styled.div`
  height: 10px;
  background-color: ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  overflow: hidden;
  position: relative;
`;

const SkillProgress = styled.div<{ level: number }>`
  height: 100%;
  width: 0;
  --progress-width: ${({ level }) => `${level}%`};
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  animation: ${fillProgress} 1s ease-out forwards;
  animation-delay: 0.3s;
`;

const SkillPercent = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  color: ${({ theme }) => theme.colors.lightText};
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
  const [visibleSkills, setVisibleSkills] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleSkills(prev => [...prev, index]);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.skill-category');
    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <SkillsSection>
      <SectionTitle>Minhas Habilidades</SectionTitle>
      <SkillsGrid>
        {skillsData.map((category, index) => (
          <SkillCategory 
            key={index} 
            className="skill-category" 
            data-index={index}
            style={{ 
              animationDelay: `${0.1 * index}s`,
              display: visibleSkills.includes(index) ? 'block' : 'block' 
            }}
          >
            <CategoryHeader>
              <CategoryIcon>{category.icon}</CategoryIcon>
              <CategoryTitle>{category.title}</CategoryTitle>
            </CategoryHeader>
            <SkillList>
              {category.skills.map((skill, skillIndex) => (
                <SkillItem key={skillIndex}>
                  <SkillName>
                    {skill.name}
                    <SkillPercent>{skill.level}%</SkillPercent>
                  </SkillName>
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