import React from "react";
import Card from "../../Components/Card";
import { Divider, Grid, Typography } from "@mui/material";
import { useGetTodayForecastQuery } from "./WeatherQuery";

const Forecast = ({ location }) => {
  const { data, isLoading, isFetching } = useGetTodayForecastQuery(location);

  const degreeTemp = (temp) => {
    const res = temp - 273.15;
    return res.toFixed(2);
  };
  return (
    <Card sx={{ bgcolor: "#212A3B" }}>
      <Grid container>
        <Grid xs={12} sx={{ mb: "1rem" }}>
          Todays Forecast
        </Grid>
        {!isLoading &&
          !isFetching &&
          data &&
          data?.map((d, i) => (
            <>
              <Grid item xs={12 / 6} key={i}>
                <Typography>{d.dt_txt.split(" ")[1].slice(0, 5)}</Typography>
                <Typography>{degreeTemp(d.main.temp) || 0}</Typography>
              </Grid>
              <Divider orientation="vertical" sx={{ color: "#fff" }} />
            </>
          ))}
      </Grid>
    </Card>
  );
};

export default Forecast;
