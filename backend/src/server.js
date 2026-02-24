require("dotenv").config({ path: "../.env" });
const express = require("express");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Lab 06: Backend running and GitHub push successful");
});

app.get("/about", (req, res) => {
  res.send("Name: Priyanshi Mishra | Enrollment: CS_23411428 | Section: 3CSE15");
});

app.get("/health", (req, res) => {
  res.json({ status: "ok", database: process.env.DB_NAME || "not connected" });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));