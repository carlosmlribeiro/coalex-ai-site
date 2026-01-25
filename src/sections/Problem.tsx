import React from 'react';
import { AlertTriangle, ShieldX, FileQuestion, Scale } from 'lucide-react';

const Problem = () => {
  const painPoints = [
    {
      icon: ShieldX,
      pain: "Can't prove it's safe",
      quote: "I have no way to show the board what happens when the AI is wrong.",
      color: 'text-red-400',
      borderColor: 'border-red-500/30',
      bgColor: 'bg-red-500/10',
    },
    {
      icon: FileQuestion,
      pain: 'No audit trail',
      quote: "If something goes wrong, I can't reconstruct why the AI decided what it did.",
      color: 'text-orange-400',
      borderColor: 'border-orange-500/30',
      bgColor: 'bg-orange-500/10',
    },
    {
      icon: Scale,
      pain: 'EU AI Act uncertainty',
      quote: "We're classified as high-risk. I don't know what documentation we need.",
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
              Your AI Pilot Is Ready.{' '}
              <span className="text-red-500 dark:text-red-400">Your Company Won't Approve It.</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              You built an AI that works. You've tested it. You trust it.{' '}
              <span className="text-slate-900 dark:text-white font-semibold">But Legal and Risk won't sign off.</span>{' '}
              One bad decision could blow up your org — and no one wants to own that risk.
            </p>
          </div>

          {/* Pain points as quotes */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {painPoints.map((point, index) => (
              <div
                key={index}
                className={`glass-card p-6 ${point.borderColor} border-t-2`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${point.bgColor} mb-4`}>
                  <point.icon className={`h-6 w-6 ${point.color}`} />
                </div>
                <p className={`text-lg font-bold ${point.color} mb-3`}>
                  "{point.pain}"
                </p>
                <p className="text-slate-600 dark:text-slate-300 text-sm italic">
                  "{point.quote}"
                </p>
              </div>
            ))}
          </div>

          {/* The real problem */}
          <div className="glass-card p-8 border border-slate-200 dark:border-slate-700">
            <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-white">The Real Problem</h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 mb-4">
              We built an AI that works.{' '}
              <span className="text-red-500 dark:text-red-400 font-semibold">We couldn't get it approved.</span>
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              What's missing:{' '}
              <span className="text-primary-500 dark:text-primary-400 font-semibold">
                AI you can defend — to regulators, to customers, to the board.
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
