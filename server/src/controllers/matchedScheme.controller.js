import MatchedSchemeModel from "../models/matchedScheme.model.js";
import { redisClient } from "../config/redis.js";

export async function getMatchedSchemes(req, res) {
  try {
    const userId = req.user.id;
    const cacheKey = `matchedSchemes:${userId}`;

    // Check Redis
    const cachedSchemes = await redisClient.get(cacheKey);

    if (cachedSchemes) {
      return res.status(200).json({
        success: true,
        schemes: JSON.parse(cachedSchemes),
      });
    }

    const matchedSchemes = await MatchedSchemeModel.findOne({ userId });

    const schemes = matchedSchemes?.schemes || [];

    // Store in Redis for 1 hour
    await redisClient.setEx(
      cacheKey,
      30 * 60,
      JSON.stringify(schemes)
    );

    return res.status(200).json({
      success: true,
      schemes,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

export async function GetSpecifiScheme(req, res) {
  try {
    const schemeId = req.params.id;

    const matchedSchemes = await MatchedSchemeModel.findOne({
      userId: req.user.id,
    });

    if (!matchedSchemes) {
      return res.status(404).json({
        success: false,
        message: "No schemes found",
      });
    }

    const scheme = matchedSchemes.schemes.find(
      (s) => s.schemeId === schemeId
    );

    if (!scheme) {
      return res.status(404).json({
        success: false,
        message: "Scheme not found",
      });
    }

    res.status(200).json({
      success: true,
      scheme,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}