import mongoose from "mongoose";

const UserProfileSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
      unique: true,
    },

    age: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    district: {
      type: String,
      required: true,
    },

    education: {
      type: String,
      required: true,
    },

    gender: {
      type: String,
      required: true,
    },

    income: {
      type: String,
      required: true,
    },

    occupation: {
      type: String,
      required: true,
    },

    pwd: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const UserProfileModel = mongoose.model("UserProfiles",UserProfileSchema);

export default UserProfileModel;