
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { Product } from '../types';

interface CheckoutProps {
  items: Product[];
  onBack: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ items, onBack }) => {
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [submitted, setSubmitted] = React.useState(false);
  const subtotal = items.reduce((sum, item) => sum + item.price, 0);
  const total = subtotal;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-24 pb-24 px-6 bg-slate-50/70 animate-fade-in-up">
      <div className="max-w-6xl mx-auto">
        <button 
          onClick={onBack}
          className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-700 hover:text-blue-900 transition-colors mb-10 bg-white border border-blue-100 px-4 py-2 rounded-full shadow-sm"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
          Back to Vault
        </button>

        {submitted ? (
          <div className="bg-white border border-blue-200 rounded-3xl p-12 text-center max-w-2xl mx-auto shadow-xl shadow-blue-950/5">
            <div className="w-16 h-16 bg-blue-700 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold shadow-lg shadow-blue-700/30">
              ✓
            </div>
            <h2 className="text-3xl font-serif text-blue-950 mb-4">Digital Vault Order Confirmed!</h2>
            <p className="text-slate-600 mb-6">
              Instant access links and Master Resell Rights certificates have been generated for <span className="font-semibold text-blue-900">{email || 'your email'}</span>.
            </p>
            <div className="bg-blue-50 border border-blue-100 rounded-2xl p-6 mb-8 text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-800 block mb-2">Digital Delivery Access</span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Your editable Canva links, Google Drive master zip files, and reseller license documentation are ready to deploy.
              </p>
            </div>
            <button
              onClick={onBack}
              className="px-8 py-3.5 bg-blue-700 text-white font-semibold text-xs uppercase tracking-widest rounded-full hover:bg-blue-800 transition-all shadow-md"
            >
              Return to Vault Store
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            
            {/* Left Column: Form */}
            <div className="lg:col-span-7 bg-white border border-blue-100 rounded-3xl p-8 md:p-10 shadow-sm">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-600"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-700">NanaBlu Express Checkout</span>
              </div>
              <h1 className="text-3xl font-serif text-blue-950 mb-2">Digital Vault Checkout</h1>
              <p className="text-sm text-slate-500 mb-8">Instant digital file delivery. 100% Commercial Resell Rights included.</p>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Section 1: Contact & Delivery Email */}
                <div>
                  <h2 className="text-base font-bold uppercase tracking-wider text-blue-950 mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs">1</span>
                    Digital Delivery Email
                  </h2>
                  <div className="space-y-4">
                     <input 
                       type="email" 
                       required 
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       placeholder="you@domain.com (Where downloads will be sent)" 
                       className="w-full bg-slate-50 border border-blue-200 rounded-xl px-4 py-3.5 text-blue-950 placeholder-slate-400 outline-none focus:border-blue-600 focus:bg-white transition-all text-sm" 
                     />
                     <div className="flex items-center gap-2">
                       <input type="checkbox" id="newsletter" defaultChecked className="accent-blue-700 rounded cursor-pointer" />
                       <label htmlFor="newsletter" className="text-xs text-slate-600 cursor-pointer">Receive free bonus PLR drops and MRR launch alerts</label>
                     </div>
                  </div>
                </div>

                {/* Section 2: Licensee Details */}
                <div>
                  <h2 className="text-base font-bold uppercase tracking-wider text-blue-950 mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs">2</span>
                    Licensee Information
                  </h2>
                  <div className="space-y-4">
                     <div className="grid grid-cols-2 gap-4">
                        <input 
                          type="text" 
                          required 
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Your Full Name" 
                          className="w-full bg-slate-50 border border-blue-200 rounded-xl px-4 py-3.5 text-blue-950 placeholder-slate-400 outline-none focus:border-blue-600 focus:bg-white transition-all text-sm" 
                        />
                        <input 
                          type="text" 
                          placeholder="Brand / Store Name (Optional)" 
                          className="w-full bg-slate-50 border border-blue-200 rounded-xl px-4 py-3.5 text-blue-950 placeholder-slate-400 outline-none focus:border-blue-600 focus:bg-white transition-all text-sm" 
                        />
                     </div>
                  </div>
                </div>

                {/* Section 3: Payment */}
                <div>
                  <h2 className="text-base font-bold uppercase tracking-wider text-blue-950 mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center text-xs">3</span>
                    Secure Payment
                  </h2>
                  <div className="p-5 border border-blue-200/80 rounded-2xl bg-blue-50/40 space-y-4">
                     <div className="flex items-center justify-between">
                       <span className="text-xs font-semibold text-blue-950">Encrypted 256-Bit SSL Payment</span>
                       <span className="text-[10px] uppercase font-bold text-blue-700 bg-white border border-blue-200 px-2.5 py-1 rounded">Stripe / Card</span>
                     </div>
                     <input 
                       type="text" 
                       defaultValue="4242 •••• •••• 4242" 
                       disabled 
                       className="w-full bg-white border border-blue-200 rounded-xl px-4 py-3 text-slate-500 font-mono text-xs" 
                     />
                     <div className="grid grid-cols-2 gap-4">
                        <input type="text" defaultValue="12/28" disabled className="w-full bg-white border border-blue-200 rounded-xl px-4 py-3 text-slate-500 font-mono text-xs" />
                        <input type="text" defaultValue="CVC •••" disabled className="w-full bg-white border border-blue-200 rounded-xl px-4 py-3 text-slate-500 font-mono text-xs" />
                     </div>
                  </div>
                </div>

                <div>
                  <button 
                      type="submit"
                      disabled={items.length === 0}
                      className="w-full py-4 bg-blue-700 hover:bg-blue-800 text-white uppercase tracking-widest text-xs font-bold rounded-full transition-all shadow-lg shadow-blue-700/25 disabled:opacity-50"
                  >
                      Complete Purchase & Download Vault — ${total}
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-3">
                    By clicking complete, you receive instant access and the official NanaBlu MRR commercial agreement.
                  </p>
                </div>
              </form>
            </div>

            {/* Right Column: Summary */}
            <div className="lg:col-span-5 bg-white border border-blue-100 rounded-3xl p-8 shadow-sm flex flex-col justify-between">
              <div>
                <h2 className="text-xl font-serif text-blue-950 font-semibold mb-6">Vault Order Summary</h2>
                
                <div className="space-y-4 mb-8">
                   {items.map((item, idx) => (
                     <div key={idx} className="flex gap-4 p-3 rounded-xl border border-blue-50 bg-blue-50/20">
                        <div className="w-16 h-16 rounded-lg overflow-hidden bg-blue-50 relative shrink-0 border border-blue-100">
                           <img src={item.imageUrl} alt={item.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex-1">
                           <h3 className="font-serif text-blue-950 text-sm font-semibold leading-snug">{item.name}</h3>
                           <p className="text-[10px] font-bold text-blue-700 uppercase tracking-wider mt-0.5">{item.category}</p>
                           <span className="text-xs font-bold text-blue-950 mt-1 block">${item.price}</span>
                        </div>
                     </div>
                   ))}
                </div>

                <div className="border-t border-blue-100 pt-5 space-y-2.5 text-sm">
                  <div className="flex justify-between text-slate-600">
                     <span>Vault Subtotal</span>
                     <span className="font-medium text-blue-950">${subtotal}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                     <span>Digital Delivery</span>
                     <span className="text-emerald-700 font-semibold">Free Instant</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                     <span>Commercial Resell Rights</span>
                     <span className="text-blue-700 font-semibold">Included ($299 value)</span>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-blue-100 mt-8 pt-6">
                 <div className="flex justify-between items-center">
                   <div>
                     <span className="font-serif text-xl text-blue-950 font-bold block">Total Due</span>
                     <span className="text-[10px] text-slate-400 uppercase tracking-wider">USD • One-time charge</span>
                   </div>
                   <span className="font-serif text-3xl text-blue-900 font-bold">${total}</span>
                 </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Checkout;