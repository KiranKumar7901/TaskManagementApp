const router = require("express").Router();
const Task = require("../models/tasks");
const User = require("../models/users");
const authenticateToken = require("./auth");

// Create Tasks
router.post("/create-task", authenticateToken, async (req, res) => {
  try {
    const { title, desc } = req.body;
    const { id } = req.headers;
    const newTask = new Task({ title: title, desc: desc });
    const saveTask = await newTask.save();
    const taskId = saveTask._id;
    await User.findByIdAndUpdate(id, { $push: { tasks: taskId._id } });
    res.status(200).json({ message: "Task Created" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error1" });
  }
});

// Fetch/Get all Tasks
router.get("/get-all-tasks", authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const userdata = await User.findById(id).populate({
      path: "tasks",
      options: { sort: { createdAt: -1 } },
    });
    res.status(200).json({ data: userdata });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error1" });
  }
});
// Get Important Task
router.get("/get-imp-tasks", authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const Data = await User.findById(id).populate({
      path: "tasks",
      match: {important:true},
      options: { sort: { createdAt: -1 } },
    });
    const impTaskData = Data.tasks;
    res.status(200).json({ data: impTaskData });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error1" });
  }
});
// Get Complete Task
router.get("/get-comp-tasks", authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const Data = await User.findById(id).populate({
      path: "tasks",
      match: {complete:true},
      options: { sort: { createdAt: -1 } },
    });
    const compTaskData = Data.tasks;
    res.status(200).json({ data: compTaskData });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error1" });
  }
});
// Get InComplete Task
router.get("/get-incomp-tasks", authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const Data = await User.findById(id).populate({
      path: "tasks",
      match: {complete:false},
      options: { sort: { createdAt: -1 } },
    });
    const incompTaskData = Data.tasks;
    res.status(200).json({ data: incompTaskData });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error1" });
  }
});

// Delete Task
router.delete("/delete-task/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.headers.id;
    await Task.findByIdAndDelete(id);
    await User.findByIdAndUpdate(userId, { $pull: { tasks: id } });
    res.status(200).json({ message: "Task Deleted" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error1" });
  }
});

// Update Task
router.put("/update-task/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, desc } = req.body;
    await Task.findByIdAndUpdate(id, { title: title, desc: desc });
    res.status(200).json({ message: "Task Updated" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error1" });
  }
});
// Update Important Task
router.put("/update-imp-task/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const TaskData = await Task.findById(id);
    const ImpTask = TaskData.important;
    await Task.findByIdAndUpdate(id, { important: !ImpTask });
    res.status(200).json({ message: "Task Updated" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error1" });
  }
});
// Update Complete Task
router.put("/update-comp-task/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const TaskData = await Task.findById(id);
    const CompTask = TaskData.complete;
    await Task.findByIdAndUpdate(id, { complete: !CompTask });
    res.status(200).json({ message: "Task Updated" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error1" });
  }
});

module.exports = router;
