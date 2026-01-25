import React from 'react';
import { ShieldOff, Users, FileCheck, AlertOctagon, UserCheck, ClipboardCheck, Scale, ScrollText, Eye } from 'lucide-react';

const ThreeLayers = () => {
  const layers = [
    {
      title: 'Block',
      subtitle: 'Stop risky decisions before they execute',
      description: 'All AI decisions above X risk are reviewed before execution.',
      color: 'primary',
      gradient: 'from-red-500 to-red-400',
      bgGlow: 'bg-red-500/20',
      features: [
        { icon: AlertOctagon, text: 'Set risk thresholds for automatic blocking' },
        { icon: ShieldOff, text: 'Catch dangerous outputs before they reach customers' },
        { icon: Scale, text: 'Define what "risky" means for your context' },
      ],
    },
    {
      title: 'Route',
      subtitle: 'Get the right human to approve',
      description: 'Clear accountability for every escalated decision.',
      color: 'accent',
      gradient: 'from-accent to-purple-400',
      bgGlow: 'bg-accent/20',
      features: [
        { icon: UserCheck, text: 'Route to the right reviewer automatically' },
        { icon: Users, text: 'Log who approved what and when' },
        { icon: ClipboardCheck, text: 'Keep humans in control without slowing down' },
      ],
    },
    {
      title: 'Prove',
      subtitle: 'Create defensible, attributable audit trails',
      description: 'Evidence you can present to regulators, customers, and the board.',
      color: 'secondary',
      gradient: 'from-secondary-500 to-blue-400',
      bgGlow: 'bg-secondary-500/20',
      features: [
        { icon: ScrollText, text: 'Every decision logged and attributable' },
        { icon: FileCheck, text: 'Map to ISO 42001, EU AI Act, SOC 2' },
        { icon: Eye, text: 'Export audit packages on demand' },
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
              One Platform.{' '}
              <span className="gradient-text">Three Guarantees.</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Not governance. Not observability. A firewall.
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
