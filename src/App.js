import React from "react";
import Search from "./Components/Search";
import Card from "./Components/Card";
import Forecast from "./Modules/Weather/Forecast";
import AirConditions from "./Modules/Weather/AirConditions";
import WeatherHome from "./Modules/Weather/WeatherHome";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import EcommerRoutes from "./Modules/Ecommerce/EcommerRoutes";
import { Grid } from "@mui/material";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="weather" element={<WeatherHome />} />
        <Route path="/ecommerce*" element={<EcommerRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

const Main = () => {
  return (
    <Grid>
      <Grid>
        <Link to={"weather"}>Weather app </Link>
      </Grid>
      <Grid sx={{ mt: "1rem" }}>
        <Link to={"ecommerce/signup"}>Ecommerce</Link>
      </Grid>
    </Grid>
  );
};
