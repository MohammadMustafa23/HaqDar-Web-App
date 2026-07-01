export const validateScheme = (schemeData) => {
  const errors = {};

  // ==========================
  // Basic Details
  // ==========================

  if (!schemeData.name.trim()) {
    errors.name = "Scheme name is required.";
  }

  if (!schemeData.no) {
    errors.no = "Scheme number is required.";
  } else if (Number(schemeData.no) <= 0) {
    errors.no = "Scheme number must be greater than 0.";
  }

  if (!schemeData.category) {
    errors.category = "Please select a category.";
  }

  if (!schemeData.schemeType) {
    errors.schemeType = "Please select a scheme type.";
  }

  if (!schemeData.beneficiary.trim()) {
    errors.beneficiary = "Beneficiary is required.";
  }

  // ==========================
  // Eligibility
  // ==========================

  const minAge = Number(schemeData.eligibility.age.min);
  const maxAge = Number(schemeData.eligibility.age.max);

  if (
    schemeData.eligibility.age.min !== "" &&
    minAge < 0
  ) {
    errors.minAge = "Minimum age cannot be negative.";
  }

  if (
    schemeData.eligibility.age.max !== "" &&
    maxAge < 0
  ) {
    errors.maxAge = "Maximum age cannot be negative.";
  }

  if (
    schemeData.eligibility.age.min !== "" &&
    schemeData.eligibility.age.max !== "" &&
    minAge > maxAge
  ) {
    errors.maxAge =
      "Maximum age should be greater than minimum age.";
  }

  if (
    schemeData.eligibility.income &&
    Number(schemeData.eligibility.income) < 0
  ) {
    errors.income = "Income cannot be negative.";
  }

  // ==========================
  // Application
  // ==========================

  if (!schemeData.benefit.trim()) {
    errors.benefit = "Benefit is required.";
  }

  if (!schemeData.apply.trim()) {
    errors.apply = "Application procedure is required.";
  }

  if (!schemeData.description?.trim()) {
    errors.description = "Description is required.";
  }

  if (schemeData.documents.length === 0) {
    errors.documents =
      "Add at least one required document.";
  }

  if (
    schemeData.website &&
    !/^https?:\/\/.+/i.test(schemeData.website)
  ) {
    errors.website = "Enter a valid website URL.";
  }

  if (
    schemeData.deadline &&
    new Date(schemeData.deadline) <
      new Date().setHours(0, 0, 0, 0)
  ) {
    errors.deadline =
      "Deadline cannot be in the past.";
  }

  return errors;
};