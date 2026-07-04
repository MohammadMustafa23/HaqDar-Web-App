import rateLimit from "express-rate-limit";

export const adminRateLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 Minutes
  max: 300, // Limit each IP to 300 requests per window
  standardHeaders: true,
  legacyHeaders: false,

  message: {
    success: false,
    message: "Too many requests. Please try again later.",
  },

  skipSuccessfulRequests: false,
  skipFailedRequests: false,
});
