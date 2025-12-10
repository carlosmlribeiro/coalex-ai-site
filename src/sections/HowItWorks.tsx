import React from 'react';

const HowItWorks = () => {
  const steps = [
    {
      title: 'Integrate',
      desc: 'One-line SDK integration with your existing AI systems. No rearchitecting required.',
      icon: '🔌',
    },
    {
      title: 'Monitor',
      desc: 'Coalex AI engine processes telemetry and identifies critical decision moments.',
      icon: '🔍',
    },
    {
      title: 'Approve',
      desc: 'Route bite-sized approval tasks to the right humans with just the right context.',
      icon: '✓',
    },
    {
      title: 'Improve',
      desc: 'Every approval creates training data, improves your AI, and ensures compliance.',
      icon: '📈',
    },
  ];

  return (
    <section id="how" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">How It Works</h2>
          <p className="text-xl text-gray-600">
            From integration to production in four simple steps
          </p>
        </header>
        <ol className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((s, i) => (
            <li key={s.title} className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow border-t-4 border-primary-500">
              <div className="text-4xl mb-4 text-center">{s.icon}</div>
              <div className="text-primary-600 font-bold text-lg mb-2">Step {i + 1}</div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">{s.title}</h3>
              <p className="text-gray-700">{s.desc}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 mb-4">
            <span className="font-semibold text-primary-600">Result:</span> AI in production with built-in governance and continuous improvement
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;