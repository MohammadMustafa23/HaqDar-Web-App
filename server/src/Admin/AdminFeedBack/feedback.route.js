import express from "express";
import { verifyAdminJWT } from "../Admin_Auth/middleware/verifyAdminJWT.js";
import { getAllFeedbacks,getFeedbackById,resolveFeedback,deleteFeedback,toggleFeaturedFeedback } from "./feedback.controller.js";
import {feedbackReadLimiter,feedbackWriteLimiter,feedbackDeleteLimiter} from './middleware/feedbackLimiter.js'
const FeedBackManagmet = express.Router();

FeedBackManagmet.get("/feedback",feedbackReadLimiter,verifyAdminJWT, getAllFeedbacks);
FeedBackManagmet.get("/feedback/:id",verifyAdminJWT, getFeedbackById);
FeedBackManagmet.patch("/feedback/:id",feedbackWriteLimiter,verifyAdminJWT, resolveFeedback);
FeedBackManagmet.delete("/feedback/:id",feedbackDeleteLimiter,verifyAdminJWT, deleteFeedback);
FeedBackManagmet.patch("/feedback-feature/:id",verifyAdminJWT,toggleFeaturedFeedback);


export default FeedBackManagmet;