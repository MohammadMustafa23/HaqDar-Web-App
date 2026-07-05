import path from "path";
import { fileURLToPath } from "url";
import { COLORS } from "./colors.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logoPath = path.join(__dirname, "../../assets/haqdar-logo.png");

export const drawHeader = (doc) => {
  // Blue Background
  doc.rect(0, 0, 595, 90).fill(COLORS.primary);

  // Logo
  doc.image(logoPath, 40, 18, {
    width: 50,
    height: 50,
  });

  // App Name
  doc
    .fillColor(COLORS.white)
    .fontSize(24)
    .font("Helvetica-Bold")
    .text("HaqDar", 105, 25);

  // Subtitle
  doc
    .fontSize(11)
    .font("Helvetica")
    .text("Government Scheme Information", 105, 55);

  // Generated Date
  const now = new Date();

  const generatedDate = now.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const generatedTime = now.toLocaleTimeString("en-IN", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  doc
    .fontSize(10)
    .fillColor(COLORS.white)
    .text(`Generated at\n${generatedDate}\n${generatedTime}`, 400, 22, {
      width: 160,
      align: "right",
    });
};
