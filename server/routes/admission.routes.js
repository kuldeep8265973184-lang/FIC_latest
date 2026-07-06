import { Router } from "express";
import { createAdmission, getAdmissions } from "../controllers/admission.controller.js";
import { admissionValidationRules } from "../validators/admission.validator.js";
import validate from "../middleware/validate.js";

const router = Router();

router.post("/", admissionValidationRules, validate, createAdmission);
router.get("/", getAdmissions);

export default router;
