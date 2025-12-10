import React from 'react';
import Button from '@/components/Button';
import { LucideArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="pt-28 md:pt-36 pb-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-primary-600 to-primary-500 bg-clip-text text-transparent">
          Escape the AI Pilot Purgatory
        </h1>
        <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
          The governance layer for the AI Development Lifecycle
        </p>
        <p className="text-xl text-gray-700 mb-4 max-w-3xl mx-auto">
          Other tools let you build and watch your AI. <span className="font-semibold text-primary-600">Coalex lets you govern and grow it.</span>
        </p>
        <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto">
          Move from pilot to production with confidence through human-in-the-loop governance, real-time compliance, and continuous AI improvement.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="flex flex-col items-center">
            <Button href="#contact" size="lg" className="w-full sm:w-auto px-8 py-6 text-lg">
              Book a Demo
              <LucideArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <span className="text-sm text-gray-500 mt-2">For Enterprise Teams</span>
          </div>
          <div className="flex flex-col items-center">
            <Button href="#waitlist" variant="outline" size="lg" className="w-full sm:w-auto px-8 py-6 text-lg border-2">
              Join Waiting List
              <LucideArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <span className="text-sm text-gray-500 mt-2">For Developers</span>
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-8">
          Backed by NVIDIA Inception, Google for Startups, and Unicorn Factory Lisboa
        </p>
      </div>
    </section>
  );
};

export default Hero;