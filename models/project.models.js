const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    reason: {
      type: String,
      enum: ["Business", "Dealership", "Transport"],
      required: true,
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      type: String,
      enum: ["Internal", "External", "Vendor"],
      required: true,
      trim: true,
    },

    division: {
      type: String,
      enum: ["Compressor", "Filters", "Pumps", "Glass", "Water Heater"],
      required: true,
      trim: true,
    },
    category: {
      type: String,
      enum: ["Quality A", "Quality B", "Quality C", "Quality D"],
      required: true,
      trim: true,
    },
    Priority: {
      type: String,
      enum: ["High", "Low", "Medium"],
      required: true,
      trim: true,
    },
    Department: {
      type: String,
      enum: ["Stratergy", "Finance", "Quality", "Maintenance", "Stores", "HR"],
      required: true,
      trim: true,
    },
    Location: {
      type: String,
      enum: ["Pune", "Mumbai", "Delhi", "Calcutta", "Banglore"],
      required: true,
      trim: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    updatedAt: Date,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Project", projectSchema);
