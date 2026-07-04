import { COLORS } from "./colors.js";

export const drawDisclaimer = (doc, startY) => {
  const startX = 40;
  const width = 515;

  const disclaimer =
    "This PDF is generated automatically by HaqDar for informational purposes only. Scheme details may change over time. Please verify the latest eligibility, required documents, and application process from the official government website or department before applying.";

  const textHeight = doc.heightOfString(disclaimer, {
    width: width - 30,
  });

  const cardHeight = textHeight + 55;

  // Card
  doc
    .roundedRect(startX, startY, width, cardHeight, 8)
    .lineWidth(1)
    .stroke("#FBBF24");

  // Header
  doc
    .roundedRect(startX, startY, width, 35, 8)
    .fill("#F59E0B");

  doc
    .fillColor("white")
    .font("Helvetica-Bold")
    .fontSize(15)
    .text("Important Notice", startX + 18, startY + 10);

  // Disclaimer Text
  doc
    .fillColor("#374151")
    .font("Helvetica")
    .fontSize(11)
    .text(
      disclaimer,
      startX + 15,
      startY + 50,
      {
        width: width - 30,
        align: "justify",
      }
    );

  return startY + cardHeight + 20;
};