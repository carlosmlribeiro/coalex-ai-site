import React from 'react';

const UseCases = () => {
  return (
    <section id="use-cases" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <header className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Use Cases</h2>
        </header>
        <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
          <li className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"><strong>HealthTech</strong>: audit trails for model-assisted coding and decision support.</li>
          <li className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"><strong>Industrial / IoT</strong>: human validation for edge automation and safety checks.</li>
          <li className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"><strong>Finance</strong>: compliance-ready model evaluation and bias monitoring.</li>
          <li className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"><strong>Customer Ops</strong>: channel-agnostic human review and escalation (email, WhatsApp, custom UI).</li>
        </ul>
      </div>
    </section>
  );
};

export default UseCases;