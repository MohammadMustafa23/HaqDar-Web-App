import express from "express";
import { AiChat } from "../controllers/ai.controller.js";
import { aiLimiter } from "../middlewares/rateLimit.js";
const Airouter = express.Router();

Airouter.post("/ai-chat",aiLimiter,AiChat);

export default Airouter;