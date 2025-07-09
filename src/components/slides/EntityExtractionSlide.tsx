
import React from 'react';
import { Search, Zap, Filter, Target } from 'lucide-react';

const EntityExtractionSlide = () => {
  const enhancements = [
    {
      icon: Target,
      title: "Word Boundary Matching",
      description: "Use regex with word boundaries or tokenization for precise district/state matching",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Filter,
      title: "Entity Normalization",
      description: "Normalize and lowercase all extracted entities for consistency",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Search,
      title: "Comprehensive Extraction",
      description: "Extract all entities of a type, not just the first/last occurrence",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="py-12 animate-fade-in">
      <h1 className="text-5xl font-bold text-white text-center mb-12">
        Entity Extraction Enhancements
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {enhancements.map((enhancement, index) => (
          <div
            key={index}
            className="relative group"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${enhancement.color} rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 h-full">
              <enhancement.icon className="w-12 h-12 text-white mb-6 mx-auto" />
              <h3 className="text-xl font-semibold text-white text-center mb-4">
                {enhancement.title}
              </h3>
              <p className="text-gray-200 text-center leading-relaxed">
                {enhancement.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20">
        <div className="flex items-center mb-6">
          <Zap className="w-8 h-8 text-yellow-400 mr-4" />
          <h3 className="text-2xl font-semibold text-white">Implementation Benefits</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <h4 className="text-lg font-medium text-blue-300">Precision Improvements</h4>
            <ul className="space-y-2 text-gray-200">
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                Eliminate false positive matches
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                Better boundary detection
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                Consistent entity formatting
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h4 className="text-lg font-medium text-green-300">Coverage Enhancements</h4>
            <ul className="space-y-2 text-gray-200">
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></div>
                Capture all relevant entities
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></div>
                Improved recommendation accuracy
              </li>
              <li className="flex items-center">
                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-3"></div>
                Better user query understanding
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EntityExtractionSlide;
