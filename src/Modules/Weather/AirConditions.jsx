import { Grid, Typography } from "@mui/material";
import React from "react";
import Card from "../../Components/Card";

const AirConditions = () => {
  return (
    <Card sx={{ bgcolor: "#212A3B" }}>
      <Grid container>
        <Grid xs={12}>Air conditions</Grid>
        <Grid xs={6}>
          <Grid> Real Feel </Grid>
          <Typography>30 *</Typography>
        </Grid>
        <Grid xs={6}>
          <Grid> Wind </Grid>
          <Typography>30 *</Typography>
        </Grid>
        <Grid xs={6}>
          <Grid> Chance of rain</Grid>
          <Typography>30 *</Typography>
        </Grid>
        <Grid xs={6}>
          <Grid>UV Index </Grid>
          <Typography>30 *</Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default AirConditions;
