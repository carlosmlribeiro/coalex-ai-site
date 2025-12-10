import React from 'react';
import { Check, X } from 'lucide-react';

const ComparisonTable = () => {
  return (
    <section id="comparison" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Why We're Different
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
              Other tools are built for AI engineers doing technical debugging.
            </p>
            <p className="text-2xl font-bold text-primary-600">
              Coalex is built for your business.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 uppercase tracking-wider">
                      Feature
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-gray-700 uppercase tracking-wider bg-red-50">
                      Development Tools
                      <div className="text-xs font-normal text-gray-500 mt-1 normal-case">
                        (LangSmith, Arize, etc.)
                      </div>
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-bold text-primary-700 uppercase tracking-wider bg-primary-50">
                      Coalex.ai
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-900 font-semibold">
                      Who it's for
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      AI Engineers
                    </td>
                    <td className="px-6 py-4 text-center font-semibold text-primary-700 bg-primary-50">
                      Business Decision-Makers
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-900 font-semibold">
                      Primary Focus
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      Technical Metrics & Debugging
                    </td>
                    <td className="px-6 py-4 text-center font-semibold text-primary-700 bg-primary-50">
                      Business Outcomes & ROI
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-900 font-semibold">
                      Governance Workflows
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center items-center gap-2">
                        <X className="h-5 w-5 text-red-500" />
                        <span className="text-gray-600">Manual Processes</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center bg-primary-50">
                      <div className="flex justify-center items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span className="font-semibold text-primary-700">Automated Workflows</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-900 font-semibold">
                      Compliance & EU AI Act
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center items-center gap-2">
                        <X className="h-5 w-5 text-red-500" />
                        <span className="text-gray-600">DIY</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center bg-primary-50">
                      <div className="flex justify-center items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span className="font-semibold text-primary-700">Built-in & Ready</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-900 font-semibold">
                      Integration Time
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      Weeks of Setup
                    </td>
                    <td className="px-6 py-4 text-center font-semibold text-primary-700 bg-primary-50">
                      One Line of Code
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-900 font-semibold">
                      Human-in-the-Loop
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center items-center gap-2">
                        <X className="h-5 w-5 text-red-500" />
                        <span className="text-gray-600">Not Included</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center bg-primary-50">
                      <div className="flex justify-center items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span className="font-semibold text-primary-700">Core Feature</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-900 font-semibold">
                      Executive Dashboards
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center items-center gap-2">
                        <X className="h-5 w-5 text-red-500" />
                        <span className="text-gray-600">Technical Only</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center bg-primary-50">
                      <div className="flex justify-center items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span className="font-semibold text-primary-700">Business Metrics</span>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-900 font-semibold">
                      Continuous Improvement
                    </td>
                    <td className="px-6 py-4 text-center text-gray-600">
                      Track Performance
                    </td>
                    <td className="px-6 py-4 text-center font-semibold text-primary-700 bg-primary-50">
                      Auto-Generate Training Data
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 text-gray-900 font-semibold">
                      Workforce Transformation
                    </td>
                    <td className="px-6 py-4 text-center">
                      <div className="flex justify-center items-center gap-2">
                        <X className="h-5 w-5 text-red-500" />
                        <span className="text-gray-600">Not Addressed</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-center bg-primary-50">
                      <div className="flex justify-center items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span className="font-semibold text-primary-700">Built-in Upskilling</span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-primary-600 to-primary-500 text-white p-8 rounded-xl inline-block">
              <p className="text-2xl font-bold mb-2">
                The Bottom Line
              </p>
              <p className="text-xl">
                Other tools let you <span className="underline">build and watch</span> your AI.
              </p>
              <p className="text-xl">
                Coalex lets you <span className="underline">govern and grow</span> it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
