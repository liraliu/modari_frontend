import { useState, useEffect } from 'react';

export const useAnimations = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    isLoaded,
    scrollY
  };
}; 