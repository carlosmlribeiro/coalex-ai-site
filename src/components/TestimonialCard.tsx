
import React from 'react';
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  quote: string;
  name: string;
  company: string;
  className?: string;
  delay?: number;
}

const TestimonialCard = ({ 
  quote, 
  name, 
  company,
  className,
  delay = 0
}: TestimonialCardProps) => {
  return (
    <div 
      className={cn(
        "flex flex-col p-8 rounded-2xl glass transition-all duration-300 hover:shadow-xl animate-fade-in",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="mb-6">
        <svg className="h-8 w-8 text-primary/60" fill="currentColor" viewBox="0 0 24 24">
          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
        </svg>
      </div>
      <p className="text-lg mb-6 italic text-gray-700">{quote}</p>
      <div className="mt-auto">
        <p className="font-bold">{name}</p>
        <p className="text-sm text-gray-500">{company}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
