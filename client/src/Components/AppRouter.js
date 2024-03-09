import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import LandingPage from "../Pages/LandingPage";
import Optionpage from "../Pages/Optionpage";
import Thome from "../Pages/Tutor/Thome";
import NotFoundPage from "../Pages/Authentication/NotFoundPage";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import ForgotPassword from "../Pages/Authentication/ForgotPassword";
import ResetPassword from "../Pages/Authentication/ResetPassword";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/choice" element={<Optionpage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/resetPassword" element={<ResetPassword />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/home" element={<Thome />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

function ProtectedRoutes() {
  const currentUser = localStorage.getItem("user");
  console.log(currentUser);

  return currentUser ? <Outlet /> : <Navigate to="/" />;
}
