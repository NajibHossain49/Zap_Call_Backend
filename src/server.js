import dotenv from "dotenv";
dotenv.config({ path: ".env.local" }); // Specify .env file explicitly
import cookieParser from "cookie-parser";

import express from "express";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(cookieParser());

// routes for authentication
app.use("/api/auth", authRoutes);

// Connect to MongoDB and start the server
connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to start server due to DB connection error:", error);
  });
