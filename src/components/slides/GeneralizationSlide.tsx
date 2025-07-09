
import React from 'react';
import { Database, Shuffle, Settings, Zap } from 'lucide-react';

const GeneralizationSlide = () => {
  return (
    <div className="py-12 animate-fade-in">
      <h1 className="text-5xl font-bold text-white text-center mb-12">
        Generalization & Maintenance
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* External Configuration */}
        <div className="space-y-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="flex items-center mb-6">
              <Database className="w-8 h-8 text-blue-400 mr-4" />
              <h3 className="text-2xl font-semibold text-white">External Configuration</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-lg font-medium text-blue-300 mb-2">Move to Config Files</h4>
                <p className="text-gray-200">Transfer hardcoded lists to external JSON/YAML files</p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-lg font-medium text-blue-300 mb-2">Database Integration</h4>
                <p className="text-gray-200">Store districts, states, and categories in database tables</p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-lg font-medium text-blue-300 mb-2">Dynamic Updates</h4>
                <p className="text-gray-200">Enable real-time updates without code deployment</p>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="flex items-center mb-6">
              <Shuffle className="w-8 h-8 text-purple-400 mr-4" />
              <h3 className="text-2xl font-semibold text-white">Fuzzy Matching</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-lg font-medium text-purple-300 mb-2">Levenshtein Distance</h4>
                <p className="text-gray-200">Handle typos and spelling variations intelligently</p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-lg font-medium text-purple-300 mb-2">Similarity Threshold</h4>
                <p className="text-gray-200">Configure acceptable similarity scores for matching</p>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Optimization */}
        <div className="space-y-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="flex items-center mb-6">
              <Zap className="w-8 h-8 text-yellow-400 mr-4" />
              <h3 className="text-2xl font-semibold text-white">Performance Optimization</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-lg font-medium text-yellow-300 mb-2">Preprocessing</h4>
                <p className="text-gray-200">Lowercase and normalize lists once during initialization</p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-lg font-medium text-yellow-300 mb-2">Set Operations</h4>
                <p className="text-gray-200">Use sets instead of lists for O(1) lookup performance</p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-lg font-medium text-yellow-300 mb-2">Caching</h4>
                <p className="text-gray-200">Cache frequently accessed data and computation results</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <div className="flex items-center mb-6">
              <Settings className="w-8 h-8 text-green-400 mr-4" />
              <h3 className="text-2xl font-semibold text-white">Benefits</h3>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-400 rounded-full mr-3"></div>
                <span className="text-gray-200">Easier maintenance and updates</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-400 rounded-full mr-3"></div>
                <span className="text-gray-200">Better typo tolerance</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-400 rounded-full mr-3"></div>
                <span className="text-gray-200">Improved performance</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-yellow-400 rounded-full mr-3"></div>
                <span className="text-gray-200">Scalable architecture</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeneralizationSlide;
