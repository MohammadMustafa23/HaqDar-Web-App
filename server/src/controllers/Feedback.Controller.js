import FeedbackModel from "../models/FeedbackModel.js";

export const SubmitFeedback = async (req, res) => {
  try {
    const { category, subject, message, rating } = req.body;

    const feedback = await FeedbackModel.create({
      userId: req.user.id,
      category,
      subject,
      message,
      rating,

      // Admin fields
      status: "Unread",
      readAt: null,
      resolvedAt: null,
      adminReply: "",
    });

    return res.status(201).json({
      success: true,
      message: "Feedback submitted successfully",
      feedback,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getFeaturedFeedbacks = async (req, res) => {
  try {
    const feedbacks = await FeedbackModel.find({
      isFeatured: true,
    })
      .populate("userId", "userName")
      .sort({ updatedAt: -1 });

    return res.status(200).json({
      success: true,
      count: feedbacks.length,
      feedbacks,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch featured feedbacks.",
    });
  }
};
