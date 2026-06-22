import { detectIntent } from "../services/chatIntent.service.js";
import { getResponseByIntent } from "../services/chatResponse.service.js";
import { findFAQ } from "../services/faq.service.js";
import { askChatbot } from "../services/chatbot.service.js";
export async function AiChat(req, res) {
  try {
    const { message } = req.body;

    // 1. Intent Check
    const intent = detectIntent(message);

    if (intent !== "GENERAL") {
      return res.status(200).json({
        success: true,
        response: getResponseByIntent(intent),
      });
    }

    // 2. FAQ Check
    const faqResponse = findFAQ(message);

    if (faqResponse) {
      return res.status(200).json({
        success: true,
        response: faqResponse,
      });
    }

    // 3. AI Fallback
    const answer = await askChatbot(message);

    return res.status(200).json({
      success: true,
      response: {
        type: "ai",
        title: "HaqDar AI",
        answer,
      },
    });

  } catch (error) {
    console.log(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
