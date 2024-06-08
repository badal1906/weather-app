import React from "react";
import Card from "../../Components/Card";
import Search from "../../Components/Search";
import Forecast from "./Forecast";
import AirConditions from "./AirConditions";
import WeeklyForecast from "./WeeklyForecast";
import { Grid, Typography } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

const WeatherHome = () => {
  return (
    <Card sx={{ height: "100vh" }}>
      <Search />
      <Grid container>
        <Grid xs={8}>
          <Grid container>
            <Grid
              xs={8}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Grid>
                <Typography>Madrid</Typography>
                <Typography>chance of rain 0 %</Typography>
              </Grid>
              <Grid mb={"1rem"}>
                <Typography>41 *</Typography>
              </Grid>
            </Grid>
            <Grid xs={4}>
              <WbSunnyIcon sx={{ fontSize: "120px" }} />
            </Grid>
          </Grid>
          <Grid sx={{ mb: "1rem", mr: "1rem" }}>
            <Forecast />
          </Grid>
          <Grid sx={{ mb: "1rem", mr: "1rem" }}>
            <AirConditions />
          </Grid>
        </Grid>
        <Grid xs={4}>
          <WeeklyForecast />
        </Grid>
      </Grid>
    </Card>
  );
};

export default WeatherHome;
