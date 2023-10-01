import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Case } from "../Pages/Case/Case";
import { Home } from "../Pages/Home/Home";

export const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case" element={<Case />} />
    </Routes>
  );
};
