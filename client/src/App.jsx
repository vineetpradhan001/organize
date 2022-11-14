import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Home from "./pages/home";
import Todo from "./pages/todos";
import Placeholder from "./components/placeholder";

import "./index.css";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
        <Route
          path="*"
          element={
            <Placeholder text="Page Not Found :(" image="notFound.svg" />
          }
        />
      </Routes>
    </>
  );
}
