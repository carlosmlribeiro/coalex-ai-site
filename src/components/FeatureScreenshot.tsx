
import React from 'react';
import { cn } from "@/lib/utils";
import Button from '@/components/Button';
import { LucideArrowRight } from 'lucide-react';

interface FeatureScreenshotProps {
  imageSrc: string;
  title: string;
  description: string;
  alignment?: 'left' | 'right';
  highlightMetric?: {
    value: string;
    label: string;
  };
  ctaLink?: string;
  ctaText?: string;
  className?: string;
}

const FeatureScreenshot = ({ 
  imageSrc, 
  title, 
  description, 
  alignment = 'left',
  highlightMetric,
  ctaLink = "#cta",
  ctaText = "Learn More",
  className
}: FeatureScreenshotProps) => {
  const isLeft = alignment === 'left';
  
  return (
    <div className={cn(
      "flex flex-col md:flex-row items-center gap-8 md:gap-12 py-12",
      isLeft ? "md:flex-row" : "md:flex-row-reverse",
      className
    )}>
      <div className={cn(
        "w-full md:w-1/2 text-center md:text-left",
        !isLeft && "md:text-right"
      )}>
        <h3 className="text-2xl md:text-3xl font-bold mb-4">{title}</h3>
        
        {highlightMetric && (
          <div className="mb-4">
            <span className="text-4xl font-bold text-primary">{highlightMetric.value}</span>
            <span className="text-gray-600 ml-2">{highlightMetric.label}</span>
          </div>
        )}
        
        <p className="text-lg text-gray-600 mb-6">{description}</p>
        
        <div className={cn(!isLeft && "md:flex md:justify-end")}>
          <Button href={ctaLink}>
            {ctaText}
            <LucideArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
      
      <div className="w-full md:w-1/2">
        <div className="relative group">
          {/* Full image with masked/clipped area */}
          <div className="overflow-hidden rounded-xl shadow-lg border border-gray-200 transition-all duration-300 group-hover:shadow-xl">
            <img 
              src={imageSrc} 
              alt={title} 
              className="w-full h-auto opacity-90 group-hover:opacity-100 transition-opacity duration-300" 
            />
            
            {/* Partial mask that reveals on hover */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/70 opacity-60 group-hover:opacity-0 transition-opacity duration-500" />
            
            {/* Additional highlight effect */}
            <div className="absolute -inset-px border-2 border-primary/40 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          
          {/* Floating feature highlight */}
          <div className={cn(
            "absolute -bottom-4 bg-white py-2 px-4 rounded-full shadow-md border border-gray-100 text-primary font-medium",
            isLeft ? "right-4" : "left-4"
          )}>
            AI-powered insight
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureScreenshot;
