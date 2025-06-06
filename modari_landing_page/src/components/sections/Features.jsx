import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { features } from '../../data/features';

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(0);

  return (
    <section id="features" className="relative z-10 px-8 py-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-7xl font-bold mb-8 bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <div className="w-48 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent mx-auto mb-8"></div>
          <p className="text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
            Built for Discord communities that demand the highest level of protection, control, and insight
          </p>
        </div>

        <div className="grid grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-gradient-to-br from-purple-900/30 to-purple-800/20 border border-purple-500/20 rounded-2xl p-8 backdrop-blur-sm hover:border-purple-400/40 transition-all duration-700 cursor-pointer relative overflow-hidden ${activeFeature === index ? 'scale-105 border-purple-400/60' : 'hover:scale-105'}`}
              onMouseEnter={() => setActiveFeature(index)}
              style={{
                animationDelay: `${index * 200}ms`
              }}
            >
              {/* Animated background overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-600/0 group-hover:from-purple-500/10 group-hover:to-purple-600/5 transition-all duration-700"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:shadow-xl group-hover:shadow-purple-500/50 transition-all duration-700 group-hover:scale-110">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-purple-300 font-bold text-lg">{feature.stats}</div>
                    <div className="text-gray-400 text-sm">Performance</div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-gray-400 leading-relaxed text-lg">{feature.description}</p>
                
                <div className="mt-6 flex items-center text-purple-400 group-hover:text-purple-300 transition-colors">
                  <span className="text-sm font-medium">Learn more</span>
                  <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
              
              {/* Animated corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-2xl transform translate-x-10 -translate-y-10 group-hover:translate-x-5 group-hover:-translate-y-5 transition-transform duration-700"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features; 