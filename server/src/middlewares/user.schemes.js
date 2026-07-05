import jwt from "jsonwebtoken";
import userModel from "../models/user.model.js";
import { redisClient } from "../config/redis.js";

export const verifyJWT = async (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Authentication required",
      });
    }

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
    const Id = decoded.id || decoded.userId;

    const cacheKey = `user:${Id}`;

    let user = null;

    // ---------- Try Redis ----------
    try {
      const cachedUser = await redisClient.get(cacheKey);

      if (cachedUser) {
        user = JSON.parse(cachedUser);
      }
    } catch (err) {
      console.error("Redis GET Error:", err.message);
    }

    // ---------- Fallback to Mongo ----------
    if (!user) {
      user = await userModel.findById(Id);
      if (!user) {
        return res.status(401).json({
          success: false,
          message: "User not found",
        });
      }

      // Cache again (don't fail if Redis is down)
      try {
        await redisClient.setEx(cacheKey, 60 * 10, JSON.stringify(user));
      } catch (err) {
        console.error("Redis SET Error:", err.message);
      }
    }

    req.user = {
      id: user._id,
      email: user.email,
      userName: user.userName,
      role: user.role,
    };

    next();
  } catch (error) {
    console.error("JWT Error:", error.message);

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
      gender,
      education,
      category,
      income,
      district,
      occupation,
      pwd,
    } = req.body;

    /* ============================================================
       Allowed Fields
    ============================================================ */

    const allowedFields = [
      "age",
      "gender",
      "education",
      "category",
      "income",
      "district",
      "occupation",
      "pwd",
    ];

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

    const validEducation = [
      "No Schooling",
      "Below 10th",
      "10th Pass",
      "12th Pass",
      "Diploma",
      "ITI",
      "Graduate",
      "Post Graduate",
      "Doctorate",
    ];

    const validDistricts = [
      "Ajmer",
      "Alwar",
      "Anupgarh",
      "Balotra",
      "Banswara",
      "Baran",
      "Barmer",
      "Beawar",
      "Bharatpur",
      "Bhilwara",
      "Bikaner",
      "Bundi",
      "Chittorgarh",
      "Churu",
      "Dausa",
      "Deeg",
      "Dholpur",
      "Didwana-Kuchaman",
      "Dudu",
      "Dungarpur",
      "Gangapur City",
      "Hanumangarh",
      "Jaipur",
      "Jaipur Rural",
      "Jaisalmer",
      "Jalore",
      "Jhalawar",
      "Jhunjhunu",
      "Jodhpur",
      "Jodhpur Rural",
      "Karauli",
      "Kekri",
      "Khairthal-Tijara",
      "Kota",
      "Kotputli-Behror",
      "Nagaur",
      "Neem Ka Thana",
      "Pali",
      "Phalodi",
      "Pratapgarh",
      "Rajsamand",
      "Salumbar",
      "Sanchore",
      "Sawai Madhopur",
      "Shahpura",
      "Sikar",
      "Sirohi",
      "Sri Ganganagar",
      "Tonk",
      "Udaipur",
    ];

    /* ============================================================
       Reject Extra Fields
    ============================================================ */

    const extraFields = Object.keys(req.body).filter(
      (field) => !allowedFields.includes(field),
    );

    if (extraFields.length > 0) {
      return res.status(400).json({
        success: false,
        message: "Unexpected fields received",
      });
    }

    /* ============================================================
       Required Fields
    ============================================================ */

    for (const field of allowedFields) {
      if (
        req.body[field] === undefined ||
        req.body[field] === null ||
        String(req.body[field]).trim() === ""
      ) {
        return res.status(400).json({
          success: false,
          message: `${field} is required`,
        });
      }
    }

    /* ============================================================
       Trim Values
    ============================================================ */

    const cleanAge = age.toString().trim();
    const cleanGender = gender.trim().toLowerCase();
    const cleanEducation = education.trim();
    const cleanCategory = category.trim();
    const cleanIncome = income.toString().trim();
    const cleanDistrict = district.trim();
    const cleanOccupation = occupation.trim();
    const cleanPwd = pwd.trim();

    /* ============================================================
       Number Validation
    ============================================================ */

    const ageNum = Number(cleanAge);

    if (!Number.isInteger(ageNum) || ageNum < 0 || ageNum > 120) {
      return res.status(400).json({
        success: false,
        message: "Invalid age",
      });
    }

    const incomeNum = Number(cleanIncome);

    if (!Number.isFinite(incomeNum) || incomeNum < 0 || incomeNum > 100000000) {
      return res.status(400).json({
        success: false,
        message: "Invalid income",
      });
    }

    /* ============================================================
       Enum Validation
    ============================================================ */

    if (!validCategories.includes(cleanCategory)) {
      return res.status(400).json({
        success: false,
        message: "Invalid category",
      });
    }

    if (!validGenders.includes(cleanGender)) {
      return res.status(400).json({
        success: false,
        message: "Invalid gender",
      });
    }

    if (!validPwd.includes(cleanPwd)) {
      return res.status(400).json({
        success: false,
        message: "Invalid PWD value",
      });
    }

    if (!validOccupations.includes(cleanOccupation)) {
      return res.status(400).json({
        success: false,
        message: "Invalid occupation",
      });
    }

    if (!validEducation.includes(cleanEducation)) {
      return res.status(400).json({
        success: false,
        message: "Invalid education",
      });
    }

    if (!validDistricts.includes(cleanDistrict)) {
      return res.status(400).json({
        success: false,
        message: "Invalid district",
      });
    }

    /* ============================================================
       Length Validation
    ============================================================ */

    if (cleanEducation.length > 50) {
      return res.status(400).json({
        success: false,
        message: "Education is too long",
      });
    }

    if (cleanDistrict.length > 40) {
      return res.status(400).json({
        success: false,
        message: "District is too long",
      });
    }

    if (cleanOccupation.length > 30) {
      return res.status(400).json({
        success: false,
        message: "Occupation is too long",
      });
    }

    /* ============================================================
       Sanitized Profile
    ============================================================ */

    req.profile = {
      age: ageNum,
      gender: cleanGender,
      education: cleanEducation,
      category: cleanCategory,
      income: incomeNum,
      district: cleanDistrict,
      occupation: cleanOccupation,
      pwd: cleanPwd,
    };

    next();
  } catch (error) {
    console.error("Profile Validation Error:", error);

    return res.status(500).json({
      success: false,
      message: "Profile validation failed",
    });
  }
};
