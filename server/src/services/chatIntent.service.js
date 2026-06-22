const greetings = [
  "hi",
  "hello",
  "hey",
  "hii",
  "good morning",
  "good evening",
];

const websiteHelp = [
  "how to use",
  "help",
  "guide",
  "website",
  "how does this work",
];

export const detectIntent = (message) => {
  const text = message.toLowerCase().trim();
    if (greetings.some((word) =>text.includes(word))) {
      return "GREETING";
    }

    if(websiteHelp.some((word) =>text.includes(word))) {
      return "WEBSITE_HELP";
    } 

  return "GENERAL";
};