import React from 'react';
import Button from '@/components/Button';
import { ArrowRight, Code, Shield, FileText, Zap, CreditCard } from 'lucide-react';

const FreeForDevs = () => {
  const features = [
    {
      icon: Code,
      title: '1 Agent Free Forever',
      description: 'Get started with one fully governed AI agent at no cost',
    },
    {
      icon: Shield,
      title: 'Full Supervision',
      description: 'Complete visibility into your AI behavior and decisions',
    },
    {
      icon: FileText,
      title: 'Audit Logs Included',
      description: 'Every decision tracked and ready for review',
    },
    {
      icon: Zap,
      title: 'SDK in Minutes',
      description: 'Integrate with just a few lines of code',
    },
    {
      icon: CreditCard,
      title: 'No Credit Card',
      description: 'Start building trust today, no strings attached',
    },
  ];

  return (
    <section id="free-tier" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-8 md:p-12 border border-primary-500/20 glow-primary">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              {/* Left: Content */}
              <div className="md:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
                  <Code className="h-4 w-4 text-primary-400" />
                  <span className="text-xs text-primary-400 font-medium uppercase tracking-wider">For Developers</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                  Ship Your First Governed AI.{' '}
                  <span className="gradient-text">Free.</span>
                </h2>

                <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                  You built an AI agent. Now prove it works. Full governance for your first agent — no credit card, no catch.
                </p>

                <Button href="#pricing" size="lg" className="glow-primary">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              {/* Right: Features List */}
              <div className="md:w-1/2">
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-slate-100 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-primary-500/30 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-primary-500/10 shrink-0">
                        <feature.icon className="h-5 w-5 text-primary-400" />
                      </div>
                      <div>
                        <h4 className="text-slate-900 dark:text-white font-semibold text-sm">{feature.title}</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-xs">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeForDevs;
