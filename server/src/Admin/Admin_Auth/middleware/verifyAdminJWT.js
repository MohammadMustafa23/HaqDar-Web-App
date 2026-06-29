import jwt from "jsonwebtoken";
import UserModel from "../../../models/user.model.js";

export const verifyAdminJWT = async (req, res, next) => {
  try {
    const token = req.cookies.adminToken; // your login cookie name
    
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Please login first.",
      });
    }

    const decoded = jwt.verify(token,process.env.JWT_SECRET);

    
    const user = await UserModel.findById(decoded.userId);
    
    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found.",
      });
    }

    if (user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Access denied. Admin only.",
      });
    }

    req.user = user;

    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token.",
    });
  }
};

export const VerifyAdmin = async (req, res, next) => {
  try {
    console.log(req.user);
    
    if (!req.user) {
      return res.status(401).json({
        success: false,
        message: "Unauthorized",
      });
    }

    if (req.user.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Access Denied. Admin Only.",
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
