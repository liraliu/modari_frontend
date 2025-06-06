import React from 'react';

const AnimatedBackground = ({ isLoaded, scrollY }) => {
  return (
    <div className="fixed inset-0 z-0">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-indigo-900/20"></div>
      
      {/* Slow moving radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(147,51,234,0.15),transparent_70%)] animate-pulse"></div>
      
      {/* Multiple PS3-style horizontal lines */}
      <div className={`absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-purple-400 to-transparent transform -translate-y-1/2 transition-all duration-3000 ${isLoaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
      <div className={`absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-300/50 to-transparent transform -translate-y-1/2 translate-y-2 transition-all duration-3000 delay-500 ${isLoaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
      <div className={`absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent transform -translate-y-1/2 -translate-y-2 transition-all duration-3000 delay-300 ${isLoaded ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}`}></div>
      
      {/* Enhanced animated particles - only scroll-based movement */}
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-purple-400 rounded-full animate-pulse"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
            transform: `translateY(${scrollY * (Math.random() * 0.3 + 0.1)}px)`
          }}
        ></div>
      ))}

      {/* Floating geometric shapes - only scroll-based movement */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`shape-${i}`}
          className="absolute border border-purple-500/20 rotate-45 animate-bounce"
          style={{
            width: `${Math.random() * 20 + 10}px`,
            height: `${Math.random() * 20 + 10}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
            transform: `translateY(${scrollY * (Math.random() * 0.2 + 0.1)}px) rotate(45deg)`
          }}
        ></div>
      ))}
    </div>
  );
};

export default AnimatedBackground; 