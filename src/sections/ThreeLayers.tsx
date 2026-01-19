import React from 'react';
import { Eye, Shield, FileCheck, Users, Activity, Bell, Award, Globe, ScrollText } from 'lucide-react';

const ThreeLayers = () => {
  const layers = [
    {
      title: 'Supervise',
      subtitle: 'Human-in-the-Loop Control',
      description: 'Keep humans in control of AI decisions that matter most',
      color: 'primary',
      gradient: 'from-primary-500 to-primary-400',
      bgGlow: 'bg-primary-500/20',
      features: [
        { icon: Users, text: 'Human-in-the-loop for low-confidence decisions' },
        { icon: Activity, text: 'Real-time monitoring dashboard' },
        { icon: Bell, text: 'Intervention workflows & alerts' },
      ],
    },
    {
      title: 'Trust',
      subtitle: 'Measurable AI Reliability',
      description: 'Prove your agent is reliable, not just compliant',
      color: 'accent',
      gradient: 'from-accent to-purple-400',
      bgGlow: 'bg-accent/20',
      features: [
        { icon: Award, text: 'Health Score: Safety, Consistency, Oversight, Stability' },
        { icon: Globe, text: 'Public Trust Center for your customers' },
        { icon: Shield, text: 'Continuous trust verification' },
      ],
    },
    {
      title: 'Comply',
      subtitle: 'Audit-Ready Governance',
      description: 'Meet regulations without slowing down innovation',
      color: 'secondary',
      gradient: 'from-secondary-500 to-blue-400',
      bgGlow: 'bg-secondary-500/20',
      features: [
        { icon: ScrollText, text: 'Immutable audit logs & evidence' },
        { icon: FileCheck, text: 'ISO 42001 & EU AI Act ready' },
        { icon: Eye, text: 'Cross-framework evidence reuse' },
      ],
    },
  ];

  return (
    <section id="three-layers" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              Three Layers of{' '}
              <span className="gradient-text">Trust</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              A complete governance stack that transforms AI pilots into production-ready systems
            </p>
          </div>

          {/* Layers Stack */}
          <div className="space-y-6">
            {layers.map((layer, index) => (
              <div
                key={layer.title}
                className="glass-card p-8 relative overflow-hidden group hover:border-white/20 transition-all duration-300"
              >
                {/* Background glow */}
                <div className={`absolute top-0 right-0 w-96 h-96 ${layer.bgGlow} rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity`} />

                <div className="relative z-10">
                  <div className="flex flex-col lg:flex-row lg:items-center gap-8">
                    {/* Layer Info */}
                    <div className="lg:w-1/3">
                      <div className="flex items-center gap-4 mb-4">
                        <span className={`text-6xl font-bold bg-gradient-to-r ${layer.gradient} bg-clip-text text-transparent`}>
                          {index + 1}
                        </span>
                        <div>
                          <h3 className={`text-2xl font-bold bg-gradient-to-r ${layer.gradient} bg-clip-text text-transparent`}>
                            {layer.title}
                          </h3>
                          <p className="text-slate-500 dark:text-slate-400 text-sm">{layer.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-slate-600 dark:text-slate-300">{layer.description}</p>
                    </div>

                    {/* Features */}
                    <div className="lg:w-2/3 grid sm:grid-cols-3 gap-4">
                      {layer.features.map((feature, fIndex) => (
                        <div
                          key={fIndex}
                          className="flex items-start gap-3 p-4 rounded-lg bg-slate-100 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700/50"
                        >
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${layer.gradient} bg-opacity-20`}>
                            <feature.icon className="h-5 w-5 text-white" />
                          </div>
                          <span className="text-sm text-slate-600 dark:text-slate-300">{feature.text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeLayers;
