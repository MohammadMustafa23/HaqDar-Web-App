import { detectIntent } from "../services/chatIntent.service.js";
import { getResponseByIntent } from "../services/chatResponse.service.js";
import { findFAQ } from "../services/faq.service.js";
import { askChatbot, formatSchemeAnswer } from "../services/chatbot.service.js";
import { searchSchemeByMessage } from "../Admin/SchemeManagemt/controllers/scheme.controller.js";

const MAX_MESSAGE_LENGTH = 100;

export async function AiChat(req, res) {
  try {
    const { message } = req.body;

    if (!message?.trim()) {
      return res.status(400).json({
        success: false,
        message: "Message is required.",
      });
    }

    if (message.trim().length > MAX_MESSAGE_LENGTH) {
      return res.status(400).json({
        success: false,
        message: "Message is too long.",
      });
    }

    const text = message.trim();

    // 1. Intent Check
    const intent = detectIntent(text);

    if (intent === "GREETING" || intent === "WEBSITE_HELP") {
      return res.status(200).json({
        success: true,
        response: getResponseByIntent(intent),
      });
    }

    // 2. FAQ Check
    const faqResponse = findFAQ(text);

    if (faqResponse) {
      return res.status(200).json({
        success: true,
        response: faqResponse,
      });
    }

    // 3. Scheme Search Intent → fetch from Pinecone, then let AI format the answer
    if (intent === "SCHEME_SEARCH") {
      const schemes = await searchSchemeByMessage(text);

      if (schemes.length > 0) {
        const answer = await formatSchemeAnswer(text, schemes);

        return res.status(200).json({
          success: true,
          response: {
            type: "scheme_result",
            title: "Matching Schemes",
            answer, // natural language, formatted by AI
            schemes, // raw data too, in case frontend wants to render cards
          },
        });
      }
      // No confident match found → fall through to AI fallback below
    }

    // 4. AI Fallback (does its own Pinecone search internally)
    const answer = await askChatbot(text);

    return res.status(200).json({
      success: true,
      response: {
        type: "ai",
        title: "HaqDar AI",
        answer,
      },
    });
  } catch (error) {
    console.error("AiChat Error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong. Please try again.",
    });
  }
}
