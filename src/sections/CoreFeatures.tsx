import React from 'react';

const CoreFeatures = () => {
  const features = [
    {
      title: 'Human-in-the-Loop Task Engine',
      desc: 'Lightweight task UI that surfaces just the right context to reviewers.',
    },
    {
      title: 'Real-time Insights Module',
      desc: 'Correlate human actions with model accuracy and business KPIs (clicks, conversions, revenue).',
    },
    {
      title: 'Compliance & Audit Trails',
      desc: 'Immutable approval records, versioned decisions and exportable evidence for audits.',
    },
    {
      title: 'Self-Improvement Pipelines',
      desc: 'Automatic generation of labeled data and retraining triggers from real interactions.',
    },
    {
      title: 'Enterprise Controls',
      desc: 'Role-based access, SSO, data retention policies and SLA tiers.',
    },
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <header className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Core Features</h2>
        </header>
        <ul className="grid md:grid-cols-2 gap-6">
          {features.map((f) => (
            <li key={f.title} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <h3 className="font-semibold text-lg mb-2">{f.title}</h3>
              <p className="text-gray-600">{f.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default CoreFeatures;