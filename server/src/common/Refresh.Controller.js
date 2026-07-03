import jwt from "jsonwebtoken";
import UserModel from "../models/user.model.js";
import { generateAccessToken } from '../Admin//utils/adminToken.js'

export const refreshToken = async (req, res) => {
  try {
    const refreshToken = req.cookies.adminRefreshToken;
    
    if (!refreshToken) {
      return res.status(401).json({
        success: false,
        message: "Refresh token not found.",
      });
    }

    // Verify Refresh Token
    const decoded = jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET);

    // Find User
    const user = await UserModel.findById(decoded.userId);

    console.log(user);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    // Compare with DB
    if (user.refreshToken !== refreshToken) {
      return res.status(401).json({
        success: false,
        message: "Invalid refresh token.",
      });
    }



    // Generate New Access Token
    const accessToken = generateAccessToken(user);

  
    // Set Access Token
    res.cookie("adminAccessToken", accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 15 * 60 * 1000,
    });

    console.log("Token Done");
    

    return res.status(200).json({
      success: true,
      message: "Access token refreshed.",
    });
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Refresh token expired.",
    });
  }
};
