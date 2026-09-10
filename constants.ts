/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';
import { Product, JournalArticle } from './types';

export const BRAND_NAME = 'NanaBlu Digitals';
export const BRAND_TAGLINE = 'Digital Resell Vault & Master Rights Assets';
export const PRIMARY_COLOR = 'royal-700'; 
export const ACCENT_COLOR = 'blue-600';

export const PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Master Resell Rights (MRR) Vault Bundle',
    tagline: 'Your complete digital business in a box.',
    description: 'Comprehensive digital products library with 100% Master Resell Rights. Keep 100% of every dollar you make.',
    longDescription: 'The crown jewel of NanaBlu Digitals. The MRR Vault Bundle provides instant commercial access to our flagship video modules, comprehensive guides, sales funnel templates, and customer onboarding assets. Rebrand, resell, or distribute directly to your audience while retaining 100% profit on every single transaction.',
    price: 497,
    category: 'Vault Bundles',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['100% Master Resell Rights (MRR)', 'Instant Vault Access', 'Done-For-You Funnels & Email Swipes', 'Canva Source Templates Included']
  },
  {
    id: 'p2',
    name: 'Royal Digital Planner & Tracker Kit',
    tagline: 'Hyperlinked luxury organization.',
    description: '50+ aesthetic digital planners, budget trackers, and productivity journals with full Private Label Rights (PLR).',
    longDescription: 'Crafted in NanaBlu\'s signature royal blue and crisp white aesthetic, this hyperlinked digital planner suite works effortlessly with GoodNotes, Notability, and tablet apps. Features annual, monthly, daily layouts, debt payoff trackers, and wellness logs. Fully editable in Canva with full commercial PLR rebrand rights.',
    price: 97,
    category: 'Planners & Guides',
    imageUrl: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Commercial PLR License Included', 'Canva Pro & Free Editable', 'GoodNotes & iPad Ready', 'Lifetime Vault Updates']
  },
  {
    id: 'p3',
    name: 'Faceless Reels & Viral Content Vault',
    tagline: 'High-converting video assets.',
    description: 'Over 600+ aesthetic 4K viral video clips, royalty-free audio cues, and 120+ proven hook & caption formulas.',
    longDescription: 'Scale your social media accounts without ever showing your face on camera. The NanaBlu Faceless Content Vault delivers hundreds of curated luxury aesthetic clips, trending audio selections, ready-to-post carousels, and viral hook scripts engineered specifically for Instagram Reels, TikTok, and YouTube Shorts.',
    price: 147,
    category: 'Social Media',
    imageUrl: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['600+ 4K Aesthetic Video Clips', 'Viral Hook & Caption Bank', 'PLR Resell Permission', 'Pre-formatted 9:16 Mobile Ratio']
  },
  {
    id: 'p4',
    name: 'Digital Marketing & Sales Funnel Blueprint',
    tagline: 'Automate sales while you sleep.',
    description: 'Step-by-step master guide for setting up your Stan Store, Beacons, or Shopify funnel with high-converting email sequences.',
    longDescription: 'Stop wondering how top digital creators make passive income daily. This comprehensive blueprint breaks down the exact sales funnel mechanics, traffic generation secrets (both organic and paid), email nurture flows, and pricing strategies that drive consistent five-figure months in digital resell.',
    price: 197,
    category: 'Marketing Guides',
    imageUrl: 'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['Step-by-Step Funnel Setup', '14-Day Automated Email Sequence', 'Conversion Rate Checklist', 'Resell Rights Permitted']
  },
  {
    id: 'p5',
    name: 'Aesthetic Canva Template Empire',
    tagline: '350+ matching social & branding assets.',
    description: 'Clean royal blue and white aesthetic templates including Instagram posts, stories, Pinterest pins, and branding kits.',
    longDescription: 'Establish an unforgettable, cohesive visual presence in minutes. The Aesthetic Canva Template Empire includes 350+ fully editable templates crafted with immaculate typography and optical balance. Ideal for course creators, influencers, coaches, and digital product shop owners looking for an authoritative brand look.',
    price: 89,
    category: 'Social Media',
    imageUrl: 'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['350+ Drag-and-Drop Canva Templates', 'Royal Blue & Clean White Palette', 'Story, Carousel & Reel Formats', 'Commercial Resell Rights']
  },
  {
    id: 'p6',
    name: 'Passive Income Automation & Email Swipes',
    tagline: 'High-yield customer retention.',
    description: 'Battle-tested email marketing sequences, lead magnet templates, and sales page copy templates ready to deploy.',
    longDescription: 'The money is in the list, but only if you have emails that convert. This package delivers 30+ pre-written email sequences spanning abandoned cart reminders, flash sales, high-ticket upsells, and trust-building welcome series. Simply insert your links, upload to your CRM, and launch.',
    price: 129,
    category: 'Marketing Guides',
    imageUrl: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000',
    gallery: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000'
    ],
    features: ['30+ Plug-and-Play Email Sequences', 'High-Converting Sales Copy', 'Lead Magnet Funnel Kit', 'Full Commercial License']
  }
];

