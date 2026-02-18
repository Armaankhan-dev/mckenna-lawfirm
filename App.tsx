
import { GoogleGenAI } from "@google/genai";
import { Message } from "../types";

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    // Initializing Gemini client with API key strictly from environment variable as per guidelines
    this.ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }

  async generateResponse(history: Message[]) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: history.map(h => ({
          role: h.role === 'user' ? 'user' : 'model',
          parts: [{ text: h.content }]
        })),
        config: {
          systemInstruction: `You are the AI Case Assistant for McKenna Laws, a premium Florida law firm specializing in Criminal Defense and Personal Injury. 
          Your tone is professional, empathetic, authoritative, and helpful. 
          Your goal:
          1. Briefly acknowledge their concern.
          2. Ask for their name and the type of incident (e.g., car accident, arrest).
          3. Inform them that McKenna Laws offers free consultations.
          4. Suggest they speak with a human attorney for actual legal advice.
          5. If they ask specific legal questions, provide general info but reiterate you are an AI and they need a consultation.
          KEEP RESPONSES CONCISE (under 100 words).`,
          temperature: 0.7,
        },
      });

      // Properly accessing the text property on GenerateContentResponse
      return response.text || "I'm sorry, I'm having trouble connecting. Please call us directly at (800) MCKENNA.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "I apologize, but I am unavailable at the moment. Please use our contact form or call us for immediate assistance.";
    }
  }
}

export const geminiService = new GeminiService();
