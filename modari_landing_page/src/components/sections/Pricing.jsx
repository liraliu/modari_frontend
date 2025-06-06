import React from 'react';
import { Zap, Globe, Shield, Star, Check, ArrowRight } from 'lucide-react';
import { pricingFeatures, pricingBenefits } from '../../data/pricing';

const Pricing = () => {
  return (
    <section id="pricing" className="relative z-10 px-8 py-24">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 gap-16 items-center">
          {/* Left side - Pricing info */}
          <div>
            <h2 className="text-6xl font-bold mb-8 bg-gradient-to-r from-purple-300 to-purple-100 bg-clip-text text-transparent">
              Simple Pricing
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-400 to-transparent mb-8"></div>
            
            <p className="text-2xl text-gray-400 mb-8 leading-relaxed">
              One plan. All features. Unlimited protection for your entire Discord ecosystem.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-lg">Instant Deployment</div>
                  <div className="text-gray-400">Deploy to your server immediately after purchase</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-lg">Global Coverage</div>
                  <div className="text-gray-400">24/7 monitoring across all time zones</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-white font-semibold text-lg">Enterprise Security</div>
                  <div className="text-gray-400">Bank-level encryption and data protection</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Pricing card */}
          <div>
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/40 border-2 border-purple-400/50 rounded-3xl p-10 backdrop-blur-sm relative overflow-hidden transform hover:scale-105 transition-all duration-700 hover:shadow-2xl hover:shadow-purple-500/50">
              {/* Animated background elements */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-purple-500/10 rounded-full -translate-y-20 translate-x-20 animate-pulse"></div>
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-600/10 rounded-full translate-y-16 -translate-x-16 animate-pulse"></div>
              
              {/* Premium badge */}
              <div className="absolute top-6 right-6">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 px-4 py-2 rounded-full text-sm font-bold flex items-center space-x-2 animate-pulse">
                  <Star className="w-4 h-4" />
                  <span>PRO</span>
                </div>
              </div>

              <div className="relative z-10">
                <div className="text-center mb-10">
                  <h3 className="text-3xl font-bold text-white mb-6">Modari Pro</h3>
                  <div className="flex items-center justify-center mb-4">
                    <span className="text-6xl font-bold text-purple-300">$25</span>
                    <span className="text-gray-400 ml-3 text-xl">/month</span>
                  </div>
                  <p className="text-gray-400 text-lg">or $270/year (save $30)</p>
                </div>

                <div className="space-y-5 mb-10">
                  {pricingFeatures.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-4 group">
                      <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300 text-lg group-hover:text-white transition-colors">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="w-full bg-gradient-to-r from-purple-600 to-purple-700 py-5 rounded-2xl hover:from-purple-700 hover:to-purple-800 transition-all transform hover:scale-105 flex items-center justify-center space-x-4 text-xl font-bold shadow-2xl shadow-purple-900/50 group">
                  <Zap className="w-6 h-6 group-hover:scale-110 transition-transform" />
                  <span>Upgrade to Pro</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                </button>

                <p className="text-center text-gray-400 mt-6 text-lg">
                  ⚡ Instant Access - Deploy immediately after purchase
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 