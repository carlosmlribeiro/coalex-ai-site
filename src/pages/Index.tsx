import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ProductShowcase from '@/components/ProductShowcase';
import FeatureScreenshot from '@/components/FeatureScreenshot';


import Hero from '@/sections/Hero';
import Problem from '@/sections/Problem';
import WhyCoalex from '@/sections/WhyCoalex';
import HowItWorks from '@/sections/HowItWorks';
import ThreeOutcomes from '@/sections/ThreeOutcomes';
import CoreFeatures from '@/sections/CoreFeatures';
import ComparisonTable from '@/sections/ComparisonTable';
import Testimonials from '@/sections/Testimonials';
import Integrations from '@/sections/Integrations';
import UseCases from '@/sections/UseCases';
import WhyChoose from '@/sections/WhyChoose';
import CustomersTraction from '@/sections/CustomersTraction';
import FAQ from '@/sections/FAQ';
import SecurityCompliance from '@/sections/SecurityCompliance';
import GetStarted from '@/sections/GetStarted';

const Index = () => {
  useEffect(() => {
    // Initialize Microsoft Clarity (browser-only, safe)
    const projectId = "qt81y8a6u9";
    import('@microsoft/clarity')
      .then((m) => {
        const clarity = (m as any).default ?? (m as any);
        clarity?.init?.(projectId);
      })
      .catch(() => { /* noop */ });
    // Load HubSpot form
    const script = document.createElement('script');
    script.src = '//js.hsforms.net/forms/embed/v2.js';
    script.async = true;
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: '48921270',
          formId: '5fdfb31e-7bd4-4306-9bde-d59a2621ea4d',
          region: 'na1',
          target: '#hubspot-form',
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />

      <main>
        <Hero />
        <Problem />
        <WhyCoalex />
        <HowItWorks />

        {/* Screenshot sections to showcase capabilities with partial reveal */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FeatureScreenshot
              imageSrc="/lovable-uploads/07a83a36-31dc-4c32-99ac-c9be36722469.png"
              title="Human-in-the-Loop Task Engine"
              description="Lightweight task UI that surfaces just the right context to reviewers. Route critical outputs for approval and capture structured feedback."
              highlightMetric={{ value: '100%', label: 'traceability on reviewed actions' }}
              ctaText="See the task flow"
            />
          </div>
        </section>

        <ProductShowcase />

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FeatureScreenshot
              imageSrc="/lovable-uploads/85ac0ea7-62be-4f01-a21d-c57fa4c1e1ae.png"
              title="Real-time Insights"
              description="Correlate human actions with model accuracy and business KPIs. Track clicks, conversions and revenue impact as models improve."
              alignment="right"
              ctaText="Explore insights"
            />
          </div>
        </section>

        <ThreeOutcomes />
        <CoreFeatures />
        <ComparisonTable />
        <Testimonials />
        <Integrations />
        <UseCases />
        <WhyChoose />
        <CustomersTraction />

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <FeatureScreenshot
              imageSrc="/lovable-uploads/470a2477-3386-456e-8286-4db1b6e5cbd2.png"
              title="Compliance & Audit Trails"
              description="Immutable approval records, versioned decisions and exportable evidence for audits."
              ctaText="Review compliance view"
            />
          </div>
        </section>

        <FAQ />
        <SecurityCompliance />
        <GetStarted />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
