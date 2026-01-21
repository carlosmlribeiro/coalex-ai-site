import React from 'react';
import { Plug, Activity, Users, Share2 } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: Plug,
      title: 'Connect',
      desc: 'Connect your AI agents. Any framework, any model. 10 minutes.',
      highlight: 'Any AI framework',
    },
    {
      icon: Activity,
      title: 'Monitor',
      desc: 'See every decision your AI makes. Get alerted when something\'s off.',
      highlight: 'Real-time insights',
    },
    {
      icon: Users,
      title: 'Intervene',
      desc: 'Route risky outputs to humans before they reach customers.',
      highlight: 'Smart routing',
    },
    {
      icon: Share2,
      title: 'Prove',
      desc: 'Export evidence. Share trust scores. Close deals faster.',
      highlight: 'Build trust',
    },
  ];

  return (
    <section id="how" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              From "we have an AI" to "we can prove our AI works" in four steps
            </p>
          </div>

          {/* Steps */}
          <div className="grid md:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={step.title} className="relative">
                {/* Connector line (hidden on mobile, visible on md+) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-px bg-gradient-to-r from-primary-500/50 to-primary-500/0" />
                )}

                <div className="glass-card p-6 h-full hover:border-primary-500/30 transition-all duration-300 group">
                  {/* Step number */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary-500 text-white text-sm font-bold flex items-center justify-center shadow-lg shadow-primary-500/30">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="p-3 rounded-xl bg-primary-500/10 inline-flex mb-4 group-hover:bg-primary-500/20 transition-colors">
                    <step.icon className="h-8 w-8 text-primary-400" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">{step.desc}</p>

                  {/* Highlight tag */}
                  <span className="inline-flex px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 text-xs text-primary-400 font-medium">
                    {step.highlight}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Result */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700">
              <span className="w-3 h-3 rounded-full bg-primary-400 animate-pulse" />
              <span className="text-slate-600 dark:text-slate-300">
                <span className="text-primary-500 dark:text-primary-400 font-semibold">Result:</span> AI you can trust. AI you can prove. AI that closes deals.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
