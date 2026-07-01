import Scheme from "../models/scheme.model.js";
import User from "../../../models/user.model.js";
import Feedback from "../../../models/FeedbackModel.js";

export const getDashboard = async (req, res) => {
  try {
    const [
      totalSchemes,
      activeSchemes,
      totalUsers,
      recentSchemes,
    ] = await Promise.all([
      Scheme.countDocuments(),
      Scheme.countDocuments({ status: "Active" }),
      User.countDocuments(),
      Scheme.find()
        .sort({ createdAt: -1 })
        .limit(5)
        .select("name category status"),
    ]);

    return res.status(200).json({
      success: true,
      stats: {
        totalSchemes,
        activeSchemes,
        totalUsers,
      },
      recentSchemes,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};