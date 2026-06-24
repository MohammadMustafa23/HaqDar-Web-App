const ValidateFeedback = (req, res, next) => {
  try {
    const { category, subject, message, rating } = req.body;

    if (!category?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Feedback category is required",
      });
    }

    if (!subject?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Subject is required",
      });
    }

    if (!message?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    if (!rating) {
      return res.status(400).json({
        success: false,
        message: "Rating is required",
      });
    }

    if (rating < 1 || rating > 5) {
      return res.status(400).json({
        success: false,
        message: "Rating must be between 1 and 5",
      });
    }

    next();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Validation failed",
    });
  }
};

export default ValidateFeedback;