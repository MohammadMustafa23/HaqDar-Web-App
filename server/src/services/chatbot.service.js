// chatbot.service.js
import { GEMINI_API_KEY } from "../config/env.js";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { searchSchemeByMessage } from "../Admin/SchemeManagemt/controllers/scheme.controller.js";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

const RELEVANCE_THRESHOLD = 0.75; // tune this based on testing

const buildSchemeContext = (schemes) => {
  if (!Array.isArray(schemes) || schemes.length === 0) {
    return "No matching schemes found in database.";
  }

  return schemes
    .map(
      (s, i) => `${i + 1}. ${s.name} (${s.schemeType})
Category: ${s.category}
Beneficiary: ${s.beneficiary}
Eligibility: Age ${s.minAge}-${s.maxAge}, Income up to ₹${s.income}, Caste: ${s.caste}, Gender: ${s.gender}
Benefit: ${s.benefit}
Documents: ${Array.isArray(s.documents) ? s.documents.join(", ") : s.documents}
Apply: ${s.apply}
Status: ${s.status}`,
    )
    .join("\n\n");
};

export const askChatbot = async (message) => {
  const matches = await searchSchemeByMessage(message);

  // Defensive: handle array, single object, or nothing
  const schemes = Array.isArray(matches) ? matches : matches ? [matches] : [];

  const schemeContext = buildSchemeContext(schemes);

  const prompt = `
You are HaqDar AI.

IMPORTANT RULES:
1. Answer ONLY using the SCHEME DATA provided below.
2. Never use your own knowledge or invent information.
3. If the SCHEME DATA does not contain relevant information, reply ONLY:
"Sorry, I couldn't find verified information for this in HaqDar."
4. Keep responses short and mobile-friendly.
5. Use bullet points when possible.
6. Reply in the user's language.
7. Maximum response length: 80 words.

SCHEME DATA:
${schemeContext}

User Question:
${message}
`;

  const result = await model.generateContent(prompt);
  return result.response.text();
};

const SYSTEM_RULES = `
You are HaqDar AI.

IMPORTANT RULES:
1. Answer ONLY using the SCHEME DATA provided below.
2. Never use your own knowledge or invent information.
3. If the SCHEME DATA does not contain relevant information, reply ONLY:
"Sorry, I couldn't find verified information for this in HaqDar."
4. Keep responses short and mobile-friendly.
5. Use bullet points when possible.
6. Reply in the user's language.
7. Maximum response length: 80 words.
`;

// Used when Pinecone search already happened (SCHEME_SEARCH intent)
export const formatSchemeAnswer = async (message, schemes) => {
  const schemeContext = buildSchemeContext(schemes);

  const prompt = `
${SYSTEM_RULES}

SCHEME DATA:
${schemeContext}

User Question:
${message}
`;

  const result = await model.generateContent(prompt);
  return result.response.text();
};

// Used as full fallback when no intent matched (does its own Pinecone search)
export const FormatedAI = async (message) => {
  const schemes = await searchSchemeByMessage(message);
  return formatSchemeAnswer(message, schemes);
};
