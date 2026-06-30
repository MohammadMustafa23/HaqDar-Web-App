export const parseSchemeCasting = (req, res, next) => {
  const schemes = req.body;

  if (!Array.isArray(schemes)) {
    return res.status(400).json({
      success: false,
      message: "Schemes must be an array",
    });
  }

  req.body.schemes = schemes.map((scheme) => ({
    ...scheme,

    no: Number(scheme.no),

    eligibility: {
      ...scheme.eligibility,

      age: {
        min: Number(scheme.eligibility?.age?.min ?? 0),
        max: Number(scheme.eligibility?.age?.max ?? 150),
      },

      income: {
        max: Number(scheme.eligibility?.income?.max ?? 0),
      },
    },

    documents: Array.isArray(scheme.documents)
      ? scheme.documents
      : String(scheme.documents || "")
          .split(",")
          .map((doc) => doc.trim())
          .filter(Boolean),
  }));

  next();
};
