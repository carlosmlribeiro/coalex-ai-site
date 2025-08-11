import React from 'react';

const Integrations = () => {
  return (
    <section id="integrations" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <header className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold">Integrations & SDKs</h2>
          <p className="text-gray-700 mt-2">Coalex is built to fit your stack — plug in with the tools you already use:</p>
        </header>
        <ul className="space-y-3 text-gray-700 max-w-3xl mx-auto">
          <li><strong>Python SDK</strong> — send review requests, fetch tasks, and push feedback programmatically.</li>
          <li><strong>JavaScript / TypeScript SDK</strong> — embed Coalex workflows into UIs and web apps.</li>
          <li><strong>MCP (Model Context Protocol) server</strong> — connect LLMs and agents using the MCP standard for secure, bidirectional tool access. Anthropic’s MCP has rapidly become the standard for connecting models to tools and data.</li>
          <li><strong>Webhooks & APIs</strong> — event hooks for task lifecycle, web callbacks and automated pipelines.</li>
        </ul>
        <p className="text-gray-600 text-center mt-6">Developer docs and examples coming soon; contact us for early access or a guided integration.</p>
      </div>
    </section>
  );
};

export default Integrations;