/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useEffect } from 'react';
import { BRAND_NAME } from '../constants';

interface NavbarProps {
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
  cartCount: number;
  onOpenCart: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onNavClick, cartCount, onOpenCart }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    setMobileMenuOpen(false);
    onNavClick(e, targetId);
  };

  const handleCartClick = (e: React.MouseEvent) => {
      e.preventDefault();
      setMobileMenuOpen(false);
      onOpenCart();
  }

  // Determine styling based on state
  const textColorClass = (scrolled || mobileMenuOpen) ? 'text-blue-950' : 'text-white';
  const navBackground = (scrolled || mobileMenuOpen) 
    ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm border-b border-blue-100' 
    : 'bg-transparent py-7';

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${navBackground}`}
      >
        <div className="max-w-[1800px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#" 
            onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                onNavClick(e, ''); // Pass empty string to just reset to home
            }}
            className={`group flex items-center gap-2.5 z-50 relative transition-colors duration-300 ${textColorClass}`}
          >
            <span className="w-8 h-8 rounded-lg bg-blue-700 text-white flex items-center justify-center font-serif font-bold text-lg shadow-md group-hover:bg-blue-800 transition-colors">
              N
            </span>
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-semibold tracking-tight">
                NanaBlu
              </span>
              <span className={`text-[10px] font-sans font-bold tracking-[0.25em] uppercase -mt-1 ${
                (scrolled || mobileMenuOpen) ? 'text-blue-700' : 'text-blue-200'
              }`}>
                Digitals
              </span>
            </div>
          </a>
          
          {/* Center Links - Desktop */}
          <div className={`hidden md:flex items-center gap-10 text-xs font-semibold tracking-widest uppercase transition-colors duration-300 ${textColorClass}`}>
            <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-blue-600 transition-colors">Vault Shop</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-blue-600 transition-colors">About Us</a>
            <a href="#journal" onClick={(e) => handleLinkClick(e, 'journal')} className="hover:text-blue-600 transition-colors">Insights</a>
          </div>

          {/* Right Actions */}
          <div className={`flex items-center gap-4 z-50 relative transition-colors duration-300 ${textColorClass}`}>
            <button 
              onClick={handleCartClick}
              className={`text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 shadow-sm ${
                (scrolled || mobileMenuOpen)
                  ? 'bg-blue-700 text-white hover:bg-blue-800'
                  : 'bg-white text-blue-900 hover:bg-blue-50'
              }`}
            >
              <span>Vault Cart</span>
              <span className={`w-5 h-5 rounded-full text-[10px] flex items-center justify-center font-bold ${
                (scrolled || mobileMenuOpen) ? 'bg-white text-blue-900' : 'bg-blue-700 text-white'
              }`}>
                {cartCount}
              </span>
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              className={`block md:hidden p-2 rounded-lg transition-colors duration-300 ${textColorClass}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
            >
               {mobileMenuOpen ? (
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                 </svg>
               ) : (
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                 </svg>
               )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 flex flex-col justify-center items-center transition-all duration-500 ease-in-out ${
          mobileMenuOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-10 pointer-events-none'
      }`}>
          <div className="flex flex-col items-center space-y-8 text-2xl font-serif font-medium text-blue-950">
            <a href="#products" onClick={(e) => handleLinkClick(e, 'products')} className="hover:text-blue-700 transition-colors">Vault Shop</a>
            <a href="#about" onClick={(e) => handleLinkClick(e, 'about')} className="hover:text-blue-700 transition-colors">About Us</a>
            <a href="#journal" onClick={(e) => handleLinkClick(e, 'journal')} className="hover:text-blue-700 transition-colors">Insights</a>
            <button 
                onClick={handleCartClick} 
                className="bg-blue-700 text-white hover:bg-blue-800 transition-colors text-sm uppercase tracking-widest font-sans font-semibold px-8 py-3 rounded-full mt-6 shadow-md"
            >
                View Cart ({cartCount})
            </button>
          </div>
      </div>
    </>
  );
};

export default Navbar;
