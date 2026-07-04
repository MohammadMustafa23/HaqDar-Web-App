import express from "express";
import { SubmitFeedback,getFeaturedFeedbacks } from "../Controllers/Feedback.Controller.js";
import{ verifyJWT } from '../middlewares/user.schemes.js'
import ValidateFeedbackData from "../middlewares/ValidateFeedbackData.js";
import {submitLimiter} from '../Admin/AdminFeedBack/middleware/feedbackLimiter.js'
const Feedback = express.Router();

Feedback.post("/submit",submitLimiter,verifyJWT,ValidateFeedbackData,SubmitFeedback);
Feedback.get('/get-feedbacks',verifyJWT,getFeaturedFeedbacks);

export default Feedback;