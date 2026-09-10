/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="bg-slate-50/70 border-t border-blue-100/80">
      
      {/* Introduction / Story */}
      <div className="py-24 px-6 md:px-12 max-w-[1800px] mx-auto flex flex-col md:flex-row items-start gap-16 md:gap-24">
        <div className="md:w-5/12">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-700 bg-blue-100/60 px-3.5 py-1.5 rounded-full inline-block mb-6">
            The NanaBlu Standard
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-blue-950 leading-[1.15]">
            Crafted for creators. <br/>
            <span className="italic text-blue-700">Built for 100% profits.</span>
          </h2>
        </div>
        <div className="md:w-7/12 max-w-2xl">
          <p className="text-lg md:text-xl text-slate-700 font-normal leading-relaxed mb-6">
            NanaBlu Digitals was founded on a singular principle: building a thriving online business should not require months of graphic design, expensive software licenses, or complicated inventory fulfillment.
          </p>
          <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed mb-8">
            Our signature royal blue and white vault delivers turnkey digital products with commercial Master Resell Rights (MRR) and Private Label Rights (PLR). From hyperlinked aesthetic planners to 4K viral video clips, you get immediate access to market-ready digital assets you can rebrand and resell directly to your buyers.
          </p>
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-blue-100">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200" 
              alt="Digital creators working on templates" 
              className="w-full h-[360px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-950/70 via-transparent to-transparent flex items-end p-6">
              <span className="text-sm font-semibold uppercase tracking-widest text-white">
                NanaBlu Digital Creative Studio & Vault
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Philosophy / Advantage Blocks */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
        <div className="order-2 lg:order-1 relative min-h-[420px] lg:h-auto overflow-hidden group">
           <img 
             src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1200" 
             alt="Digital commerce growth charts" 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
           />
           <div className="absolute inset-0 bg-blue-950/30"></div>
        </div>
        <div className="order-1 lg:order-2 flex flex-col justify-center p-12 lg:p-20 bg-white border-l border-blue-100">
           <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-700 mb-4">The Resell Advantage</span>
           <h3 className="text-3xl md:text-5xl font-serif mb-6 text-blue-950 leading-tight">
             Keep 100% of <br /> every single sale.
           </h3>
           <p className="text-base md:text-lg text-slate-600 font-light leading-relaxed mb-8 max-w-lg">
             Unlike affiliate programs where you receive a fractional percentage, NanaBlu products grant you full commercial resale rights. Once you download the vault file, every single transaction goes directly into your bank account.
           </p>
           <ul className="space-y-3 text-sm font-medium text-slate-700">
             <li className="flex items-center gap-3">
               <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">✓</span>
               No recurring licensing fees or creator royalties
             </li>
             <li className="flex items-center gap-3">
               <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">✓</span>
               Editable Canva links & source files provided
             </li>
             <li className="flex items-center gap-3">
               <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold">✓</span>
               Plug-and-play sales funnels & promotional swipes
             </li>
           </ul>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[70vh]">
        <div className="flex flex-col justify-center p-12 lg:p-20 bg-gradient-to-br from-blue-900 via-blue-950 to-[#061845] text-white">
           <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-300 mb-4">Color Psychology</span>
           <h3 className="text-3xl md:text-5xl font-serif mb-6 text-white leading-tight">
             The Royal Blue <br /> Standard.
           </h3>
           <p className="text-base md:text-lg text-blue-100/90 font-light leading-relaxed mb-8 max-w-lg">
             Our brand aesthetic isn't just visual—it is psychological. Royal blue communicates undeniable authority, high digital security, and executive caliber. When your customers open a NanaBlu asset, they immediately recognize top-tier craftsmanship.
           </p>
           <div className="p-5 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm max-w-md">
             <p className="text-xs uppercase tracking-widest text-blue-200 mb-1 font-semibold">Ready to Launch?</p>
             <p className="text-sm text-white font-serif italic">"High conversion stems from visual confidence."</p>
           </div>
        </div>
        <div className="relative min-h-[420px] lg:h-auto overflow-hidden group">
           <img 
             src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
             alt="E-commerce digital marketing dashboard" 
             className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-105"
           />
           <div className="absolute inset-0 bg-blue-900/20"></div>
        </div>
      </div>
    </section>
  );
};

export default About;