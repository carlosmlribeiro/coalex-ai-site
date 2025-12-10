import React from 'react';
import { AlertTriangle } from 'lucide-react';

const Problem = () => {
  return (
    <section id="problem" className="py-20 bg-gradient-to-br from-red-50 to-orange-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <AlertTriangle className="h-16 w-16 text-red-500" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              The AI Pilot Purgatory
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto">
              It's easier than ever to build AI-powered software. But here's something shocking:
            </p>
            <p className="text-2xl md:text-3xl font-bold text-red-600 mb-6">
              You have a 10-15x higher probability of climbing Mount Everest than successfully deploying an AI Agent to production.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-red-500">
              <div className="text-4xl font-bold text-red-600 mb-2">95%</div>
              <p className="text-gray-700 font-semibold mb-2">of generative AI pilots</p>
              <p className="text-gray-600">fail to deliver any measurable business impact</p>
              <p className="text-sm text-gray-500 mt-4 italic">— MIT NANDA Report</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-orange-500">
              <div className="text-4xl font-bold text-orange-600 mb-2">4 out of 33</div>
              <p className="text-gray-700 font-semibold mb-2">AI proofs of concept</p>
              <p className="text-gray-600">actually graduate to production</p>
              <p className="text-sm text-gray-500 mt-4 italic">— IDC Research</p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md border-t-4 border-yellow-500">
              <div className="text-4xl font-bold text-yellow-600 mb-2">43% → 27%</div>
              <p className="text-gray-700 font-semibold mb-2">Executive trust in AI</p>
              <p className="text-gray-600">has crashed in just one year</p>
              <p className="text-sm text-gray-500 mt-4 italic">— Capgemini Research</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">The Root Cause</h3>
            <p className="text-lg text-gray-700 mb-4">
              Traditional software had a defined QA period. Pre-gen AI had expensive training phases.
              But <span className="font-semibold text-red-600">generative AI? It's chaos</span> — constantly fluctuating quality with no clear path to stability.
            </p>
            <p className="text-lg text-gray-700">
              What's missing: <span className="font-semibold text-primary-600">a common language between developers and stakeholders.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
