import React from 'react';
import { AlertTriangle, XCircle, TrendingDown, Clock } from 'lucide-react';

const Problem = () => {
  const problems = [
    {
      icon: XCircle,
      stat: '95%',
      label: 'of AI pilots',
      description: 'fail to deliver measurable business impact',
      source: 'MIT NANDA Report',
      color: 'text-red-400',
      borderColor: 'border-red-500/30',
      bgColor: 'bg-red-500/10',
    },
    {
      icon: TrendingDown,
      stat: '4 of 33',
      label: 'AI proofs of concept',
      description: 'actually graduate to production',
      source: 'IDC Research',
      color: 'text-orange-400',
      borderColor: 'border-orange-500/30',
      bgColor: 'bg-orange-500/10',
    },
    {
      icon: Clock,
      stat: '43% → 27%',
      label: 'Executive trust in AI',
      description: 'crashed in just one year',
      source: 'Capgemini Research',
      color: 'text-yellow-400',
      borderColor: 'border-yellow-500/30',
      bgColor: 'bg-yellow-500/10',
    },
  ];

  return (
    <section id="problem" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-red-500/10 border border-red-500/20 mb-6">
              <AlertTriangle className="h-8 w-8 text-red-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              AI Pilots Are Stuck in{' '}
              <span className="text-red-500 dark:text-red-400">Purgatory</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Enterprises have AI projects that never reach production. Fear of hallucinations,
              compliance issues, and lack of oversight keep promising pilots from scaling.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {problems.map((problem, index) => (
              <div
                key={index}
                className={`glass-card p-6 ${problem.borderColor} border-t-2`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${problem.bgColor} mb-4`}>
                  <problem.icon className={`h-6 w-6 ${problem.color}`} />
                </div>
                <div className={`text-4xl font-bold ${problem.color} mb-2`}>
                  {problem.stat}
                </div>
                <p className="text-slate-900 dark:text-white font-semibold mb-1">{problem.label}</p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-4">{problem.description}</p>
                <p className="text-xs text-slate-500 italic">— {problem.source}</p>
              </div>
            ))}
          </div>

          {/* Deal Drag Callout */}
          <div className="glass-card p-8 border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">The "Deal Drag" Problem</h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
              Even when AI works internally, your prospects don't trust it.
              <span className="text-red-500 dark:text-red-400 font-semibold"> Sales cycles slow down</span> as customers
              demand proof that your AI is safe, reliable, and compliant.
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
