import { Grid, Typography } from "@mui/material";
import React from "react";
import Card from "../../Components/Card";

const AirConditions = ({ data, isLoading, isFetching }) => {
  return (
    <Card sx={{ bgcolor: "#212A3B" }}>
      <Grid container>
        <Grid xs={12} sx={{ mb: "1rem" }}>
          Air conditions
        </Grid>
        <Grid xs={6} sx={{ mb: "1rem" }}>
          <Grid> Real Feel </Grid>
          <Typography>{data?.main?.feels_like} </Typography>
        </Grid>
        <Grid xs={6}>
          <Grid> Wind </Grid>
          <Typography>{data?.wind?.speed} km/h</Typography>
        </Grid>
        <Grid xs={6}>
          <Grid> Gust</Grid>
          <Typography>{data?.wind?.gust}</Typography>
        </Grid>
        <Grid xs={6}>
          <Grid>Pressure </Grid>
          <Typography>{data?.main?.pressure}</Typography>
        </Grid>
      </Grid>
    </Card>
  );
};

export default AirConditions;
