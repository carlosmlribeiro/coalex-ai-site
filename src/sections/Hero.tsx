import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import Button from '@/components/Button';
import { ArrowRight, Play } from 'lucide-react';

const partners = [
  { name: 'Google for Startups', logo: '/partners/google.png', logoDark: '/partners/google-dark.png', width: 'w-32' },
  { name: 'Fintech House', logo: '/partners/fintech-house.svg', logoDark: null, width: 'w-36' },
  { name: 'Unicorn Factory Lisboa', logo: '/partners/ufl.png', logoDark: '/partners/ufl-dark.png', width: 'w-32' },
  { name: 'NVIDIA Inception', logo: '/partners/nvidia.png', logoDark: null, width: 'w-32' },
  { name: 'IPN', logo: '/partners/ipn.png', logoDark: '/partners/ipn-dark.png', width: 'w-24' },
];

const Hero = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isLight = mounted && resolvedTheme === 'light';

  return (
    <section id="hero" className="pt-32 md:pt-40 pb-20 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-5xl relative z-10">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-500/10 border border-primary-500/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse" />
          <span className="text-sm text-primary-400 font-medium">AI Governance Platform</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          <span className="gradient-text">Trusted AI with</span>
          <br />
          <span className="gradient-text">Verifiable Compliance.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
          Automatic governance. Automatic compliance.
        </p>

        {/* Value props */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
            Three lines of code integration
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
            Human-in-the-loop built-in
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
            EU AI Act ready
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button href="#pricing" size="lg" className="w-full sm:w-auto px-8 py-4 text-lg glow-primary">
            Start Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button href="#contact" variant="outline" size="lg" className="w-full sm:w-auto px-8 py-4 text-lg border-slate-300 dark:border-slate-600 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800">
            Book a Demo
            <Play className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Dashboard Mockup */}
        <div className="relative mt-16 mx-auto max-w-4xl">
          <div className="glass-card p-4 glow-primary">
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 border border-slate-200 dark:border-slate-700">
              {/* Mock Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="text-sm text-slate-400 dark:text-slate-500">coalex.ai/dashboard</div>
              </div>

              {/* Mock Dashboard Content */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {/* Health Score Card */}
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                  <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">AI Health Score</div>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-bold text-primary-500 dark:text-primary-400">94</span>
                    <span className="text-sm text-primary-500 dark:text-primary-400 mb-1">/ 100</span>
                  </div>
                  <div className="mt-2 h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full w-[94%] bg-gradient-to-r from-primary-500 to-primary-400 rounded-full" />
                  </div>
                </div>

                {/* Active Agents Card */}
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                  <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">Active Agents</div>
                  <div className="text-4xl font-bold text-slate-900 dark:text-white">12</div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-sm text-green-600 dark:text-green-400">All in production</span>
                  </div>
                </div>

                {/* HITL Tasks Card */}
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                  <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">Pending Reviews</div>
                  <div className="text-4xl font-bold text-slate-900 dark:text-white">3</div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                    <span className="text-sm text-yellow-600 dark:text-yellow-400">Awaiting approval</span>
                  </div>
                </div>
              </div>

              {/* Agent List */}
              <div className="bg-slate-50/50 dark:bg-slate-800/30 rounded-lg p-4 border border-slate-200/50 dark:border-slate-700/50">
                <div className="flex items-center justify-between text-sm text-slate-500 dark:text-slate-400 mb-3">
                  <span>Agent</span>
                  <span>Status</span>
                </div>
                {[
                  { name: 'Customer Support Bot', health: 98, status: 'healthy' },
                  { name: 'Sales Assistant', health: 92, status: 'healthy' },
                  { name: 'Document Processor', health: 87, status: 'warning' },
                ].map((agent) => (
                  <div key={agent.name} className="flex items-center justify-between py-2 border-b border-slate-200/50 dark:border-slate-700/50 last:border-0">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${agent.status === 'healthy' ? 'bg-green-500' : 'bg-yellow-500'}`} />
                      <span className="text-slate-900 dark:text-white text-sm">{agent.name}</span>
                    </div>
                    <span className={`text-sm font-medium ${agent.health >= 90 ? 'text-primary-500 dark:text-primary-400' : 'text-yellow-600 dark:text-yellow-400'}`}>
                      {agent.health}%
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Backed by */}
        <div className="mt-12">
          <p className="text-sm text-slate-400 dark:text-slate-500 mb-6">Backed by</p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
            {partners.map((partner) => (
              <img
                key={partner.name}
                src={isLight && partner.logoDark ? partner.logoDark : partner.logo}
                alt={partner.name}
                className={`${partner.width} h-10 object-contain opacity-60 hover:opacity-100 transition-opacity`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
