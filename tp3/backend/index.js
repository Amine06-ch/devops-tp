const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 3001;

let tasks = [];

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.post("/tasks", (req, res) => {
  const { task } = req.body;
  tasks.push(task);
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log("Backend running on port " + PORT);
});