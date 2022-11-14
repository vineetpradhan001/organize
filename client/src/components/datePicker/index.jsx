import React, { useRef } from "react";
import { changeDateFormat } from "../../utils";

import "./index.css";

export default function DatePicker(props) {
  const ref = useRef(null);

  return (
    <div className="date-picker" onClick={() => ref.current.showPicker()}>
      <input
        type="date"
        min={props.min}
        ref={ref}
        onChange={(e) => props.setDate(e.target.value.replaceAll("-", "/"))}
      />
      <span className="date-picker__date">
        {changeDateFormat(props.date) || props.placeholder}
      </span>
      <span className="material-icons-outlined">calendar_today</span>
    </div>
  );
}
