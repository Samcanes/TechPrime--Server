const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
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

    },
    status: {
      type: String,
      enum: ["Registered", "Running", "Closed", "Cancelled"],
      required: true,
    },

    division: {
      type: String,
      enum: ["Compressor", "Filters", "Pumps", "Glass", "Water Heater"],
      required: true,

    },
    category: {
      type: String,
      enum: ["Quality A", "Quality B", "Quality C", "Quality D"],
      required: true,
    },
    priority: {
      type: String,
      enum: ["High", "Low", "Medium"],
      required: true,
      
    },
    department: {
      type: String,
      enum: ["Stratergy", "Finance", "Quality", "Maintenance", "Stores", "HR"],
      required: true,
      
    },
    location: {
      type: String,
      enum: ["Pune", "Mumbai", "Delhi", "Calcutta", "Banglore"],
      required: true,
     
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
