import { body, validationResult } from "express-validator";

export const validateScheme = [
  // ================= Basic Details =================

  body("no")
    .exists({ checkFalsy: true })
    .withMessage("Scheme number is required")
    .bail()
    .isInt({ min: 1 })
    .withMessage("Scheme number must be a positive integer")
    .toInt(),

  body("name")
    .exists({ checkFalsy: true })
    .withMessage("Scheme name is required")
    .bail()
    .trim()
    .isLength({ min: 3, max: 200 })
    .withMessage("Scheme name must be between 3 and 200 characters"),

  body("schemeType")
    .exists({ checkFalsy: true })
    .withMessage("Scheme type is required")
    .bail()
    .isIn(["Central", "State", "District"])
    .withMessage("Invalid scheme type"),

  body("category")
    .exists({ checkFalsy: true })
    .withMessage("Category is required")
    .bail()
    .trim(),

  body("beneficiary")
    .exists({ checkFalsy: true })
    .withMessage("Beneficiary is required")
    .bail()
    .trim(),

  // ================= Eligibility =================

  body("eligibility")
    .exists()
    .withMessage("Eligibility is required")
    .bail()
    .isObject()
    .withMessage("Eligibility must be an object"),

  body("eligibility.gender")
    .exists({ checkFalsy: true })
    .withMessage("Gender is required")
    .bail()
    .isIn(["Male", "Female", "All"])
    .withMessage("Invalid gender"),

  body("eligibility.caste")
    .exists({ checkFalsy: true })
    .withMessage("Caste is required")
    .bail()
    .isIn(["General", "OBC", "SC", "ST", "EWS", "Minority", "All"])
    .withMessage("Invalid caste"),

  body("eligibility.age")
    .exists()
    .withMessage("Age is required")
    .bail()
    .isObject()
    .withMessage("Age must be an object"),

  body("eligibility.age.min")
    .exists()
    .withMessage("Minimum age is required")
    .bail()
    .isInt({ min: 0 })
    .withMessage("Minimum age must be a positive integer")
    .toInt(),

  body("eligibility.age.max")
    .exists()
    .withMessage("Maximum age is required")
    .bail()
    .isInt({ min: 0 })
    .withMessage("Maximum age must be a positive integer")
    .toInt()
    .custom((max, { req }) => {
      if (max < Number(req.body.eligibility.age.min)) {
        throw new Error(
          "Maximum age must be greater than or equal to minimum age"
        );
      }
      return true;
    }),

  body("eligibility.income")
    .exists()
    .withMessage("Income is required")
    .bail()
    .isNumeric()
    .withMessage("Income must be a valid number")
    .toFloat(),

  // ================= Benefit =================

  body("benefit")
    .exists({ checkFalsy: true })
    .withMessage("Benefit is required")
    .bail()
    .trim(),

  // ================= Documents =================

  body("documents")
    .exists()
    .withMessage("Documents are required")
    .bail()
    .isArray({ min: 1 })
    .withMessage("At least one document is required"),

  body("documents.*")
    .trim()
    .notEmpty()
    .withMessage("Document name cannot be empty"),

  // ================= Apply =================

  body("apply")
    .exists({ checkFalsy: true })
    .withMessage("Application process is required")
    .bail()
    .trim(),

  // ================= Status =================

  body("status")
    .optional()
    .isIn(["Active", "Inactive"])
    .withMessage("Invalid status"),

    
  // ================= Validation Result =================
  
  (req, res, next) => {
    const errors = validationResult(req);
     console.log("Gone Next")
    if (errors.isEmpty()) {
      return next();
    }


    return res.status(400).json({
      success: false,
      message: "Validation failed.",
      errors: errors.array().map(({ path, msg, value }) => ({
        field: path,
        message: msg,
        value,
      })),
    });
  },
];