import mongoose from "mongoose";

const GallerySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    category: {
      type: String,
      required: [true, "Category is required"],
      enum: [
        "Computer Lab",
        "Smart Classroom",
        "Practical Sessions",
        "Institute Building",
        "Students Learning",
        "Events",
      ],
    },
    image: {
      type: String,
      required: [true, "Image is required"],
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

export default mongoose.model("Gallery", GallerySchema);
