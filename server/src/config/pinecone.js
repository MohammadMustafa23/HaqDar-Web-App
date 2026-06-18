import { Pinecone } from "@pinecone-database/pinecone";
import { PINECONE_API_KEY } from "./env.js";
export const pinecone = new Pinecone({
  apiKey: PINECONE_API_KEY
});

export const index = pinecone.index("haqdar-web");