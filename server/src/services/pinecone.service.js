import { index } from "../config/pinecone.js";

export async function searchSchemes(embedding) {
  try {
    const response = await index.query({
      vector: embedding,
      topK: 5,
      includeMetadata: true,
    });

    return response.matches;
  } catch (error) {
    console.error("Pinecone Search Error:", error);
    throw new Error("Failed to search schemes");
  }
}