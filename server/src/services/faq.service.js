import { FAQs } from "../data/faqs.js";

export const findFAQ = (message) => {
  if (!message || typeof message !== "string") return null;

  const text = message.toLowerCase().trim();
  if (!text) return null;

  let bestMatch = null;
  let bestScore = 0;

  for (const item of FAQs) {
    const matchCount = item.keywords.filter((keyword) =>
      text.includes(keyword.toLowerCase()),
    ).length;

    if (matchCount > bestScore) {
      bestScore = matchCount;
      bestMatch = item;
    }
  }

  return bestMatch?.response || null;
};
