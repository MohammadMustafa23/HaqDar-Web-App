import express from "express";
import { verifyAdminJWT } from "../Admin_Auth/middleware/verifyAdminJWT.js";
import { getAllFeedbacks,getFeedbackById,resolveFeedback,deleteFeedback,toggleFeaturedFeedback } from "./feedback.controller.js";

const FeedBackManagmet = express.Router();

FeedBackManagmet.get("/feedback", verifyAdminJWT, getAllFeedbacks);
FeedBackManagmet.get("/feedback/:id", verifyAdminJWT, getFeedbackById);
FeedBackManagmet.patch("/feedback/:id", verifyAdminJWT, resolveFeedback);
FeedBackManagmet.delete("/feedback/:id", verifyAdminJWT, deleteFeedback);
FeedBackManagmet.patch("/feedback-feature/:id",verifyAdminJWT,toggleFeaturedFeedback);


export default FeedBackManagmet;