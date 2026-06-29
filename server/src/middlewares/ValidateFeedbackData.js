const ValidateFeedback = (req, res, next) => {
  try {
    const { category, subject, message, rating } = req.body;

    if (!category || !category.trim()) {
      return res.status(400).json({
        success: false,
        message: "Feedback category is required",
      });
    }

    if (!subject || !subject.trim()) {
      return res.status(400).json({
        success: false,
        message: "Subject is required",
      });
    }

    if (!message || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    if (rating === undefined || rating === null) {
      return res.status(400).json({
        success: false,
        message: "Rating is required",
      });
    }

    if (typeof rating !== "number") {
      return res.status(400).json({
        success: false,
        message: "Rating must be a number",
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
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Validation failed",
    });
  }
};

export default ValidateFeedback;
