import { Router } from "express";
import { adminLogin, getAdminMe } from "../controllers/adminAuth.controller.js";
import { adminLoginValidationRules } from "../validators/adminAuth.validator.js";
import validate from "../middleware/validate.js";
import { protectAdmin } from "../middleware/auth.js";

const router = Router();

router.post("/login", adminLoginValidationRules, validate, adminLogin);
router.get("/me", protectAdmin, getAdminMe);

export default router;
