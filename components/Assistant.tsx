/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { sendMessageToGemini } from '../services/geminiService';

const Assistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'model', 
      text: 'Welcome to NanaBlu Digitals! I am your AI Vault Concierge. Ask me about Master Resell Rights (MRR), Canva templates, faceless video vaults, or which bundle fits your creator niche.', 
      timestamp: Date.now() 
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isThinking, setIsThinking] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: inputValue, timestamp: Date.now() };
    setMessages(prev => [...prev, userMsg]);
    setInputValue('');
    setIsThinking(true);

    try {
      const history = messages.map(m => ({ role: m.role, text: m.text }));
      const responseText = await sendMessageToGemini(history, userMsg.text);
      
      const aiMsg: ChatMessage = { role: 'model', text: responseText, timestamp: Date.now() };
      setMessages(prev => [...prev, aiMsg]);
    } catch (error) {
        // Error handled in service
    } finally {
      setIsThinking(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {isOpen && (
        <div className="bg-slate-50 rounded-3xl shadow-2xl shadow-blue-950/20 w-[90vw] sm:w-[400px] h-[560px] mb-4 flex flex-col overflow-hidden border border-blue-200 animate-slide-up-fade">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-950 text-white p-4 px-5 border-b border-blue-800 flex justify-between items-center">
            <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-pulse"></div>
                <div>
                  <span className="font-serif font-semibold text-white text-base block leading-tight">NanaBlu AI Concierge</span>
                  <span className="text-[10px] text-blue-200 uppercase tracking-widest font-bold">Resell Advisor</span>
                </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="text-blue-200 hover:text-white p-1 rounded-lg transition-colors"
              aria-label="Close Assistant"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Chat Area */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4 bg-slate-50" ref={scrollRef}>
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-4 text-xs sm:text-sm leading-relaxed rounded-2xl ${
                    msg.role === 'user' 
                      ? 'bg-blue-700 text-white rounded-tr-none shadow-md shadow-blue-700/20' 
                      : 'bg-white border border-blue-100 text-slate-700 rounded-tl-none shadow-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isThinking && (
               <div className="flex justify-start">
                 <div className="bg-white border border-blue-100 rounded-2xl rounded-tl-none p-4 flex gap-1.5 items-center shadow-sm">
                   <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce"></div>
                   <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce delay-75"></div>
                   <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce delay-150"></div>
                 </div>
               </div>
            )}
          </div>

          {/* Quick suggestions pills */}
          <div className="px-4 py-2 bg-blue-50/70 border-t border-blue-100 flex gap-2 overflow-x-auto text-[11px] whitespace-nowrap">
            <button 
              onClick={() => setInputValue('How does Master Resell Rights (MRR) work?')}
              className="text-blue-700 hover:text-blue-900 bg-white border border-blue-200 px-3 py-1 rounded-full shrink-0"
            >
              What is MRR?
            </button>
            <button 
              onClick={() => setInputValue('Which product is best for total beginners?')}
              className="text-blue-700 hover:text-blue-900 bg-white border border-blue-200 px-3 py-1 rounded-full shrink-0"
            >
              Best for Beginners
            </button>
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t border-blue-100">
            <div className="flex gap-2 relative">
              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about digital resell assets..." 
                className="flex-1 bg-slate-50 border border-blue-200 focus:border-blue-600 rounded-xl px-4 py-2.5 text-xs sm:text-sm outline-none transition-colors placeholder-slate-400 text-slate-900"
              />
              <button 
                onClick={handleSend}
                disabled={!inputValue.trim() || isThinking}
                className="bg-blue-700 text-white px-4 rounded-xl hover:bg-blue-800 transition-colors disabled:opacity-50 flex items-center justify-center shadow-md shadow-blue-700/20"
                aria-label="Send message"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-700 text-white w-14 h-14 flex items-center justify-center rounded-full shadow-xl shadow-blue-700/30 hover:scale-105 hover:bg-blue-800 transition-all duration-300 z-50 border-2 border-white"
        aria-label="Open AI Concierge"
      >
        {isOpen ? (
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
             </svg>
        ) : (
          <div className="flex flex-col items-center justify-center leading-none">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
          </div>
        )}
      </button>
    </div>
  );
};

export default Assistant;