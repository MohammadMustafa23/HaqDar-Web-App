import { COLORS } from "./colors.js";

export const drawDocumentSection = (doc, data, startY) => {

  const startX = 40;
  const width = 515;

  const documents = data.documents
    ? data.documents
        .split(",")
        .map(item => item.trim())
        .filter(Boolean)
    : ["Documents not available"];

  // Calculate Card Height
  let cardHeight = 45;

  documents.forEach(document => {
    cardHeight +=
      doc.heightOfString(document, {
        width: 435,
      }) + 16;
  });

  // Card
  doc
    .roundedRect(startX, startY, width, cardHeight, 8)
    .lineWidth(1)
    .stroke(COLORS.border);

  // Header
  doc
    .roundedRect(startX, startY, width, 35, 8)
    .fill("#F59E0B");

  doc
    .fillColor("white")
    .font("Helvetica-Bold")
    .fontSize(15)
    .text("Required Documents", startX + 18, startY + 10);

  let y = startY + 50;

  documents.forEach((document) => {

    const textHeight = doc.heightOfString(document, {
      width: 435,
    });

    // Checkbox
    doc
      .rect(startX + 18, y + 2, 10, 10)
      .lineWidth(1)
      .stroke("#F59E0B");

    // Text
    doc
      .fillColor("#111827")
      .font("Helvetica")
      .fontSize(11)
      .text(
        document,
        startX + 38,
        y,
        {
          width: 435,
        }
      );

    y += textHeight + 16;

  });

  return startY + cardHeight + 20;

};