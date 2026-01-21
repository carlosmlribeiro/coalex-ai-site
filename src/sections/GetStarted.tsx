import React from 'react';
import Button from '@/components/Button';

const GetStarted = () => {
  return (
    <section id="get-started" className="py-20 bg-gradient-to-br from-primary-400 to-primary-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Escape the AI Pilot Purgatory?</h2>
            <p className="text-2xl text-white/90 mb-4">
              Join us in building AI systems that earn trust from day one
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Enterprise CTA */}
            <div className="bg-white text-gray-900 p-8 rounded-xl shadow-xl">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-primary-600">For Enterprise Teams</h3>
                <p className="text-gray-700">
                  Get hands-on implementation support and become a design partner
                </p>
              </div>
              <ul className="space-y-3 mb-8 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span>White-glove implementation service</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span>Direct access to founding team</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span>Shape the product roadmap</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span>Early-adopter pricing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span>EU AI Act ready by 2026</span>
                </li>
              </ul>
              <Button
                href="#contact"
                size="lg"
                className="w-full bg-primary-600 hover:bg-primary-700 text-white"
              >
                Book a Demo
              </Button>
            </div>

            {/* Developer CTA */}
            <div id="waitlist" className="bg-white text-gray-900 p-8 rounded-xl shadow-xl">
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-2 text-primary-600">For Developers</h3>
                <p className="text-gray-700">
                  Get early access to our self-service platform
                </p>
              </div>
              <ul className="space-y-3 mb-6 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span>One-line SDK integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span>Comprehensive documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span>Community support & resources</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span>Beta access to new features</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2 text-xl">✓</span>
                  <span>Special launch pricing</span>
                </li>
              </ul>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                <p className="text-sm text-gray-700 mb-2">
                  <span className="font-semibold text-blue-700">While you wait:</span> Explore our comprehensive documentation
                </p>
                <a
                  href="https://docs.coalex.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 font-semibold text-sm underline"
                >
                  Read the docs →
                </a>
              </div>
              <Button
                href="#contact"
                variant="outline"
                size="lg"
                className="w-full border-2 border-primary-600 text-primary-600 hover:bg-primary-50"
              >
                Join Waiting List
              </Button>
            </div>
          </div>

          <div className="text-center" id="contact">
            <p className="text-xl text-white/90 mb-6">
              Or reach out to us directly
            </p>
            <div className="flex flex-col items-center gap-4 mb-8">
              <p className="text-2xl font-bold">
                <a href="mailto:founders@coalex.ai" className="underline hover:text-primary-100 transition-colors">
                  founders@coalex.ai
                </a>
              </p>
              <a
                href="https://linkedin.com/company/coalex-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-white/90 hover:text-white transition-colors"
              >
                <img src="/InBug-White.png" alt="LinkedIn" className="h-6 w-6" />
                Follow us on LinkedIn
              </a>
            </div>
            <div id="hubspot-form" className="bg-white/10 backdrop-blur-sm rounded-xl p-8"></div>
          </div>

          <div className="mt-12 text-center text-white/80">
            <p className="text-sm">
              Backed by NVIDIA Inception Program • Google for Startups • Unicorn Factory Lisboa
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;