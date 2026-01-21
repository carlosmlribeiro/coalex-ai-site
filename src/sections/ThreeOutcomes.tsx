import React from 'react';
import { TrendingUp, Users, Shield } from 'lucide-react';

const ThreeOutcomes = () => {
  return (
    <section id="outcomes" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Three Outcomes That Matter
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Coalex bridges AI development and executive decision-making with three powerful outcomes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Outcome 1: Auto-improving AI */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="bg-blue-500 p-4 rounded-full">
                  <TrendingUp className="h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">
                Auto-Improving AI
              </h3>
              <p className="text-gray-700 mb-6 text-center text-lg font-semibold">
                Your AI doesn't just run—it learns continuously
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 text-xl">✓</span>
                  <span>Every human interaction creates training data</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 text-xl">✓</span>
                  <span>Automated evaluation creation builds test suites</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 text-xl">✓</span>
                  <span>Continuous feedback loop improves accuracy</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2 text-xl">✓</span>
                  <span>Generate proprietary fine-tuning datasets</span>
                </li>
              </ul>
            </div>

            {/* Outcome 2: Future of Work */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="bg-green-500 p-4 rounded-full">
                  <Users className="h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">
                Future of Work
              </h3>
              <p className="text-gray-700 mb-6 text-center text-lg font-semibold">
                Transform your workforce into AI supervisors
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span>Augment employees, don't replace them</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span>Shift from repetitive tasks to training AI</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span>Like supermarket cashiers → self-checkout supervisors</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span>Upskill your team for the AI era</span>
                </li>
              </ul>
            </div>

            {/* Outcome 3: Compliance */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex justify-center mb-6">
                <div className="bg-purple-500 p-4 rounded-full">
                  <Shield className="h-10 w-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 text-center">
                Compliance in a Box
              </h3>
              <p className="text-gray-700 mb-6 text-center text-lg font-semibold">
                EU AI Act ready, complete audit trails
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2 text-xl">✓</span>
                  <span>Built-in compliance for 2026 regulations</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2 text-xl">✓</span>
                  <span>Complete audit trail for every decision</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2 text-xl">✓</span>
                  <span>Built-in fairness toolkit prevents bias</span>
                </li>
                <li className="flex items-start">
                  <span className="text-purple-500 mr-2 text-xl">✓</span>
                  <span>Sleep better with compliant, auditable AI</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-16 text-center bg-gradient-to-r from-primary-50 to-primary-100 p-8 rounded-xl">
            <blockquote className="text-2xl italic text-gray-700 mb-4">
              "The future of AI is not about replacing humans, it's about augmenting human capabilities."
            </blockquote>
            <p className="text-lg font-semibold text-gray-900">— Sundar Pichai, Google CEO</p>
            <p className="text-gray-600 mt-4">This is our architecture. This is our product. This is our belief.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeOutcomes;
