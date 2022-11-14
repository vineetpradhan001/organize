import React from "react";

import "./index.css";

export default function Placeholder(props) {
  return (
    <div className="placeholder">
      <img src={`/${props.image}`} alt={props.text} />
      <span>{props.text}</span>
    </div>
  );
}
