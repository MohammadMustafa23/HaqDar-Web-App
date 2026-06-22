import { FAQs } from "../data/faqs.js";

export const findFAQ = (message) => {
  const text = message.toLowerCase();

  const faq = FAQs.find((item) =>
    item.keywords.some((keyword) =>
      text.includes(keyword)
    )
  );

  return faq?.response || null;
};