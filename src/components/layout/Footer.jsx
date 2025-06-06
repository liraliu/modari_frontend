import React from 'react';
import { Bot } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-10 px-8 py-16 border-t border-purple-500/20">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-4 gap-12 mb-12">
          <div className="col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl flex items-center justify-center">
                <Bot className="w-7 h-7 text-white" />
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-purple-200 bg-clip-text text-transparent">
                MODARI
              </span>
            </div>
            <p className="text-gray-400 text-lg max-w-md leading-relaxed">
              The most advanced AI-powered Discord moderation bot. Protecting communities worldwide with cutting-edge technology.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Product</h4>
            <ul className="space-y-3">
              <li><a href="#features" className="text-gray-400 hover:text-purple-400 transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-purple-400 transition-colors">Pricing</a></li>
              <li><a href="#demo" className="text-gray-400 hover:text-purple-400 transition-colors">Demo</a></li>
              <li><a href="#docs" className="text-gray-400 hover:text-purple-400 transition-colors">Documentation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              <li><a href="#help" className="text-gray-400 hover:text-purple-400 transition-colors">Help Center</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-purple-400 transition-colors">Contact Us</a></li>
              <li><a href="#status" className="text-gray-400 hover:text-purple-400 transition-colors">Status Page</a></li>
              <li><a href="#discord" className="text-gray-400 hover:text-purple-400 transition-colors">Discord Server</a></li>
            </ul>
          </div>
        </div>
        
        <div className="flex items-center justify-between pt-8 border-t border-purple-500/20">
          <div className="text-gray-400">
            © 2025 Modari AI. Securing Discord communities worldwide.
          </div>
          <div className="flex items-center space-x-6">
            <a href="#privacy" className="text-gray-400 hover:text-purple-400 transition-colors">Privacy</a>
            <a href="#terms" className="text-gray-400 hover:text-purple-400 transition-colors">Terms</a>
            <a href="#security" className="text-gray-400 hover:text-purple-400 transition-colors">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 