import FeedbackModel from "../../models/FeedbackModel.js";

export const getAllFeedbacks = async (req, res) => {
  try {
    const feedbacks = await FeedbackModel.find()
      .populate("userId", "userName email")
      .sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: feedbacks.length,
      feedbacks,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch feedbacks.",
    });
  }
};

export const getFeedbackById = async (req, res) => {
  try {
    const { id } = req.params;

    const feedback = await FeedbackModel.findById(id).populate(
      "userId",
      "userName email"
    );

    if (!feedback) {
      return res.status(404).json({
        success: false,
        message: "Feedback not found.",
      });
    }

    // Mark as Read when admin opens it
    if (feedback.status === "Unread") {
      feedback.status = "Read";
      feedback.readAt = new Date();
      await feedback.save();
    }

    return res.status(200).json({
      success: true,
      feedback,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to fetch feedback.",
    });
  }
};



export const resolveFeedback = async (req, res) => {
  try {
    const { id } = req.params;

    const feedback = await FeedbackModel.findById(id);

    if (!feedback) {
      return res.status(404).json({
        success: false,
        message: "Feedback not found.",
      });
    }

    if (feedback.status === "Resolved") {
      return res.status(400).json({
        success: false,
        message: "Feedback is already resolved.",
      });
    }

    feedback.status = "Resolved";
    feedback.resolvedAt = new Date();

    await feedback.save();

    return res.status(200).json({
      success: true,
      message: "Feedback resolved successfully.",
      feedback,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to resolve feedback.",
    });
  }
};

export const deleteFeedback = async (req, res) => {
  try {
    const { id } = req.params;

    const feedback = await FeedbackModel.findById(id);

    if (!feedback) {
      return res.status(404).json({
        success: false,
        message: "Feedback not found.",
      });
    }

    await FeedbackModel.findByIdAndDelete(id);

    return res.status(200).json({
      success: true,
      message: "Feedback deleted successfully.",
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Failed to delete feedback.",
    });
  }
};
