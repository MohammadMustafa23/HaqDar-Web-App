const INTENT_PATTERNS = {
  GREETING: ["hi", "hello", "hey", "hii", "good morning", "good evening"],
  WEBSITE_HELP: ["how to use", "help", "guide", "how does this work"],
  SCHEME_SEARCH: [
    "scheme for",
    "schemes for",
    "eligible for",
    "farmer",
    "student",
    "pension",
    "subsidy",
    "loan for",
    "yojana",
  ],
};
export const detectIntent = (message) => {
  if (!message || typeof message !== "string") return "GENERAL";

  const text = message.toLowerCase().trim();
  if (!text) return "GENERAL";

  for (const [intent, patterns] of Object.entries(INTENT_PATTERNS)) {
    if (patterns.some((word) => text.includes(word))) {
      return intent;
    }
  }

  return "GENERAL";
};
