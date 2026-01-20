import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

// New redesigned sections
import Hero from '@/sections/Hero';
import TrustBar from '@/sections/TrustBar';
import Problem from '@/sections/Problem';
import ThreeLayers from '@/sections/ThreeLayers';
import SalesAccelerator from '@/sections/SalesAccelerator';
import TrustCenter from '@/sections/TrustCenter';
import AICompliance from '@/sections/AICompliance';
import FreeForDevs from '@/sections/FreeForDevs';
import DifyPartnership from '@/sections/DifyPartnership';
import HowItWorks from '@/sections/HowItWorks';
import TrustedCustomers from '@/sections/TrustedCustomers';
import Pricing from '@/sections/Pricing';
import SecurityCompliance from '@/sections/SecurityCompliance';
import GetStartedCTA from '@/sections/GetStartedCTA';

const Index = () => {
  useEffect(() => {
    // Initialize Microsoft Clarity
    const clarityId = import.meta.env.VITE_CLARITY_PROJECT_ID;
    if (clarityId) {
      import('@microsoft/clarity')
        .then((m) => {
          const clarity = (m as any).default ?? (m as any);
          clarity?.init?.(clarityId);
        })
        .catch(() => { /* noop */ });
    }

    // Initialize Google Analytics 4
    const gaId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (gaId) {
      // Load gtag.js script
      const gtagScript = document.createElement('script');
      gtagScript.async = true;
      gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
      document.head.appendChild(gtagScript);

      // Initialize gtag
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      gtag('js', new Date());
      gtag('config', gaId);
    }

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
        {/* 1. Hero Section - Main headline and CTAs */}
        <Hero />

        {/* 2. Trust Bar - Customer logos and social proof */}
        {/* <TrustBar /> */}

        {/* 3. Problem Section - AI Purgatory */}
        <Problem />

        {/* 4. Three Layers Solution - Supervise/Trust/Comply */}
        <ThreeLayers />

        {/* 5. Sales Accelerator - Deal drag pitch */}
        <SalesAccelerator />

        {/* 6. Trust Center Feature - Public Trust Page */}
        <TrustCenter />

        {/* 6b. AI Compliance Frameworks - ISO 42001 & EU AI Act */}
        <AICompliance />

        {/* 7. Free for Developers */}
        <FreeForDevs />

        {/* 8. Partnership Section */}
        <DifyPartnership />

        {/* 9. How It Works - 4-step flow */}
        <HowItWorks />

        {/* 10. Trusted Customers - Logos + testimonials */}
        {/* <TrustedCustomers /> */}

        {/* 11. Pricing Section - 3-tier pricing */}
        <Pricing />

        {/* 12. Security & Compliance Badges */}
        <SecurityCompliance />

        {/* 13. Final CTA Section */}
        <GetStartedCTA />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
