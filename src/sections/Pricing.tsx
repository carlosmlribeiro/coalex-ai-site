import React from 'react';
import Button from '@/components/Button';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'PRO',
      badge: null,
      description: 'Start free, scale as you grow',
      freeTier: {
        title: '1 Agent Free Forever',
        features: ['Full supervision', 'Audit logs', 'Community support'],
      },
      features: [
        'Up to 3 Agents',
        'One User',
        '10K Interactions/Month',
        'Priority support',
      ],
      cta: 'Get Started Free',
      ctaHref: '#contact',
      highlight: true,
      popular: false,
    },
    {
      name: 'TEAM',
      badge: null,
      description: 'For growing teams scaling AI operations',
      freeTier: null,
      features: [
        'Up to 5 Agents',
        'Up to 5 Workspaces',
        '100K Interactions/Month',
        'One Compliance Report',
        'Team collaboration',
        'Priority support',
      ],
      cta: 'Register Now',
      ctaHref: '#contact',
      highlight: false,
      popular: true,
    },
    {
      name: 'ENTERPRISE',
      badge: null,
      description: 'For organizations with advanced needs',
      freeTier: null,
      features: [
        'Up to 25 Agents',
        'Up to 10 Workspaces',
        '1M Interactions/Month',
        '5 Compliance Reports',
        'Custom integrations',
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
              Simple, Transparent <span className="gradient-text">Pricing</span>
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Start free and scale as you grow. No hidden fees, no surprises.
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

                {/* Badge area - fixed height for all cards */}
                <div className="h-10 mb-4">
                  {plan.badge && (
                    <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary-500/20 border border-primary-500/30">
                      <Sparkles className="h-4 w-4 text-primary-400" />
                      <span className="text-sm text-primary-400 font-semibold">{plan.badge}</span>
                    </div>
                  )}
                </div>

                {/* Plan name */}
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlight ? 'text-primary-400' : 'text-slate-900 dark:text-white'}`}>
                  {plan.name}
                </h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm mb-6">{plan.description}</p>

                {/* Free Tier callout for PRO plan */}
                {plan.freeTier && (
                  <div className="mb-6 p-4 rounded-lg bg-primary-500/10 border border-primary-500/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="h-4 w-4 text-primary-400" />
                      <span className="text-sm font-semibold text-primary-400">{plan.freeTier.title}</span>
                    </div>
                    <ul className="space-y-1">
                      {plan.freeTier.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                          <Check className="h-3 w-3 text-primary-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

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
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Public Trust Center Add-on</h4>
                  <p className="text-slate-500 dark:text-slate-400">
                    Your AI's public proof of trust. Live health scores, compliance badges, and secure document sharing.
                    Available for all plans.
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
