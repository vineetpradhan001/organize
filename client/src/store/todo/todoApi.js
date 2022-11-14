import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const todoApi = createApi({
  reducerPath: "todoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BACKEND_URL}/todo`,
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (params) => ({
        url: "/",
        params,
      }),
    }),
    createTodo: builder.mutation({
      query: (body) => ({
        url: "/",
        method: "POST",
        body,
        credentials: "include",
      }),
    }),
    updateTodo: builder.mutation({
      query: ({ id, ...body }) => ({
        url: `/${id}`,
        method: "PATCH",
        body,
        credentials: "include",
      }),
    }),
    deleteTodo: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useGetTodosQuery,
  useCreateTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = todoApi;
