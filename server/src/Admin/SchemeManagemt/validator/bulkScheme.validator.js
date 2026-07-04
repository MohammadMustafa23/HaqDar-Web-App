import validator from "validator";

const ALLOWED_SCHEME_TYPES = ["Central", "State", "District"];
const ALLOWED_GENDERS = ["Male", "Female", "All"];
const ALLOWED_CASTES = ["General", "OBC", "SC", "ST", "EWS", "Minority", "All"];
const ALLOWED_STATUS = ["Active", "Inactive"];

const MAX_SCHEMES_PER_UPLOAD = 5000;

/**
 * Small helper so every field-check follows the same shape:
 * pass a row, field name, condition, and message.
 */
function pushError(errors, row, field, message) {
  errors.push({ row, field, message });
}

/**
 * Validates a single scheme object against the Scheme mongoose schema.
 * Mutates `scheme` in-place to trim strings / apply defaults, same as before.
 */
function validateScheme(scheme, row, errors, seenNumbers, seenNames) {
  // ---------- no ----------
  if (scheme.no === undefined || scheme.no === null) {
    pushError(errors, row, "no", "Scheme number is required.");
  } else if (!Number.isInteger(scheme.no)) {
    pushError(errors, row, "no", "Scheme number must be an integer.");
  } else if (scheme.no <= 0) {
    pushError(errors, row, "no", "Scheme number must be greater than 0.");
  } else if (seenNumbers.has(scheme.no)) {
    pushError(
      errors,
      row,
      "no",
      "Duplicate scheme number found in uploaded file.",
    );
  } else {
    seenNumbers.add(scheme.no);
  }

  // ---------- name ----------
  if (!scheme.name || typeof scheme.name !== "string") {
    pushError(errors, row, "name", "Scheme name is required.");
  } else {
    scheme.name = scheme.name.trim();

    if (scheme.name.length < 5) {
      pushError(
        errors,
        row,
        "name",
        "Scheme name must contain at least 5 characters.",
      );
    }
    if (scheme.name.length > 200) {
      pushError(
        errors,
        row,
        "name",
        "Scheme name cannot exceed 200 characters.",
      );
    }

    const lowerName = scheme.name.toLowerCase();
    if (seenNames.has(lowerName)) {
      pushError(
        errors,
        row,
        "name",
        "Duplicate scheme name found in uploaded file.",
      );
    } else {
      seenNames.add(lowerName);
    }
  }

  // ---------- schemeType (required, enum) ----------
  if (!scheme.schemeType || typeof scheme.schemeType !== "string") {
    pushError(errors, row, "schemeType", "Scheme type is required.");
  } else {
    scheme.schemeType = scheme.schemeType.trim();
    if (!ALLOWED_SCHEME_TYPES.includes(scheme.schemeType)) {
      pushError(
        errors,
        row,
        "schemeType",
        `Scheme type must be one of: ${ALLOWED_SCHEME_TYPES.join(", ")}`,
      );
    }
  }

  // ---------- category (optional in schema, default "") ----------
  if (scheme.category === undefined || scheme.category === null) {
    scheme.category = "";
  } else if (typeof scheme.category !== "string") {
    pushError(errors, row, "category", "Category must be a string.");
  } else {
    scheme.category = scheme.category.trim();
    if (scheme.category.length > 100) {
      pushError(
        errors,
        row,
        "category",
        "Category cannot exceed 100 characters.",
      );
    }
  }

  // ---------- beneficiary (optional in schema, default "") ----------
  if (scheme.beneficiary === undefined || scheme.beneficiary === null) {
    scheme.beneficiary = "";
  } else if (typeof scheme.beneficiary !== "string") {
    pushError(errors, row, "beneficiary", "Beneficiary must be a string.");
  } else {
    scheme.beneficiary = scheme.beneficiary.trim();
    if (scheme.beneficiary.length > 200) {
      pushError(
        errors,
        row,
        "beneficiary",
        "Beneficiary cannot exceed 200 characters.",
      );
    }
  }

  // ---------- eligibility ----------
  if (
    !scheme.eligibility ||
    typeof scheme.eligibility !== "object" ||
    Array.isArray(scheme.eligibility)
  ) {
    pushError(errors, row, "eligibility", "Eligibility object is required.");
  } else {
    const elig = scheme.eligibility;

    // gender (optional, default "All")
    if (elig.gender === undefined || elig.gender === null) {
      elig.gender = "All";
    } else if (!ALLOWED_GENDERS.includes(elig.gender)) {
      pushError(
        errors,
        row,
        "eligibility.gender",
        `Gender must be one of: ${ALLOWED_GENDERS.join(", ")}`,
      );
    }

    // caste (optional, default "All")
    if (elig.caste === undefined || elig.caste === null) {
      elig.caste = "All";
    } else if (!ALLOWED_CASTES.includes(elig.caste)) {
      pushError(
        errors,
        row,
        "eligibility.caste",
        `Caste must be one of: ${ALLOWED_CASTES.join(", ")}`,
      );
    }

    // age (optional object, defaults min:0 max:150)
    if (elig.age === undefined || elig.age === null) {
      elig.age = { min: 0, max: 150 };
    } else if (typeof elig.age !== "object" || Array.isArray(elig.age)) {
      pushError(errors, row, "eligibility.age", "Age must be an object.");
    } else {
      if (elig.age.min === undefined || elig.age.min === null) {
        elig.age.min = 0;
      } else if (typeof elig.age.min !== "number") {
        pushError(
          errors,
          row,
          "eligibility.age.min",
          "Minimum age must be a number.",
        );
      }

      if (elig.age.max === undefined || elig.age.max === null) {
        elig.age.max = 150;
      } else if (typeof elig.age.max !== "number") {
        pushError(
          errors,
          row,
          "eligibility.age.max",
          "Maximum age must be a number.",
        );
      }

      if (
        typeof elig.age.min === "number" &&
        typeof elig.age.max === "number"
      ) {
        if (elig.age.min < 0) {
          pushError(
            errors,
            row,
            "eligibility.age.min",
            "Minimum age cannot be negative.",
          );
        }
        if (elig.age.max > 150) {
          pushError(
            errors,
            row,
            "eligibility.age.max",
            "Maximum age cannot exceed 150.",
          );
        }
        if (elig.age.min > elig.age.max) {
          pushError(
            errors,
            row,
            "eligibility.age",
            "Minimum age cannot be greater than maximum age.",
          );
        }
      }
    }

    // income (REQUIRED number, per schema -> `income: { type: Number, required: true }`)
    if (elig.income === undefined || elig.income === null) {
      pushError(errors, row, "eligibility.income", "Income is required.");
    } else if (typeof elig.income !== "number" || Number.isNaN(elig.income)) {
      pushError(errors, row, "eligibility.income", "Income must be a number.");
    } else if (elig.income < 0) {
      pushError(
        errors,
        row,
        "eligibility.income",
        "Income cannot be negative.",
      );
    }
  }

  // ---------- benefit (required string) ----------
  if (!scheme.benefit || typeof scheme.benefit !== "string") {
    pushError(errors, row, "benefit", "Benefit is required.");
  } else {
    scheme.benefit = scheme.benefit.trim();
    if (scheme.benefit.length < 10) {
      pushError(
        errors,
        row,
        "benefit",
        "Benefit must contain at least 10 characters.",
      );
    }
    if (scheme.benefit.length > 5000) {
      pushError(
        errors,
        row,
        "benefit",
        "Benefit cannot exceed 5000 characters.",
      );
    }
  }

  // ---------- documents (optional array, default []) ----------
  if (scheme.documents === undefined || scheme.documents === null) {
    scheme.documents = [];
  } else if (!Array.isArray(scheme.documents)) {
    pushError(errors, row, "documents", "Documents must be an array.");
  } else {
    const seenDocs = new Set();

    scheme.documents.forEach((doc, i) => {
      if (typeof doc !== "string") {
        pushError(errors, row, `documents[${i}]`, "Document must be a string.");
        return;
      }

      const docName = doc.trim();

      if (docName.length < 2) {
        pushError(errors, row, `documents[${i}]`, "Invalid document name.");
      }

      const lowerDoc = docName.toLowerCase();
      if (seenDocs.has(lowerDoc)) {
        pushError(errors, row, `documents[${i}]`, "Duplicate document found.");
      } else {
        seenDocs.add(lowerDoc);
      }

      scheme.documents[i] = docName;
    });
  }

  // ---------- apply (optional URL string, default "") ----------
  if (
    scheme.apply === undefined ||
    scheme.apply === null ||
    scheme.apply === ""
  ) {
    scheme.apply = "";
  } else if (typeof scheme.apply !== "string") {
    pushError(errors, row, "apply", "Application URL must be a string.");
  } else {
    scheme.apply = scheme.apply.trim();
    if (
      scheme.apply &&
      !validator.isURL(scheme.apply, { require_protocol: true })
    ) {
      pushError(errors, row, "apply", "Invalid application URL.");
    }
  }

  // ---------- status (optional enum, default "Active") ----------
  if (scheme.status === undefined || scheme.status === null) {
    scheme.status = "Active";
  } else if (!ALLOWED_STATUS.includes(scheme.status)) {
    pushError(
      errors,
      row,
      "status",
      `Status must be one of: ${ALLOWED_STATUS.join(", ")}`,
    );
  }
}

