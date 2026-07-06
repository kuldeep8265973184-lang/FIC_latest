import { Router } from "express";
import {
  getStudents,
  getStudentProfile,
  toggleStudentStatus,
  deleteStudent,
} from "../controllers/adminStudent.controller.js";
import { protectAdmin } from "../middleware/auth.js";

const router = Router();
router.use(protectAdmin);

router.get("/", getStudents);
router.get("/:id", getStudentProfile);
router.patch("/:id/disable", toggleStudentStatus);
router.delete("/:id", deleteStudent);

export default router;
