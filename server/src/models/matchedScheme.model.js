import mongoose from "mongoose";

const MatchedSchemeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
      unique: true,
      index: true,
    },
    searchQuery: {
      type: String,
      default: "",
    },

    schemes: [
      {
        schemeId: {
          type: String,
        },

        score: {
          type: Number,
        },

        metadata: {
          type: mongoose.Schema.Types.Mixed,
        },
      },
    ],
  },
  {
    timestamps: true,
  },
);

const MatchedSchemeModel = mongoose.model("MatchedSchemes",MatchedSchemeSchema,);

export default MatchedSchemeModel;
