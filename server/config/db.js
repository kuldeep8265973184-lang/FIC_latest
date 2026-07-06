import mongoose from "mongoose";

const RETRY_DELAY_MS = 5000;
const MAX_RETRIES = 5;

/**
 * Establishes connection to MongoDB using Mongoose.
 * Retries a few times before giving up so transient network
 * issues (or a slow-starting database) don't kill the API.
 */
const connectDB = async (attempt = 1) => {
  const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/future-it-college";
  try {
    const conn = await mongoose.connect(uri, { serverSelectionTimeoutMS: 15000 });
    console.log(`MongoDB connected: ${conn.connection.host}/${conn.connection.name}`);
  } catch (error) {
    console.error(`MongoDB connection error (attempt ${attempt}/${MAX_RETRIES}): ${error.message}`);
    if (attempt >= MAX_RETRIES) {
      console.error("Could not connect to MongoDB after multiple attempts. Exiting.");
      process.exit(1);
    }
    await new Promise((resolve) => setTimeout(resolve, RETRY_DELAY_MS));
    return connectDB(attempt + 1);
  }
};

export default connectDB;
