// const apiKey = "AIzaSyBt-ujPmzrlFyVEVYm0koVx40HmbChzgDM";

import { GoogleGenAI } from '@google/genai';

// ✅ Initialize Gemini with API key
const ai = new GoogleGenAI({
  apiKey: "AIzaSyBt-ujPmzrlFyVEVYm0koVx40HmbChzgDM",
});

const model = "gemini-2.5-flash"; // text model for chat

// ✅ Async function for chat
async function runChat(prompt) {
  try {
    const chat = ai.getGenerativeModel({ model }).startChat();
    const result = await chat.sendMessage(prompt);
    const text = result.response.text();
    return text;
  } catch (err) {
    console.error("Error:", err);
    throw err;
  }
}

export default runChat;
