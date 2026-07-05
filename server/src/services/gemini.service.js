import { GoogleGenerativeAI } from "@google/generative-ai";
import { GEMINI_API_KEY } from "../config/env.js";

const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

const model = genAI.getGenerativeModel({
  model: "gemini-2.5-flash",
});

export async function generateSearchQuery(profile) {
  try {
    const prompt = `
You are a government scheme recommendation assistant.

Convert the following user profile into a concise semantic search query
for a vector database.

Profile:
${JSON.stringify(profile, null, 2)}

Rules:
- Return ONLY the search query.
- No explanations.
- No markdown.
- Include occupation, category, income, education, district, gender and age.
- Focus on welfare schemes, financial assistance, subsidies, scholarships, employment support, business support and government benefits.

Example Output:
"OBC self-employed male from Jaipur aged 18-35 with income between 2.5 and 5 lakh seeking government welfare schemes, financial assistance, subsidies and business support."

`;

    const result = await model.generateContent(prompt);
    const query = result.response.text().trim();

    return query;
  } catch (error) {
    console.error("Gemini Query Generation Error:", error);

    throw new Error("Failed to generate search query");
  }
}
