
import React from 'react';
import { DollarSign, Star, MessageSquare, TrendingUp } from 'lucide-react';

const FeeCategorySlide = () => {
  return (
    <div className="py-12 animate-fade-in">
      <h1 className="text-5xl font-bold text-white text-center mb-12">
        Fee Category & Rating Extraction
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Fee Category Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <div className="flex items-center mb-6">
            <DollarSign className="w-8 h-8 text-green-400 mr-4" />
            <h3 className="text-2xl font-semibold text-white">Fee Category Detection</h3>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="text-lg font-medium text-green-300 mb-2">NLP Phrase Matching</h4>
              <p className="text-gray-200">Use advanced phrase matching techniques for robust fee detection</p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="text-lg font-medium text-green-300 mb-2">Pattern Recognition</h4>
              <p className="text-gray-200">Implement regex patterns to identify fee-related terms and amounts</p>
            </div>

            <div className="mt-6">
              <h5 className="text-sm font-medium text-gray-300 mb-2">Examples:</h5>
              <div className="space-y-1 text-sm text-gray-400">
                <div>"affordable colleges" → Low Fee</div>
                <div>"expensive universities" → High Fee</div>
                <div>"budget-friendly options" → Low Fee</div>
              </div>
            </div>
          </div>
        </div>

        {/* Rating Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <div className="flex items-center mb-6">
            <Star className="w-8 h-8 text-yellow-400 mr-4" />
            <h3 className="text-2xl font-semibold text-white">Rating Extraction</h3>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="text-lg font-medium text-yellow-300 mb-2">Expanded Detection</h4>
              <p className="text-gray-200">Include integers and contextual phrases like "4 star college"</p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="text-lg font-medium text-yellow-300 mb-2">Comparative Analysis</h4>
              <p className="text-gray-200">Detect phrases like "at least", "more than", "less than"</p>
            </div>

            <div className="mt-6">
              <h5 className="text-sm font-medium text-gray-300 mb-2">Examples:</h5>
              <div className="space-y-1 text-sm text-gray-400">
                <div>"5 star rated college" → Rating: 5</div>
                <div>"at least 4.5 rating" → Rating: ≥4.5</div>
                <div>"more than 3 stars" → Rating: >3</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comparative Phrases Section */}
      <div className="mt-12 bg-gradient-to-r from-purple-500/10 to-blue-500/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
        <div className="flex items-center mb-6">
          <MessageSquare className="w-8 h-8 text-purple-400 mr-4" />
          <h3 className="text-2xl font-semibold text-white">NLP-Powered Comparative Detection</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h4 className="text-lg font-medium text-white mb-2">Minimum Thresholds</h4>
            <p className="text-gray-200 text-sm">"at least", "minimum", "above"</p>
          </div>
          
          <div className="text-center">
            <TrendingUp className="w-12 h-12 text-green-400 mx-auto mb-4 transform rotate-180" />
            <h4 className="text-lg font-medium text-white mb-2">Maximum Limits</h4>
            <p className="text-gray-200 text-sm">"at most", "maximum", "below"</p>
          </div>
          
          <div className="text-center">
            <TrendingUp className="w-12 h-12 text-yellow-400 mx-auto mb-4 transform rotate-90" />
            <h4 className="text-lg font-medium text-white mb-2">Range Queries</h4>
            <p className="text-gray-200 text-sm">"between", "from X to Y"</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeeCategorySlide;
