import jwt from "jsonwebtoken";

/**
 * Signs a JWT carrying the user id and role ("student" | "admin").
 * Used by both student and admin auth controllers.
 */
export const generateToken = (id, role) =>
  jwt.sign({ id, role }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN || "7d",
  });
