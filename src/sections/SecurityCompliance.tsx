import React from 'react';
import { Shield, Globe2, Scale, Lock, FileCheck, Server } from 'lucide-react';

const SecurityCompliance = () => {
  const badges = [
    {
      name: 'ISO 42001',
      description: 'AI Governance Certified',
      icon: Globe2,
      primary: true,
    },
    {
      name: 'EU AI Act',
      description: 'Regulation Ready',
      icon: Scale,
      primary: true,
    },
    {
      name: 'SOC 2 Type II',
      description: 'Infrastructure Security',
      icon: Server,
      primary: false,
    },
    {
      name: 'GDPR',
      description: 'Data Privacy',
      icon: Lock,
      primary: false,
    },
    {
      name: 'NIST AI RMF',
      description: 'US AI Framework',
      icon: FileCheck,
      primary: false,
    },
  ];

  return (
    <section id="security" className="py-16 border-y border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-500/10 border border-primary-500/20 mb-4">
              <Shield className="h-6 w-6 text-primary-400" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white mb-3">
              Security & Compliance
            </h2>
            <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
              Enterprise-grade security with audit-ready compliance. SOC/ISO-ready architecture,
              configurable data retention, RBAC, and exportable audit evidence.
            </p>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-4">
            {badges.map((badge) => (
              <div
                key={badge.name}
                className={`flex items-center gap-3 px-5 py-3 rounded-xl border ${
                  badge.primary
                    ? 'bg-primary-500/10 border-primary-500/30'
                    : 'bg-slate-100 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700'
                } hover:border-primary-500/50 transition-colors`}
              >
                <badge.icon className={`h-5 w-5 ${badge.primary ? 'text-primary-400' : 'text-slate-400'}`} />
                <div>
                  <div className={`font-semibold text-sm ${badge.primary ? 'text-primary-400' : 'text-slate-900 dark:text-white'}`}>
                    {badge.name}
                  </div>
                  <div className="text-xs text-slate-500">{badge.description}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SecurityCompliance;
