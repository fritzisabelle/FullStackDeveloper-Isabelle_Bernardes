import React from 'react'
import { Routes, Route } from "react-router-dom";
import { Case } from "../Pages/Case/Case";
import { Home } from "../Pages/Home/Home";
import { RecentWork } from '../Pages/RecentWork';

export const RouterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/case/:id" element={<Case />} />
      <Route path="/recentWork" element={<RecentWork />} />
    </Routes>
  );
};
