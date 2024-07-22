import { Route, Routes } from "react-router-dom";
import { Admin } from "../components/pages/Admin";
import { Home } from "../components/pages/Home";
import { Login } from "../components/pages/Login";
import { Settings } from "../components/pages/Settings";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};
