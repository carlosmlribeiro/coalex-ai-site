
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
            <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-lg">C</div>
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-600">Coalex.ai</span>
          </a>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#problems" className="text-gray-700 hover:text-primary transition-colors">Problems</a>
            <a href="#solution" className="text-gray-700 hover:text-primary transition-colors">Solution</a>
            <a href="#benefits" className="text-gray-700 hover:text-primary transition-colors">Benefits</a>
            <a href="#testimonials" className="text-gray-700 hover:text-primary transition-colors">Testimonials</a>
          </nav>
          
          <Button href="#cta" variant="primary">Get Early Access</Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
