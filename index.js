import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import contactus from "./routes/contactus.route.js";
import student from "./routes/student.route.js";
import dotenv from "dotenv";

dotenv.config();

process.on('unhandledRejection', (reason, promise) => {
	console.error('Unhandled Rejection at:', promise, 'reason:', reason);
});

process.on('uncaughtException', (error) => {
	console.error('Uncaught Exception:', error);
});

const app = express();
const PORT = process.env.PORT || 9002;

app.use(cors({
  origin: 'https://ausc.edu.au',  // frontend domain
  credentials: true,               // allow cookies
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.options('*', cors());
app.use(express.json({ limit: "10mb" }));

// routes
app.use("/api/contactus", contactus);
app.use("/api/student", student);

// Debug and Health routes at the very top
app.get("/api/health", (req, res) => {
	res.status(200).json({ status: "ok", message: "Server is running", env: process.env.NODE_ENV });
});

// Start server only after DB connects
app.listen(PORT, () => {
	console.log(`🚀 Server running on port ${PORT}`);
});
