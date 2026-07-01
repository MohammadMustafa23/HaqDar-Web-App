export const parseSchemeCasting = (req, res, next) => {
  try {
    req.body = {
      ...req.body,

      no: Number(req.body.no),

      eligibility: {
        ...req.body.eligibility,

        age: {
          ...req.body.eligibility?.age,
          min: Number(req.body.eligibility?.age?.min),
          max: Number(req.body.eligibility?.age?.max),
        },

        income: Number(req.body.eligibility?.income),
      },
    };

    console.log("Pass TO Next");
    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Failed to cast scheme data.",
      error: error.message,
    });
  }
};