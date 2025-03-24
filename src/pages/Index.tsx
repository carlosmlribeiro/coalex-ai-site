
import React, { useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Button from '@/components/Button';
import CardFeature from '@/components/CardFeature';
import TestimonialCard from '@/components/TestimonialCard';
import Footer from '@/components/Footer';

const Index = () => {
  // Scroll animation effect
  useEffect(() => {
    // Initialize scroll observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with the reveal-on-scroll class
    document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
        observer.unobserve(el);
      });
    };
  }, []);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section id="hero" className="pt-36 pb-20 md:pt-44 md:pb-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50 z-0"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-primary/5 rounded-bl-full z-0"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6 animate-fade-in">
              AI Automation Without the Risk
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in" style={{ animationDelay: '100ms' }}>
              Are You Ready for <span className="text-primary">Safe AI</span> Automation?
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '200ms' }}>
              You Need AI. But You Can't Afford to Get It Wrong. Coalex.ai delivers <span className="font-semibold">AI-powered automation with human oversight</span>, so you can scale AI confidently—without compliance nightmares or costly mistakes.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-100 shadow-sm animate-fade-in" style={{ animationDelay: '300ms' }}>
                <p className="font-medium text-gray-800 mb-1">
                  AI that <span className="text-primary font-bold">enhances</span> your team, not replaces them.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-100 shadow-sm animate-fade-in" style={{ animationDelay: '400ms' }}>
                <p className="font-medium text-gray-800 mb-1">
                  AI that <span className="text-primary font-bold">meets</span> regulations, not breaks them.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-100 shadow-sm animate-fade-in" style={{ animationDelay: '500ms' }}>
                <p className="font-medium text-gray-800 mb-1">
                  AI that <span className="text-primary font-bold">drives</span> results, not risks.
                </p>
              </div>
            </div>
            
            <div className="animate-fade-in" style={{ animationDelay: '600ms' }}>
              <p className="text-lg font-bold mb-4">Are you ready to harness AI the right way?</p>
              <Button href="#cta" size="lg" variant="primary" className="shadow-lg shadow-primary/20">
                Get Early Access Now
              </Button>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="text-white">
            <path fill="currentColor" fillOpacity="1" d="M0,256L48,256C96,256,192,256,288,234.7C384,213,480,171,576,165.3C672,160,768,192,864,197.3C960,203,1056,181,1152,165.3C1248,149,1344,139,1392,133.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </section>
      
      {/* Problems Section */}
      <section id="problems" className="py-20 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal-on-scroll">
              Most AI Solutions Are a <span className="text-red-500">Compliance Disaster</span>
            </h2>
            <p className="text-lg text-gray-600 reveal-on-scroll">
              Without proper oversight, AI implementations can lead to serious business risks.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl border border-red-100 bg-red-50 reveal-on-scroll">
              <div className="text-red-500 text-xl mb-4">🚨</div>
              <h3 className="text-xl font-bold mb-4">Regulators are cracking down</h3>
              <p className="text-gray-700">
                AI-driven decisions with no human oversight lead to audits, fines, and PR disasters.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl border border-red-100 bg-red-50 reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
              <div className="text-red-500 text-xl mb-4">🚨</div>
              <h3 className="text-xl font-bold mb-4">AI makes mistakes—big ones</h3>
              <p className="text-gray-700">
                Bias, hallucinations, and errors can cost your business millions.
              </p>
            </div>
            
            <div className="p-6 rounded-2xl border border-red-100 bg-red-50 reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              <div className="text-red-500 text-xl mb-4">🚨</div>
              <h3 className="text-xl font-bold mb-4">Your workforce is overwhelmed</h3>
              <p className="text-gray-700">
                AI promises efficiency but creates chaos without proper human-AI collaboration.
              </p>
            </div>
          </div>
          
          <div className="mt-16 text-center reveal-on-scroll">
            <p className="text-xl font-semibold mb-4">How long can you afford to risk bad AI decisions?</p>
            <Button href="#cta" variant="primary">Try Coalex.ai Today</Button>
          </div>
        </div>
      </section>
      
      {/* Solution Section */}
      <section id="solution" className="py-20 bg-gray-50 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal-on-scroll">
              The Smartest Companies Take a <span className="text-primary">Smarter Approach</span> to AI
            </h2>
            <p className="text-xl font-semibold mb-2 reveal-on-scroll">Here's How Coalex.ai Keeps You in Control:</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <CardFeature 
              title="Train & Manage AI Agents"
              description="Set up AI models your way—with a centralized dashboard to monitor, train, and control every AI interaction."
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>}
              className="reveal-on-scroll"
            />
            
            <CardFeature 
              title="Human + AI Collaboration"
              description="Keep humans in the loop with AI-generated suggestions that must be validated—not blindly executed."
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>}
              className="reveal-on-scroll"
              delay={100}
            />
            
            <CardFeature 
              title="Compliance & Risk Protection"
              description="Automate safely. Get full explainability, audit logs, and compliance reporting built-in."
              icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>}
              className="reveal-on-scroll"
              delay={200}
            />
          </div>
          
          <div className="text-center reveal-on-scroll">
            <p className="text-xl font-bold mb-4">No black-box AI. No reckless automation. Just results.</p>
            <Button href="#cta" variant="primary">Get Early Access Now</Button>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section id="benefits" className="py-20 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal-on-scroll">
              AI That Works <span className="text-primary">For You</span>—Not Against You
            </h2>
            <p className="text-lg text-gray-600 reveal-on-scroll">
              With Coalex.ai, You'll See These Outcomes:
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="flex items-start reveal-on-scroll">
              <div className="mr-4 p-3 rounded-full bg-green-100 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">90% reduction in AI-driven compliance risks</h3>
                <p className="text-gray-600">
                  Our system ensures proper governance and oversight for every AI action, dramatically reducing the chance of compliance issues.
                </p>
              </div>
            </div>
            
            <div className="flex items-start reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
              <div className="mr-4 p-3 rounded-full bg-green-100 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">3x faster decision-making</h3>
                <p className="text-gray-600">
                  AI suggests options while humans maintain control, speeding up processes without sacrificing oversight.
                </p>
              </div>
            </div>
            
            <div className="flex items-start reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              <div className="mr-4 p-3 rounded-full bg-green-100 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">40% efficiency gains</h3>
                <p className="text-gray-600">
                  By automating repetitive tasks while keeping experts in control, you'll see dramatic improvements in operational efficiency.
                </p>
              </div>
            </div>
            
            <div className="flex items-start reveal-on-scroll" style={{ transitionDelay: '300ms' }}>
              <div className="mr-4 p-3 rounded-full bg-green-100 text-green-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">100% traceability</h3>
                <p className="text-gray-600">
                  Always know why AI made a decision with complete audit trails and explainability features.
                </p>
              </div>
            </div>
          </div>
          
          <div className="p-8 rounded-2xl glass text-center max-w-3xl mx-auto reveal-on-scroll">
            <h3 className="text-xl font-bold mb-4">AI automation that protects your bottom line.</h3>
            <Button href="#cta" variant="primary">Start Scaling AI Safely</Button>
          </div>
        </div>
      </section>
      
      {/* Challenge Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5 relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 reveal-on-scroll">
              The Challenge: Are You <span className="text-primary">Leading</span> or Falling Behind?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-6 rounded-2xl shadow-sm reveal-on-scroll">
              <p className="mb-3">🔹 <span className="font-semibold">AI is already reshaping industries.</span></p>
              <p className="text-gray-600">Companies that leverage AI responsibly are seeing significant competitive advantages.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm reveal-on-scroll" style={{ transitionDelay: '100ms' }}>
              <p className="mb-3">🔹 <span className="font-semibold">Your competitors are automating.</span></p>
              <p className="text-gray-600">Every day without safe AI automation is a day your competition moves ahead.</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm reveal-on-scroll" style={{ transitionDelay: '200ms' }}>
              <p className="mb-3">🔹 <span className="font-semibold">You can't afford AI mistakes.</span></p>
              <p className="text-gray-600">The costs of AI errors and compliance issues far outweigh the investment in doing it right.</p>
            </div>
          </div>
          
          <div className="text-center max-w-3xl mx-auto reveal-on-scroll">
            <p className="text-xl font-bold mb-4">Coalex.ai is the only AI system that scales automation safely.</p>
            <p className="text-lg mb-8">The future belongs to those who take AI seriously. Will that be you?</p>
            <Button href="#cta" variant="primary" size="lg">Claim Your Spot Today</Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal-on-scroll">
              Trusted By <span className="text-primary">Industry Leaders</span>
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <TestimonialCard 
              quote="Coalex.ai gave us the confidence to scale AI without compliance headaches."
              name="Sarah Johnson"
              company="TechForward Inc."
              className="reveal-on-scroll"
            />
            
            <TestimonialCard 
              quote="Finally, an AI platform that puts humans at the center of automation."
              name="Michael Chang"
              company="Global Solutions Group"
              className="reveal-on-scroll"
              delay={100}
            />
          </div>
          
          <div className="text-center mt-12 reveal-on-scroll">
            <Button href="#cta" variant="primary">Join the Companies Future-Proofing AI</Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="cta" className="py-20 bg-gradient-to-br from-primary to-primary-600 text-white relative">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 reveal-on-scroll">
              Don't Let AI Risks Hold You Back
            </h2>
            <p className="text-xl mb-8 reveal-on-scroll">
              Coalex.ai is the only AI operating system built for compliance, control, and collaboration.
            </p>
            <div className="reveal-on-scroll">
              <p className="text-lg font-bold mb-6">Be first. Be safe. Be efficient.</p>
              <Button 
                href="#" 
                variant="outline" 
                size="lg" 
                className="bg-white text-primary border-white hover:bg-transparent hover:text-white transition-colors"
              >
                Get Started Now
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
