
import React, { useState, useEffect } from 'react';
import Button from './Button';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-4 glass shadow-md' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center space-x-2">
            <img src="/lovable-uploads/bf579de7-1547-4385-ab45-457cb415c237.png" alt="Coalex.ai" className="h-9" />
          </a>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#problem" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">The Problem</a>
            <a href="#why" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">Solution</a>
            <a href="#outcomes" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">Benefits</a>
            <a href="#comparison" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">Why Different</a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">Testimonials</a>
            <a href="#faq" className="text-gray-700 hover:text-primary-600 transition-colors font-medium">FAQ</a>
          </nav>

          <Button href="#contact" variant="primary">Get Started</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
