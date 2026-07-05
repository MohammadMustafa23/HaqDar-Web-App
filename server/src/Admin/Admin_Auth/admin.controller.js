import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../../models/user.model.js";
import {
  generateAccessToken,
  generateRefreshToken,
} from "../utils/adminToken.js";

export async function AdminLogin(req, res) {
  try {
    const { email, password } = req.body;

    // Check Email
    const admin = await UserModel.findOne({ email });

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Authentication failed.",
      });
    }

    // Check Role
    if (admin.role !== "admin") {
      return res.status(401).json({
        success: false,
        message: "Authentication failed.",
      });
    }

    // Check Password
    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Authentication failed.",
      });
    }

    // Generate Token
    const accessToken = generateAccessToken(admin);
    const refreshToken = generateRefreshToken(admin);

    // Save Refresh Token
    admin.refreshToken = refreshToken;
    await admin.save();
    
    res.cookie("adminAccessToken", accessToken, {
     httpOnly: true,
     secure: process.env.NODE_ENV === "production",
     sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
     maxAge: 15 * 60 * 1000,
   });
  
   res.cookie("adminRefreshToken", refreshToken, {
     httpOnly: true,
     secure: process.env.NODE_ENV === "production",
     sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
     maxAge: 7 * 24 * 60 * 60 * 1000,
   });

    return res.status(200).json({
      success: true,
      message: "Admin Login Successful",
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      "message": "Something went wrong. Please try again later."
    });
  }
}

export const Logout = async (req, res) => {
  try {
    console.log(req.user);

    req.user.refreshToken = null;
    await req.user.save();
    console.log("hey ...............");

    // Clear Access Token Cookie
    res.clearCookie("adminAccessToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    // Clear Refresh Token Cookie
    res.clearCookie("adminRefreshToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    return res.status(200).json({
      success: true,
      message: "Logout Successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
