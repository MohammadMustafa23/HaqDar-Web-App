import userModel from "../models/user.model.js";
import UserProfileModel from "../models/userProfile.model.js";

export const requestProfileEdit = async (req, res) => {
  try {
    const userId = req.user.id;

    // Check profile exists
    const profile = await UserProfileModel.findOne({
      userId,
    });

    if (!profile) {
      return res.status(400).json({
        success: false,
        message: "Profile not completed",
      });
    }

    // Grant edit permission
    await userModel.findByIdAndUpdate(userId, {
      allowProfileEditUntil: new Date(Date.now() + 60 * 1000),
    });

    return res.status(200).json({
      success: true,
      message: "Edit access granted",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const canEditProfile = async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await userModel.findById(userId);
    const profile = await UserProfileModel.findOne({
      userId,
    });

    const allowEdit =
      user.allowProfileEditUntil && user.allowProfileEditUntil > new Date();

    return res.status(200).json({
      success: true,
      profileCompleted: !!profile,
      allowEdit,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
    });
  }
};
