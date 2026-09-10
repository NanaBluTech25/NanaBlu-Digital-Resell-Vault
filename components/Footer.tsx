/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState } from 'react';

interface FooterProps {
  onLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    if (!email) return;
    setSubscribeStatus('loading');
    setTimeout(() => {
      setSubscribeStatus('success');
      setEmail('');
    }, 1500);
  };

  return (
    <footer className="bg-blue-950 pt-20 pb-12 px-6 text-blue-200">
      <div className="max-w-[1600px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        
        <div className="md:col-span-4">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-blue-950 font-serif font-black text-sm">
              NB
            </div>
            <span className="text-2xl font-serif text-white tracking-wide">NanaBlu Digitals</span>
          </div>
          <p className="max-w-sm text-sm text-blue-200/90 leading-relaxed">
            Premium turnkey digital products, Master Resell Rights (MRR) vaults, and faceless marketing assets engineered for modern creator revenue.
          </p>
          <div className="mt-6 flex gap-3 text-xs text-blue-300">
            <span className="inline-flex items-center gap-1.5 bg-blue-900/60 border border-blue-800 px-3 py-1 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> 100% Commercial MRR
            </span>
            <span className="inline-flex items-center gap-1.5 bg-blue-900/60 border border-blue-800 px-3 py-1 rounded-full">
              Canva Editable
            </span>
          </div>
        </div>

        <div className="md:col-span-2">
          <h4 className="font-semibold text-white mb-5 tracking-wider text-xs uppercase">Vault Collections</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="text-blue-200/80 hover:text-white transition-colors">All Digital Vaults</a></li>
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="text-blue-200/80 hover:text-white transition-colors">Faceless Video Banks</a></li>
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="text-blue-200/80 hover:text-white transition-colors">Canva Ebook Templates</a></li>
            <li><a href="#products" onClick={(e) => onLinkClick(e, 'products')} className="text-blue-200/80 hover:text-white transition-colors">Master Resell Bundles</a></li>
          </ul>
        </div>
        
        <div className="md:col-span-2">
          <h4 className="font-semibold text-white mb-5 tracking-wider text-xs uppercase">Brand & Terms</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="text-blue-200/80 hover:text-white transition-colors">The NanaBlu Mission</a></li>
            <li><a href="#about" onClick={(e) => onLinkClick(e, 'about')} className="text-blue-200/80 hover:text-white transition-colors">MRR Licensing Guide</a></li>
            <li><a href="#journal" onClick={(e) => onLinkClick(e, 'journal')} className="text-blue-200/80 hover:text-white transition-colors">The Creator Gazette</a></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <h4 className="font-semibold text-white mb-3 tracking-wider text-xs uppercase">Join The Vault Insider Club</h4>
          <p className="text-xs text-blue-200/80 mb-4">
            Receive exclusive free MRR asset drops, faceless aesthetic reel packs, and digital launch playbooks.
          </p>
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Enter your creator email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={subscribeStatus === 'loading' || subscribeStatus === 'success'}
                className="bg-blue-900/60 border border-blue-700/80 rounded-xl px-4 py-3 text-sm text-white outline-none focus:border-white transition-colors placeholder-blue-300/60 flex-1 disabled:opacity-50" 
              />
              <button 
                onClick={handleSubscribe}
                disabled={subscribeStatus !== 'idle' || !email}
                className="bg-white hover:bg-blue-50 text-blue-950 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all disabled:opacity-50 shrink-0 shadow-md"
              >
                {subscribeStatus === 'idle' && 'Join'}
                {subscribeStatus === 'loading' && 'Joining...'}
                {subscribeStatus === 'success' && 'Joined!'}
              </button>
            </div>
            {subscribeStatus === 'success' && (
              <span className="text-xs text-emerald-400 font-medium">✓ You're on the list! Welcome to NanaBlu Digitals.</span>
            )}
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto mt-16 pt-8 border-t border-blue-900/80 flex flex-col md:flex-row justify-between items-center text-xs tracking-wider text-blue-300/70 gap-4">
        <p>© {new Date().getFullYear()} NanaBlu Digitals. All Rights Reserved. Master Resell Rights (MRR) & PLR Licensing.</p>
        <p className="flex items-center gap-2">
          <span>Crafted in Royal Blue & White</span>
          <span>•</span>
          <span>Instant Download Delivery</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
