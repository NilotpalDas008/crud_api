import * as taskservice from "../services/taskServices.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await taskservice.getAlltasks();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const addTasks = async (req, res) => {
  try {
    console.log('Request body:', req.body);
    const newtask = await taskservice.createTask(req.body);
    res.status(201).json(newtask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const updateTasks = async (req, res) => {
  try {
    const updatetask = await taskservice.updateTask(req.params.id, req.body);
    res.status(200).json(updatetask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
export const deleteTasks = async (req, res) => {
  try {
    const deletetask = await taskservice.deleteTask(req.params.id);
    res.status(200).json(deletetask);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
