import React, { Suspense, lazy } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { Grid } from "@mui/material";

const Weather = lazy(() => import("./Modules/Weather/WeatherHome"));
const Ecom = lazy(() => import("./Modules/Ecommerce/EcommerRoutes"));

const App = () => {
  return (
    <Suspense fallback={"Loading"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="weather" element={<Weather />} />
          <Route path="/ecommerce*" element={<Ecom />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
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
