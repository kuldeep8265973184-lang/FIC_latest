import mongoose from "mongoose";

const CourseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Course title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Course description is required"],
      trim: true,
    },
    icon: {
      type: String,
      required: [true, "Icon key is required"],
      trim: true,
    },
    duration: {
      type: String,
      trim: true,
      default: "",
    },
    category: {
      type: String,
      enum: ["general", "programming", "office", "industry"],
      default: "general",
    },
    featured: {
      type: Boolean,
      default: false,
    },
    badge: {
      type: String,
      trim: true,
      default: "",
    },
    order: {
      type: Number,
      default: 0,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Course", CourseSchema);
