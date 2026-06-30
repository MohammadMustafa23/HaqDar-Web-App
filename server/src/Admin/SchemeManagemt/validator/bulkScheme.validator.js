import validator from "validator";
import Scheme from "../models/scheme.model.js";
const ALLOWED_SCHEME_TYPES = ["Central", "State", "District"];

const ALLOWED_GENDERS = ["Male", "Female", "All"];

const ALLOWED_CASTES = ["General", "OBC", "SC", "ST", "EWS", "Minority", "All"];

export const validateBulkSchemes = (schemes) => {
  const errors = [];

  // Root Validation

  if (!Array.isArray(schemes)) {
    return {
      valid: false,
      errors: [
        {
          row: 0,
          field: "root",
          message: "JSON root must be an array.",
        },
      ],
    };
  }

  if (schemes.length === 0) {
    return {
      valid: false,
      errors: [
        {
          row: 0,
          field: "root",
          message: "JSON file is empty.",
        },
      ],
    };
  }

  if (schemes.length > 5000) {
    return {
      valid: false,
      errors: [
        {
          row: 0,
          field: "root",
          message: "Maximum 5000 schemes are allowed in one upload.",
        },
      ],
    };
  }

  const uploadedNumbers = new Set();
  const uploadedNames = new Set();

  schemes.forEach((scheme, index) => {
    const row = index + 1;

    // ==========================
    // Scheme Number Validation
    // ==========================

    if (scheme.no === undefined || scheme.no === null) {
      errors.push({
        row,
        field: "no",
        message: "Scheme number is required.",
      });
    } else if (!Number.isInteger(scheme.no)) {
      errors.push({
        row,
        field: "no",
        message: "Scheme number must be an integer.",
      });
    } else if (scheme.no <= 0) {
      errors.push({
        row,
        field: "no",
        message: "Scheme number must be greater than 0.",
      });
    } else if (uploadedNumbers.has(scheme.no)) {
      errors.push({
        row,
        field: "no",
        message: "Duplicate scheme number found in uploaded file.",
      });
    } else {
      uploadedNumbers.add(scheme.no);
    }

    // ==========================
    // Scheme Name Validation
    // ==========================

    if (!scheme.name || typeof scheme.name !== "string") {
      errors.push({
        row,
        field: "name",
        message: "Scheme name is required.",
      });
    } else {
      scheme.name = scheme.name.trim();

      if (scheme.name.length < 5) {
        errors.push({
          row,
          field: "name",
          message: "Scheme name must contain at least 5 characters.",
        });
      }

      if (scheme.name.length > 200) {
        errors.push({
          row,
          field: "name",
          message: "Scheme name cannot exceed 200 characters.",
        });
      }

      const lowerName = scheme.name.toLowerCase();

      if (uploadedNames.has(lowerName)) {
        errors.push({
          row,
          field: "name",
          message: "Duplicate scheme name found in uploaded file.",
        });
      } else {
        uploadedNames.add(lowerName);
      }
    }

    if (!scheme.schemeType || typeof scheme.schemeType !== "string") {
      errors.push({
        row,
        field: "schemeType",
        message: "Scheme type is required.",
      });
    } else {
      scheme.schemeType = scheme.schemeType.trim();

      if (!ALLOWED_SCHEME_TYPES.includes(scheme.schemeType)) {
        errors.push({
          row,
          field: "schemeType",
          message: `Scheme type must be one of: ${ALLOWED_SCHEME_TYPES.join(", ")}`,
        });
      }
    }

    // ==========================
    // Category
    // ==========================

    if (!scheme.category || typeof scheme.category !== "string") {
      errors.push({
        row,
        field: "category",
        message: "Category is required.",
      });
    } else {
      scheme.category = scheme.category.trim();

      if (scheme.category.length < 2) {
        errors.push({
          row,
          field: "category",
          message: "Category is invalid.",
        });
      }

      if (scheme.category.length > 100) {
        errors.push({
          row,
          field: "category",
          message: "Category cannot exceed 100 characters.",
        });
      }
    }

    // ==========================
    // Category
    // ==========================

    if (!scheme.category || typeof scheme.category !== "string") {
      errors.push({
        row,
        field: "category",
        message: "Category is required.",
      });
    } else {
      scheme.category = scheme.category.trim();

      if (scheme.category.length < 2) {
        errors.push({
          row,
          field: "category",
          message: "Category is invalid.",
        });
      }

      if (scheme.category.length > 100) {
        errors.push({
          row,
          field: "category",
          message: "Category cannot exceed 100 characters.",
        });
      }
    }
    // ==========================
    // Category
    // ==========================

    if (!scheme.category || typeof scheme.category !== "string") {
      errors.push({
        row,
        field: "category",
        message: "Category is required.",
      });
    } else {
      scheme.category = scheme.category.trim();

      if (scheme.category.length < 2) {
        errors.push({
          row,
          field: "category",
          message: "Category is invalid.",
        });
      }

      if (scheme.category.length > 100) {
        errors.push({
          row,
          field: "category",
          message: "Category cannot exceed 100 characters.",
        });
      }
    }

    // ==========================
    // Beneficiary
    // ==========================

    if (!scheme.beneficiary || typeof scheme.beneficiary !== "string") {
      errors.push({
        row,
        field: "beneficiary",
        message: "Beneficiary is required.",
      });
    } else {
      scheme.beneficiary = scheme.beneficiary.trim();

      if (scheme.beneficiary.length < 2) {
        errors.push({
          row,
          field: "beneficiary",
          message: "Beneficiary is invalid.",
        });
      }

      if (scheme.beneficiary.length > 200) {
        errors.push({
          row,
          field: "beneficiary",
          message: "Beneficiary cannot exceed 200 characters.",
        });
      }
    }

    // ==========================
    // Eligibility
    // ==========================

    if (
      !scheme.eligibility ||
      typeof scheme.eligibility !== "object" ||
      Array.isArray(scheme.eligibility)
    ) {
      errors.push({
        row,
        field: "eligibility",
        message: "Eligibility object is required.",
      });
    } else {
      const { gender, caste, age, income } = scheme.eligibility;

      // ==========================
      // Gender
      // ==========================

      if (!ALLOWED_GENDERS.includes(gender)) {
        errors.push({
          row,
          field: "eligibility.gender",
          message: `Gender must be one of: ${ALLOWED_GENDERS.join(", ")}`,
        });
      }

      // ==========================
      // Caste
      // ==========================

      if (!ALLOWED_CASTES.includes(caste)) {
        errors.push({
          row,
          field: "eligibility.caste",
          message: `Caste must be one of: ${ALLOWED_CASTES.join(", ")}`,
        });
      }

      // ==========================
      // Age
      // ==========================

      if (!age || typeof age !== "object") {
        errors.push({
          row,
          field: "eligibility.age",
          message: "Age object is required.",
        });
      } else {
        if (typeof age.min !== "number") {
          errors.push({
            row,
            field: "eligibility.age.min",
            message: "Minimum age must be a number.",
          });
        }

        if (typeof age.max !== "number") {
          errors.push({
            row,
            field: "eligibility.age.max",
            message: "Maximum age must be a number.",
          });
        }

        if (typeof age.min === "number" && typeof age.max === "number") {
          if (age.min < 0) {
            errors.push({
              row,
              field: "eligibility.age.min",
              message: "Minimum age cannot be negative.",
            });
          }

          if (age.max > 150) {
            errors.push({
              row,
              field: "eligibility.age.max",
              message: "Maximum age cannot exceed 150.",
            });
          }

          if (age.min > age.max) {
            errors.push({
              row,
              field: "eligibility.age",
              message: "Minimum age cannot be greater than maximum age.",
            });
          }
        }
      }

      // ==========================
      // Income
      // ==========================

      if (!income || typeof income !== "object") {
        errors.push({
          row,
          field: "eligibility.income",
          message: "Income object is required.",
        });
      } else {
        if (typeof income.max !== "number") {
          errors.push({
            row,
            field: "eligibility.income.max",
            message: "Income max must be a number.",
          });
        } else if (income.max < 0) {
          errors.push({
            row,
            field: "eligibility.income.max",
            message: "Income cannot be negative.",
          });
        }
      }
    }

    // ==========================
    // Benefit
    // ==========================

    if (!scheme.benefit || typeof scheme.benefit !== "string") {
      errors.push({
        row,
        field: "benefit",
        message: "Benefit is required.",
      });
    } else {
      scheme.benefit = scheme.benefit.trim();

      if (scheme.benefit.length < 10) {
        errors.push({
          row,
          field: "benefit",
          message: "Benefit must contain at least 10 characters.",
        });
      }

      if (scheme.benefit.length > 5000) {
        errors.push({
          row,
          field: "benefit",
          message: "Benefit cannot exceed 5000 characters.",
        });
      }
    }

    // ==========================
    // Documents
    // ==========================

    if (!Array.isArray(scheme.documents)) {
      errors.push({
        row,
        field: "documents",
        message: "Documents must be an array.",
      });
    } else {
      if (scheme.documents.length === 0) {
        errors.push({
          row,
          field: "documents",
          message: "At least one document is required.",
        });
      }

      const uniqueDocuments = new Set();

      scheme.documents.forEach((doc, index) => {
        if (typeof doc !== "string") {
          errors.push({
            row,
            field: `documents[${index}]`,
            message: "Document must be a string.",
          });

          return;
        }

        const documentName = doc.trim();

        if (documentName.length < 2) {
          errors.push({
            row,
            field: `documents[${index}]`,
            message: "Invalid document name.",
          });
        }

        if (uniqueDocuments.has(documentName.toLowerCase())) {
          errors.push({
            row,
            field: `documents[${index}]`,
            message: "Duplicate document found.",
          });
        } else {
          uniqueDocuments.add(documentName.toLowerCase());
        }
      });
    }

    // ==========================
    // Apply URL
    // ==========================

    if (!scheme.apply || typeof scheme.apply !== "string") {
      errors.push({
        row,
        field: "apply",
        message: "Application URL is required.",
      });
    } else {
      scheme.apply = scheme.apply.trim();

      if (
        !validator.isURL(scheme.apply, {
          require_protocol: true,
        })
      ) {
        errors.push({
          row,
          field: "apply",
          message: "Invalid application URL.",
        });
      }
    }

    // ==========================
    // Status
    // ==========================

    const allowedStatus = ["Active", "Inactive"];

    if (scheme.status === undefined || scheme.status === null) {
      scheme.status = "Active";
    } else {
      if (!allowedStatus.includes(scheme.status)) {
        errors.push({
          row,
          field: "status",
          message: "Status must be Active or Inactive.",
        });
      }
    }
  });

  return {
    valid: errors.length === 0,
    errors,
    schemes,
  };
};
