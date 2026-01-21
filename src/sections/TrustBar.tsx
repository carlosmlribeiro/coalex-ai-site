import React from 'react';

const TrustBar = () => {
  // Placeholder logos - these will be replaced with actual customer logos
  const placeholderLogos = [
    { name: 'Company 1', width: 'w-24' },
    { name: 'Company 2', width: 'w-28' },
    { name: 'Company 3', width: 'w-24' },
    { name: 'Company 4', width: 'w-32' },
    { name: 'Company 5', width: 'w-24' },
    { name: 'Company 6', width: 'w-28' },
  ];

  return (
    <section className="py-12 border-y border-slate-200 dark:border-slate-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <p className="text-sm text-slate-400 uppercase tracking-wider font-medium">
            Trusted by innovative teams building with AI
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
          {placeholderLogos.map((logo, index) => (
            <div
              key={index}
              className={`${logo.width} h-8 bg-slate-200 dark:bg-slate-700/50 rounded flex items-center justify-center`}
            >
              <span className="text-xs text-slate-500 font-medium">{logo.name}</span>
            </div>
          ))}
        </div>

        {/* Optional metric */}
        <div className="text-center mt-8">
          <span className="text-sm text-slate-500">
            <span className="text-primary-400 font-semibold">500+</span> AI agents supervised
          </span>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
