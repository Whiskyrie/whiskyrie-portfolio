import { useState, useEffect } from 'react';

interface Viewport {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

export const useViewport = (): Viewport => {
  const [viewport, setViewport] = useState<Viewport>({
    isMobile: false,
    isTablet: false,
    isDesktop: false
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setViewport({
        isMobile: width < 640,
        isTablet: width >= 640 && width < 1024,
        isDesktop: width >= 1024
      });
    };

    // Inicializa
    handleResize();

    // Adiciona listener
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return viewport;
};