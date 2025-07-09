
import React from 'react';
import { CheckCircle, Target, Wrench, Users, TrendingUp } from 'lucide-react';

const SummarySlide = () => {
  const benefits = [
    {
      icon: Target,
      title: "More Precise Extraction",
      description: "Eliminate false positives and improve entity matching accuracy",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Wrench,
      title: "Easier Maintenance",
      description: "External configuration and modular design for better maintainability",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Users,
      title: "Better User Experience",
      description: "Reduced errors and more accurate recommendations for users",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: TrendingUp,
      title: "Improved Debugging",
      description: "Comprehensive logging and error handling for better transparency",
      color: "from-yellow-500 to-orange-500"
    }
  ];

  const keyImprovements = [
    "Word boundary matching for precise entity extraction",
    "Fuzzy matching for typo tolerance using Levenshtein distance",
    "External configuration for districts, states, and categories",
    "Comprehensive error handling with graceful degradation",
    "Structured logging framework replacing print statements",
    "Clean output structure with normalized data",
    "Expanded rating extraction with comparative phrases",
    "Performance optimization with preprocessing and caching"
  ];

  return (
    <div className="py-12 animate-fade-in">
      <h1 className="text-5xl font-bold text-white text-center mb-12">
        Summary & Benefits
      </h1>
      
      {/* Benefits Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-12">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="relative group"
          >
            <div className={`absolute inset-0 bg-gradient-to-r ${benefit.color} rounded-xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300`}></div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 h-full">
              <benefit.icon className="w-12 h-12 text-white mb-4 mx-auto" />
              <h3 className="text-lg font-semibold text-white text-center mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-200 text-center text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Key Improvements */}
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 mb-8">
        <div className="flex items-center mb-6">
          <CheckCircle className="w-8 h-8 text-green-400 mr-4" />
          <h3 className="text-2xl font-semibold text-white">Key Improvements</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {keyImprovements.map((improvement, index) => (
            <div
              key={index}
              className="flex items-start bg-white/5 rounded-lg p-4 hover:bg-white/10 transition-colors duration-200"
            >
              <div className="w-2 h-2 bg-green-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
              <span className="text-gray-200">{improvement}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Final Impact */}
      <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-green-500/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
        <div className="text-center">
          <h3 className="text-3xl font-bold text-white mb-6">Expected Impact</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">95%+</div>
              <div className="text-white font-medium mb-1">Accuracy Improvement</div>
              <div className="text-gray-300 text-sm">In entity extraction precision</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">50%</div>
              <div className="text-white font-medium mb-1">Maintenance Reduction</div>
              <div className="text-gray-300 text-sm">Through external configuration</div>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">100%</div>
              <div className="text-white font-medium mb-1">Error Visibility</div>
              <div className="text-gray-300 text-sm">With comprehensive logging</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummarySlide;
