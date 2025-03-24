import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { LucideArrowRight, Shield, Zap, BarChart3, Users } from 'lucide-react';
import Button from '@/components/Button';
import CardFeature from '@/components/CardFeature';
import TestimonialCard from '@/components/TestimonialCard';
import ProductShowcase from '@/components/ProductShowcase';
import FeatureScreenshot from '@/components/FeatureScreenshot';
import Clarity from '@microsoft/clarity';

const Index = () => {
  useEffect(() => {
    // Initialize Microsoft Clarity
    const projectId = "qt81y8a6u9";
    Clarity.init(projectId);

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
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-44 md:pb-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in">
              AI you can Trust
            </h1>
            <p className="text-xl text-gray-600 mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <strong>You Need AI. But You Can't Afford to Get It Wrong.</strong><br />
              Coalex.ai delivers <strong>AI-powered automation with human oversight</strong>, so you can scale AI confidently—without compliance nightmares or costly mistakes.
            </p>
            <div className="max-w-xl mx-auto space-y-4 mb-12 animate-fade-in" style={{ animationDelay: '400ms' }}>
              <div className="flex items-center">
                <div className="text-primary mr-3">🔹</div>
                <p className="text-gray-700"><strong>AI that enhances your team, not replaces them.</strong></p>
              </div>
              <div className="flex items-center">
                <div className="text-primary mr-3">🔹</div>
                <p className="text-gray-700"><strong>AI that meets regulations, not breaks them.</strong></p>
              </div>
              <div className="flex items-center">
                <div className="text-primary mr-3">🔹</div>
                <p className="text-gray-700"><strong>AI that drives results, not risks.</strong></p>
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
              <p className="text-lg font-bold text-gray-800 mb-4">🔥 Are you ready to harness AI the right way?</p>
              <Button href="#cta" size="lg">
                Get Early Access Now
                <LucideArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Problems Section */}
      <section id="problems" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">❌ Most AI Solutions Are a Compliance Disaster</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-md animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="text-2xl mb-4">🚨</div>
              <h3 className="text-xl font-bold mb-3">Regulators are cracking down.</h3>
              <p className="text-gray-600">AI-driven decisions with no human oversight lead to audits, fines, and PR disasters.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="text-2xl mb-4">🚨</div>
              <h3 className="text-xl font-bold mb-3">AI makes mistakes—big ones.</h3>
              <p className="text-gray-600">Bias, hallucinations, and errors can cost your business millions.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md animate-fade-in" style={{ animationDelay: '500ms' }}>
              <div className="text-2xl mb-4">🚨</div>
              <h3 className="text-xl font-bold mb-3">Your workforce is overwhelmed.</h3>
              <p className="text-gray-600">AI promises efficiency but creates <strong>chaos without proper human-AI collaboration.</strong></p>
            </div>
          </div>
          
          <div className="mt-20">
            <FeatureScreenshot 
              imageSrc="/lovable-uploads/07a83a36-31dc-4c32-99ac-c9be36722469.png"
              title="Complete Human Oversight"
              description="Our conversation interface gives your team perfect visibility into every AI interaction, with the ability to approve, modify, or reject responses before they reach customers."
              highlightMetric={{
                value: "98%",
                label: "compliance accuracy with human oversight"
              }}
              ctaText="See How It Works"
            />
          </div>
          
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '700ms' }}>
            <p className="text-lg font-bold text-gray-800 mb-4">⏳ How long can you afford to risk bad AI decisions?</p>
            <Button href="#cta">
              Try Coalex.ai Today
              <LucideArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Solution Section */}
      <section id="solution" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">💡 The Smartest Companies Take a Smarter Approach to AI</h2>
            <p className="text-xl text-gray-600">Here's How Coalex.ai Keeps You in Control:</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <CardFeature 
              title="Step 1: Train & Manage AI Agents"
              description="Set up AI models your way—with a centralized dashboard to monitor, train, and control every AI interaction."
              icon={<Shield className="h-6 w-6 text-primary" />}
              delay={100}
            />
            
            <CardFeature 
              title="Step 2: Human + AI Collaboration"
              description="Keep humans in the loop with AI-generated suggestions that must be validated—not blindly executed."
              icon={<Users className="h-6 w-6 text-primary" />}
              delay={300}
            />
            
            <CardFeature 
              title="Step 3: Compliance & Risk Protection"
              description="Automate safely. Get full explainability, audit logs, and compliance reporting built-in."
              icon={<Shield className="h-6 w-6 text-primary" />}
              delay={500}
            />
          </div>
          
          <div className="mt-20">
            <FeatureScreenshot 
              imageSrc="/lovable-uploads/470a2477-3386-456e-8286-4db1b6e5cbd2.png"
              title="Complete AI Agent Management"
              description="Monitor all your AI agents in one place. Track performance, accuracy, and training progress with intuitive controls to manage every aspect of your AI workforce."
              alignment="right"
              ctaText="Explore AI Management"
            />
          </div>
          
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '700ms' }}>
            <p className="text-lg font-bold text-gray-800 mb-4">No black-box AI. No reckless automation. Just results.</p>
            <Button href="#cta">
              Get Early Access Now
              <LucideArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">📈 AI That Works For You—Not Against You</h2>
            <p className="text-xl text-gray-600">With Coalex.ai, You'll See These Outcomes:</p>
          </div>
          
          <div className="mt-12 mb-20">
            <FeatureScreenshot 
              imageSrc="/lovable-uploads/85ac0ea7-62be-4f01-a21d-c57fa4c1e1ae.png"
              title="Comprehensive Analytics & Reporting"
              description="Get a complete view of your AI operations with detailed metrics, industry breakdowns, and performance trends—all in one intuitive dashboard."
              highlightMetric={{
                value: "40%",
                label: "efficiency gains while maintaining oversight"
              }}
              ctaText="See Analytics In Action"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-md animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 rounded-full p-3 mr-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">90% reduction</h3>
              </div>
              <p className="text-gray-600">in AI-driven compliance risks.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md animate-fade-in" style={{ animationDelay: '300ms' }}>
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 rounded-full p-3 mr-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">3x faster decision-making</h3>
              </div>
              <p className="text-gray-600">without sacrificing oversight.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md animate-fade-in" style={{ animationDelay: '500ms' }}>
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 rounded-full p-3 mr-4">
                  <BarChart3 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">40% efficiency gains</h3>
              </div>
              <p className="text-gray-600">by automating repetitive tasks while keeping experts in control.</p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-md animate-fade-in" style={{ animationDelay: '700ms' }}>
              <div className="flex items-center mb-4">
                <div className="bg-primary/10 rounded-full p-3 mr-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">100% traceability</h3>
              </div>
              <p className="text-gray-600">always know why AI made a decision.</p>
            </div>
          </div>
          
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '900ms' }}>
            <p className="text-lg font-bold text-gray-800 mb-4">💰 AI automation that protects your bottom line.</p>
            <Button href="#cta">
              Start Scaling AI Safely
              <LucideArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Challenge Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">💥 The Challenge: Are You Leading or Falling Behind?</h2>
          </div>
          
          <div className="max-w-xl mx-auto space-y-4 mb-12 animate-fade-in">
            <div className="flex items-center">
              <div className="text-primary mr-3">🔹</div>
              <p className="text-gray-700"><strong>AI is already reshaping industries.</strong></p>
            </div>
            <div className="flex items-center">
              <div className="text-primary mr-3">🔹</div>
              <p className="text-gray-700"><strong>Your competitors are automating.</strong></p>
            </div>
            <div className="flex items-center">
              <div className="text-primary mr-3">🔹</div>
              <p className="text-gray-700"><strong>You can't afford AI mistakes.</strong></p>
            </div>
          </div>
          
          <div className="text-center animate-fade-in" style={{ animationDelay: '300ms' }}>
            <p className="text-lg font-bold text-gray-800 mb-4">🚀 Coalex.ai is the only AI system that scales automation safely.</p>
            <p className="text-gray-700 mb-6"><strong>The future belongs to those who take AI seriously.</strong> Will that be you?</p>
            <Button href="#cta">
              Claim Your Spot Today
              <LucideArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">🚀 Trusted By Industry Leaders</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <TestimonialCard 
              quote="Coalex.ai gave us the confidence to scale AI without compliance headaches."
              name="Sarah Johnson"
              company="VP of Technology, Fortune 500 Company"
              delay={100}
            />
            
            <TestimonialCard 
              quote="Finally, an AI platform that puts humans at the center of automation."
              name="Michael Chen"
              company="Director of Innovation, Enterprise Solutions"
              delay={300}
            />
          </div>
          
          <div className="text-center mt-12 animate-fade-in" style={{ animationDelay: '500ms' }}>
            <Button href="#cta">
              Join the Companies Future-Proofing AI
              <LucideArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="cta" className="py-24 bg-gradient-to-br from-primary-400 to-primary-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in">🔒 Don't Let AI Risks Hold You Back</h2>
            <p className="text-xl mb-8 animate-fade-in" style={{ animationDelay: '200ms' }}>
              💡 <strong>Coalex.ai is the only AI operating system built for compliance, control, and collaboration.</strong>
            </p>
            <p className="text-lg font-bold mb-8 animate-fade-in" style={{ animationDelay: '400ms' }}>
              🚀 Be first. Be safe. Be efficient.
            </p>
            <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
              {/* HubSpot Form Embed */}
              <div id="hubspot-form"></div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
