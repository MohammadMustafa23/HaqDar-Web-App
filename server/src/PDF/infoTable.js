import { COLORS } from "./colors.js";

export const drawInfoTable = (doc, data) => {
  const startX = 40;
  const startY = 250;
  const width = 515;

  // Header
  doc
    .roundedRect(startX, startY, width, 35, 8)
    .fill(COLORS.primary);

  doc
    .fillColor("white")
    .font("Helvetica-Bold")
    .fontSize(15)
    .text("Basic Information", startX + 20, startY + 10);

  const rows = [
    ["Scheme Type", data.schemeType || "N/A"],
    ["Beneficiary", data.beneficiary || "N/A"],
    ["Gender", data.gender || "N/A"],
    ["Age", data.age || "N/A"],
    ["Income", data.income || "N/A"],
    ["Caste", data.caste || "N/A"],
  ];

  let currentY = startY + 45;

  rows.forEach(([label, value], index) => {
    // Calculate row height based on wrapped text
    const valueHeight = doc.heightOfString(value, {
      width: 320,
    });

    const rowHeight = Math.max(32, valueHeight + 12);

    // Alternate background
    if (index % 2 === 0) {
      doc
        .rect(startX, currentY, width, rowHeight)
        .fill("#FAFAFA");
    }

    // Bottom Border
    doc
      .moveTo(startX, currentY + rowHeight)
      .lineTo(startX + width, currentY + rowHeight)
      .strokeColor("#E5E7EB")
      .lineWidth(0.7)
      .stroke();

    // Vertical Divider
    doc
      .moveTo(startX + 170, currentY)
      .lineTo(startX + 170, currentY + rowHeight)
      .strokeColor("#E5E7EB")
      .stroke();

    // Label
    doc
      .fillColor("#4B5563")
      .font("Helvetica-Bold")
      .fontSize(11)
      .text(label, startX + 15, currentY + 10, {
        width: 145,
      });

    // Value
    doc
      .fillColor("#111827")
      .font("Helvetica")
      .fontSize(11)
      .text(value, startX + 185, currentY + 10, {
        width: 320,
        align: "left",
      });

    currentY += rowHeight;
  });

  // Outer Border
  doc
    .roundedRect(
      startX,
      startY + 35,
      width,
      currentY - (startY + 35),
      8
    )
    .lineWidth(1)
    .stroke("#D1D5DB");

  return currentY + 20;
};