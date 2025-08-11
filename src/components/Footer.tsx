import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <p className="text-center text-gray-600 text-sm">
          Coalex.ai — Human-in-the-loop governance for trustworthy AI. © 2025
        </p>
      </div>
    </footer>
  );
};

export default Footer;
