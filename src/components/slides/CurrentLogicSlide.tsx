
import React from 'react';
import { CheckCircle, Settings, Database, Search, Star } from 'lucide-react';

const CurrentLogicSlide = () => {
  const features = [
    {
      icon: Settings,
      title: "spaCy Entity Extraction",
      description: "Uses spaCy for entity extraction with custom model fallback"
    },
    {
      icon: Database,
      title: "Hardcoded Lists",
      description: "Predefined lists for districts, states, and fee categories"
    },
    {
      icon: Search,
      title: "Substring Matching",
      description: "Basic keyword matching for entity identification"
    },
    {
      icon: Star,
      title: "Regex Rating Extraction",
      description: "Pattern matching for rating and score extraction"
    },
    {
      icon: CheckCircle,
      title: "Comparative Phrases",
      description: "Limited handling of comparative expressions"
    }
  ];

  return (
    <div className="py-12 animate-fade-in">
      <h1 className="text-5xl font-bold text-white text-center mb-12">
        Current NLP Logic Overview
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:scale-105"
          >
            <div className="flex items-center mb-4">
              <feature.icon className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CurrentLogicSlide;
