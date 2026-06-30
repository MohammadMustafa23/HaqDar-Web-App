import { body, validationResult } from "express-validator";

export const validateScheme = [
  body("no")
    .isInt({ min: 1 })
    .withMessage("Scheme number must be a positive integer"),

  body("name")
    .trim()
    .isLength({ min: 3, max: 200 })
    .withMessage("Scheme name must be between 3 and 200 characters"),

  body("schemeType")
    .isIn(["Central", "State", "District"])
    .withMessage("Scheme type must be Central, State or District"),

  body("category")
    .trim()
    .notEmpty()
    .withMessage("Category is required"),

  body("beneficiary")
    .trim()
    .notEmpty()
    .withMessage("Beneficiary is required"),

  body("eligibility.gender")
    .isIn(["Male", "Female", "All"])
    .withMessage("Invalid gender"),

  body("eligibility.caste")
    .isIn([
      "General",
      "OBC",
      "SC",
      "ST",
      "EWS",
      "Minority",
      "All",
    ])
    .withMessage("Invalid caste"),

  body("eligibility.age.min")
    .isInt({ min: 0 })
    .withMessage("Minimum age must be a positive number"),

  body("eligibility.age.max")
    .isInt({ min: 0 })
    .withMessage("Maximum age must be a positive number")
    .custom((value, { req }) => {
      if (value < req.body.eligibility.age.min) {
        throw new Error("Maximum age must be greater than minimum age");
      }
      return true;
    }),

  body("eligibility.income.max")
    .isNumeric()
    .withMessage("Maximum income must be a number"),

  body("benefit")
    .trim()
    .notEmpty()
    .withMessage("Benefit is required"),

  body("documents")
    .isArray({ min: 1 })
    .withMessage("At least one document is required"),

  body("documents.*")
    .trim()
    .notEmpty()
    .withMessage("Document name cannot be empty"),

  body("apply")
    .trim()
    .notEmpty()
    .withMessage("Application process is required"),

  body("status")
    .optional()
    .isIn(["Active", "Inactive"])
    .withMessage("Invalid status"),

  (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({
        success: false,
        message: "Validation failed",
        errors: errors.array().map((err) => ({
          field: err.path,
          message: err.msg,
        })),
      });
    }

    next();
  },
];