import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQ = () => {
  const faqs = [
    {
      question: "What makes Coalex different from other AI observability tools?",
      answer: "While other tools focus on technical monitoring for developers, Coalex is built for business decision-makers. We provide governance workflows, executive dashboards with business metrics, and built-in compliance—not just technical debugging. Our human-in-the-loop approach bridges the gap between AI development and executive decision-making."
    },
    {
      question: "How long does it take to integrate Coalex?",
      answer: "Integration takes just one line of code. We listen to telemetry data from your existing AI systems and respond to agent escalations via our MCP server. No rearchitecting required, and you can be up and running in days, not weeks."
    },
    {
      question: "Is Coalex compliant with EU AI Act regulations?",
      answer: "Yes. Coalex is built with EU AI Act compliance in mind, providing complete audit trails, immutable approval records, versioned decisions, and built-in fairness toolkits. We help you be ready for 2026 enforcement with compliance baked into every interaction."
    },
    {
      question: "What does 'human-in-the-loop' mean?",
      answer: "Human-in-the-loop means critical AI decisions are routed to the right human experts at the right time for approval. Our AI engine identifies uncertainty and asks simple validation questions to your domain experts and executives. Their responses create training data, improve your AI continuously, and maintain full governance."
    },
    {
      question: "Who is Coalex for—developers or executives?",
      answer: "Both. Developers integrate our SDK easily into their AI systems. Executives get actionable dashboards showing AI decision accuracy, human intervention rates, ROI metrics, and compliance status. Domain experts receive clear approval workflows with full context. Everyone works together through one platform."
    },
    {
      question: "How does Coalex help my AI improve over time?",
      answer: "Every human interaction in Coalex creates training data. We automatically generate evaluation test suites, capture structured feedback, and build proprietary fine-tuning datasets. Your AI doesn't just run—it learns continuously from expert corrections and approvals."
    },
    {
      question: "Can Coalex integrate with my existing AI stack?",
      answer: "Yes. Coalex is designed to work with any AI system. We integrate with popular frameworks and observability tools through our SDK and MCP server. Whether you're using LangChain, OpenAI, Anthropic, or custom solutions, Coalex fits into your existing workflow."
    },
    {
      question: "What happens to my employees when I deploy AI with Coalex?",
      answer: "Your employees become AI supervisors, not replacements. Just like supermarket cashiers evolved to oversee self-checkout registers, your workforce shifts from repetitive tasks to training and supervising AI. This is workforce transformation through upskilling, not downsizing."
    },
    {
      question: "What kind of support do you provide?",
      answer: "We offer hands-on implementation support, working directly with your team to integrate Coalex. Design partners get direct access to our founding team, influence our product roadmap, and receive preferred pricing. We're committed to your success from day one."
    },
    {
      question: "How much does Coalex cost?",
      answer: "Pricing depends on your scale and requirements. We offer special early-adopter rates for design partners who join us in 2025. Contact us for a personalized quote based on your specific use case and deployment size."
    },
    {
      question: "What's the difference between the Enterprise and Developer offerings?",
      answer: "Enterprise customers get full white-glove service including hands-on implementation, dedicated support, and design partnership opportunities. Developers joining our waiting list will get early access to our self-service platform when it launches. Both get the same powerful governance platform."
    },
    {
      question: "Do you have real customers in production?",
      answer: "Yes. We're live with our first customer, running 3 use cases over thousands of interactions in just 4 months. We're not just theory—we're proven in production and growing fast."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about Coalex.ai
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-gray-50 rounded-lg px-6 border border-gray-200"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-primary-600 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="mt-12 text-center bg-gradient-to-br from-primary-50 to-primary-100 p-8 rounded-xl">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Still have questions?</h3>
            <p className="text-lg text-gray-700 mb-6">
              We're here to help. Reach out to us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:founders@coalex.ai"
                className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="https://linkedin.com/company/coalex-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                <img src="/InBug-White.png" alt="LinkedIn" className="h-5 w-5" />
                Follow on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
