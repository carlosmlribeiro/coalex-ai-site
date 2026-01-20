import React from 'react';
import Button from '@/components/Button';
import { ArrowRight, Globe2, Scale, FileCheck, RefreshCw, Shield, CheckCircle } from 'lucide-react';

const AICompliance = () => {
  const frameworks = [
    {
      name: 'ISO 42001',
      subtitle: 'The Global AI Standard',
      description: 'Enterprise buyers are asking "Are you ISO 42001 certified?" What\'s your answer?',
      icon: Globe2,
      color: 'primary',
      benefits: [
        'Prove trustworthy AI to enterprise buyers',
        'Risk management and lifecycle controls',
        'Governance as competitive differentiator',
      ],
    },
    {
      name: 'EU AI Act',
      subtitle: "Europe's AI Regulation",
      description: 'Using AI APIs makes you a "deployer" with legal obligations. Fines start at €7.5M.',
      icon: Scale,
      color: 'accent',
      benefits: [
        'Phasing in 2025-2027 — compliance required now',
        '150+ controls, 16 policies mapped and monitored',
        'Transparency records and incident monitoring',
      ],
    },
  ];

  const additionalFrameworks = [
    { name: 'NIST AI RMF', description: 'US AI risk framework' },
    { name: 'SOC 2', description: 'Infrastructure security' },
    { name: 'GDPR', description: 'Data privacy' },
    { name: 'HIPAA', description: 'Healthcare compliance' },
  ];

  return (
    <section id="compliance" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary-500/10 border border-secondary-500/20 mb-6">
              <span className="text-xs text-secondary-400 font-medium uppercase tracking-wider">AI Governance</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              AI Regulation Is Here.{' '}
              <span className="bg-gradient-to-r from-secondary-400 to-accent bg-clip-text text-transparent">
                Are You Ready?
              </span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              EU AI Act hits in 2025. ISO 42001 auditors are asking questions. Your competitors are already preparing.
            </p>
          </div>

          {/* Main Frameworks */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {frameworks.map((framework) => (
              <div
                key={framework.name}
                className={`glass-card p-8 border-t-2 ${
                  framework.color === 'primary' ? 'border-primary-500/50' : 'border-accent/50'
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className={`p-3 rounded-xl ${
                      framework.color === 'primary' ? 'bg-primary-500/10' : 'bg-accent/10'
                    }`}
                  >
                    <framework.icon
                      className={`h-8 w-8 ${
                        framework.color === 'primary' ? 'text-primary-400' : 'text-accent'
                      }`}
                    />
                  </div>
                  <div>
                    <h3
                      className={`text-2xl font-bold ${
                        framework.color === 'primary' ? 'text-primary-400' : 'text-accent'
                      }`}
                    >
                      {framework.name}
                    </h3>
                    <p className="text-slate-400 text-sm">{framework.subtitle}</p>
                  </div>
                </div>

                <p className="text-slate-600 dark:text-slate-300 mb-6">{framework.description}</p>

                <ul className="space-y-3">
                  {framework.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle
                        className={`h-5 w-5 shrink-0 mt-0.5 ${
                          framework.color === 'primary' ? 'text-primary-400' : 'text-accent'
                        }`}
                      />
                      <span className="text-slate-600 dark:text-slate-300 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Cross-Framework Efficiency */}
          <div className="glass-card p-8 mb-12">
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              <div className="md:w-1/3">
                <div className="p-4 rounded-xl bg-gradient-to-br from-primary-500/10 to-accent/10 inline-flex mb-4">
                  <RefreshCw className="h-10 w-10 text-primary-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Cross-Framework Efficiency</h3>
                <p className="text-slate-500 dark:text-slate-400">Map controls once, apply everywhere</p>
              </div>

              <div className="md:w-2/3 grid sm:grid-cols-3 gap-4">
                <div className="bg-slate-100 dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700 text-center">
                  <div className="text-3xl font-bold text-primary-400 mb-1">1x</div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Evidence collection</p>
                </div>
                <div className="bg-slate-100 dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700 text-center">
                  <div className="text-3xl font-bold text-accent mb-1">5+</div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Frameworks supported</p>
                </div>
                <div className="bg-slate-100 dark:bg-slate-800/50 rounded-lg p-4 border border-slate-200 dark:border-slate-700 text-center">
                  <div className="text-3xl font-bold text-secondary-400 mb-1">50%</div>
                  <p className="text-sm text-slate-500 dark:text-slate-400">Less compliance burden</p>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Frameworks */}
          <div className="text-center mb-8">
            <p className="text-slate-500 dark:text-slate-400 mb-4">Also supporting</p>
            <div className="flex flex-wrap justify-center gap-3">
              {additionalFrameworks.map((fw) => (
                <div
                  key={fw.name}
                  className="px-4 py-2 bg-slate-100 dark:bg-slate-800/50 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
                >
                  <span className="text-slate-900 dark:text-white font-medium">{fw.name}</span>
                  <span className="text-slate-500 text-sm ml-2">· {fw.description}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button href="#pricing" size="lg" className="glow-primary">
              Get AI-Compliant
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AICompliance;
