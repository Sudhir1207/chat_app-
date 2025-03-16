import express from "express";
import dotenv from "dotenv";
dotenv.config();
import authRoutes from "./routes/auth.route.js";
import messageRoutes from "./routes/message.route.js";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser";

const app = express();

const PORT = process.env.PORT;
app.use(express.json());
app.use(cookieParser());
connectDB();
app.use("/api/auth", authRoutes);
app.use("api/message", messageRoutes);
app.listen(PORT, () => {
  console.log("server is running on  " + PORT);
});
