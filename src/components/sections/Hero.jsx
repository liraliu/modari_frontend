import React, { useRef } from 'react';
import { Play, ArrowRight, Eye, ChevronDown, Shield, Activity, Cpu, Lock, Check } from 'lucide-react';

const Hero = ({ isLoaded }) => {
  const heroRef = useRef(null);

  return (
    <section ref={heroRef} className="relative z-10 px-8 py-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-12 gap-12 items-center min-h-[70vh]">
          {/* Left side - Main content */}
          <div className="col-span-7">
            <div className={`transition-all duration-1500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
              <div className="flex items-center space-x-4 mb-8">
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-ping"></div>
                <span className="text-purple-300 text-lg font-medium tracking-wider">AI POWERED DISCORD MODERATION</span>
                <div className="flex-1 h-0.5 bg-gradient-to-r from-purple-400 to-transparent"></div>
              </div>
              
              <h1 className="text-8xl font-bold mb-8 leading-none">
                <span className="block bg-gradient-to-r from-purple-300 via-purple-100 to-purple-300 bg-clip-text text-transparent animate-pulse">
                  MODARI
                </span>
                <span className="block text-4xl font-light text-gray-300 mt-4">
                  Advanced AI Protection
                </span>
              </h1>
              
              <p className="text-2xl text-gray-400 mb-12 max-w-2xl leading-relaxed">
                No more hassle. No more stress. Revolutionary AI technology that keeps your Discord community safe, clean, and thriving with unmatched precision.
              </p>
              
              <div className="flex items-center space-x-6">
                <a 
                  href="#cta"
                  className="bg-gradient-to-r from-purple-600 to-purple-700 px-10 py-5 rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 flex items-center space-x-4 text-xl font-semibold group"
                >
                  <Play className="w-6 h-6 transition-transform group-hover:scale-110" />
                  <span>Deploy Now</span>
                  <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-2" />
                </a>
                <button className="border-2 border-purple-500 px-10 py-5 rounded-xl hover:bg-purple-500/20 hover:border-purple-400 transition-all flex items-center space-x-4 text-xl group">
                  <Eye className="w-6 h-6 transition-transform group-hover:scale-110" />
                  <span>Live Demo</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right side - Animated dashboard preview */}
          <div className="col-span-5">
            <div className={`transition-all duration-2000 delay-500 ${isLoaded ? 'opacity-100 translate-x-0 rotate-0' : 'opacity-0 translate-x-20 rotate-12'}`}>
              <div className="relative">
                {/* Floating dashboard mockup */}
                <div className="bg-gradient-to-br from-purple-900/40 to-purple-800/30 border border-purple-500/30 rounded-2xl p-8 backdrop-blur-sm transform hover:scale-105 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-500/50">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-sm text-gray-400">Modari Dashboard</div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-green-500/20 border border-green-500/30 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Shield className="w-5 h-5 text-green-400" />
                        <span className="text-green-300">Threats Blocked</span>
                      </div>
                      <span className="text-green-400 font-bold">1,247</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-blue-500/20 border border-blue-500/30 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Activity className="w-5 h-5 text-blue-400" />
                        <span className="text-blue-300">Active Monitoring</span>
                      </div>
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-purple-500/20 border border-purple-500/30 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Cpu className="w-5 h-5 text-purple-400" />
                        <span className="text-purple-300">AI Accuracy</span>
                      </div>
                      <span className="text-purple-400 font-bold">99.7%</span>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements around dashboard */}
                <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center animate-bounce">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center animate-pulse">
                  <Check className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center animate-bounce">
          <span className="text-gray-400 text-sm mb-2">Scroll to explore</span>
          <ChevronDown className="w-6 h-6 text-purple-400" />
        </div>
      </div>
    </section>
  );
};

export default Hero; 