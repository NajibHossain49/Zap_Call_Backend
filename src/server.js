import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config({ path: ".env.local" }); // Specify .env file explicitly

import express from "express";
import { connectDB } from "./lib/db.js";
import authRoutes from "./routes/auth.route.js";
import chatRoutes from "./routes/chat.route.js";
import userRoutes from "./routes/user.route.js";

const app = express();
const PORT = process.env.PORT || 3000;

// middlewares
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // allow credentials (cookies, authorization headers, etc.)
  })
);
app.use(express.json());
app.use(cookieParser());

// routes for authentication
app.use("/api/auth", authRoutes);

// routes for user-related operations
app.use("/api/users", userRoutes);

// routes for chat-related operations
app.use("/api/chat", chatRoutes);

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
