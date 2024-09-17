// server.js
require("dotenv").config();
import express from "express";
import http from "http";
import socketio from "socket.io";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
const server = http.createServer(app);
// const io = socketio(server, { cors: { origin: "*" } });

// Middleware
app.use(express.json());
app.use(cors());

// Database Connection
mongoose
  .connect(process.env.MONGO_URI as string)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Sample Route
app.get("/", (req, res) => {
  res.json("Chat Server Running...");
});

// Start server
const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
