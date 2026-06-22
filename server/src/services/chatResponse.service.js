export const getResponseByIntent = (intent) => {
  switch (intent) {
    case "GREETING":
      return {
        type: "greeting",

        title: "👋 Welcome to HaqDar",

        answer:
          "I can help you discover schemes, check eligibility, understand documents and guide applications.",

        actions: [
          "Find Schemes",
          "Check Eligibility",
          "How To Use HaqDar",
        ],
      };

    case "WEBSITE_HELP":
      return {
        type: "help",

        title: "🚀 How To Use HaqDar",

        answer:
          "1. Complete your profile\n2. View recommended schemes\n3. Open scheme details\n4. Save schemes\n5. Ask AI for guidance",

        actions: [
          "Complete Profile",
          "View Schemes",
        ],
      };

    default:
      return {
        type: "general",

        title: "Need More Information",

        answer:
          "Please ask about government schemes, eligibility, documents or HaqDar.",
      };
  }
};