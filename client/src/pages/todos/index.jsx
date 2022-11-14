import React, { useEffect } from "react";
import {
  useCreateTodoMutation,
  useGetTodosQuery,
} from "../../store/todo/todoApi";
import { useDispatch, useSelector } from "react-redux";
import { setTodos, setTodoInput, updateTodo } from "../../store/todo/todoSlice";

import TodoSubHeader from "./todoSubHeader";
import TodoCard from "./todoCard";
import TodoInput from "./todoInput";
import Placeholder from "../../components/placeholder";

import "./index.css";

export default function Todo() {
  const { dateFilter, statusFilter, todos, todoInput } = useSelector(
    (state) => state.todo
  );
  const getTodos = useGetTodosQuery({
    date: dateFilter,
    isCompleted:
      statusFilter === 1 ? true : statusFilter === 0 ? false : undefined,
  });
  const [createTodoMutation, createTodoStatus] = useCreateTodoMutation();
  const dispatch = useDispatch();

  useEffect(() => {
    getTodos.currentData && dispatch(setTodos(getTodos.data));
  }, [getTodos.currentData]);
  useEffect(() => {
    createTodoStatus.isSuccess &&
      dispatch(updateTodo({ index: 0, _id: createTodoStatus.data }));
  }, [createTodoStatus.isSuccess]);

  return (
    <main className="todo">
      <TodoSubHeader />

      {getTodos.currentData ? (
        <div
          className={
            todos.length || todoInput ? " todo-list" : "todo-list-empty"
          }
        >
          {todoInput === 1 ? (
            <TodoInput createTodoMutation={createTodoMutation} />
          ) : null}
          {todos.map((data, index) =>
            todoInput === data._id ? (
              <TodoInput data={data} index={index} key={index} />
            ) : (
              <TodoCard data={data} key={index} index={index} />
            )
          )}
          {todos.length || todoInput ? null : (
            <Placeholder text="No Results Found :(" image="placeholder.svg" />
          )}
        </div>
      ) : (
        <>
          {!getTodos.isError ? (
            <Placeholder text="Loading..." image="loading.svg" />
          ) : (
            <Placeholder text="Error Occurred :(" image="error.svg" />
          )}
        </>
      )}
      {getTodos.currentData ? (
        <div
          className="fab material-icons-outlined"
          onClick={() => dispatch(setTodoInput(1))}
        >
          add
        </div>
      ) : null}
    </main>
  );
}
