import { Router } from "express";
import {
  createTodo,
  deleteTodo,
  getTodos,
  updateTodo,
} from "../controllers/todoControllers.js";

const todoRouter = Router();

todoRouter.post("/", createTodo);
todoRouter.get("/", getTodos);
todoRouter.delete("/:id", deleteTodo);
todoRouter.patch("/:id", updateTodo);

export default todoRouter;
