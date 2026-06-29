import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import UserModel from "../../models/user.model.js";

export async function AdminLogin(req, res) {
  try {
    const { email, password } = req.body;

    // Check Email
    const admin = await UserModel.findOne({ email });

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "Admin not found",
      });
    }

    // Check Role
    if (admin.role !== "admin") {
      return res.status(403).json({
        success: false,
        message: "Access Denied. Only admins can login.",
      });
    }

    // Check Password
    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid Password",
      });
    }

    // Generate Token
    const token = jwt.sign(
      {
        userId: admin._id,
        role: admin.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );

    res.cookie("adminToken", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
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
      message: "Internal Server Error",
    });
  }
}

export const Logout = async (req, res) => {
  try {
    if (req.user) {
      await redisClient.del(`user:${req.user._id}`);
    }

    res.clearCookie("adminToken", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });

    res.status(200).json({
      success: true,
      message: "Logout Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const VerifyAdmin = async (req, res) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Admin Verified",
      user: req.user,
    });
  } catch (error) {
    console.error("Verify Admin Error:", error);
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
