
import React from 'react';
import { cn } from "@/lib/utils";

interface CardFeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
  delay?: number;
}

const CardFeature = ({ 
  title, 
  description, 
  icon,
  className,
  delay = 0
}: CardFeatureProps) => {
  return (
    <div 
      className={cn(
        "flex flex-col p-6 rounded-2xl glass transition-all duration-300 hover:shadow-xl animate-fade-in",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="rounded-full bg-primary/10 p-3 w-fit mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default CardFeature;
