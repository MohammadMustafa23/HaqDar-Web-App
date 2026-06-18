import UserProfileModel from "../models/userProfile.model.js";
import { generateSearchQuery } from "../services/gemini.service.js";
import { generateEmbedding } from "../services/embedding.service.js";
import { searchSchemes } from "../services/pinecone.service.js";

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
    console.log(matches);

    return res.status(200).json({
      success: true,
      message: "Profile saved successfully",
      profile,
      searchQuery,
      SchemsMatch : matches
    });
  } catch (error) {
    console.error("FindSchemes Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
