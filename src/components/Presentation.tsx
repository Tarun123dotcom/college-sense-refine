
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Circle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import TitleSlide from './slides/TitleSlide';
import CurrentLogicSlide from './slides/CurrentLogicSlide';
import IssuesSlide from './slides/IssuesSlide';
import ModelLoadingSlide from './slides/ModelLoadingSlide';
import EntityExtractionSlide from './slides/EntityExtractionSlide';
import FeeCategorySlide from './slides/FeeCategorySlide';
import GeneralizationSlide from './slides/GeneralizationSlide';
import ErrorHandlingSlide from './slides/ErrorHandlingSlide';
import ReturnStructureSlide from './slides/ReturnStructureSlide';
import SummarySlide from './slides/SummarySlide';

const Presentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    { component: TitleSlide, title: "Title" },
    { component: CurrentLogicSlide, title: "Current NLP Logic Overview" },
    { component: IssuesSlide, title: "Issues Identified" },
    { component: ModelLoadingSlide, title: "Model Loading Improvements" },
    { component: EntityExtractionSlide, title: "Entity Extraction Enhancements" },
    { component: FeeCategorySlide, title: "Fee Category & Rating Extraction" },
    { component: GeneralizationSlide, title: "Generalization & Maintenance" },
    { component: ErrorHandlingSlide, title: "Error Handling & Logging" },
    { component: ReturnStructureSlide, title: "Return Structure & Output" },
    { component: SummarySlide, title: "Summary & Benefits" }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const CurrentSlideComponent = slides[currentSlide].component;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex flex-col">
      {/* Slide Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-6xl">
          <CurrentSlideComponent />
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="bg-black/20 backdrop-blur-sm p-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          {/* Previous Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="text-white hover:bg-white/20"
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous
          </Button>

          {/* Slide Indicators */}
          <div className="flex items-center space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-white'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="text-white hover:bg-white/20"
          >
            Next
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>

        {/* Slide Counter */}
        <div className="text-center mt-2">
          <span className="text-white/80 text-sm">
            {currentSlide + 1} of {slides.length}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
