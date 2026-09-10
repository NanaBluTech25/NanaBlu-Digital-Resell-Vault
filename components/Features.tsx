/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="bg-white">
      {/* Feature Block 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[75vh]">
        <div className="order-2 lg:order-1 relative h-[450px] lg:h-auto overflow-hidden bg-blue-50">
           <img 
             src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200" 
             alt="Laptop and modern digital workspace" 
             className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s]"
           />
           <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply pointer-events-none"></div>
        </div>
        <div className="order-1 lg:order-2 flex flex-col justify-center p-12 lg:p-24 bg-blue-50/60">
           <div className="flex items-center gap-2 mb-4">
             <span className="w-2 h-2 rounded-full bg-blue-600"></span>
             <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700">Turnkey Creator Wealth</span>
           </div>
           <h3 className="text-4xl md:text-5xl font-serif mb-6 text-blue-950 leading-tight">
             Digital assets built <br /> for instant cashflow.
           </h3>
           <p className="text-base md:text-lg text-slate-600 font-normal leading-relaxed mb-8 max-w-md">
             Skip months of product creation. Every NanaBlu digital product is supplied with editable Canva templates, commercial licenses, and high-converting marketing materials so you keep 100% of the profits.
           </p>
           <div>
             <a 
               href="#products" 
               className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-blue-700 hover:text-blue-900 border-b-2 border-blue-700 pb-1 hover:border-blue-900 transition-colors"
             >
               Explore Master Resell Vault
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
               </svg>
             </a>
           </div>
        </div>
      </div>

      {/* Feature Block 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[75vh]">
        <div className="flex flex-col justify-center p-12 lg:p-24 bg-blue-950 text-white">
           <div className="flex items-center gap-2 mb-4">
             <span className="w-2 h-2 rounded-full bg-blue-400"></span>
             <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300">Licensing Freedom</span>
           </div>
           <h3 className="text-4xl md:text-5xl font-serif mb-6 text-white leading-tight">
             100% Commercial <br /> Resell Rights (MRR).
           </h3>
           <p className="text-base md:text-lg text-blue-200/90 font-light leading-relaxed mb-8 max-w-md">
             You receive full commercial authorization to rebrand, rename, bundle, and price however you choose. No ongoing royalties, no split commissions—what you sell is entirely yours.
           </p>
           <div className="grid grid-cols-2 gap-4 max-w-md pt-4 border-t border-blue-800/80">
             <div>
               <span className="text-2xl font-serif font-bold text-white block">100%</span>
               <span className="text-xs text-blue-300 uppercase tracking-wider">Profit Margin</span>
             </div>
             <div>
               <span className="text-2xl font-serif font-bold text-white block">0</span>
               <span className="text-xs text-blue-300 uppercase tracking-wider">Inventory Costs</span>
             </div>
           </div>
        </div>
        <div className="relative h-[450px] lg:h-auto overflow-hidden bg-blue-900">
           <img 
             src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200" 
             alt="Creators collaborating on digital strategies" 
             className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-[1.5s]"
           />
           <div className="absolute inset-0 bg-blue-950/20 pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Features;