export const JOURNAL_ARTICLES: JournalArticle[] = [
  {
    id: 1,
    title: "The Digital Resell Revolution: Why MRR Is Transforming E-Commerce",
    date: "May 18, 2025",
    excerpt: "How creators and everyday entrepreneurs are building scalable income streams by acquiring and reselling high-demand digital assets.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000",
    content: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-6 first-letter:text-5xl first-letter:font-serif first-letter:mr-3 first-letter:float-left text-slate-700" },
        "For decades, launching an e-commerce brand required inventory warehousing, supply chains, shipping delays, and thin profit margins. Today, the landscape has fundamentally flipped."
      ),
      React.createElement("p", { className: "mb-8 text-slate-700 leading-relaxed" },
        "Digital products eliminate manufacturing overhead, inventory risk, and fulfillment costs. With Master Resell Rights (MRR) and Private Label Rights (PLR), entrepreneurs no longer need to spend six months creating products from scratch. You gain immediate access to validated, high-value digital solutions."
      ),
      React.createElement("blockquote", { className: "border-l-4 border-blue-700 pl-6 italic text-xl text-blue-950 my-10 font-serif bg-blue-50/60 py-4 pr-4 rounded-r-lg" },
        "\"The digital vault model empowers entrepreneurs to own the product, the customer, and 100% of the upside.\""
      ),
      React.createElement("p", { className: "mb-6 text-slate-700 leading-relaxed" },
        "At NanaBlu Digitals, every asset in our vault is curated to meet rigorous standards of visual appeal, conversion psychology, and clear legal licensing. Whether you sell as-is or customize with your unique brand voice, the runway to profitability has never been shorter."
      )
    )
  },
  {
    id: 2,
    title: "The Psychology of Royal Blue: Building High-Trust Digital Brands",
    date: "May 4, 2025",
    excerpt: "Why royal blue and clean white command instant credibility, digital prestige, and higher perceived value in online storefronts.",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&q=80&w=1000",
    content: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-6 text-slate-700 leading-relaxed" },
        "Color is the single fastest signal your brand communicates to a potential customer. In the realm of financial technology, executive consulting, and premium digital products, royal blue stands apart as the definitive tone of security, authority, and intelligence."
      ),
      React.createElement("p", { className: "mb-8 text-slate-700 leading-relaxed" },
        "Paired with crisp white space, royal blue cuts through the visual noise of cluttered online stores. It reassures first-time buyers that your digital files, templates, and courses are professional, trustworthy, and worth the investment."
      ),
      React.createElement("div", { className: "my-12 p-8 bg-blue-900 text-white font-serif italic text-center rounded-xl shadow-lg" },
        React.createElement("p", { className: "text-xl font-normal mb-2" }, "Clarity builds trust."),
        React.createElement("p", { className: "text-xl font-normal mb-2" }, "Trust drives conversions."),
        React.createElement("p", { className: "text-sm font-sans uppercase tracking-widest text-blue-200 mt-4" }, "The NanaBlu Philosophy")
      ),
      React.createElement("p", { className: "mb-6 text-slate-700 leading-relaxed" },
        "When designing your storefront, treat negative space as an active asset. Royal blue provides anchor weight; pure white provides breathing room."
      )
    )
  },
  {
    id: 3,
    title: "5 Proven Funnel Steps to Your First $1,000 Week in Resell Digitals",
    date: "April 22, 2025",
    excerpt: "The exact step-by-step roadmap from selecting your vault package to setting up automated checkouts and driving targeted traffic.",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&q=80&w=1000",
    content: React.createElement(React.Fragment, null,
      React.createElement("p", { className: "mb-6 text-slate-700 leading-relaxed" },
        "Going from zero to your first consistent sales week requires a simple, repeatable framework. Here are the core pillars that successful NanaBlu vault members rely upon:"
      ),
      React.createElement("ul", { className: "space-y-4 my-6 pl-4 text-slate-700 list-disc" },
        React.createElement("li", null, React.createElement("strong", { className: "text-blue-900" }, "Pillar 1: Pick One High-Demand Problem."), " Focus on planners, marketing guides, or social media kits that directly address a creator pain point."),
        React.createElement("li", null, React.createElement("strong", { className: "text-blue-900" }, "Pillar 2: Deliver Immediate Download Gratification."), " Ensure instant PDF or Canva delivery post-checkout."),
        React.createElement("li", null, React.createElement("strong", { className: "text-blue-900" }, "Pillar 3: Leverage Organic Short-Form Video."), " 15-second aesthetic video clips with relatable hooks consistently outperform cold ads."),
        React.createElement("li", null, React.createElement("strong", { className: "text-blue-900" }, "Pillar 4: Re-invest in Bundle Upsells."), " Increasing average order value turns $30 buyers into $150 customers.")
      ),
      React.createElement("p", { className: "mb-6 text-slate-700 leading-relaxed" },
        "Remember: consistency in brand presentation and customer care creates a compounding flywheel."
      )
    )
  }
];
