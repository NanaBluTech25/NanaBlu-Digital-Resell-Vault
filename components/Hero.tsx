/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';

const Hero: React.FC = () => {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      // Manual scroll calculation to account for fixed header
      const headerOffset = 85;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      
      // Update URL hash without jumping, safely ignoring errors in sandboxed environments
      try {
        window.history.pushState(null, '', `#${targetId}`);
      } catch (err) {
        // Ignore SecurityError in restricted environments
      }
    }
  };

  return (
    <section className="relative w-full min-h-[850px] lg:h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#061845] via-[#0D388E] to-[#09225F]">
      
      {/* Background Image - Modern Digital Architecture & Creative Desk with Royal Blue Gradients */}
      <div className="absolute inset-0 w-full h-full">
        <img 
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000" 
            alt="Digital creator workspace" 
            className="w-full h-full object-cover mix-blend-overlay opacity-35 scale-105 animate-[pulse_18s_ease-in-out_infinite_alternate]"
        />
        {/* Royal Blue Gradients for Contrast & Depth */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#061845] via-blue-900/50 to-[#061845]/80"></div>
        {/* Subtle geometric grid texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 pt-24 pb-16 flex flex-col items-center text-center">
        <div className="animate-fade-in-up w-full">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold uppercase tracking-[0.25em] text-white mb-8 backdrop-blur-md bg-white/15 border border-white/30 px-5 py-2.5 rounded-full shadow-inner">
            <span className="w-2 h-2 rounded-full bg-blue-300 animate-ping"></span>
            <span>NanaBlu Digitals • Master Resell Vault</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-normal text-white tracking-tight mb-8 leading-[1.08] drop-shadow-md">
            The Digital <br />
            <span className="italic font-light text-blue-100">Resell Vault.</span>
          </h1>

          {/* Tagline / Subtitle */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-blue-100/90 font-light leading-relaxed mb-12">
            Turnkey digital products, aesthetic Canva suites, and viral faceless video vaults with 100% commercial resell rights. Launch your storefront and keep 100% of the profits.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a 
              href="#products" 
              onClick={(e) => handleNavClick(e, 'products')}
              className="w-full sm:w-auto px-9 py-4 bg-white text-blue-900 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest hover:bg-blue-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
            >
              Explore The Vault
            </a>
            <a 
              href="#about" 
              onClick={(e) => handleNavClick(e, 'about')}
              className="w-full sm:w-auto px-9 py-4 bg-transparent border border-white/40 text-white rounded-full text-xs md:text-sm font-semibold uppercase tracking-widest hover:bg-white/10 transition-all duration-300"
            >
              Learn About MRR
            </a>
          </div>

          {/* Feature Highlights Bar */}
          <div className="mt-16 pt-10 border-t border-white/20 grid grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto text-left sm:text-center">
            <div className="flex flex-col items-center">
              <span className="text-xl md:text-2xl font-serif text-white font-bold">100%</span>
              <span className="text-xs uppercase tracking-wider text-blue-200 mt-1">Keep All Profits</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-xl md:text-2xl font-serif text-white font-bold">Instant</span>
              <span className="text-xs uppercase tracking-wider text-blue-200 mt-1">Digital Delivery</span>
            </div>
            <div className="flex flex-col items-center col-span-2 md:col-span-1">
              <span className="text-xl md:text-2xl font-serif text-white font-bold">PLR & MRR</span>
              <span className="text-xs uppercase tracking-wider text-blue-200 mt-1">Commercial Licenses</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce text-white/60">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
