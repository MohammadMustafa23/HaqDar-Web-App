import express from "express";
import UserRoute from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import GenerateRoute from "./routes/recommendations.route.js";
import matchedSchemeRoutes from "./routes/matchedScheme.route.js";
import Airouter from "./routes/ai.routes.js";
import GeneratePDF from "./routes/Scheme.Routes.js";
import FeedbackRoutes from "./routes/Feedback.Routes.js";
import adminRoutes from "./Admin/Admin_Auth/admin.route.js";
import feedbackRoutes from "./Admin/AdminFeedBack/feedback.route.js";
import schemeRoutes from './Admin/SchemeManagemt/routes/scheme.route.js'

const app = express();
app.set("trust proxy", 1);
app.use(cookieParser());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    status: "OK",
    message: "HaqDar API is healthy",
    uptime: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/auth", UserRoute);
app.use("/api/schemes", GenerateRoute);
app.use('/api/pdf',GeneratePDF)
app.use("/api/schemes", matchedSchemeRoutes);
app.use('/api/bot',Airouter)
app.use('/api/feedback',FeedbackRoutes)
app.use("/api/admin", adminRoutes);
app.use("/api/admin", feedbackRoutes);
app.use("/api/admin", schemeRoutes);

export default app;
