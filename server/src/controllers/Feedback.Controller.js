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
    });

    return res.status(201).json({
      success: true,
      message: "Feedback submitted successfully",
      feedback,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};