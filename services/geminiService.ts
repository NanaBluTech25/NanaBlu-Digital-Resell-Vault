/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/


import { GoogleGenAI } from "@google/genai";
import { PRODUCTS } from '../constants';

const getSystemInstruction = () => {
  const productContext = PRODUCTS.map(p => 
    `- ${p.name} ($${p.price}): ${p.description}. Features: ${p.features.join(', ')}`
  ).join('\n');

  return `You are the AI Concierge for "NanaBlu Digitals", a premier digital resell vault brand specializing in Master Resell Rights (MRR), Canva templates, faceless video banks, and turnkey digital creator assets.
  Our brand colors are signature royal blue and crisp white.
  Your tone is empowering, insightful, professional, and creator-focused.
  
  Explain Master Resell Rights (MRR) clearly: customers receive commercial licenses to rebrand, resell, and keep 100% of the profits. All templates come with instant Canva links and ready-to-sell assets.
  
  Here is our current digital product catalog:
  ${productContext}
  
  Answer customer inquiries about licensing terms, niche suitability, Canva customization, and recommendations.
  Keep answers concise (under 3 sentences usually) to suit the chat UI.
  If asked about unrelated items, gently guide them back to NanaBlu Digitals' digital resell assets.`;
};

export const sendMessageToGemini = async (history: {role: string, text: string}[], newMessage: string): Promise<string> => {
  try {
    let apiKey: string | undefined;
    
    // Robustly attempt to get the API key, handling ReferenceError if process is not defined
    try {
      apiKey = process.env.API_KEY;
    } catch (e) {
      // process is likely not defined in this environment
      console.warn("Accessing process.env failed");
    }
    
    if (!apiKey) {
      return "I'm sorry, I cannot connect to the server right now. (Missing API Key)";
    }

    const ai = new GoogleGenAI({ apiKey });
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: getSystemInstruction(),
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message: newMessage });
    return result.text;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I apologize, but I seem to be having trouble reaching our archives at the moment.";
  }
};