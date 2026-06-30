import { body, validationResult } from "express-validator";

export const validateScheme = [
  body("no")
    .notEmpty()
    .withMessage("Scheme number is required")
    .isInt({ min: 1 })
    .withMessage("Scheme number must be a positive integer"),

  body("name")
    .trim()
    .notEmpty()
    .withMessage("Scheme name is required")
    .isLength({ min: 3, max: 200 })
    .withMessage("Scheme name must be between 3 and 200 characters"),

  body("schemeType")
    .notEmpty()
    .withMessage("Scheme type is required")
    .isIn(["Central", "State"])
    .withMessage("Scheme type must be Central or State"),

  body("category").trim().notEmpty().withMessage("Category is required"),

  body("beneficiary").trim().notEmpty().withMessage("Beneficiary is required"),

  body("eligibility.gender").notEmpty().withMessage("Gender is required"),

  body("eligibility.caste").notEmpty().withMessage("Caste is required"),

  body("eligibility.age").notEmpty().withMessage("Age is required"),

  body("eligibility.income").notEmpty().withMessage("Income is required"),

  body("benefit").trim().notEmpty().withMessage("Benefit is required"),

  body("documents").trim().notEmpty().withMessage("Documents are required"),

  body("apply")
    .trim()
    .notEmpty()
    .withMessage("Application process is required"),

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
