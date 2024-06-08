import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "./Auth/Signin";
import Home from "./Home/Home";
import { useSelector } from "react-redux";

const EcommerRoutes = () => {
  const user = useSelector((s) => s.user.user);
  return (
    <Routes>
      <Route
        path="/signup"
        element={<Signin title="Sign Up" buttonText="Sign Up" type="signup" />}
      />{" "}
      <Route
        path="/login"
        element={<Signin title="Log In" buttonText="Login" type="login" />}
      />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default EcommerRoutes;
