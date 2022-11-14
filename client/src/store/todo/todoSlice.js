import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  todoInput: 0,
  statusFilter: 2,
  dateFilter: "",
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.todos = action.payload;
    },
    createTodo: (state, action) => {
      state.todos = [action.payload, ...state.todos];
    },
    updateTodo: (state, action) => {
      const { index, ...newData } = action.payload;
      state.todos[index] = { ...state.todos[index], ...newData };
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo._id !== action.payload);
    },
    setTodoInput: (state, action) => {
      state.todoInput = action.payload;
    },
    setStatusFilter: (state, action) => {
      state.statusFilter = action.payload;
    },
    setDateFilter: (state, action) => {
      state.dateFilter = action.payload;
    },
  },
});

export const {
  setTodos,
  createTodo,
  updateTodo,
  deleteTodo,
  setTodoInput,
  setStatusFilter,
  setDateFilter,
} = todoSlice.actions;

export default todoSlice.reducer;
