import jwt from "jsonwebtoken";
import UserModel from "../../../models/user.model.js";

export const verifyAdminJWT = async (req, res, next) => {
  try {
    console.log("Cookies:", req.cookies);

    const accessToken = req.cookies.adminAccessToken;
    console.log("Access Token:", accessToken);

    if (!accessToken) {
      return res.status(401).json({
        success: false,
        message: "Please login first.",
      });
    }

    const decoded = jwt.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);
    console.log("Decoded:", decoded);

    const admin = await UserModel.findById(decoded.userId);

    if (!admin) {
      return res.status(401).json({
        success: false,
        message: "Authentication failed.",
      });
    }

    req.user = admin;
    next();
  } catch (error) {
    console.log(error);
    return res.status(401).json({
      success: false,
      message: "Invalid or expired access token.",
    });
  }
};

export const VerifyAdmin = async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    if (req.user.role !== "admin") {
      return res.status(401).json({
        success: false,
        message: "Authentication failed.",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Admin verified successfully.",
      admin: {
        id: req.user._id,
        name: req.user.userName,
        email: req.user.email,
        role: req.user.role,
      },
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
