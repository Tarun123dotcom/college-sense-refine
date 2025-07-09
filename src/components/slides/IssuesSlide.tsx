
import React from 'react';
import { AlertTriangle, X, Target, RefreshCw, Database } from 'lucide-react';

const IssuesSlide = () => {
  const issues = [
    {
      icon: Target,
      title: "False Positives",
      description: "Substring matching causes errors (e.g., 'East' in 'East Godavari' and 'East Siang')",
      severity: "high"
    },
    {
      icon: X,
      title: "No Typo Tolerance",
      description: "No fuzzy matching for handling spelling mistakes and variations",
      severity: "medium"
    },
    {
      icon: RefreshCw,
      title: "Limited Entity Extraction",
      description: "Only first match is used, potentially missing other relevant entities",
      severity: "medium"
    },
    {
      icon: AlertTriangle,
      title: "Brittle Comparative Phrases",
      description: "Limited and typo-prone handling of rating comparisons",
      severity: "high"
    },
    {
      icon: Database,
      title: "Maintenance Overhead",
      description: "Hardcoded lists are difficult to maintain and update",
      severity: "high"
    }
  ];

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'high': return 'border-red-500 bg-red-500/10';
      case 'medium': return 'border-yellow-500 bg-yellow-500/10';
      default: return 'border-blue-500 bg-blue-500/10';
    }
  };

  return (
    <div className="py-12 animate-fade-in">
      <h1 className="text-5xl font-bold text-white text-center mb-12">
        Issues Identified
      </h1>
      
      <div className="space-y-6">
        {issues.map((issue, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 border-2 ${getSeverityColor(issue.severity)} backdrop-blur-sm transition-all duration-300 hover:scale-105`}
          >
            <div className="flex items-start">
              <issue.icon className="w-8 h-8 text-white mr-4 mt-1 flex-shrink-0" />
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-white mb-3">{issue.title}</h3>
                <p className="text-gray-200 text-lg leading-relaxed">{issue.description}</p>
              </div>
              <div className={`px-3 py-1 rounded-full text-sm font-medium ${
                issue.severity === 'high' ? 'bg-red-500 text-white' : 
                issue.severity === 'medium' ? 'bg-yellow-500 text-black' : 'bg-blue-500 text-white'
              }`}>
                {issue.severity.toUpperCase()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IssuesSlide;
