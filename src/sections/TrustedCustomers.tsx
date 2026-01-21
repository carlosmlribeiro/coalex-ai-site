import React from 'react';
import { Quote } from 'lucide-react';

const TrustedCustomers = () => {
  // Placeholder logos
  const logos = [
    { name: 'TechCorp', width: 'w-28' },
    { name: 'AI Startup', width: 'w-24' },
    { name: 'Enterprise Co', width: 'w-32' },
    { name: 'FinTech Inc', width: 'w-28' },
    { name: 'Health AI', width: 'w-24' },
    { name: 'Retail AI', width: 'w-28' },
    { name: 'Logistics Pro', width: 'w-24' },
    { name: 'SaaS Corp', width: 'w-32' },
  ];

  // Placeholder testimonials
  const testimonials = [
    {
      quote: "Coalex helped us get our AI chatbot from pilot to production in weeks instead of months. The Trust Center was a game-changer for closing enterprise deals.",
      author: 'Sarah Chen',
      role: 'VP of Engineering',
      company: 'AI Startup',
    },
    {
      quote: "The human-in-the-loop workflows gave our compliance team the confidence to approve our AI deployment. We're now processing 10x more documents.",
      author: 'Marcus Johnson',
      role: 'Head of Operations',
      company: 'Enterprise Co',
    },
  ];

  return (
    <section id="customers" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              Trusted by <span className="gradient-text">Innovative Teams</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Companies building the future of AI choose Coalex for governance
            </p>
          </div>

          {/* Logo Grid */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 mb-16 opacity-60">
            {logos.map((logo, index) => (
              <div
                key={index}
                className={`${logo.width} h-10 bg-slate-200 dark:bg-slate-700/50 rounded-lg flex items-center justify-center hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors`}
              >
                <span className="text-sm text-slate-500 dark:text-slate-400 font-medium">{logo.name}</span>
              </div>
            ))}
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-card p-8 relative"
              >
                {/* Quote icon */}
                <div className="absolute -top-4 -left-4 p-3 rounded-full bg-primary-500/10 border border-primary-500/20">
                  <Quote className="h-6 w-6 text-primary-400" />
                </div>

                {/* Quote */}
                <blockquote className="text-lg text-slate-600 dark:text-slate-300 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary-500 dark:text-primary-400">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-slate-900 dark:text-white font-semibold">{testimonial.author}</div>
                    <div className="text-slate-500 dark:text-slate-400 text-sm">
                      {testimonial.role}, {testimonial.company}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedCustomers;
