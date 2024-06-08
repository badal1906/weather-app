import React from "react";
import Card from "../../Components/Card";
import { Grid, Typography } from "@mui/material";

const WeeklyForecast = () => {
  return (
    <Card sx={{ bgcolor: "#212A3B", height: "100%" }}>
      <Grid container>
        <Grid xs={12}>7 - day Forecast</Grid>
        <Grid xs={12}>
          <Typography>Today</Typography>
          <Typography>Sunny</Typography>
          <Typography>36/22</Typography>
        </Grid>
        <Grid xs={12}>
          <Typography>Today</Typography>
          <Typography>Sunny</Typography>
          <Typography>36/22</Typography>
        </Grid>{" "}
        <Grid xs={12}>
          <Typography>Today</Typography>
          <Typography>Sunny</Typography>
          <Typography>36/22</Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default WeeklyForecast;
