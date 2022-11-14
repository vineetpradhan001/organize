import React from "react";

import "./index.css";

export default function Textarea(props) {
  const changeHandler = (e) => {
    props.onChange(e.target.value);
    e.target.style.height = "auto";
    if (e.target.scrollHeight > e.target.clientHeight)
      e.target.style.height = e.target.scrollHeight + "px";
  };

  return (
    <textarea
      value={props.value}
      onChange={changeHandler}
      rows={1}
      placeholder={props.placeholder}
      style={props.style}
    />
  );
}
