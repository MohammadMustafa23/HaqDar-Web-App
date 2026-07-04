import mongoose from "mongoose";
const FeedbackSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },

    category: {
      type: String,
      required: true,
      trim: true,
    },

    subject: {
      type: String,
      required: true,
      trim: true,
    },

    message: {
      type: String,
      required: true,
      trim: true,
    },

    rating: {
      type: Number,
      min: 1,
      max: 5,
      required: true,
    },

    // Admin Status
    status: {
      type: String,
      enum: ["Unread", "Read", "Resolved"],
      default: "Unread",
    },

    // ⭐ Featured on Home Page
    isFeatured: {
      type: Boolean,
      default: false,
    },

    // When admin opens feedback
    readAt: {
      type: Date,
      default: null,
    },

    // When issue is resolved
    resolvedAt: {
      type: Date,
      default: null,
    },

    // Optional admin response
    adminReply: {
      type: String,
      trim: true,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

const FeedbackModel = mongoose.model("Feedback", FeedbackSchema);

export default FeedbackModel;