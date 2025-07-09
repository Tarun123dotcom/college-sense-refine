
import React from 'react';
import { Package, Trash2, FileSearch, Bug } from 'lucide-react';

const ReturnStructureSlide = () => {
  return (
    <div className="py-12 animate-fade-in">
      <h1 className="text-5xl font-bold text-white text-center mb-12">
        Return Structure & Output
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Current State */}
        <div className="bg-red-500/10 backdrop-blur-sm rounded-xl p-8 border border-red-500/20">
          <div className="flex items-center mb-6">
            <Package className="w-8 h-8 text-red-400 mr-4" />
            <h3 className="text-2xl font-semibold text-white">Current Issues</h3>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="text-lg font-medium text-red-300 mb-2">Cluttered Output</h4>
              <p className="text-gray-200">Entity dictionary contains empty keys and null values</p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="text-lg font-medium text-red-300 mb-2">No Visibility</h4>
              <p className="text-gray-200">Final extracted entities are not logged for debugging</p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="text-lg font-medium text-red-300 mb-2">Inconsistent Format</h4>
              <p className="text-gray-200">Output structure varies depending on extraction success</p>
            </div>
          </div>

          <div className="mt-6 bg-black/20 rounded-lg p-4">
            <h5 className="text-sm font-medium text-gray-300 mb-2">Example Current Output:</h5>
            <pre className="text-xs text-gray-400 overflow-x-auto">
{`{
  "districts": ["Mumbai"],
  "states": [],
  "fee_category": null,
  "rating": "",
  "specialization": []
}`}
            </pre>
          </div>
        </div>

        {/* Improved Structure */}
        <div className="bg-green-500/10 backdrop-blur-sm rounded-xl p-8 border border-green-500/20">
          <div className="flex items-center mb-6">
            <Package className="w-8 h-8 text-green-400 mr-4" />
            <h3 className="text-2xl font-semibold text-white">Improved Structure</h3>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="text-lg font-medium text-green-300 mb-2">Clean Output</h4>
              <p className="text-gray-200">Remove empty keys and normalize values before returning</p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="text-lg font-medium text-green-300 mb-2">Comprehensive Logging</h4>
              <p className="text-gray-200">Log final extracted entities for debugging and audit</p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="text-lg font-medium text-green-300 mb-2">Standardized Format</h4>
              <p className="text-gray-200">Consistent structure regardless of extraction results</p>
            </div>
          </div>

          <div className="mt-6 bg-black/20 rounded-lg p-4">
            <h5 className="text-sm font-medium text-gray-300 mb-2">Example Improved Output:</h5>
            <pre className="text-xs text-gray-400 overflow-x-auto">
{`{
  "districts": ["mumbai"],
  "states": ["maharashtra"],
  "fee_category": "medium",
  "rating": {
    "value": 4.5,
    "operator": ">="
  },
  "specialization": ["engineering"]
}`}
            </pre>
          </div>
        </div>
      </div>

      {/* Implementation Steps */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="text-center">
            <Trash2 className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Data Cleanup</h3>
            <p className="text-gray-200 text-sm">
              Remove empty arrays, null values, and normalize data types before returning results
            </p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="text-center">
            <FileSearch className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Audit Logging</h3>
            <p className="text-gray-200 text-sm">
              Log final extracted entities with timestamps for debugging and performance analysis
            </p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          <div className="text-center">
            <Bug className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Debug Support</h3>
            <p className="text-gray-200 text-sm">
              Include metadata about extraction confidence and method used for better debugging
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnStructureSlide;
