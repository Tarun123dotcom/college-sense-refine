
import React from 'react';
import { Shield, FileText, AlertTriangle, CheckCircle } from 'lucide-react';

const ErrorHandlingSlide = () => {
  return (
    <div className="py-12 animate-fade-in">
      <h1 className="text-5xl font-bold text-white text-center mb-12">
        Error Handling & Logging
      </h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Current Issues */}
        <div className="space-y-8">
          <div className="bg-red-500/10 backdrop-blur-sm rounded-xl p-8 border border-red-500/20">
            <div className="flex items-center mb-6">
              <AlertTriangle className="w-8 h-8 text-red-400 mr-4" />
              <h3 className="text-2xl font-semibold text-white">Current Issues</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-lg font-medium text-red-300 mb-2">Print Statements</h4>
                <p className="text-gray-200">Using print() for debugging makes traceability difficult</p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-lg font-medium text-red-300 mb-2">No Error Handling</h4>
                <p className="text-gray-200">Missing try-catch blocks for NLP operations</p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-lg font-medium text-red-300 mb-2">Silent Failures</h4>
                <p className="text-gray-200">Errors occur without proper notification or recovery</p>
              </div>
            </div>
          </div>
        </div>

        {/* Proposed Solutions */}
        <div className="space-y-8">
          <div className="bg-green-500/10 backdrop-blur-sm rounded-xl p-8 border border-green-500/20">
            <div className="flex items-center mb-6">
              <CheckCircle className="w-8 h-8 text-green-400 mr-4" />
              <h3 className="text-2xl font-semibold text-white">Proposed Solutions</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-lg font-medium text-green-300 mb-2">Structured Logging</h4>
                <p className="text-gray-200">Replace print statements with proper logging framework</p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-lg font-medium text-green-300 mb-2">Comprehensive Error Handling</h4>
                <p className="text-gray-200">Add try-catch blocks for all NLP and extraction steps</p>
              </div>
              
              <div className="bg-white/5 rounded-lg p-4">
                <h4 className="text-lg font-medium text-green-300 mb-2">Graceful Degradation</h4>
                <p className="text-gray-200">Continue processing even when some components fail</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Implementation Details */}
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <div className="flex items-center mb-6">
            <FileText className="w-8 h-8 text-blue-400 mr-4" />
            <h3 className="text-2xl font-semibold text-white">Logging Framework</h3>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
              <span className="text-white">DEBUG</span>
              <span className="text-gray-400">Detailed extraction steps</span>
            </div>
            <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
              <span className="text-white">INFO</span>
              <span className="text-gray-400">Successful operations</span>
            </div>
            <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
              <span className="text-white">WARNING</span>
              <span className="text-gray-400">Fallback scenarios</span>
            </div>
            <div className="flex items-center justify-between bg-white/5 rounded-lg p-3">
              <span className="text-white">ERROR</span>
              <span className="text-gray-400">Critical failures</span>
            </div>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
          <div className="flex items-center mb-6">
            <Shield className="w-8 h-8 text-purple-400 mr-4" />
            <h3 className="text-2xl font-semibold text-white">Error Recovery</h3>
          </div>
          
          <div className="space-y-4">
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="text-lg font-medium text-purple-300 mb-2">Fallback Mechanisms</h4>
              <p className="text-gray-200 text-sm">Use backup methods when primary extraction fails</p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="text-lg font-medium text-purple-300 mb-2">Partial Results</h4>
              <p className="text-gray-200 text-sm">Return available data even if some extraction fails</p>
            </div>
            
            <div className="bg-white/5 rounded-lg p-4">
              <h4 className="text-lg font-medium text-purple-300 mb-2">User Notification</h4>
              <p className="text-gray-200 text-sm">Inform users about limitations in processing</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorHandlingSlide;
