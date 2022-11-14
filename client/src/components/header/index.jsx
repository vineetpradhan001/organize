import React from "react";
import { useNavigate } from "react-router-dom";

import "./index.css";

export default function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <div className="header__title">
        <img src="/logo.svg" alt="" onClick={() => navigate("/")} />
        <span onClick={() => navigate("/")}>Organize</span>
      </div>
      <nav className="header__nav"></nav>
    </header>
  );
}
