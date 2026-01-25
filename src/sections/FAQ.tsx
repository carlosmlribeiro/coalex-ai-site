import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'Will this actually get Legal to say yes?',
      answer: "That's exactly what Coalex is built for. Legal and Risk teams block AI because they can't prove it's safe. With Coalex, you get: automatic blocking of risky decisions, clear audit trails showing who approved what, and compliance documentation mapped to ISO 42001 and EU AI Act. We've helped teams move from 'stuck in pilot' to 'approved for production' by giving them the evidence they need to defend the deployment.",
    },
    {
      question: 'How long until we see results?',
      answer: "Most teams are up and running with their first workflow in days, not months. The real question isn't integration time — it's how fast you can schedule that approval meeting with Legal. Once they see the audit trails and blocking controls, you'll have what you need to get sign-off.",
    },
    {
      question: 'Do we need to change our AI infrastructure?',
      answer: 'No. Coalex works as a governance layer on top of your existing AI infrastructure. We integrate with any LLM provider (OpenAI, Anthropic, etc.) and AI platforms like Dify.ai without requiring you to change how you build or deploy your AI. Think of it as a firewall that wraps around what you already have.',
    },
    {
      question: 'What about EU AI Act compliance?',
      answer: "The EU AI Act requires deployers of high-risk AI to maintain transparency records, monitor for incidents, and implement risk management. Coalex automatically maps your AI operations to the controls required — including Article 26 requirements for logging and human oversight. We generate the documentation you need for audits so you're not scrambling when regulators ask.",
    },
    {
      question: 'Who does the integration?',
      answer: "We do. Every Pilot plan includes hands-on integration support. Our team works directly with yours to get Coalex wrapped around your first AI workflow. For Production and Enterprise plans, we provide dedicated implementation support and can work with your existing consultants or system integrators.",
    },
    {
      question: "What's the ROI?",
      answer: "The ROI is getting to production. How much is that stuck AI pilot costing you? The value you expected from that AI — the efficiency gains, the cost savings, the competitive advantage — is sitting on the shelf because you can't get approval. Coalex is the bridge from 'pilot that works' to 'production deployment that's defended.'",
    },
    {
      question: 'What compliance frameworks do you support?',
      answer: 'We support ISO 42001 (the global AI management standard), EU AI Act compliance mapping, and controls that also apply to SOC 2 and GDPR. Our cross-framework approach means you collect evidence once and apply it across multiple compliance requirements.',
    },
    {
      question: 'What is a Trust Center?',
      answer: "A Trust Center is a public-facing page (like trust.yourcompany.com) where your customers can verify your AI's health scores, compliance status, and human oversight metrics in real-time. For AI-native companies, it's a sales accelerator — proof instead of promises when customers ask 'is your AI safe?'",
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
              Questions You're <span className="gradient-text">Actually Asking</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              The questions we hear from heads of AI at regulated companies.
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
              Talk to us directly →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
