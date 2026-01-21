import React, { useState } from 'react';
import Button from '@/components/Button';
import { ArrowRight, Code, Shield, FileText, Zap, CreditCard, Eye, Globe, CheckCircle, Workflow, Users, Building2, Rocket } from 'lucide-react';

type AudienceType = 'developers' | 'ai-native' | 'enterprises';

const AudienceTabs = () => {
  const [activeTab, setActiveTab] = useState<AudienceType>('developers');

  const tabs = [
    { id: 'developers' as AudienceType, label: 'For Developers', icon: Code },
    { id: 'ai-native' as AudienceType, label: 'For AI-Native', icon: Rocket },
    { id: 'enterprises' as AudienceType, label: 'For Enterprises', icon: Building2 },
  ];

  const audiences = {
    developers: {
      badge: 'For Developers',
      headline: 'Ship Your First Governed AI.',
      headlineAccent: 'Free.',
      description: 'You built an AI agent. Now prove it works. Full governance for your first agent — no credit card, no catch.',
      features: [
        { icon: Code, title: '1 Agent Free Forever', description: 'Get started with one fully governed AI agent at no cost' },
        { icon: Shield, title: 'Full Supervision', description: 'Complete visibility into your AI behavior and decisions' },
        { icon: FileText, title: 'Audit Logs Included', description: 'Every decision tracked and ready for review' },
        { icon: Zap, title: 'SDK in Minutes', description: 'Integrate with just a few lines of code' },
        { icon: CreditCard, title: 'No Credit Card', description: 'Start building trust today, no strings attached' },
      ],
      primaryCta: { text: 'Get Started Free', href: '#pricing' },
      secondaryCta: null,
      accentColor: 'primary',
    },
    'ai-native': {
      badge: 'For AI-Native Companies',
      headline: 'You Build AI Products.',
      headlineAccent: 'We Help You Prove They Work.',
      description: 'Your AI is your product. Coalex gives you the observability, trust infrastructure, and compliance mapping to prove it\'s reliable — so you can close deals faster.',
      features: [
        { icon: Eye, title: 'Real-time Observability', description: 'Monitor your entire AI fleet with agent health scores' },
        { icon: Globe, title: 'Public Trust Center', description: 'Give your customers a live dashboard proving your AI is trustworthy' },
        { icon: Shield, title: 'Compliance Mapping', description: 'ISO 42001 & EU AI Act compliance mapped automatically' },
        { icon: Zap, title: 'Close Deals Faster', description: 'Turn trust into a sales asset with verifiable proof' },
      ],
      primaryCta: { text: 'See Plans', href: '#pricing' },
      secondaryCta: { text: 'Book a Demo', href: '#contact' },
      accentColor: 'accent',
    },
    enterprises: {
      badge: 'For Enterprises',
      headline: 'New to AI?',
      headlineAccent: 'Start with Dify.ai + Coalex',
      description: 'Build powerful AI workflows with Dify.ai\'s visual platform — already SOC 2 Type II and GDPR compliant. Coalex adds the governance, trust, and compliance layer you need.',
      features: [
        { icon: Workflow, title: 'Visual AI Platform', description: 'Build AI workflows with Dify.ai\'s intuitive visual platform' },
        { icon: CheckCircle, title: 'Already Compliant', description: 'Dify.ai is SOC 2 Type II and GDPR compliant out of the box' },
        { icon: Shield, title: 'Governance Layer', description: 'Coalex adds trust, compliance mapping, and human oversight' },
        { icon: Users, title: 'Enterprise Support', description: 'Dedicated support and SLA guarantees for your team' },
      ],
      primaryCta: { text: 'Talk to Sales', href: '#contact' },
      secondaryCta: { text: 'Learn About Dify.ai', href: 'https://dify.ai' },
      accentColor: 'secondary',
    },
  };

  const current = audiences[activeTab];

  const getAccentClasses = (color: string) => ({
    badge: color === 'primary' ? 'bg-primary-500/10 border-primary-500/20 text-primary-400' :
           color === 'accent' ? 'bg-accent/10 border-accent/20 text-accent' :
           'bg-secondary-500/10 border-secondary-500/20 text-secondary-400',
    gradient: color === 'primary' ? 'gradient-text' :
              color === 'accent' ? 'bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent' :
              'bg-gradient-to-r from-secondary-400 to-blue-400 bg-clip-text text-transparent',
    icon: color === 'primary' ? 'bg-primary-500/10 text-primary-400' :
          color === 'accent' ? 'bg-accent/10 text-accent' :
          'bg-secondary-500/10 text-secondary-400',
    button: color === 'primary' ? 'glow-primary' :
            color === 'accent' ? 'bg-accent hover:bg-accent/90 text-white' :
            'glow-primary',
    border: color === 'primary' ? 'border-primary-500/20' :
            color === 'accent' ? 'border-accent/20' :
            'border-secondary-500/20',
  });

  const accent = getAccentClasses(current.accentColor);

  return (
    <section id="audience" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-500/5 to-transparent" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-center mb-8">
            <div className="inline-flex p-1 bg-slate-100 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    activeTab === tab.id
                      ? 'bg-white dark:bg-slate-700 text-slate-900 dark:text-white shadow-sm'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-300'
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Content Card */}
          <div className={`glass-card p-8 md:p-12 ${accent.border} border`}>
            <div className="flex flex-col md:flex-row md:items-center gap-8">
              {/* Left: Content */}
              <div className="md:w-1/2">
                <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-6 ${accent.badge}`}>
                  <span className="text-xs font-medium uppercase tracking-wider">{current.badge}</span>
                </div>

                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900 dark:text-white">
                  {current.headline}{' '}
                  <span className={accent.gradient}>{current.headlineAccent}</span>
                </h2>

                <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">
                  {current.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button href={current.primaryCta.href} size="lg" className={accent.button}>
                    {current.primaryCta.text}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  {current.secondaryCta && (
                    <Button
                      href={current.secondaryCta.href}
                      variant="outline"
                      size="lg"
                      className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      {current.secondaryCta.text}
                    </Button>
                  )}
                </div>
              </div>

              {/* Right: Features */}
              <div className="md:w-1/2">
                <div className="space-y-3">
                  {current.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 p-4 bg-slate-100 dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700"
                    >
                      <div className={`p-2 rounded-lg shrink-0 ${accent.icon}`}>
                        <feature.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="text-slate-900 dark:text-white font-semibold text-sm">{feature.title}</h4>
                        <p className="text-slate-500 dark:text-slate-400 text-xs">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudienceTabs;
