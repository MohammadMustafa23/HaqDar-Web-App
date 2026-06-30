import mongoose from "mongoose";

const schemeSchema = new mongoose.Schema(
  {
    no: {
      type: Number,
      unique: true,
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    schemeType: {
      type: String,
      enum: ["Central", "State", "District"],
      required: true,
    },

    category: {
      type: String,
      default: "",
      trim: true,
    },

    beneficiary: {
      type: String,
      default: "",
      trim: true,
    },

    eligibility: {
      gender: {
        type: String,
        enum: ["Male", "Female", "All"],
        default: "All",
      },

      caste: {
        type: String,
        enum: ["General", "OBC", "SC", "ST", "EWS", "Minority", "All"],
        default: "All",
      },

      age: {
        min: {
          type: Number,
          default: 0,
        },
        max: {
          type: Number,
          default: 150,
        },
      },

      income: {
        max: {
          type: Number,
          default: 0,
        },
      },
    },

    benefit: {
      type: String,
      required: true,
    },

    documents: {
      type: [String],
      default: [],
    },

    apply: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },

    pineconeId: {
      type: String,
      default: null,
    },

    uploadedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      default: null,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model("Scheme", schemeSchema);
