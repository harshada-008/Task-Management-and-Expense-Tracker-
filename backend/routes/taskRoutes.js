const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { createTask, getTasks, updateStatus } = require("../controllers/taskController");

router.post("/tasks", auth, createTask);
router.get("/tasks", auth, getTasks);
router.patch("/tasks/:id/status", auth, updateStatus);

module.exports = router;
