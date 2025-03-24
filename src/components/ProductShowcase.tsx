
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface ProductShowcaseProps {
  className?: string;
}

const ProductShowcase = ({ className }: ProductShowcaseProps) => {
  return (
    <div className={cn("w-full max-w-5xl mx-auto my-12", className)}>
      <Carousel className="w-full">
        <CarouselContent>
          <CarouselItem>
            <div className="relative overflow-hidden rounded-xl shadow-2xl border border-gray-200">
              <img 
                src="/lovable-uploads/85ac0ea7-62be-4f01-a21d-c57fa4c1e1ae.png" 
                alt="Coalex.ai Analytics Dashboard" 
                className="w-full h-auto" 
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6">
                <h3 className="text-xl font-bold mb-2">Comprehensive Analytics Dashboard</h3>
                <p className="text-white/90">Track performance metrics, industry breakdowns, and compliance scores in one place</p>
              </div>
            </div>
          </CarouselItem>
          
          <CarouselItem>
            <div className="relative overflow-hidden rounded-xl shadow-2xl border border-gray-200">
              <img 
                src="/lovable-uploads/470a2477-3386-456e-8286-4db1b6e5cbd2.png" 
                alt="Coalex.ai AI Agents Management" 
                className="w-full h-auto" 
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6">
                <h3 className="text-xl font-bold mb-2">AI Agents Management</h3>
                <p className="text-white/90">Oversee all your AI agents with detailed metrics, training progress, and activity logs</p>
              </div>
            </div>
          </CarouselItem>
          
          <CarouselItem>
            <div className="relative overflow-hidden rounded-xl shadow-2xl border border-gray-200">
              <img 
                src="/lovable-uploads/07a83a36-31dc-4c32-99ac-c9be36722469.png" 
                alt="Coalex.ai Agent Conversation Interface" 
                className="w-full h-auto" 
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent text-white p-6">
                <h3 className="text-xl font-bold mb-2">Human-in-the-Loop Oversight</h3>
                <p className="text-white/90">Validate AI responses, track compliance metrics, and maintain audit logs of all interactions</p>
              </div>
            </div>
          </CarouselItem>
        </CarouselContent>
        <div className="flex justify-center mt-4">
          <CarouselPrevious className="relative inset-0 translate-y-0 left-0 right-auto mx-2" />
          <CarouselNext className="relative inset-0 translate-y-0 right-0 left-auto mx-2" />
        </div>
      </Carousel>
    </div>
  );
};

export default ProductShowcase;
