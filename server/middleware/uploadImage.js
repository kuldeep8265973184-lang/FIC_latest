import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Disk storage for student profile photos. Files are written to
 * server/uploads/students and served statically via /uploads.
 */
const uploadDir = path.join(__dirname, "../uploads/students");
fs.mkdirSync(uploadDir, { recursive: true });

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname).toLowerCase() || ".jpg";
    const safeName = `student-${req.student?._id || "unknown"}-${Date.now()}${ext}`;
    cb(null, safeName);
  },
});

const fileFilter = (req, file, cb) => {
  const allowed = ["image/jpeg", "image/png", "image/webp", "image/gif"];
  if (allowed.includes(file.mimetype)) return cb(null, true);
  cb(new Error("Only JPG, PNG, WEBP or GIF images are allowed"));
};

const uploadImage = multer({ storage, fileFilter, limits: { fileSize: 5 * 1024 * 1024 } });

export default uploadImage;
