import React from 'react';
import Button from '@/components/Button';

const GetStarted = () => {
  return (
    <section id="get-started" className="py-20 bg-gradient-to-br from-primary-400 to-primary-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get started</h2>
          <p className="text-white/90 mb-6">Book a demo, request a pilot or design-partner slot, or contact us directly.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-6">
            <Button href="/demo" size="lg">Book a demo</Button>
            <Button href="#contact" variant="outline" size="lg">Request a pilot / design-partner slot</Button>
          </div>
          <p id="contact" className="mb-8">Contact: <a href="mailto:carlos@coalex.ai" className="underline">carlos@coalex.ai</a></p>
          <div id="hubspot-form"></div>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;