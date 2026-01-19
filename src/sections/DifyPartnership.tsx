import React from 'react';
import Button from '@/components/Button';
import { ArrowRight, Workflow, Shield, Zap, Users } from 'lucide-react';

const DifyPartnership = () => {
  const benefits = [
    {
      icon: Workflow,
      title: 'Build AI Workflows',
      description: 'Partner platforms help you build powerful AI automation from scratch',
    },
    {
      icon: Shield,
      title: 'Governance Built-in',
      description: 'Coalex handles trust, compliance, and human oversight from day one',
    },
    {
      icon: Zap,
      title: 'Faster to Production',
      description: 'Go from zero to production-ready AI with confidence',
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Get guidance from both building and governance experts',
    },
  ];

  return (
    <section id="partnership" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-8 md:p-12 border border-slate-200 dark:border-slate-700">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-700/50 border border-slate-300 dark:border-slate-600 mb-6">
                <span className="text-xs text-slate-600 dark:text-slate-300 font-medium uppercase tracking-wider">Partnership</span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                New to AI Automation?{' '}
                <span className="gradient-text">We've Got You Covered</span>
              </h2>

              <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
                For enterprises who haven't started their AI journey yet, our partnerships help you
                build AI workflows while Coalex ensures governance, trust, and compliance from the start.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-6 bg-slate-100 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700 text-center"
                >
                  <div className="p-3 rounded-xl bg-primary-500/10 inline-flex mb-4">
                    <benefit.icon className="h-6 w-6 text-primary-400" />
                  </div>
                  <h4 className="text-slate-900 dark:text-white font-semibold mb-2">{benefit.title}</h4>
                  <p className="text-slate-500 dark:text-slate-400 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>

            {/* Partner logos placeholder */}
            <div className="text-center mb-8">
              <p className="text-slate-500 text-sm mb-4">Building Partnerships With</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                {['AI Platform 1', 'AI Platform 2', 'AI Platform 3'].map((partner, index) => (
                  <div
                    key={index}
                    className="px-6 py-3 bg-slate-200 dark:bg-slate-700/50 rounded-lg"
                  >
                    <span className="text-slate-500 dark:text-slate-400 font-medium">{partner}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center">
              <Button href="#contact" variant="outline" className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800">
                Explore Our Partnerships
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifyPartnership;
