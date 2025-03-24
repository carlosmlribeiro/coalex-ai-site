
import React from 'react';
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  href?: string;
  className?: string;
}

const Button = ({
  variant = 'primary',
  size = 'md',
  children,
  href,
  className,
  ...props
}: ButtonProps) => {
  const baseStyles = "relative font-semibold rounded-full inline-flex items-center justify-center transition-all duration-300 ease-out overflow-hidden";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-600 shadow-md hover:shadow-lg",
    secondary: "bg-secondary text-white hover:bg-secondary-600 shadow-md hover:shadow-lg",
    outline: "bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white",
    ghost: "bg-transparent text-primary hover:bg-primary/10"
  };
  
  const sizes = {
    sm: "text-sm px-4 py-1.5",
    md: "text-base px-6 py-2.5",
    lg: "text-lg px-8 py-3"
  };
  
  const buttonClasses = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    className
  );

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        <span className="relative z-10">{children}</span>
        <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      </a>
    );
  }

  return (
    <button className={buttonClasses} {...props}>
      <span className="relative z-10">{children}</span>
      <span className="absolute inset-0 bg-white/10 opacity-0 hover:opacity-100 transition-opacity duration-300" />
    </button>
  );
};

export default Button;
