import { useState, useEffect } from 'react';

export const useScrollspy = (sections: string[], offset = 100) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      const activeSectionId = sections
        .map(id => {
          const element = document.getElementById(id);
          if (!element) return { id, position: -Infinity };

          const rect = element.getBoundingClientRect();
          return {
            id,
            position: rect.top + window.scrollY
          };
        })
        .filter(section => section.position <= scrollPosition)
        .sort((a, b) => b.position - a.position)[0]?.id || null;

      setActiveSection(activeSectionId);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [sections, offset]);

  return activeSection;
};