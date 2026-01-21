import React from 'react';
import Button from '@/components/Button';
import { ArrowRight, Eye, Globe, Shield, CheckCircle, Zap } from 'lucide-react';

const ForAINative = () => {
  const features = [
    {
      icon: Eye,
      title: 'Real-time Observability',
      description: 'Monitor your entire AI fleet with agent health scores and behavior tracking',
    },
    {
      icon: Globe,
      title: 'Public Trust Center',
      description: 'Give your customers a live dashboard proving your AI is trustworthy',
    },
    {
      icon: Shield,
      title: 'Compliance Mapping',
      description: 'ISO 42001 & EU AI Act compliance mapped and monitored automatically',
    },
    {
      icon: Zap,
      title: 'Close Deals Faster',
      description: 'Turn trust into a sales asset with verifiable proof of AI reliability',
    },
  ];

  return (
    <section id="ai-native" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-8 md:p-12 border border-accent/20">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              {/* Left: Content */}
              <div className="md:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20 mb-6">
                  <span className="text-xs text-accent font-medium uppercase tracking-wider">For AI-Native Companies</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                  You Build AI Products.{' '}
                  <span className="bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">We Help You Prove They Work.</span>
                </h2>

                <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                  Your AI is your product. Coalex gives you the observability, trust infrastructure, and compliance
                  mapping to prove it's reliable — so you can close deals faster.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href="#pricing" size="lg" className="bg-accent hover:bg-accent/90 text-white">
                    See Plans
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    href="#contact"
                    variant="outline"
                    size="lg"
                    className="border-accent/50 text-accent hover:bg-accent/10"
                  >
                    Book a Demo
                  </Button>
                </div>
              </div>

              {/* Right: Features Grid */}
              <div className="md:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="p-4 bg-slate-100 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-accent/30 transition-colors"
                    >
                      <div className="p-2 rounded-lg bg-accent/10 inline-flex mb-3">
                        <feature.icon className="h-5 w-5 text-accent" />
                      </div>
                      <h4 className="text-slate-900 dark:text-white font-semibold mb-1 text-sm">{feature.title}</h4>
                      <p className="text-slate-500 dark:text-slate-400 text-xs">{feature.description}</p>
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

export default ForAINative;
