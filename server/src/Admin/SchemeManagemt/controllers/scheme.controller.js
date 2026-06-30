import Scheme from "../models/scheme.model.js";
import mongoose from "mongoose";
import {
  uploadSchemeToPinecone,
  updateSchemeVector,
  deleteSchemeVector
} from "../service/schemePinecone.service.js";
import { index } from "../../../config/pinecone.js";
import { generateEmbedding } from "../../../services/embedding.service.js";
import { schemeToDocument } from "../../../utils/schemeToDocument.js";

export const addScheme = async (req, res) => {
  try {
    const {
      no,
      name,
      schemeType,
      category,
      beneficiary,
      eligibility,
      benefit,
      documents,
      apply,
    } = req.body;

    // Check duplicate scheme number
    const existingSchemeNo = await Scheme.findOne({ no });

    if (existingSchemeNo) {
      return res.status(409).json({
        success: false,
        message: "Scheme number already exists.",
      });
    }

    // Check duplicate scheme name (case-insensitive)
    const existingSchemeName = await Scheme.findOne({
      name: { $regex: `^${name.trim()}$`, $options: "i" },
    });

    if (existingSchemeName) {
      return res.status(409).json({
        success: false,
        message: "Scheme name already exists.",
      });
    }

    const scheme = await Scheme.create({
      no,
      name: name.trim(),
      schemeType,
      category,
      beneficiary,
      eligibility,
      benefit,
      documents,
      apply,
      uploadedBy: req.user?._id, // Admin ID from verifyAdminJWT
    });

    const pineconeId = await uploadSchemeToPinecone(scheme);
    scheme.pineconeId = pineconeId;
    await scheme.save();

    return res.status(201).json({
      success: true,
      message: "Scheme added successfully.",
      scheme,
    });
  } catch (error) {
    console.error("Add Scheme Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

export const getAllSchemes = async (req, res) => {
  try {
    let {
      page = 1,
      limit = 10,
      search = "",
      status,
      schemeType,
      category,
      sort = "newest",
    } = req.query;

    page = Number(page);
    limit = Number(limit);

    const query = {};

    // Search
    if (search.trim()) {
      query.$or = [
        { name: { $regex: search.trim(), $options: "i" } },
        { beneficiary: { $regex: search.trim(), $options: "i" } },
      ];
    }

    // Filters
    if (status) query.status = status;
    if (schemeType) query.schemeType = schemeType;
    if (category) query.category = category;

    // Sorting
    let sortOption = {};

    switch (sort) {
      case "oldest":
        sortOption = { createdAt: 1 };
        break;

      case "name":
        sortOption = { name: 1 };
        break;

      default:
        sortOption = { createdAt: -1 };
    }

    const totalSchemes = await Scheme.countDocuments(query);

    const schemes = await Scheme.find(query)
      .sort(sortOption)
      .skip((page - 1) * limit)
      .limit(limit);

    return res.status(200).json({
      success: true,
      totalSchemes,
      totalPages: Math.ceil(totalSchemes / limit),
      currentPage: page,
      schemes,
    });
  } catch (error) {
    console.error("Get Schemes Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getSchemeById = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate MongoDB ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Scheme ID.",
      });
    }

    const scheme = await Scheme.findById(id);

    if (!scheme) {
      return res.status(404).json({
        success: false,
        message: "Scheme not found.",
      });
    }

    return res.status(200).json({
      success: true,
      scheme,
    });
  } catch (error) {
    console.error("Get Scheme Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

export const updateScheme = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Scheme ID.",
      });
    }

    const scheme = await Scheme.findById(id);

    if (!scheme) {
      return res.status(404).json({
        success: false,
        message: "Scheme not found.",
      });
    }

    const {
      no,
      name,
      schemeType,
      category,
      beneficiary,
      eligibility,
      benefit,
      documents,
      apply,
    } = req.body;

    // Check duplicate number only if number changed
    if (scheme.no !== no) {
      const existsNo = await Scheme.findOne({ no });

      if (existsNo) {
        return res.status(409).json({
          success: false,
          message: "Scheme number already exists.",
        });
      }
    }

    // Check duplicate name only if name changed
    if (scheme.name.trim().toLowerCase() !== name.trim().toLowerCase()) {
      const existsName = await Scheme.findOne({
        name: {
          $regex: `^${name.trim()}$`,
          $options: "i",
        },
      });

      if (existsName) {
        return res.status(409).json({
          success: false,
          message: "Scheme name already exists.",
        });
      }
    }

    // Update only allowed fields
    scheme.no = no;
    scheme.name = name.trim();
    scheme.schemeType = schemeType;
    scheme.category = category;
    scheme.beneficiary = beneficiary;
    scheme.eligibility = eligibility;
    scheme.benefit = benefit;
    scheme.documents = documents;
    scheme.apply = apply;

    await scheme.save();

    // Convert scheme to AI document
    const document = schemeToDocument(scheme);

    // Generate new embedding
    const embedding = await generateEmbedding(document);

    // Update Pinecone
    await updateSchemeVector(scheme._id, embedding, {
      mongoId: scheme._id.toString(),

      no: scheme.no,
      name: scheme.name,
      schemeType: scheme.schemeType,
      category: scheme.category,
      beneficiary: scheme.beneficiary,

      gender: scheme.eligibility.gender,
      caste: scheme.eligibility.caste,
      age: scheme.eligibility.age,
      income: scheme.eligibility.income,

      benefit: scheme.benefit,
      documents: scheme.documents,
      apply: scheme.apply,

      status: scheme.status,
    });

    return res.status(200).json({
      success: true,
      message: "Scheme updated successfully.",
      scheme,
    });
  } catch (error) {
    console.error("Update Scheme Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

export const deleteScheme = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Scheme ID.",
      });
    }

    // Check if scheme exists
    const scheme = await Scheme.findById(id);

    if (!scheme) {
      return res.status(404).json({
        success: false,
        message: "Scheme not found.",
      });
    }


     // Delete from Pinecone
    await deleteSchemeVector(id);


    // Delete scheme
    await scheme.deleteOne();

    
    return res.status(200).json({
      success: true,
      message: "Scheme deleted successfully.",
    });
  } catch (error) {
    console.error("Delete Scheme Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};

export const updateSchemeStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    // Validate ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid Scheme ID.",
      });
    }

    // Validate status
    if (!["active", "inactive"].includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Status must be either 'active' or 'inactive'.",
      });
    }

    const scheme = await Scheme.findById(id);

    if (!scheme) {
      return res.status(404).json({
        success: false,
        message: "Scheme not found.",
      });
    }

    scheme.status = status;

    await scheme.save();

    return res.status(200).json({
      success: true,
      message: `Scheme ${status} successfully.`,
      scheme,
    });
  } catch (error) {
    console.error("Update Scheme Status Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error.",
    });
  }
};
