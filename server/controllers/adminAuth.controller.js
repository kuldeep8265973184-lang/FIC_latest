import Admin from "../models/Admin.js";
import asyncHandler from "../utils/asyncHandler.js";
import ApiResponse from "../utils/ApiResponse.js";
import ApiError from "../utils/ApiError.js";
import { generateToken } from "../utils/generateToken.js";

const publicAdmin = (admin) => ({
  id: admin._id,
  name: admin.name,
  email: admin.email,
  role: admin.role,
});

/**
 * @route POST /api/admin/auth/login
 */
export const adminLogin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const admin = await Admin.findOne({ email: email.toLowerCase() }).select("+password");
  if (!admin) throw new ApiError(401, "Invalid email or password");

  const isMatch = await admin.comparePassword(password);
  if (!isMatch) throw new ApiError(401, "Invalid email or password");

  const token = generateToken(admin._id, "admin");

  return res.status(200).json(new ApiResponse(200, { token, admin: publicAdmin(admin) }, "Login successful"));
});

/**
 * @route GET /api/admin/auth/me
 */
export const getAdminMe = asyncHandler(async (req, res) => {
  return res.status(200).json(new ApiResponse(200, publicAdmin(req.admin)));
});
