import React from "react";
import { useNavigate } from "react-router-dom";

import "./index.css";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main className="home">
      <button className="home__button" onClick={() => navigate("/todo")}>
        Todo
      </button>
    </main>
  );
}
