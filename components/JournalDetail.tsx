/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { JournalArticle } from '../types';

interface JournalDetailProps {
  article: JournalArticle;
  onBack: () => void;
}

const JournalDetail: React.FC<JournalDetailProps> = ({ article, onBack }) => {
  return (
    <div className="min-h-screen bg-slate-50 animate-fade-in-up">
       {/* Hero Image for Article */}
       <div className="w-full h-[45vh] md:h-[55vh] relative overflow-hidden">
          <img 
             src={article.image} 
             alt={article.title} 
             className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/40 to-transparent"></div>
       </div>

       <div className="max-w-4xl mx-auto px-6 md:px-12 -mt-28 relative z-10 pb-32">
          <div className="bg-white rounded-3xl p-8 md:p-16 shadow-xl shadow-blue-950/10 border border-blue-100">
             <div className="flex justify-between items-center mb-10 border-b border-blue-100 pb-6">
                <button 
                  onClick={onBack}
                  className="group flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-blue-700 hover:text-blue-900 transition-colors bg-blue-50 px-4 py-2 rounded-full"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 group-hover:-translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                  </svg>
                  Back to Insights
                </button>
                <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">{article.date}</span>
             </div>

             <h1 className="text-3xl md:text-5xl font-serif text-blue-950 mb-10 leading-tight text-center">
               {article.title}
             </h1>

             <div className="prose prose-blue prose-lg mx-auto font-normal leading-relaxed text-slate-700">
               {article.content}
             </div>
             
             <div className="mt-16 pt-10 border-t border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                 <div className="flex items-center gap-3">
                   <div className="w-8 h-8 rounded-lg bg-blue-700 text-white font-serif font-bold flex items-center justify-center">N</div>
                   <span className="text-lg font-serif font-bold text-blue-950">NanaBlu Digitals</span>
                 </div>
                 <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">Published in The Creator Gazette</span>
             </div>
          </div>
       </div>
    </div>
  );
};

export default JournalDetail;
