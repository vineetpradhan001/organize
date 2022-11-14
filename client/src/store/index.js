import { configureStore } from "@reduxjs/toolkit";
import { todoApi } from "./todo/todoApi";
import todoSlice from "./todo/todoSlice";

export const store = configureStore({
  reducer: {
    [todoApi.reducerPath]: todoApi.reducer,
    todo: todoSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(todoApi.middleware),
});
