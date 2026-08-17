import UserProfileModel from "../models/userProfile.model.js";
import { generateSearchQuery } from "../services/gemini.service.js";
import { generateEmbedding } from "../services/embedding.service.js";
import { searchSchemes } from "../services/pinecone.service.js";
import MatchedSchemeModel from "../models/matchedScheme.model.js";
import { redisClient } from "../config/redis.js";
import { filterEligibleSchemes } from "../utils/eligibility.util.js";

export async function FindSchemes(req, res) {
  try {
    const userId = req.user.id;

    // ===============================
    // 1. Gemini Query
    // ===============================
    const searchQuery = await generateSearchQuery(req.profile);

    if (!searchQuery || !searchQuery.trim()) {
      return res.status(503).json({
        success: false,
        stage: "gemini",
        message:
          "Our AI service is temporarily unavailable. Please try again in a few minutes.",
      });
    }

    // ===============================
    // 2. Embedding
    // ===============================
    const embedding = await generateEmbedding(searchQuery);

    if (!embedding) {
      return res.status(503).json({
        success: false,
        stage: "embedding",
        message:
          "Unable to process your profile right now. Please try again shortly.",
      });
    }

    // ===============================
    // 3. Pinecone Search
    // ===============================
    const matches = await searchSchemes(embedding);

    if (!Array.isArray(matches)) {
      return res.status(503).json({
        success: false,
        stage: "pinecone",
        message:
          "We couldn't fetch scheme recommendations right now. Please try again later.",
      });
    }

    // Filtering all Scheme For Saw Better Result To User
    const eligibleMatches = filterEligibleSchemes(req.profile, matches);

    // ===============================
    // 4. Save Profile
    // ===============================
    const profile = await UserProfileModel.findOneAndUpdate(
      {
        userId,
      },
      {
        userId,
        ...req.profile,
      },
      {
        upsert: true,
        new: true,
        runValidators: true,
      },
    );

    // ===============================
    // 5. Save Matches
    // ===============================
    await MatchedSchemeModel.findOneAndUpdate(
      {
        userId,
      },
      {
        userId,
        searchQuery,
        schemes: eligibleMatches.map((item) => ({
          schemeId: item.id,
          score: item.score,
          metadata: item.metadata,
        })),
      },
      {
        upsert: true,
        new: true,
        runValidators: true,
      },
    );

    // 6. Clear Cache (Non-Critical)
    // ===============================
    try {
      await redisClient.del(`profile:${userId}`);
      await redisClient.del(`matchedSchemes:${userId}`);
    } catch (redisError) {
      console.error("Redis Cache Clear Error:", redisError.message);
      // Don't throw
    }

    return res.status(200).json({
      success: true,
      message: "Profile completed successfully.",
      profile,
    });
  } catch (error) {
    console.error("FindSchemes Error:", error);

    // Gemini quota / rate limit
    if (error.status === 429 || error.code === 429) {
      return res.status(429).json({
        success: false,
        stage: "gemini",
        message:
          "Our AI service is busy due to high demand. Please try again in a few minutes.",
      });
    }

    // Timeout
    if (error.code === "ETIMEDOUT") {
      return res.status(503).json({
        success: false,
        message:
          "The request took too long. Please check your internet connection and try again.",
      });
    }

    return res.status(500).json({
      success: false,
      message:
        "Something went wrong while generating your recommendations. Please try again.",
    });
  }
}
