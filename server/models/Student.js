import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const StudentSchema = new mongoose.Schema(
  {
    name: { type: String, required: [true, "Name is required"], trim: true },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      unique: true,
      match: [/^\S+@\S+\.\S+$/, "Please provide a valid email address"],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
      match: [/^[6-9]\d{9}$/, "Please provide a valid 10-digit mobile number"],
    },
    password: { type: String, required: [true, "Password is required"], minlength: 6, select: false },
    address: { type: String, trim: true, default: "" },
    course: { type: String, trim: true, default: "" },
    photo: { type: String, trim: true, default: "" },
    studentIdCode: { type: String, trim: true, default: "" },
    isActive: { type: Boolean, default: true },
    resetPasswordToken: { type: String, select: false },
    resetPasswordExpires: { type: Date, select: false },
  },
  { timestamps: true }
);

StudentSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

StudentSchema.methods.comparePassword = function (candidate) {
  return bcrypt.compare(candidate, this.password);
};

export default mongoose.model("Student", StudentSchema);
