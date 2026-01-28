import React from 'react';
import Button from '@/components/Button';
import { Check, ArrowRight, Sparkles, Rocket, Building, Building2 } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'PILOT',
      icon: Rocket,
      tagline: 'Prove It Works',
      description: 'Get your first AI workflow approved for production',
      features: [
        '1 AI Workflow',
        'Full Block/Route/Prove stack',
        'Audit trail exports',
        'Basic compliance mapping',
        'Email support',
      ],
      cta: 'Start a Pilot',
      ctaHref: '#contact',
      highlight: true,
      popular: false,
    },
    {
      name: 'PRODUCTION',
      icon: Building,
      tagline: 'Scale with Confidence',
      description: 'Post-approval expansion across workflows',
      features: [
        'Up to 10 AI Workflows',
        'Multi-team workspaces',
        'Advanced risk thresholds',
        'Full compliance reports',
        'Public Trust Center',
        'Priority support',
      ],
      cta: 'Talk to Us',
      ctaHref: 'https://meetings.hubspot.com/carlos1047',
      highlight: false,
      popular: true,
    },
    {
      name: 'ENTERPRISE',
      icon: Building2,
      tagline: 'Organization-Wide',
      description: 'Full deployment with dedicated support',
      features: [
        'Unlimited AI Workflows',
        'Unlimited workspaces',
        'Custom risk policies',
        'Custom compliance mapping',
        'SSO & advanced security',
        'Dedicated support',
        'SLA guarantees',
      ],
      cta: 'Contact Us',
      ctaHref: '#contact',
      highlight: false,
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 dark:text-white">
              Start with a Pilot.{' '}
              <span className="gradient-text">Scale When Ready.</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              The ROI is getting to production. Pick the plan that matches where you are.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 flex flex-col h-full ${
                  plan.highlight
                    ? 'bg-gradient-to-b from-primary-500/20 to-transparent border-2 border-primary-500/50'
                    : plan.popular
                    ? 'glass-card border-2 border-accent/50'
                    : 'glass-card'
                }`}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-white text-sm font-medium">
                    Most Popular
                  </div>
                )}

                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
                  plan.highlight ? 'bg-primary-500/20' : 'bg-slate-100 dark:bg-slate-800'
                }`}>
                  <plan.icon className={`h-6 w-6 ${plan.highlight ? 'text-primary-400' : 'text-slate-500 dark:text-slate-400'}`} />
                </div>

                {/* Plan name */}
                <h3 className={`text-2xl font-bold mb-1 ${plan.highlight ? 'text-primary-400' : 'text-slate-900 dark:text-white'}`}>
                  {plan.name}
                </h3>
                <p className={`text-lg font-medium mb-2 ${plan.highlight ? 'text-primary-300' : 'text-slate-700 dark:text-slate-300'}`}>
                  {plan.tagline}
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">{plan.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8 flex-grow">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className={`h-5 w-5 shrink-0 ${plan.highlight ? 'text-primary-400' : 'text-slate-400'}`} />
                      <span className="text-slate-600 dark:text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div className="mt-auto">
                  <Button
                    href={plan.ctaHref}
                    variant={plan.highlight ? 'primary' : 'outline'}
                    className={`w-full ${
                      plan.highlight
                        ? 'glow-primary'
                        : plan.popular
                        ? 'border-accent text-accent hover:bg-accent/10'
                        : 'border-slate-300 dark:border-slate-600 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Center Add-on */}
          <div className="glass-card p-8 border border-primary-500/30">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-primary-500/10 shrink-0">
                  <Sparkles className="h-8 w-8 text-primary-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Public Trust Center</h4>
                  <p className="text-slate-500 dark:text-slate-400">
                    Your AI's public proof of trust. Live health scores, compliance badges, and secure document sharing.
                    Included in Production and Enterprise plans.
                  </p>
                </div>
              </div>
              <Button href="#trust-center" variant="outline" className="shrink-0 border-primary-500/50 text-primary-500 dark:text-primary-400 hover:bg-primary-500/10">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
