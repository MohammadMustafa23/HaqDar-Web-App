import express from "express";
import UserRoute from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import GenerateRoute from "./routes/recommendations.route.js";
import matchedSchemeRoutes from "./routes/matchedScheme.route.js";

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use("/api/auth", UserRoute);
app.use("/api/schemes", GenerateRoute);
app.use("/api/schemes", matchedSchemeRoutes);

export default app;
