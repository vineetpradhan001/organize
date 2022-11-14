import Todo from "../models/Todo.js";

const errorHandler = (err) => {
  const errors = {};
  if (
    err.message.includes("todo validation failed") ||
    err.message.includes("Validation failed")
  ) {
    Object.keys(err.errors).map((p) => {
      errors[p] = err.errors[p]?.properties?.message;
    });
  }
  return errors;
};

export const createTodo = async (req, res) => {
  const body = req.body;

  try {
    const todo = await Todo.create(body);
    res.status(200).json(todo._id);
  } catch (e) {
    const err = errorHandler(e);
    res.status(400).json(err);
  }
};

export const getTodos = async (req, res) => {
  const query = req.query;
  for (const key of Object.keys(query)) {
    if (!query[key]) delete query[key];
  }

  try {
    const todos = await Todo.find(query).sort({ $natural: -1 });
    res.status(200).json(todos);
  } catch (e) {
    res.status(400).json(e);
  }
};

export const updateTodo = async (req, res) => {
  const body = req.body;
  const { id } = req.params;

  try {
    const todo = await Todo.findByIdAndUpdate(id, body, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(todo._id);
  } catch (e) {
    const err = errorHandler(e);
    res.status(400).json(err);
  }
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;

  try {
    const todo = await Todo.findByIdAndDelete(id);
    res.status(200).json(todo._id);
  } catch (e) {
    res.status(400).json(e);
  }
};
