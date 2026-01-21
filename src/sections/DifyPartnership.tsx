import React from 'react';
import Button from '@/components/Button';
import { ArrowRight, Workflow, Shield, CheckCircle, Users } from 'lucide-react';

const DifyPartnership = () => {
  const features = [
    {
      icon: Workflow,
      title: 'Visual AI Platform',
      description: "Build AI workflows with Dify.ai's intuitive visual platform",
    },
    {
      icon: CheckCircle,
      title: 'Already Compliant',
      description: 'Dify.ai is SOC 2 Type II and GDPR compliant out of the box',
    },
    {
      icon: Shield,
      title: 'Governance Layer',
      description: 'Coalex adds trust, compliance mapping, and human oversight',
    },
    {
      icon: Users,
      title: 'Enterprise Support',
      description: 'Dedicated support and SLA guarantees for your team',
    },
  ];

  return (
    <section id="partnership" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card p-8 md:p-12 border border-slate-200 dark:border-slate-700">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              {/* Left: Content */}
              <div className="md:w-1/2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-200 dark:bg-slate-700/50 border border-slate-300 dark:border-slate-600 mb-6">
                  <span className="text-xs text-slate-600 dark:text-slate-300 font-medium uppercase tracking-wider">For Enterprises</span>
                </div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
                  New to AI?{' '}
                  <span className="gradient-text">Start with Dify.ai + Coalex</span>
                </h2>

                <p className="text-xl text-slate-600 dark:text-slate-300 mb-6">
                  Build powerful AI workflows with Dify.ai's visual platform — already SOC 2 Type II
                  and GDPR compliant. Coalex adds the governance, trust, and compliance layer you need
                  to deploy with confidence.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href="#contact" size="lg" className="glow-primary">
                    Talk to Sales
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    href="https://dify.ai"
                    variant="outline"
                    size="lg"
                    className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                  >
                    Learn About Dify.ai
                  </Button>
                </div>
              </div>

              {/* Right: Features Grid */}
              <div className="md:w-1/2">
                <div className="grid grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div
                      key={index}
                      className="p-4 bg-slate-100 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700"
                    >
                      <div className="p-2 rounded-lg bg-primary-500/10 inline-flex mb-3">
                        <feature.icon className="h-5 w-5 text-primary-400" />
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

export default DifyPartnership;
