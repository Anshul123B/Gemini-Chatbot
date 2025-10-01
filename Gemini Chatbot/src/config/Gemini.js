import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyBjC5R4CK3pypzlGy7ix0efVBLasTux0uw");

// Try with a different model name
const modelName = "gemini-2.5-flash"; 

async function runChat(prompt) {
  try {
    const model = genAI.getGenerativeModel({ model: modelName });
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    return text;
  } catch (err) {
    console.error("Error:", err);
    throw err;
  }
}

export default runChat;