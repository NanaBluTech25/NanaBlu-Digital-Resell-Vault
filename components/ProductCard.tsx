/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onClick }) => {
  return (
    <div 
      className="group flex flex-col bg-white border border-blue-100/90 hover:border-blue-400 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-blue-700/10 cursor-pointer h-full"
      onClick={() => onClick(product)}
    >
      <div className="relative w-full aspect-[4/3] overflow-hidden bg-blue-50/60">
        <img 
          src={product.imageUrl} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
        />
        
        {/* Category Pill Tag */}
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-white/95 backdrop-blur-md text-blue-900 font-bold text-[10px] tracking-wider uppercase px-3 py-1 rounded-full shadow-sm border border-blue-100">
            {product.category}
          </span>
        </div>

        {/* Hover overlay with "View Details" */}
        <div className="absolute inset-0 bg-blue-950/25 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-4">
            <span className="bg-white text-blue-900 px-5 py-2.5 rounded-full text-xs uppercase tracking-widest font-bold shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 hover:bg-blue-50">
                View Asset & License
            </span>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-1 justify-between text-left">
        <div>
          <h3 className="text-xl font-serif font-semibold text-blue-950 mb-2 group-hover:text-blue-700 transition-colors leading-snug">
            {product.name}
          </h3>
          <p className="text-xs text-slate-500 font-normal leading-relaxed line-clamp-2 mb-4">
            {product.description}
          </p>
        </div>

        <div className="pt-4 border-t border-blue-50 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Vault Price</span>
            <span className="text-xl font-serif font-bold text-blue-900">${product.price}</span>
          </div>
          <span className="text-xs font-semibold text-blue-700 group-hover:translate-x-1 transition-transform flex items-center gap-1">
            Access Asset
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
