import React from 'react';
import Button from '@/components/Button';
import { ArrowRight, MessageSquare, Rocket } from 'lucide-react';

const GetStartedCTA = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-500/5 to-primary-500/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Header */}
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-slate-900 dark:text-white">Your AI Is Either an</span>
            <br />
            <span className="bg-gradient-to-r from-primary-400 to-accent bg-clip-text text-transparent">Asset</span>
            <span className="text-slate-900 dark:text-white"> or a </span>
            <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Liability.</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-12 max-w-2xl mx-auto">
            Companies that prove AI trust close deals faster. Companies that can't, lose to competitors who do.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <div className="flex flex-col items-center">
              <Button href="#pricing" size="lg" className="px-10 py-5 text-lg glow-primary">
                <Rocket className="mr-2 h-5 w-5" />
                Start Free
              </Button>
              <span className="text-sm text-slate-500 mt-2">No credit card required</span>
            </div>
            <div className="flex flex-col items-center">
              <Button
                href="https://calendly.com/coalex-ai"
                variant="outline"
                size="lg"
                className="px-10 py-5 text-lg border-slate-300 dark:border-slate-600 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <MessageSquare className="mr-2 h-5 w-5" />
                Talk to Sales
              </Button>
              <span className="text-sm text-slate-500 mt-2">For enterprise teams</span>
            </div>
          </div>

          {/* HubSpot Form Container - always dark themed */}
          <div className="bg-slate-800/90 backdrop-blur-md border border-slate-700 rounded-2xl p-8 max-w-xl mx-auto">
            <h3 className="text-xl font-bold text-white mb-4">Get in Touch</h3>
            <p className="text-slate-400 mb-6">
              Have questions? Fill out the form and we'll get back to you within 24 hours.
            </p>
            <div id="hubspot-form" className="min-h-[200px]" />
          </div>

          {/* Trust signals */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Free tier available
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              No credit card required
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Setup in minutes
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetStartedCTA;
