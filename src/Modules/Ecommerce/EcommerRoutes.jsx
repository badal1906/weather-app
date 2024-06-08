import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Auth = lazy(() => import("./Auth/Signin"));
const Home = lazy(() => import("./Home/Home"));

const EcommerRoutes = () => {
  return (
    <Routes>
      <Route
        path="/signup"
        element={<Auth title="Sign Up" buttonText="Sign Up" type="signup" />}
      />{" "}
      <Route
        path="/login"
        element={<Auth title="Log In" buttonText="Login" type="login" />}
      />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
};

export default EcommerRoutes;
