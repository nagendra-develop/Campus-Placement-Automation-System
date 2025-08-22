// server.js
const express = require("express");
const cors = require("cors");
require("dotenv").config();

// Create Express app
const app = express();
app.use(cors());
app.use(express.json());

// Database connection
const db = require("./config/db"); // use the config/db.js we already made

// Test DB connection (already done inside db.js)
console.log("🚀 Starting Campus Placement Backend...");

// Routes
const authRoutes = require("./routes/auth");
const applicationRoutes = require("./routes/applications"); // full routes: student + admin
const adminRoutes = require("./routes/admin");
const jobRoutes = require("./routes/jobs");

// Use routes
app.use("/api/auth", authRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/jobs", jobRoutes);

// Default route
app.get("/", (req, res) => {
  res.send("Campus Placement System Backend Running...");
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
