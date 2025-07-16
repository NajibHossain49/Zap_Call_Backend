dotenv.config({ path: ".env.local" }); // Specify .env file explicitly
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
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
    origin: [
      // List of allowed origins
      "http://localhost:5173",
      "https://stellular-flan-1bcb77.netlify.app",
    ],
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

// Health check endpoint
app.get("/", (req, res) => {
  res.json({ message: "Server is running!" });
});

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

// Export the app for Vercel
export default app;
