/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import React from 'react';
import { JOURNAL_ARTICLES } from '../constants';
import { JournalArticle } from '../types';

interface JournalProps {
  onArticleClick: (article: JournalArticle) => void;
}

const Journal: React.FC<JournalProps> = ({ onArticleClick }) => {
  return (
    <section id="journal" className="bg-white py-28 px-6 md:px-12 border-t border-blue-100">
      <div className="max-w-[1800px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 pb-8 border-b border-blue-100">
            <div>
                <span className="inline-block text-xs font-bold uppercase tracking-[0.25em] text-blue-700 bg-blue-50 border border-blue-200/60 px-3.5 py-1.5 rounded-full mb-4">
                  Resell Insights & Growth
                </span>
                <h2 className="text-4xl md:text-6xl font-serif text-blue-950 tracking-tight">The Creator Gazette</h2>
            </div>
            <p className="text-slate-500 font-light text-base max-w-md mt-4 md:mt-0">
              In-depth playbooks on brand psychology, Master Resell Rights compliance, and organic funnel conversion.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {JOURNAL_ARTICLES.map((article) => (
                <div 
                  key={article.id} 
                  className="group cursor-pointer flex flex-col text-left bg-white border border-blue-100 hover:border-blue-400 rounded-2xl p-6 transition-all duration-500 hover:shadow-xl hover:shadow-blue-700/10" 
                  onClick={() => onArticleClick(article)}
                >
                    <div className="w-full aspect-[16/10] overflow-hidden rounded-xl mb-6 bg-blue-50">
                        <img 
                            src={article.image} 
                            alt={article.title} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                    </div>
                    <div className="flex flex-col flex-1 text-left justify-between">
                        <div>
                          <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 mb-2 block">
                            {article.date}
                          </span>
                          <h3 className="text-xl font-serif font-semibold text-blue-950 mb-3 leading-snug group-hover:text-blue-700 transition-colors">
                            {article.title}
                          </h3>
                          <p className="text-slate-600 text-sm font-light leading-relaxed mb-6">
                            {article.excerpt}
                          </p>
                        </div>
                        <span className="text-xs font-semibold text-blue-700 flex items-center gap-1.5 group-hover:translate-x-1 transition-transform">
                          Read Full Article
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                          </svg>
                        </span>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;
