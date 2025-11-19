import { GoogleGenAI } from "@google/genai";
import { SYSTEM_INSTRUCTION } from "../constants";

// Initialize the Gemini client
// NOTE: We assume process.env.API_KEY is available in the build environment.
// In a real Vite/CRA app, this might be import.meta.env.VITE_GEMINI_API_KEY
// For this specific runtime environment instructions, we use process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateChatResponse = async (userMessage: string): Promise<string> => {
  try {
    if (!process.env.API_KEY) {
      return "I'm sorry, I can't connect to the AI service right now (Missing API Key). Please feel free to email Shreyas directly.";
    }

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userMessage,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      }
    });

    return response.text || "I'm having trouble thinking of a response right now.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Sorry, I encountered an error while processing your request. Please try again later.";
  }
};