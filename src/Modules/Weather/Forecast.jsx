import React from "react";
import Card from "../../Components/Card";
import { Grid, Typography } from "@mui/material";

const Forecast = () => {
  return (
    <Card sx={{ bgcolor: "#212A3B" }}>
      <Grid container>
        <Grid xs={12}>Todays Forecast</Grid>
        <Grid item xs={12 / 7}>
          <Typography>6 : 00 AM</Typography>
          <Typography>25 *</Typography>
        </Grid>{" "}
        <Grid item xs={12 / 7}>
          <Typography>6 : 00 AM</Typography>
          <Typography>25 *</Typography>
        </Grid>{" "}
        <Grid item xs={12 / 7}>
          <Typography>6 : 00 AM</Typography>
          <Typography>25 *</Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default Forecast;
