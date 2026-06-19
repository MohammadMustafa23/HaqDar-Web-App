import MatchedSchemeModel from "../models/matchedScheme.model.js";

export async function getMatchedSchemes(req, res) {
  try {
    const userId = req.user.id;

    const matchedSchemes = await MatchedSchemeModel.findOne({
       userId,
    });

    return res.status(200).json({
      success: true,
      schemes: matchedSchemes?.schemes || [],
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
