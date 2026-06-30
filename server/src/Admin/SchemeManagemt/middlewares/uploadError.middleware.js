import multer from "multer";

export const uploadErrorHandler = (err, req, res, next) => {
  if (!err) return next();

  // Multer Errors
  if (err instanceof multer.MulterError) {
    switch (err.code) {
      case "LIMIT_FILE_SIZE":
        return res.status(413).json({
          success: false,
          message: "File size exceeds the 10 MB limit.",
        });

      case "LIMIT_FILE_COUNT":
        return res.status(400).json({
          success: false,
          message: "Only one file can be uploaded.",
        });

      case "LIMIT_UNEXPECTED_FILE":
        return res.status(400).json({
          success: false,
          message: "Only JSON (.json) files are allowed.",
        });

      default:
        return res.status(400).json({
          success: false,
          message: err.message,
        });
    }
  }

  // Invalid JSON or other upload errors
  return res.status(500).json({
    success: false,
    message: err.message || "File upload failed.",
  });
};