/**
 * Validates the full uploaded JSON file (array of schemes).
 */
export const validateBulkSchemes = (schemes) => {
  // ---------- root checks ----------
  if (!Array.isArray(schemes)) {
    return {
      valid: false,
      errors: [
        { row: 0, field: "root", message: "JSON root must be an array." },
      ],
    };
  }

  if (schemes.length === 0) {
    return {
      valid: false,
      errors: [{ row: 0, field: "root", message: "JSON file is empty." }],
    };
  }

  if (schemes.length > MAX_SCHEMES_PER_UPLOAD) {
    return {
      valid: false,
      errors: [
        {
          row: 0,
          field: "root",
          message: `Maximum ${MAX_SCHEMES_PER_UPLOAD} schemes are allowed in one upload.`,
        },
      ],
    };
  }

  const errors = [];
  const seenNumbers = new Set();
  const seenNames = new Set();

  schemes.forEach((scheme, index) => {
    const row = index + 1;

    if (!scheme || typeof scheme !== "object" || Array.isArray(scheme)) {
      pushError(errors, row, "root", "Each scheme entry must be an object.");
      return;
    }

    validateScheme(scheme, row, errors, seenNumbers, seenNames);
    console.log(errors);
    
  });

  return {
    valid: errors.length === 0,
    errors,
    schemes,
  };
};
