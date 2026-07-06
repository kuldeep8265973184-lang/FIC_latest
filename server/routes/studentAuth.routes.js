import { Router } from "express";
import {
  signup,
  login,
  getMe,
  updateProfile,
  uploadProfilePhoto,
  changePassword,
  forgotPassword,
  resetPassword,
} from "../controllers/studentAuth.controller.js";
import uploadImage from "../middleware/uploadImage.js";
import {
  signupValidationRules,
  loginValidationRules,
  forgotPasswordValidationRules,
  resetPasswordValidationRules,
} from "../validators/studentAuth.validator.js";
import validate from "../middleware/validate.js";
import { protectStudent } from "../middleware/auth.js";

const router = Router();

router.post("/signup", signupValidationRules, validate, signup);
router.post("/login", loginValidationRules, validate, login);
router.get("/me", protectStudent, getMe);
router.put("/profile", protectStudent, updateProfile);
router.post("/profile-photo", protectStudent, uploadImage.single("photo"), uploadProfilePhoto);
router.post("/change-password", protectStudent, changePassword);
router.post("/forgot-password", forgotPasswordValidationRules, validate, forgotPassword);
router.post("/reset-password", resetPasswordValidationRules, validate, resetPassword);

export default router;
