
import React from 'react';
import { Brain, Cpu } from 'lucide-react';

const TitleSlide = () => {
  return (
    <div className="text-center py-20 animate-fade-in">
      <div className="mb-8">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <Brain className="w-24 h-24 text-blue-400 animate-pulse" />
            <Cpu className="w-12 h-12 text-purple-400 absolute -bottom-2 -right-2" />
          </div>
        </div>
        <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
          NLP Logic Refinement
        </h1>
        <h2 className="text-4xl font-semibold text-blue-300 mb-8">
          for College Recommendation System
        </h2>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
      </div>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
        Enhancing intelligent entity extraction and recommendation accuracy through advanced NLP techniques
      </p>
    </div>
  );
};

export default TitleSlide;
