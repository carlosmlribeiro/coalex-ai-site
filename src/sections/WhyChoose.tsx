import React from 'react';

const WhyChoose = () => {
  return (
    <section id="why-choose" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <header className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Why customers choose Coalex</h2>
        </header>
        <ul className="space-y-3 text-gray-700 max-w-3xl mx-auto">
          <li><strong>Compliance-first by design</strong> — build certification evidence as you operate.</li>
          <li><strong>Business-focused UX</strong> — designed for domain experts, not just engineers.</li>
          <li><strong>Data that teaches</strong> — every review produces labeled data and signals for model improvement.</li>
          <li><strong>Plug & play integrations</strong> — connect via SDKs, MCP servers or APIs and ship faster.</li>
        </ul>
      </div>
    </section>
  );
};

export default WhyChoose;