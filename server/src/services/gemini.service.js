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

Convert the following validated user profile into a concise
semantic search query for a vector database.

Profile:
${JSON.stringify(profile, null, 2)}

Rules:
- Return ONLY the search query.
- No explanations.
- No markdown.
- Do not change, infer, estimate, or create any profile values.
- Preserve the exact age and income.
- Include occupation, category, income, education, district, gender, age and PWD status.
- Focus on government schemes, welfare benefits, financial assistance,
  scholarships, subsidies, employment support, business support,
  education support and other government benefits.
- Make the query semantically rich enough for vector similarity search.

Example:
"20-year-old male OBC graduate student from Jaipur with annual income
of ₹200000, seeking government scholarships, education assistance,
financial support, welfare schemes and student benefits."

`;

    const result = await model.generateContent(prompt);

    return result.response.text().trim();
  } catch (error) {
    console.error("Gemini Query Generation Error:", error);

    throw new Error("Failed to generate search query");
  }
}
