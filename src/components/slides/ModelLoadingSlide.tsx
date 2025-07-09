
import React from 'react';
import { Download, Shield, CheckCircle, AlertCircle } from 'lucide-react';

const ModelLoadingSlide = () => {
  return (
    <div className="py-12 animate-fade-in">
      <h1 className="text-5xl font-bold text-white text-center mb-12">
        Model Loading Improvements
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="flex items-center mb-6">
              <AlertCircle className="w-8 h-8 text-yellow-400 mr-4" />
              <h3 className="text-2xl font-semibold text-white">Current Challenge</h3>
            </div>
            <p className="text-gray-200 text-lg leading-relaxed">
              Custom model failures can leave the system without proper entity extraction capabilities, 
              leading to degraded performance and user experience.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="flex items-center mb-6">
              <CheckCircle className="w-8 h-8 text-green-400 mr-4" />
              <h3 className="text-2xl font-semibold text-white">Proposed Solution</h3>
            </div>
            <ul className="space-y-3 text-gray-200 text-lg">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                Log fallback events for monitoring
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                Ensure valid spaCy model is always loaded
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                Graceful degradation with backup models
              </li>
            </ul>
          </div>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl p-8 border border-white/30">
            <div className="text-center">
              <Download className="w-16 h-16 text-blue-400 mx-auto mb-6" />
              <h3 className="text-3xl font-bold text-white mb-4">Robust Loading</h3>
              <div className="space-y-4">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white">Custom Model</span>
                    <Shield className="w-5 h-5 text-green-400" />
                  </div>
                </div>
                <div className="text-gray-400">↓ Fallback ↓</div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-white">Default spaCy Model</span>
                    <Shield className="w-5 h-5 text-blue-400" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelLoadingSlide;
