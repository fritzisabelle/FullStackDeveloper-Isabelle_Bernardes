import { Routes, Route } from "react-router-dom";
import { Case } from "../Pages/Case/Case";

export const RounterMain = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/case" element={<Register />} />
    </Routes>
  );
};
