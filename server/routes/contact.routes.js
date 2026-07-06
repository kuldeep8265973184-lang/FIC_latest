import { Router } from "express";
import { createContact, getContacts } from "../controllers/contact.controller.js";
import { contactValidationRules } from "../validators/contact.validator.js";
import validate from "../middleware/validate.js";

const router = Router();

router.post("/", contactValidationRules, validate, createContact);
router.get("/", getContacts);

export default router;
