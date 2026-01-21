import React from 'react';

const WhyCoalex = () => {
  return (
    <section id="why" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <header className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">The Solution</h2>
          <p className="text-2xl md:text-3xl font-semibold text-primary-600 mb-4">
            Some things AI can handle. For everything else, there's Coalex.ai
          </p>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            We bridge AI development and executive decision-making with the governance layer for the AI Development Lifecycle
          </p>
        </header>

        <div className="bg-white p-8 md:p-12 rounded-xl shadow-xl mb-12">
          <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">How It Works</h3>
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-primary-100 p-4 rounded-lg mb-4">
                <p className="font-bold text-primary-700">Your AI Agents</p>
              </div>
              <p className="text-sm text-gray-600">Seamless integration with any AI system</p>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-3xl text-primary-500">→</span>
            </div>
            <div className="text-center">
              <div className="bg-primary-100 p-4 rounded-lg mb-4">
                <p className="font-bold text-primary-700">Coalex AI Engine</p>
              </div>
              <p className="text-sm text-gray-600">Processes telemetry, identifies critical moments</p>
            </div>
            <div className="flex items-center justify-center">
              <span className="text-3xl text-primary-500">→</span>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="bg-green-100 p-4 rounded-lg mb-4">
                <p className="font-bold text-green-700">Your Domain Experts</p>
              </div>
              <p className="text-sm text-gray-600">Approve decisions in their area of expertise</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <p className="font-bold text-blue-700">Your Executives</p>
              </div>
              <p className="text-sm text-gray-600">Get actionable dashboards showing real ROI</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-gray-900">One-Line Integration</h3>
            <p className="text-gray-700 mb-4">
              No rearchitecting required. We listen to telemetry data from your existing AI systems and respond to agent escalations via our MCP server.
            </p>
            <p className="text-gray-700">
              Our AI engine routes bite-sized approval tasks to the right humans at the right time, with just the right context.
            </p>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-gray-900">Real Traction</h3>
            <p className="text-gray-700 mb-4">
              We're not just theory—we're live with our first customer, running 3 use cases over thousands of interactions in just 4 months.
            </p>
            <p className="text-gray-700">
              Your AI goes to production faster, with built-in governance and continuous improvement.
            </p>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-primary-600 to-primary-500 text-white p-8 rounded-xl">
          <p className="text-3xl font-bold mb-2">
            Other tools let you build and watch your AI.
          </p>
          <p className="text-3xl font-bold">
            Coalex lets you govern and grow it.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyCoalex;