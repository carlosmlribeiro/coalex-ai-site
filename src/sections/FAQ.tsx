import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'What is Coalex?',
      answer: 'Coalex is an AI governance platform that helps you supervise, trust, and comply with AI regulations. We provide real-time monitoring, human-in-the-loop controls, audit trails, and compliance mapping for your AI agents and LLM applications.',
    },
    {
      question: 'How does the free tier work?',
      answer: 'You get 1 AI agent free forever with full supervision capabilities, audit logs, and community support. No credit card required. When you need more agents or advanced features, you can upgrade to a paid plan.',
    },
    {
      question: 'What compliance frameworks do you support?',
      answer: 'We support ISO 42001 (the global AI management standard), EU AI Act compliance, and map controls that also apply to SOC 2, GDPR, and other frameworks. Our cross-framework approach means you collect evidence once and apply it across multiple compliance requirements.',
    },
    {
      question: 'What is a Trust Center?',
      answer: "A Trust Center is a public-facing page (like trust.yourcompany.com) where your customers can verify your AI's health scores, compliance status, and human oversight metrics in real-time. It helps you close deals faster by providing proof instead of promises.",
    },
    {
      question: 'How long does integration take?',
      answer: 'Most developers integrate our SDK in minutes. We provide simple APIs and SDKs that wrap around your existing AI agents with minimal code changes. You can start monitoring your first agent the same day you sign up.',
    },
    {
      question: 'Do I need to change my AI infrastructure?',
      answer: 'No. Coalex works as a governance layer on top of your existing AI infrastructure. We integrate with any LLM provider (OpenAI, Anthropic, etc.) and AI platforms like Dify.ai without requiring you to change how you build or deploy your AI.',
    },
    {
      question: 'What is human-in-the-loop (HITL)?',
      answer: "Human-in-the-loop means routing certain AI decisions to human reviewers before they're executed. Coalex lets you define policies for when human approval is required — like high-risk outputs, low-confidence responses, or sensitive topics — ensuring humans stay in control.",
    },
    {
      question: 'How do you help with EU AI Act compliance?',
      answer: 'The EU AI Act requires AI deployers to maintain transparency records, monitor for incidents, and implement risk management. Coalex automatically maps your AI operations to the 150+ controls required, monitors for violations, and generates the documentation you need for audits.',
    },
  ];

  return (
    <section id="faq" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-500/10 border border-primary-500/20 mb-6">
              <HelpCircle className="h-8 w-8 text-primary-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Everything you need to know about Coalex and AI governance.
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="glass-card border border-slate-200 dark:border-slate-700 overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-semibold text-slate-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`h-5 w-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-200 ${
                    openIndex === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <div className="px-6 pb-6 text-slate-600 dark:text-slate-300">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <p className="text-slate-500 dark:text-slate-400 mb-4">
              Still have questions?
            </p>
            <a
              href="#contact"
              className="text-primary-500 dark:text-primary-400 font-semibold hover:underline"
            >
              Get in touch with our team →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
