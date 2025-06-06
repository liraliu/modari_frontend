import React from 'react';
import { Bot, ArrowRight, Play } from 'lucide-react';
import { guarantees } from '../../data/pricing';

const CTA = () => {
  return (
    <section className="relative z-10 px-8 py-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/40 border-2 border-purple-500/40 rounded-3xl p-16 backdrop-blur-sm relative overflow-hidden">
          {/* Background animation elements */}
          <div className="absolute inset-0">
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className="absolute w-2 h-2 bg-purple-400 rounded-full animate-ping"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              ></div>
            ))}
          </div>
          
          <div className="relative z-10 text-center">
            <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
              Ready to Secure Your Community?
            </h2>
            <p className="text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              Join thousands of Discord servers already protected by Modari's advanced AI moderation system. 
              Deploy in seconds, protect for years.
            </p>
            
            <div className="flex items-center justify-center space-x-8">
              <button className="bg-gradient-to-r from-purple-600 to-purple-700 px-12 py-6 rounded-2xl hover:from-purple-700 hover:to-purple-800 transition-all transform hover:scale-110 flex items-center space-x-4 text-2xl font-bold shadow-2xl shadow-purple-900/50 group">
                <Bot className="w-8 h-8 group-hover:scale-110 transition-transform" />
                <span>Add Modari to Discord</span>
                <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
              </button>
              
              <button className="border-2 border-purple-500 px-12 py-6 rounded-2xl hover:bg-purple-500/20 hover:border-purple-400 transition-all transform hover:scale-110 flex items-center space-x-4 text-2xl font-semibold group">
                <Play className="w-8 h-8 group-hover:scale-110 transition-transform" />
                <span>Start Free Trial</span>
              </button>
            </div>
            
            <div className="mt-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-purple-300">{guarantee.value}</div>
                  <div className="text-gray-400">{guarantee.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 