import React from 'react';

const Stats = () => {
  return (
    <section className="relative z-10 px-8 py-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-6 gap-8">
          <div className="col-span-2">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by the Best
            </h2>
            <p className="text-gray-400 text-lg">
              Join thousands of Discord communities already protected by our advanced AI technology.
            </p>
          </div>
          
          <div className="col-span-4 grid grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-500 transform hover:scale-105 group">
              <div className="text-5xl font-bold text-purple-300 mb-3 group-hover:scale-110 transition-transform">99.7%</div>
              <div className="text-gray-400 text-lg">Detection Accuracy</div>
              <div className="w-full h-1 bg-purple-500/20 rounded-full mt-4 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-purple-500 to-purple-400 rounded-full w-[99.7%] animate-pulse"></div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-900/30 to-green-800/20 border border-green-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-green-400/40 transition-all duration-500 transform hover:scale-105 group">
              <div className="text-5xl font-bold text-green-300 mb-3 group-hover:scale-110 transition-transform">10k+</div>
              <div className="text-gray-400 text-lg">Servers Protected</div>
              <div className="flex items-center mt-4 space-x-1">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-2 h-6 bg-green-400 rounded-full animate-pulse" style={{animationDelay: `${i * 0.2}s`}}></div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/20 border border-blue-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-blue-400/40 transition-all duration-500 transform hover:scale-105 group">
              <div className="text-5xl font-bold text-blue-300 mb-3 group-hover:scale-110 transition-transform">24/7</div>
              <div className="text-gray-400 text-lg">AI Monitoring</div>
              <div className="flex items-center mt-4">
                <div className="w-4 h-4 bg-blue-400 rounded-full animate-ping mr-2"></div>
                <span className="text-blue-300 text-sm">Live</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-900/30 to-orange-800/20 border border-orange-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-orange-400/40 transition-all duration-500 transform hover:scale-105 group">
              <div className="text-5xl font-bold text-orange-300 mb-3 group-hover:scale-110 transition-transform">&lt;1s</div>
              <div className="text-gray-400 text-lg">Response Time</div>
              <div className="w-full h-1 bg-orange-500/20 rounded-full mt-4">
                <div className="h-full bg-gradient-to-r from-orange-500 to-orange-400 rounded-full w-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats; 