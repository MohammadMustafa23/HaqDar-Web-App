import UserProfileModel from "../models/userProfile.model.js";
import { generateSearchQuery } from "../services/gemini.service.js";
import { generateEmbedding } from "../services/embedding.service.js";
import { searchSchemes } from "../services/pinecone.service.js";
import MatchedSchemeModel from "../models/matchedScheme.model.js";
import { redisClient } from "../config/redis.js";
export async function FindSchemes(req, res) {
  try {
    const userId = req.user.id;

    const profileData = {
      userId,
      ...req.profile,
    };

    const profile = await UserProfileModel.findOneAndUpdate(
      { userId },
      profileData,
      {
        returnDocument: "after",
        upsert: true,
        runValidators: true,
      },
    );

    // Gemini Query Generation
    const searchQuery = await generateSearchQuery(req.profile);

    const embedding = await generateEmbedding(searchQuery);

    const matches = await searchSchemes(embedding);

    await MatchedSchemeModel.findOneAndUpdate(
      {
        userId,
      },

      {
        userId,
        searchQuery,
        schemes: matches.map((item) => ({
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

    
    // Remove old cache
    await redisClient.del(`profile:${userId}`);

    return res.status(200).json({
      success: true,
      message: "Profile saved successfully",
      profile,
    });
  } catch (error) {
    console.error("FindSchemes Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
