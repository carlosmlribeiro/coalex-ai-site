import React from 'react';

const WhyCoalex = () => {
  return (
    <section id="why" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <header className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Coalex</h2>
          <p className="text-lg text-gray-700">
            Many AI pilots fail because they lack real-world feedback, traceability and governance. Coalex fixes that by turning human interactions into the data and artifacts models need to improve — while keeping compliance and auditability front and center.
          </p>
        </header>
        <article>
          <h3 className="text-xl font-semibold mb-3">Outcomes we deliver</h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Production-ready AI with measurable ROI</li>
            <li>Traceable approvals and audit trails for regulated workflows</li>
            <li>Continuous model improvement driven by human feedback</li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default WhyCoalex;