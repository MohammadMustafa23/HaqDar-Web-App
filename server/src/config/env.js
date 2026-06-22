import dotenv from "dotenv";
dotenv.config();


export const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
export const PINECONE_API_KEY = process.env.PINECONE_API_KEY;
export const REDIS_URL = process.env.REDIS_URL;