import { COLORS } from "./colors.js";

export const drawSchemeTitle = (doc, data) => {

  const startX = 40;
  const startY = 110;
  const width = 515;
  const height = 120;

  // Card
  doc
    .roundedRect(startX, startY, width, height, 8)
    .fill(COLORS.secondary);

  // Left Blue Border
  doc
    .save()
    .lineWidth(6)
    .strokeColor(COLORS.primary)
    .moveTo(startX + 3, startY)
    .lineTo(startX + 3, startY + height)
    .stroke()
    .restore();

  // Scheme Name
  doc
    .fillColor(COLORS.primary)
    .font("Helvetica-Bold")
    .fontSize(22)
    .text(
      data.name || "Scheme Name",
      startX + 25,
      startY + 18,
      {
        width: 450
      }
    );

  // Category
  doc
    .fillColor("#555")
    .font("Helvetica-Bold")
    .fontSize(11)
    .text("Category :", startX + 25, startY + 72);

  doc
    .font("Helvetica")
    .text(
      data.category || "N/A",
      startX + 95,
      startY + 72
    );

  // Department
  doc
    .font("Helvetica-Bold")
    .text(
      "Department :",
      startX + 25,
      startY + 92
    );

  doc
    .font("Helvetica")
    .text(
      data.department || "Government of Rajasthan",
      startX + 110,
      startY + 92
    );

};