const Task = require("../models/Task");

exports.createTask = async (req, res) => {
  const task = new Task({ ...req.body, createdBy: req.userId });
  await task.save();
  res.status(201).json(task);
};

exports.getTasks = async (req, res) => {
  const tasks = await Task.find({ createdBy: req.userId }).populate("assignedTo");
  res.json(tasks);
};

exports.updateStatus = async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
  res.json(task);
};
