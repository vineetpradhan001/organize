import React, { useRef, useEffect, useState } from "react";

import "./index.css";

export default function DropdownMenu(props) {
  const [isActive, setIsActive] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const el = (e) => {
      if (!ref.current.contains(e.target)) {
        setIsActive(0);
      }
    };
    document.body.addEventListener("click", el);
    return () => document.body.removeEventListener("click", el);
  }, []);

  return (
    <div className="dropdown-menu" ref={ref}>
      <span
        className="dropdown-menu__active-option"
        onClick={() => setIsActive((prev) => !prev)}
      >
        {props.options[props.activeOption]}
      </span>
      <span
        className="material-icons-outlined"
        onClick={() => setIsActive((prev) => !prev)}
      >
        {props.icon}
      </span>
      {isActive ? (
        <div className="dropdown-menu__options">
          {props.options.map((option, index) =>
            props.activeOption === index ? null : (
              <div
                className="dropdown-menu__option"
                key={index}
                onClick={() => props.setActiveOption(index)}
              >
                {option}
              </div>
            )
          )}
        </div>
      ) : null}
    </div>
  );
}
