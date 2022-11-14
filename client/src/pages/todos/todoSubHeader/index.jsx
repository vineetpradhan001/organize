import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setDateFilter, setStatusFilter } from "../../../store/todo/todoSlice";

import DropdownMenu from "../../../components/dropdownMenu";
import DatePicker from "../../../components/datePicker";

import "./index.css";

export default function TodoSubHeader() {
  const { statusFilter, dateFilter } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  return (
    <div className="todo-subheader">
      <DatePicker
        placeholder="All"
        date={dateFilter}
        setDate={(val) => dispatch(setDateFilter(val))}
      />
      <DropdownMenu
        icon={"filter_alt"}
        activeOption={statusFilter}
        setActiveOption={(val) => dispatch(setStatusFilter(val))}
        options={["Incomplete", "Completed", "All"]}
      />
    </div>
  );
}
