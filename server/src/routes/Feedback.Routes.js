import express from "express";
import { SubmitFeedback } from "../Controllers/Feedback.Controller.js";
import{ verifyJWT } from '../middlewares/user.schemes.js'
import ValidateFeedbackData from "../middlewares/ValidateFeedbackData.js";
const Feedback = express.Router();

Feedback.post("/submit",verifyJWT,ValidateFeedbackData,SubmitFeedback);

export default Feedback;