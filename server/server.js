import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

import connectDB from "./config/db.js";
import apiRoutes from "./routes/index.js";
import errorHandler from "./middleware/errorHandler.js";
import notFound from "./middleware/notFound.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load env files relative to this file (not the process cwd) so the server
// works no matter which directory it is launched from.
dotenv.config({
  path: [path.join(__dirname, ".env"), path.join(__dirname, "../.env.development.local")],
});

// Dev fallback: sandbox restarts can wipe the untracked server/.env file.
// Never rely on this in production - always set a strong JWT_SECRET.
if (!process.env.JWT_SECRET) {
  process.env.JWT_SECRET = "fic_9f2c1d7e84ab4c6a9e51d3f0b7a8c2e6d4f19b3a7c5e8d20461f7b9a3c5d8e01";
  console.warn("JWT_SECRET not set - using development fallback secret.");
}

const app = express();
const PORT = process.env.PORT || 5000;

// --- Database ---
connectDB();

// --- Core middleware ---
app.use(helmet({ crossOriginResourcePolicy: { policy: "cross-origin" } }));
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use(morgan(process.env.NODE_ENV === "production" ? "combined" : "dev"));

// --- Static files (locally uploaded images) ---
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// --- API routes ---
app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Future IT College API is running",
    docs: "/api/health",
  });
});

// --- Error handling (must be last) ---
app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Future IT College API running on http://localhost:${PORT}`);
});

export default app;
