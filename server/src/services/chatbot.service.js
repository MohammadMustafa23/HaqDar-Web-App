// chatbot.service.js
import { GEMINI_API_KEY } from "../config/env.js";

import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

export const askChatbot = async (message) => {
const prompt = `
You are HaqDar AI.

IMPORTANT RULES:

1. Answer ONLY using information provided by HaqDar.
2. Never use your own knowledge.
3. Never guess or invent information.
4. If exact information is not available, reply ONLY:

"Sorry, I couldn't find verified information for this in HaqDar."

5. Keep responses short and mobile-friendly.
6. Use bullet points when possible.
7. Reply in the user's language.
8. Maximum response length: 80 words.


User Question:
${message}
`;
  const result = await model.generateContent(prompt);

  return result.response.text();
};
