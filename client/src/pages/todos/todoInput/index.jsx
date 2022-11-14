import React, { useState, useEffect } from "react";
import { useUpdateTodoMutation } from "../../../store/todo/todoApi";
import { useDispatch, useSelector } from "react-redux";
import {
  createTodo,
  updateTodo,
  setTodoInput,
} from "../../../store/todo/todoSlice";

import DatePicker from "../../../components/datePicker";
import Textarea from "../../../components/textArea";

import "./index.css";

export default function TodoInput(props) {
  const { dateFilter } = useSelector((state) => state.todo);
  const [todo, setTodo] = useState(props.data?.todo || "");
  const [date, setDate] = useState(props.data?.date || dateFilter);
  const [errors, setErrors] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dateFilter && setDate(dateFilter);
  }, [dateFilter]);

  const [updateTodoMutation] = useUpdateTodoMutation();

  const createTodoHandler = () => {
    if (!todo || !date) {
      !todo && setErrors((prev) => ({ ...prev, todo: "Please enter todo" }));
      !date && setErrors((prev) => ({ ...prev, date: "Please enter date" }));
      return;
    }
    if (props.data) {
      dispatch(updateTodo({ todo, date, index: props.index }));
      updateTodoMutation({ id: props.data._id, todo, date });
    } else {
      dispatch(createTodo({ todo, date, isCompleted: 0 }));
      props.createTodoMutation({ todo, date });
    }
    dispatch(setTodoInput(0));
  };

  return (
    <div className="todo-input">
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Textarea
          placeholder={props.data ? "Edit Todo" : "Add Todo"}
          value={todo}
          onChange={(val) => {
            setTodo(val);
            errors.todo && setErrors((prev) => ({ ...prev, todo: "" }));
          }}
          style={{ flexGrow: 1 }}
        />
        <div className="error">{errors.todo}</div>
      </div>
      <div>
        <DatePicker
          date={date}
          setDate={(val) => {
            setDate(val);
            errors.date && setErrors((prev) => ({ ...prev, date: "" }));
          }}
          min={new Date().toISOString().slice(0, 10)}
          placeholder={props.data ? "Edit Date" : "Add Date"}
        />
        <div className="error">{errors.date}</div>
      </div>
      <div className="button-group">
        <button onClick={() => dispatch(setTodoInput(0))}>Cancel</button>
        <button onClick={() => createTodoHandler()}>
          {props.data ? "Edit Todo" : "Create Todo"}
        </button>
      </div>
    </div>
  );
}
