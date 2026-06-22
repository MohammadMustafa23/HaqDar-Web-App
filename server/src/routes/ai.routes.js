import express from "express";
import { AiChat } from "../controllers/ai.controller.js";

const Airouter = express.Router();

Airouter.post("/ai-chat",AiChat);

export default Airouter;