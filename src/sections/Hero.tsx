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
          <span className="text-sm text-primary-400 font-medium">For Regulated Industries & AI-Native Companies</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
          <span className="text-slate-900 dark:text-white">AI You Can</span>
          <br />
          <span className="gradient-text">Put Your Name On</span>
        </h1>

        {/* Subheadline - What the product does */}
        <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
          Block risky decisions. Route to humans. Prove compliance.
          <br />
          <span className="text-slate-500 dark:text-slate-400">The decision firewall for AI in production.</span>
        </p>

        {/* Value props - Outcomes with verbs */}
        <div className="flex flex-wrap justify-center gap-6 mb-10 text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
            Block risky decisions above your threshold
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
            Route to the right human with clear accountability
          </span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
            Create defensible audit trails on demand
          </span>
        </div>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button href="#three-layers" size="lg" className="w-full sm:w-auto px-8 py-4 text-lg glow-primary">
            See How It Works
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button href="#contact" variant="outline" size="lg" className="w-full sm:w-auto px-8 py-4 text-lg border-slate-300 dark:border-slate-600 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800">
            Talk to Us
            <Play className="ml-2 h-4 w-4" />
          </Button>
        </div>

        {/* Dashboard Screenshot Placeholder */}
        {/*
          FE TEAM TODO: Replace this placeholder with real Coalex dashboard screenshot
          Screenshot should show:
          - Agent health scores
          - Policy violations detected
          - Human approvals logged
          - Evidence exported metrics
          Emphasis on "proof" metrics: violations caught, decisions reviewed, evidence exported
          Include recognizable Coalex branding
        */}
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

              {/* Mock Dashboard Content - Show proof */}
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                {/* Decisions Blocked */}
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                  <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">Blocked for Review</div>
                  <div className="text-3xl font-bold text-red-500 dark:text-red-400">23</div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    <span className="text-xs text-red-600 dark:text-red-400">Above threshold</span>
                  </div>
                </div>

                {/* Human-Approved */}
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                  <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">Human-Approved</div>
                  <div className="text-3xl font-bold text-primary-500 dark:text-primary-400">847</div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-xs text-green-600 dark:text-green-400">Fully attributable</span>
                  </div>
                </div>

                {/* Risk Thresholds */}
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                  <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">Risk Thresholds</div>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white">12</div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary-400" />
                    <span className="text-xs text-slate-500 dark:text-slate-400">Active controls</span>
                  </div>
                </div>

                {/* Audit Trails */}
                <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700">
                  <div className="text-sm text-slate-500 dark:text-slate-400 mb-2">Audit Trails</div>
                  <div className="text-3xl font-bold text-slate-900 dark:text-white">3</div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    <span className="text-xs text-blue-600 dark:text-blue-400">Defensible reports</span>
                  </div>
                </div>
              </div>

              {/* Recent Activity - Show real proof */}
              <div className="bg-slate-50/50 dark:bg-slate-800/30 rounded-lg p-4 border border-slate-200/50 dark:border-slate-700/50">
                <div className="text-sm text-slate-500 dark:text-slate-400 mb-3 font-medium">Recent Activity</div>
                {[
                  { action: 'Risky decision blocked', agent: 'Customer Support Bot', time: '2m ago', type: 'violation' },
                  { action: 'Human approval logged', agent: 'Sales Assistant', time: '5m ago', type: 'approval' },
                  { action: 'Audit trail exported', agent: 'All agents', time: '1h ago', type: 'evidence' },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-slate-200/50 dark:border-slate-700/50 last:border-0">
                    <div className="flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${
                        activity.type === 'violation' ? 'bg-red-500' :
                        activity.type === 'approval' ? 'bg-green-500' : 'bg-blue-500'
                      }`} />
                      <div>
                        <span className="text-slate-900 dark:text-white text-sm">{activity.action}</span>
                        <span className="text-slate-400 dark:text-slate-500 text-xs ml-2">· {activity.agent}</span>
                      </div>
                    </div>
                    <span className="text-xs text-slate-400 dark:text-slate-500">{activity.time}</span>
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
