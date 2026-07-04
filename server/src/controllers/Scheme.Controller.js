import PDFDocument from "pdfkit";
import MatchedScheme from "../models/matchedScheme.model.js";

import { drawHeader } from "../PDF/header.js";
import { drawSchemeTitle } from "../PDF/schemeTitle.js";
import { drawInfoTable } from "../PDF/infoTable.js";
import { drawBenefitSection } from "../PDF/benefitSection.js";
import { drawDocumentSection } from "../PDF/documentSection.js";
import { drawApplySection } from "../PDF/applySection.js";
import { drawDisclaimer } from "../PDF/disclaimer.js";
import { drawFooter } from "../PDF/footer.js";

export const downloadSchemePdf = async (req, res) => {
  try {
    const userId = req.user.id;
    const { schemeId } = req.params;

    const matched = await MatchedScheme.findOne({ userId });

    if (!matched) {
      return res.status(404).json({
        success: false,
        message: "No matched schemes found.",
      });
    }

    const scheme = matched.schemes.find(
      (s) => String(s._id) === String(schemeId)
    );

    if (!scheme) {
      return res.status(404).json({
        success: false,
        message: "Scheme not found.",
      });
    }

    const data = scheme.metadata;

    const doc = new PDFDocument({
      size: "A4",
      margin: 0,
      bufferPages: true,
    });

    res.setHeader("Content-Type", "application/pdf");
    res.setHeader(
      "Content-Disposition",
      `attachment; filename="${data.name}.pdf"`
    );

    doc.pipe(res);

    // ======================
    // PDF Sections
    // ======================

    drawHeader(doc);

    drawSchemeTitle(doc, data);

    let currentY = drawInfoTable(doc, data);

    currentY = drawBenefitSection(doc, data, currentY);

    currentY = drawDocumentSection(doc, data, currentY);

    currentY = drawApplySection(doc, data, currentY);

    currentY = drawDisclaimer(doc, currentY);

    drawFooter(doc, currentY);

    doc.end();

  } catch (error) {
    console.error(error);

    if (!res.headersSent) {
      return res.status(500).json({
        success: false,
        message: "Failed to generate PDF.",
      });
    }
  }
};
