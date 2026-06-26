import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";
import {redisClient} from "../config/redis.js";

export const verifyJWT = async (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const Id = decoded.id || decoded.userId;

    const cacheKey = `user:${Id}`;

    // Check Redis first
    const cachedUser = await redisClient.get(cacheKey);

    let user;

    if (cachedUser) {
      console.log("✅ User from Redis");
      user = JSON.parse(cachedUser);
    } else {
      console.log("📦 User from MongoDB");
      user = await userModel.findById(Id);
      if (!user) {
        return res.status(401).json({
          success: false,
          message: "User not found",
        });
      }

      // Cache user for 10 min
      await redisClient.setEx(cacheKey, 60 * 10, JSON.stringify(user));
    }

    req.user = {
      id: user._id,
      email: user.email,
      userName: user.userName,
    };

    next();
  } catch (error) {
    console.log(error);

    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};
export const validateProfile = (req, res, next) => {
  try {
    const {
      age,
      category,
      district,
      education,
      gender,
      income,
      occupation,
      pwd,
    } = req.body;

    // Required fields check
    if (
      !age ||
      !category ||
      !district ||
      !education ||
      !gender ||
      !income ||
      !occupation ||
      pwd === undefined
    ) {
      return res.status(400).json({
        success: false,
        message: "All profile fields are required",
      });
    }

    // Allowed values
    const validCategories = ["General", "OBC", "SC", "ST", "EWS", "Minority"];

    const validGenders = ["male", "female", "other"];

    const validPwd = ["Yes", "No"];

    const validOccupations = [
      "Student",
      "Farmer",
      "Self-Employed",
      "Worker",
      "Business",
      "Unemployed",
    ];

    // Category Validation
    if (!validCategories.includes(category)) {
      return res.status(400).json({
        success: false,
        message: "Invalid category",
      });
    }

    // Gender Validation
    if (!validGenders.includes(gender.toLowerCase())) {
      return res.status(400).json({
        success: false,
        message: "Invalid gender",
      });
    }

    // PWD Validation
    if (!validPwd.includes(pwd)) {
      return res.status(400).json({
        success: false,
        message: "Invalid PWD value",
      });
    }

    // Occupation Validation
    if (!validOccupations.includes(occupation)) {
      return res.status(400).json({
        success: false,
        message: "Invalid occupation",
      });
    }

    // Cleaned Profile
    req.profile = {
      age: age.trim(),
      category: category.trim(),
      district: district.trim(),
      education: education.trim(),
      gender: gender.trim().toLowerCase(),
      income: income.trim(),
      occupation: occupation.trim(),
      pwd: pwd.trim(),
    };
    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Profile validation failed",
    });
  }
};
