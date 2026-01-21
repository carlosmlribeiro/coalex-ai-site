import React from 'react';
import Button from '@/components/Button';
import { ArrowRight, Globe, Shield, Activity, Link, FileCheck, ExternalLink } from 'lucide-react';

const TrustCenter = () => {
  return (
    <section id="trust-center" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-500/5 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Visual - Trust Center Mock */}
            {/*
              FE TEAM TODO: Replace this mock with real Trust Center screenshot
              Screenshot should show:
              - The actual trust.yourcompany.com interface
              - Visible elements: Health score, compliance badges (ISO 42001, EU AI Act, SOC 2), HITL metrics
              - Should look like a real customer-facing page
            */}
            <div className="order-2 lg:order-1">
              <div className="glass-card p-4 glow-primary">
                <div className="bg-slate-900 rounded-xl overflow-hidden border border-slate-700">
                  {/* Browser header */}
                  <div className="flex items-center justify-between px-4 py-3 bg-slate-800 border-b border-slate-700">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-slate-700 rounded text-sm text-slate-400">
                      <Globe className="h-3 w-3" />
                      trust.yourcompany.com
                    </div>
                    <div className="w-16" />
                  </div>

                  {/* Trust Center Content */}
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div>
                        <h4 className="text-white font-bold text-lg">Your Company AI Trust Center</h4>
                        <p className="text-slate-400 text-sm">Verified by Coalex</p>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full">
                        <span className="w-2 h-2 rounded-full bg-green-500" />
                        <span className="text-green-400 text-sm font-medium">Live</span>
                      </div>
                    </div>

                    {/* Health Score */}
                    <div className="bg-slate-800/50 rounded-lg p-4 mb-4 border border-slate-700">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-slate-400 text-sm">Overall AI Health Score</span>
                        <span className="text-xs text-slate-500">Updated 2 mins ago</span>
                      </div>
                      <div className="flex items-end gap-3">
                        <span className="text-5xl font-bold text-primary-400">96</span>
                        <div className="mb-2">
                          <span className="text-sm text-primary-400">/ 100</span>
                          <div className="flex items-center gap-1 mt-1">
                            <span className="text-xs text-green-400">+2</span>
                            <span className="text-xs text-slate-500">this week</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-3 h-2 bg-slate-700 rounded-full overflow-hidden">
                        <div className="h-full w-[96%] bg-gradient-to-r from-primary-500 to-green-400 rounded-full" />
                      </div>
                    </div>

                    {/* Compliance Badges */}
                    <div className="mb-4">
                      <span className="text-slate-400 text-sm mb-2 block">Compliance Status</span>
                      <div className="flex flex-wrap gap-2">
                        {['ISO 42001', 'EU AI Act', 'SOC 2', 'GDPR'].map((badge) => (
                          <span
                            key={badge}
                            className="px-3 py-1 bg-primary-500/10 border border-primary-500/30 rounded-full text-xs text-primary-400 font-medium"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* HITL Metrics */}
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
                        <span className="text-slate-400 text-xs">Human Oversight Rate</span>
                        <div className="text-xl font-bold text-white">99.2%</div>
                      </div>
                      <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700">
                        <span className="text-slate-400 text-xs">Avg Response Time</span>
                        <div className="text-xl font-bold text-white">&lt;15 min</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
                <span className="text-xs text-primary-400 font-medium uppercase tracking-wider">Premium Feature</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                Stop Explaining.{' '}
                <span className="gradient-text">Start Proving.</span>
              </h2>

              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                Your prospects want proof your AI is safe. Give them a page that answers every question before they ask.
              </p>

              <div className="space-y-4 mb-8">
                {[
                  { icon: Activity, text: 'Prospects verify AI reliability themselves — no meeting required' },
                  { icon: Shield, text: 'Compliance status visible in real-time — no emails' },
                  { icon: FileCheck, text: 'HITL metrics proving human oversight is in place' },
                  { icon: Link, text: 'Share sensitive docs securely — skip the NDA dance' },
                  { icon: Globe, text: 'Custom domain (trust.yourcompany.com) for credibility' },
                  { icon: ExternalLink, text: 'Eliminate 90% of security questionnaire back-and-forth' },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-primary-500/10 border border-primary-500/20">
                      <item.icon className="h-4 w-4 text-primary-400" />
                    </div>
                    <span className="text-slate-600 dark:text-slate-300">{item.text}</span>
                  </div>
                ))}
              </div>

              <Button href="#pricing" size="lg" className="glow-primary">
                Add Trust Center to Your Plan
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustCenter;
