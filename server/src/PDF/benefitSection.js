import { COLORS } from "./colors.js";

export const drawBenefitSection = (doc, data, startY) => {
  const startX = 40;
  const width = 515;

  const benefit = data.benefit || "Benefits not available.";

  // Calculate required height
  const textHeight = doc.heightOfString(benefit, {
    width: 455,
  });

  const cardHeight = textHeight + 65;

  // Outer Card
  doc
    .roundedRect(startX, startY, width, cardHeight, 8)
    .lineWidth(1)
    .stroke(COLORS.border);

  // Header
  doc
    .roundedRect(startX, startY, width, 35, 8)
    .fill("#16A34A");

  doc
    .fillColor("white")
    .font("Helvetica-Bold")
    .fontSize(15)
    .text("Benefits", startX + 18, startY + 10);

  // Green Highlight Box
  doc
    .roundedRect(
      startX + 15,
      startY + 48,
      width - 30,
      textHeight + 18,
      6
    )
    .fill("#F0FDF4");

  doc
    .roundedRect(
      startX + 15,
      startY + 48,
      width - 30,
      textHeight + 18,
      6
    )
    .lineWidth(1)
    .stroke("#BBF7D0");

  // Green Bullet
  doc
    .circle(startX + 30, startY + 62, 4)
    .fill("#16A34A");

  // Benefit Text
  doc
    .fillColor("#111827")
    .font("Helvetica")
    .fontSize(12)
    .text(
      benefit,
      startX + 45,
      startY + 55,
      {
        width: 430,
        align: "left",
      }
    );

  return startY + cardHeight + 20;
};