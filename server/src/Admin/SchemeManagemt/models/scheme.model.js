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
      enum: ["Central", "State"],
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
        default: "All",
      },

      caste: {
        type: String,
        default: "",
      },

      age: {
        type: String,
        default: "",
      },

      income: {
        type: String,
        default: "",
      },
    },

    benefit: {
      type: String,
      required: true,
    },

    documents: {
      type: String,
      default: "",
    },

    apply: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
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
