import multer from "multer";

const storage = multer.memoryStorage();

const upload = multer({
  storage,

  limits: {
    fileSize: 10 * 1024 * 1024, // 10 MB
    files: 1,
  },

  fileFilter: (req, file, cb) => {
    // Allow only JSON files
    if (
      file.mimetype === "application/json" ||
      file.originalname.toLowerCase().endsWith(".json")
    ) {
      return cb(null, true);
    }

    return cb(
      new multer.MulterError(
        "LIMIT_UNEXPECTED_FILE",
        "Only JSON (.json) files are allowed.",
      ),
    );
  },
});

export default upload;
