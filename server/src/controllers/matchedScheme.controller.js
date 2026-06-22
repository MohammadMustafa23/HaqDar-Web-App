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