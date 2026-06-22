const STORAGE_KEY = "haqdar_saved_schemes";

// Get all saved schemes
export const getSavedSchemes = () => {
  return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
};

// Save complete scheme object
export const saveScheme = (scheme) => {
  const saved = getSavedSchemes();

  const exists = saved.some(
    (item) => item.id === scheme.id
  );

  if (!exists) {
    const updated = [...saved, scheme];

    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(updated)
    );
  }
};

// Remove scheme by id
export const removeScheme = (schemeId) => {
  const saved = getSavedSchemes();

  const updated = saved.filter(
    (item) => item.id !== schemeId
  );

  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updated)
  );
};

// Check if scheme is saved
export const isSaved = (schemeId) => {
  const saved = getSavedSchemes();

  return saved.some(
    (item) => item.id === schemeId
  );
};

