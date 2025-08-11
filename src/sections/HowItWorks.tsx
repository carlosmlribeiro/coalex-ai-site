import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      title: 'Connect',
      desc: 'Connect your model or agents to Coalex (MCP, SDKs, webhooks).',
    },
    {
      title: 'Route',
      desc: 'Route ambiguous or critical outputs to human agents via compact, task-oriented UIs.',
    },
    {
      title: 'Collect',
      desc: 'Collect approvals, labeled feedback and metadata automatically.',
    },
    {
      title: 'Improve',
      desc: 'Improve models with generated training artefacts and monitor KPI/impact in real time.',
    },
  ];

  return (
    <section id="how" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">How it works</h2>
        </header>
        <ol className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((s, i) => (
            <li key={s.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="text-primary font-bold text-sm mb-2">{i + 1}.</div>
              <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default HowItWorks;