import React from 'react';
import Button from '@/components/Button';
import { ArrowRight, TrendingUp, Clock, CheckCircle, Shield } from 'lucide-react';

const SalesAccelerator = () => {
  const benefits = [
    {
      icon: Clock,
      title: 'Close deals 38% faster',
      description: 'Customers verify AI reliability themselves — no more trust-building delays',
    },
    {
      icon: Shield,
      title: 'Kill security questionnaires',
      description: 'Share compliance evidence instantly with Magic Links — no back-and-forth',
    },
    {
      icon: TrendingUp,
      title: 'Win deals competitors can\'t',
      description: 'Stand out when rivals can\'t prove their AI is safe',
    },
    {
      icon: CheckCircle,
      title: 'Let prospects verify trust themselves',
      description: 'Self-serve compliance and reliability checks, 24/7',
    },
  ];

  return (
    <section id="sales-accelerator" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <span className="text-xs text-accent font-medium uppercase tracking-wider">Sales Accelerator</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                Your AI Is{' '}
                <span className="gradient-text-accent">Killing Deals</span>
              </h2>

              <p className="text-xl text-slate-600 dark:text-slate-300 mb-4">
                Every enterprise deal stalls at "how do we know your AI is safe?"{' '}
                <span className="text-primary-500 dark:text-primary-400 font-semibold">You don't have an answer. We do.</span>
              </p>

              <p className="text-lg text-slate-500 dark:text-slate-400 mb-8">
                Vanta proves your servers are safe. <span className="font-semibold">Coalex proves your AI is sane.</span>
              </p>

              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-2 rounded-lg bg-accent/10 border border-accent/20 shrink-0">
                      <benefit.icon className="h-5 w-5 text-accent" />
                    </div>
                    <div>
                      <h4 className="text-slate-900 dark:text-white font-semibold mb-1">{benefit.title}</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button href="#trust-center" variant="outline" className="border-accent text-accent hover:bg-accent/10">
                See the Trust Center
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Right: Visual */}
            <div className="relative">
              <div className="glass-card p-6 glow-accent">
                {/* ROI Calculator Mock */}
                <div className="bg-slate-900 rounded-xl p-6 border border-slate-700">
                  <h4 className="text-white font-semibold mb-6">Impact Calculator</h4>

                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                      <span className="text-slate-400">Average deal cycle</span>
                      <div className="text-right">
                        <span className="text-slate-500 line-through mr-3">45 days</span>
                        <span className="text-primary-400 font-bold">28 days</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                      <span className="text-slate-400">Security questionnaire time</span>
                      <div className="text-right">
                        <span className="text-slate-500 line-through mr-3">2 weeks</span>
                        <span className="text-primary-400 font-bold">Instant</span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-4 bg-slate-800/50 rounded-lg border border-slate-700">
                      <span className="text-slate-400">Trust objections</span>
                      <div className="text-right">
                        <span className="text-slate-500 line-through mr-3">Common</span>
                        <span className="text-primary-400 font-bold">Eliminated</span>
                      </div>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-accent/20 to-primary-500/20 rounded-lg border border-accent/30">
                      <div className="flex items-center justify-between">
                        <span className="text-white font-semibold">Faster time to close</span>
                        <span className="text-3xl font-bold text-primary-400">38%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SalesAccelerator;
