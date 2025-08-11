import React from 'react';
import Button from '@/components/Button';
import { LucideArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="hero" className="pt-28 md:pt-36 pb-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
          Coalex.ai
        </h1>
        <p className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
          AI Governance Platform leveraging Human-in-the-Loop to deliver auditable, compliant, self-improving deployments.
        </p>
        <p className="text-lg text-gray-600 mb-8">
          Move AI pilots into production faster — with live oversight, measurable impact, and continuous improvement.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button href="/demo" size="lg">
            Get a demo
            <LucideArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button href="#contact" variant="outline" size="lg">
            Request trial / Join as design partner
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;