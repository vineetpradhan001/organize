import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  useDeleteTodoMutation,
  useUpdateTodoMutation,
} from "../../../store/todo/todoApi";
import {
  deleteTodo,
  setTodoInput,
  updateTodo,
} from "../../../store/todo/todoSlice";
import { changeDateFormat } from "../../../utils";

import "./index.css";

export default function TodoCard(props) {
  const { dateFilter } = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  const [deleteTodoMutation] = useDeleteTodoMutation();
  const [updateTodoMutation] = useUpdateTodoMutation();

  const deleteTodoHandler = () => {
    dispatch(deleteTodo(props.data._id));
    deleteTodoMutation(props.data._id);
  };

  const checkBoxClickHandler = () => {
    dispatch(
      updateTodo({ index: props.index, isCompleted: !props.data.isCompleted })
    );
    updateTodoMutation({
      id: props.data._id,
      isCompleted: !props.data.isCompleted,
    });
  };

  return (
    <div className="todo-card">
      <div
        className="todo-card__checkbox material-icons-outlined"
        onClick={() => checkBoxClickHandler()}
      >
        {props.data.isCompleted ? "check" : ""}
      </div>
      <div className="todo-card__title">
        <span>{props.data.todo}</span>
        {dateFilter ? null : <span>{changeDateFormat(props.data.date)}</span>}
      </div>
      <div className="todo-card__edit">
        <span
          className="material-icons-outlined"
          onClick={() => dispatch(setTodoInput(props.data._id))}
        >
          edit
        </span>
        <span
          className="material-icons-outlined"
          onClick={() => deleteTodoHandler()}
        >
          delete
        </span>
      </div>
    </div>
  );
}
