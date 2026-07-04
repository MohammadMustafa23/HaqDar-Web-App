import { COLORS } from "./colors.js";

export const drawApplySection = (doc, data, startY) => {
  const pageHeight = doc.page.height;
  const requiredHeight = 150;

  if (startY + requiredHeight > pageHeight - 40) {
    doc.addPage();
    startY = 10;
  }
  const startX = 40;
  const width = 515;

  const steps = data.apply
    ? data.apply
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean)
    : ["Application process not available"];

  // Calculate Height
  let cardHeight = 45;

  steps.forEach((step) => {
    cardHeight +=
      doc.heightOfString(step, {
        width: 430,
      }) + 18;
  });

  // Card
  doc
    .roundedRect(startX, startY, width, cardHeight, 8)
    .lineWidth(1)
    .stroke(COLORS.border);

  // Header
  doc.roundedRect(startX, startY, width, 35, 8).fill("#2563EB");

  doc
    .fillColor("white")
    .font("Helvetica-Bold")
    .fontSize(15)
    .text("How To Apply", startX + 18, startY + 10);

  let y = startY + 50;

  steps.forEach((step, index) => {
    // Number Circle
    doc.circle(startX + 18, y + 8, 8).fill("#2563EB");

    doc
      .fillColor("white")
      .fontSize(9)
      .font("Helvetica-Bold")
      .text(String(index + 1), startX + 15, y + 4, {
        width: 8,
        align: "center",
      });

    // Step Text
    doc
      .fillColor("#111827")
      .font("Helvetica")
      .fontSize(11)
      .text(step, startX + 38, y, {
        width: 435,
      });

    y +=
      doc.heightOfString(step, {
        width: 435,
      }) + 18;
  });

  return startY + cardHeight + 20;
};
