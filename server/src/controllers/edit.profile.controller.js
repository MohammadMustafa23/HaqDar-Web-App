import userModel from "../models/user.model.js";
import UserProfileModel from "../models/userProfile.model.js";
import { redisClient } from "../config/redis.js";

export const requestProfileEdit = async (req, res) => {
  try {
    const userId = req.user.id;

    const profile = await UserProfileModel.findOne({ userId });

    if (!profile) {
      return res.status(400).json({
        success: false,
        message: "Profile not completed",
      });
    }

    const updatedUser = await userModel.findByIdAndUpdate(
      userId,
      {
        allowProfileEditUntil: new Date(Date.now() + 60 * 1000),
      },
      { new: true }
    );

    // Update User Cache
    await redisClient.setEx(
      `user:${userId}`,
      60 * 60,
      JSON.stringify(updatedUser)
    );

    // ✅ Delete old matched schemes cache
    await redisClient.del(`matchedSchemes:${userId}`);
    console.log("🗑️ Matched schemes cache removed");

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
    const cacheKey = `user:${userId}`;

    let user;

    const cachedUser = await redisClient.get(cacheKey);

    if (cachedUser) {
      console.log("✅ User from Redis");
      user = JSON.parse(cachedUser);
    } else {
      console.log("📦 User from MongoDB");

      user = await userModel.findById(userId);

      if (!user) {
        return res.status(404).json({
          success: false,
          message: "User not found",
        });
      }

      await redisClient.setEx(
        cacheKey,
        60 * 60,
        JSON.stringify(user)
      );
    }

    const profile = await UserProfileModel.findOne({ userId });

    const allowEdit =
      user.allowProfileEditUntil &&
      new Date(user.allowProfileEditUntil) > new Date();

    return res.status(200).json({
      success: true,
      profileCompleted: !!profile,
      allowEdit,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};