const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");
const { createExpense, getExpenses } = require("../controllers/expenseController");

router.post("/expenses", auth, createExpense);
router.get("/expenses", auth, getExpenses);

module.exports = router;
