import React from 'react';
import { useAnimations } from './hooks/useAnimations';
import AnimatedBackground from './components/ui/AnimatedBackground';
import Navigation from './components/layout/Navigation';
import Hero from './components/sections/Hero';
import Stats from './components/sections/Stats';
import Features from './components/sections/Features';
import Pricing from './components/sections/Pricing';
import CTA from './components/sections/CTA';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
  const { isLoaded, scrollY } = useAnimations();

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <AnimatedBackground 
        isLoaded={isLoaded}
        scrollY={scrollY}
      />
      <Navigation isLoaded={isLoaded} />
      <Hero isLoaded={isLoaded} />
      <Stats />
      <Features />
      <Pricing />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
