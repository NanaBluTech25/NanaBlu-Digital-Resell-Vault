/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState } from 'react';
import { Product } from '../types';

interface ProductDetailProps {
  product: Product;
  onBack: () => void;
  onAddToCart: (product: Product) => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack, onAddToCart }) => {
  return (
    <div className="pt-28 min-h-screen bg-slate-50/60 animate-fade-in-up">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 pb-24">
        
        {/* Breadcrumb / Back */}
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-700 hover:text-blue-900 transition-colors mb-8 bg-white border border-blue-100 px-4 py-2 rounded-full shadow-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Vault
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left: Main Image in Royal Frame */}
          <div className="flex flex-col gap-4">
            <div className="w-full aspect-[4/3] bg-white border border-blue-100 rounded-3xl overflow-hidden shadow-lg shadow-blue-950/5">
              <img 
                src={product.imageUrl} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Guarantee / License Banner */}
            <div className="bg-blue-50/80 border border-blue-200/80 rounded-2xl p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-700 text-white flex items-center justify-center font-bold text-lg shrink-0">
                ✓
              </div>
              <div className="text-xs">
                <span className="font-bold text-blue-950 block text-sm">Full Commercial Resell Rights (MRR)</span>
                <span className="text-slate-600">You are legally authorized to rebrand, rename, and resell this product keeping 100% of proceeds.</span>
              </div>
            </div>
          </div>

          {/* Right: Details */}
          <div className="flex flex-col bg-white border border-blue-100 rounded-3xl p-8 md:p-12 shadow-sm">
             <div className="flex items-center justify-between gap-4 mb-3">
               <span className="text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200/60 uppercase tracking-widest px-3 py-1 rounded-full">
                 {product.category}
               </span>
               <span className="text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                 Instant Digital Access
               </span>
             </div>

             <h1 className="text-3xl md:text-5xl font-serif text-blue-950 font-medium mb-3 leading-tight">
               {product.name}
             </h1>

             <p className="text-sm font-medium text-blue-700 italic mb-6">
               "{product.tagline}"
             </p>

             <div className="flex items-baseline gap-3 mb-6 pb-6 border-b border-blue-50">
               <span className="text-3xl font-serif font-bold text-blue-950">${product.price}</span>
               <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">One-time payment • Lifetime rights</span>
             </div>
             
             <p className="text-slate-600 leading-relaxed font-normal text-base mb-8">
               {product.longDescription || product.description}
             </p>

             {/* Included Asset Highlights */}
             <div className="mb-8">
               <span className="block text-xs font-bold uppercase tracking-wider text-blue-950 mb-3">
                 Included In This Download:
               </span>
               <ul className="space-y-2.5 text-sm text-slate-700">
                 {product.features.map((feature, idx) => (
                   <li key={idx} className="flex items-start gap-2.5">
                     <span className="w-5 h-5 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                       ✓
                     </span>
                     <span>{feature}</span>
                   </li>
                 ))}
               </ul>
             </div>

             <div className="flex flex-col gap-4">
               <button 
                 onClick={() => onAddToCart(product)}
                 className="w-full py-4 bg-blue-700 text-white rounded-full uppercase tracking-widest text-xs font-bold hover:bg-blue-800 transition-all shadow-lg shadow-blue-700/25 flex items-center justify-center gap-2 hover:-translate-y-0.5"
               >
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                 </svg>
                 Add to Cart — ${product.price}
               </button>

               <p className="text-center text-[11px] text-slate-400 uppercase tracking-wider">
                 Secure 256-bit checkout • Instant link delivered via email
               </p>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
