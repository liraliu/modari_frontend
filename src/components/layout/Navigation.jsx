import React from 'react';
import { Bot, ArrowRight } from 'lucide-react';

const Navigation = ({ isLoaded }) => {
  return (
    <nav className="relative z-10 px-8 py-6">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        <div className={`flex items-center space-x-4 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/50 animate-pulse">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <span className="text-3xl font-bold bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
            MODARI
          </span>
          <div className="w-16 h-0.5 bg-gradient-to-r from-purple-400 to-transparent ml-4"></div>
        </div>
        
        <div className={`flex items-center space-x-12 transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          <a href="#features" className="text-gray-300 hover:text-purple-400 transition-colors text-lg relative group">
            Features
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></div>
          </a>
          <a href="#pricing" className="text-gray-300 hover:text-purple-400 transition-colors text-lg relative group">
            Pricing
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></div>
          </a>
          <a href="#demo" className="text-gray-300 hover:text-purple-400 transition-colors text-lg relative group">
            Demo
            <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></div>
          </a>
          <button className="bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-3 rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 flex items-center space-x-3 text-lg font-semibold">
            <span>Add to Discord</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation; 