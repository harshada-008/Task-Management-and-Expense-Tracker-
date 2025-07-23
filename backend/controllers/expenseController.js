const Expense = require("../models/Expense");

exports.createExpense = async (req, res) => {
  const expense = new Expense({ ...req.body, createdBy: req.userId });
  await expense.save();
  res.status(201).json(expense);
};

exports.getExpenses = async (req, res) => {
  const expenses = await Expense.find({ createdBy: req.userId });
  res.json(expenses);
};
