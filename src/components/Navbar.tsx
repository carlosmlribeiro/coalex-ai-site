
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
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#why-coalex" className="text-gray-700 hover:text-primary transition-colors">Why Coalex</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-primary transition-colors">How it Works</a>
            <a href="#core-features" className="text-gray-700 hover:text-primary transition-colors">Features</a>
            <a href="#customers-traction" className="text-gray-700 hover:text-primary transition-colors">Customers</a>
          </nav>
          
          <Button href="#get-started" variant="primary">Get a Demo</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
