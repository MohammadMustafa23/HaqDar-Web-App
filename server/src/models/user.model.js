import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    userName: {
      type: String,
      required: [true, "Username is required"],
      trim: true,
      maxlength: 50,
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: 6,
    },
    allowProfileEditUntil: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

const userModel = mongoose.model("Users", UserSchema);

export default userModel;
