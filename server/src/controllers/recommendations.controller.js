import UserProfileModel from "../models/userProfile.model.js";
import { generateSearchQuery } from "../services/gemini.service.js";
import { generateEmbedding } from "../services/embedding.service.js";

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

    console.log(profile);

    // Gemini Query Generation
    const searchQuery = await generateSearchQuery(req.profile);

    console.log("Generated Query:");
    console.log(searchQuery);

    const embedding = await generateEmbedding(searchQuery);

    console.log("Embedding Length:", embedding.length);

    return res.status(200).json({
      success: true,
      message: "Profile saved successfully",
      profile,
      searchQuery,
    });
  } catch (error) {
    console.error("FindSchemes Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
