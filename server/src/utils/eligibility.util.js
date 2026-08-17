export function filterEligibleSchemes(profile, matches) {
  return matches.filter((match) => {
    const metadata = match.metadata || {};

    // =========================
    // Age
    // =========================
    if (
      metadata.minAge !== undefined &&
      profile.age < Number(metadata.minAge)
    ) {
      return false;
    }

    if (
      metadata.maxAge !== undefined &&
      profile.age > Number(metadata.maxAge)
    ) {
      return false;
    }

    // =========================
    // Income
    // =========================
    if (
      metadata.income !== undefined &&
      profile.income > Number(metadata.income)
    ) {
      return false;
    }

    // =========================
    // Gender
    // =========================
    if (
      metadata.gender &&
      metadata.gender.toLowerCase() !== "all" &&
      metadata.gender.toLowerCase() !== profile.gender.toLowerCase()
    ) {
      return false;
    }

    // =========================
    // Category / Caste
    // =========================
    if (
      metadata.caste &&
      metadata.caste.toLowerCase() !== "all" &&
      metadata.caste.toLowerCase() !== profile.category.toLowerCase()
    ) {
      return false;
    }

    // =========================
    // PWD
    // =========================
    if (
      metadata.pwd &&
      metadata.pwd.toLowerCase() !== "all" &&
      metadata.pwd.toLowerCase() !== profile.pwd.toLowerCase()
    ) {
      return false;
    }

    // =========================
    // District
    // =========================
    if (
      metadata.district &&
      metadata.district.toLowerCase() !== "all" &&
      metadata.district.toLowerCase() !== profile.district.toLowerCase()
    ) {
      return false;
    }

    return true;
  });
}
