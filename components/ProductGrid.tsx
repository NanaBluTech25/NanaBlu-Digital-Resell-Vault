/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import ProductCard from './ProductCard';

const categories = ['All', 'Vault Bundles', 'Planners & Guides', 'Social Media', 'Marketing Guides'];

interface ProductGridProps {
  onProductClick: (product: Product) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ onProductClick }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'All') return PRODUCTS;
    return PRODUCTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <section id="products" className="py-28 px-6 md:px-12 bg-white">
      <div className="max-w-[1800px] mx-auto">
        
        {/* Header Area */}
        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-700 bg-blue-50 border border-blue-200/80 px-4 py-1.5 rounded-full">
            Commercial Resale Assets
          </span>
          <h2 className="text-4xl md:text-6xl font-serif text-blue-950 tracking-tight">The Vault Collection</h2>
          <p className="text-slate-600 max-w-xl text-base md:text-lg font-light">
            Done-for-you digital assets, Canva design kits, and viral reel vaults ready for instant download and immediate resale.
          </p>
          
          {/* Royal Blue & White Filter Pills */}
          <div className="flex flex-wrap justify-center gap-3 pt-6 w-full max-w-3xl">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-xs uppercase tracking-wider px-5 py-2.5 rounded-full transition-all duration-300 font-semibold ${
                  activeCategory === cat 
                    ? 'bg-blue-700 text-white shadow-md shadow-blue-700/20' 
                    : 'bg-blue-50/70 text-slate-700 hover:text-blue-900 hover:bg-blue-100 border border-blue-100/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Large Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} onClick={onProductClick} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
