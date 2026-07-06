/**
 * Creates the default admin account. Run once after setup.
 * Run with: npm run seedAdmin  (from the server/ directory)
 */
import dotenv from "dotenv";
import mongoose from "mongoose";
import connectDB from "../config/db.js";
import Admin from "../models/Admin.js";

dotenv.config({ path: [".env", "../.env.development.local"] });

const DEFAULT_ADMIN = {
  name: "Future IT College Admin",
  email: "admin@futureitcollege.com",
  password: "Admin@123", // change immediately after first login
  role: "superadmin",
};

const seed = async () => {
  try {
    await connectDB();

    const existing = await Admin.findOne({ email: DEFAULT_ADMIN.email });
    if (existing) {
      console.log(`Admin already exists: ${DEFAULT_ADMIN.email}`);
    } else {
      await Admin.create(DEFAULT_ADMIN);
      console.log("Default admin created:");
      console.log(`  Email:    ${DEFAULT_ADMIN.email}`);
      console.log(`  Password: ${DEFAULT_ADMIN.password}`);
      console.log("  Please log in and change this password immediately.");
    }

    await mongoose.connection.close();
    process.exit(0);
  } catch (error) {
    console.error("Admin seeding failed:", error);
    process.exit(1);
  }
};

seed();
