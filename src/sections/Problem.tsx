import React from 'react';
import { AlertTriangle, TrendingDown, XCircle, BarChart3 } from 'lucide-react';

const Problem = () => {
  const stats = [
    {
      icon: TrendingDown,
      stat: '43% → 27%',
      label: 'Executive trust in AI',
      description: 'crashed 37% in one year',
      source: 'Capgemini Research',
      color: 'text-red-400',
      borderColor: 'border-red-500/30',
      bgColor: 'bg-red-500/10',
    },
    {
      icon: XCircle,
      stat: '95%',
      label: 'of AI pilots',
      description: 'fail to deliver ROI',
      source: 'MIT NANDA Report',
      color: 'text-orange-400',
      borderColor: 'border-orange-500/30',
      bgColor: 'bg-orange-500/10',
    },
    {
      icon: BarChart3,
      stat: '4 of 33',
      label: 'POCs graduate',
      description: 'to production',
      source: 'IDC Research',
      color: 'text-yellow-400',
      borderColor: 'border-yellow-500/30',
      bgColor: 'bg-yellow-500/10',
    },
  ];

  return (
    <section id="problem" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Lead with consequence - Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
              <AlertTriangle className="h-8 w-8 text-red-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              Executive Trust Is{' '}
              <span className="text-red-500 dark:text-red-400">Plummeting</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Only 12% of executives have enough confidence to deploy AI in production.
              Only 5% see any ROI. Even if <span className="text-slate-900 dark:text-white font-semibold">YOU</span> trust
              your AI to go live — do your customers trust it won't hallucinate?
            </p>
          </div>

          {/* Stats as supporting evidence */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`glass-card p-6 ${stat.borderColor} border-t-2`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${stat.bgColor} mb-4`}>
                  <stat.icon className={`h-6 w-6 ${stat.color}`} />
                </div>
                <div className={`text-4xl font-bold ${stat.color} mb-2`}>
                  {stat.stat}
                </div>
                <p className="text-slate-900 dark:text-white font-semibold mb-1">{stat.label}</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">{stat.description}</p>
                <p className="text-xs text-slate-500 italic">— {stat.source}</p>
              </div>
            ))}
          </div>

          {/* Your customers don't trust it either */}
          <div className="glass-card p-8 border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">Your Customers Don't Trust It Either</h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
              You built it. You tested it. You trust it.{' '}
              <span className="text-red-500 dark:text-red-400 font-semibold">But your customers don't</span> — and they're
              stalling deals until you prove it's safe.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              What's missing:{' '}
              <span className="text-primary-500 dark:text-primary-400 font-semibold">
                A way to prove your AI is trustworthy — not just to your team, but to your customers.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
