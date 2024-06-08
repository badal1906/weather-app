import React, { useState } from "react";
import Card from "../../Components/Card";
import Search from "../../Components/Search";
import Forecast from "./Forecast";
import AirConditions from "./AirConditions";
import WeeklyForecast from "./WeeklyForecast";
import { Grid, Typography } from "@mui/material";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useGetWeatherByLocationQuery } from "./WeatherQuery";

const WeatherHome = () => {
  const [loc, setLoc] = useState({
    lat: "",
    lon: "",
    name: "",
  });

  const { data, isLoading, isFetching } = useGetWeatherByLocationQuery(loc);

  return (
    <Card sx={{ height: "100vh" }}>
      <Search setLoc={setLoc} />
      <Grid container>
        <Grid xs={8}>
          <Home
            data={data}
            isLoading={isLoading}
            isFetching={isFetching}
            name={loc.name}
          />
          <Grid sx={{ mb: "3rem", mr: "1rem" }}>
            <Forecast location={loc} />
          </Grid>
          <Grid sx={{ mb: "1rem", mr: "1rem" }}>
            <AirConditions
              data={data}
              isLoading={isLoading}
              isFetching={isFetching}
            />
          </Grid>
        </Grid>
      </Grid>
    </Card>
  );
};

export default WeatherHome;

const Home = ({ data, isLoading, isFetching, name }) => {
  const degreeTemp = (temp) => {
    const res = temp - 273.15;
    return res.toFixed(2);
  };
  return (
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
          {!isLoading && !isFetching ? (
            <>
              <Typography>{data?.name}</Typography>
              <Typography>Humidity {data?.main?.humidity}%</Typography>
            </>
          ) : (
            "Loading"
          )}
        </Grid>
        <Grid mb={"1rem"}>
          <Typography>{degreeTemp(data?.main?.temp) || 0}</Typography>
        </Grid>
      </Grid>
      <Grid xs={4}>
        <WbSunnyIcon sx={{ fontSize: "120px" }} />
      </Grid>
    </Grid>
  );
};
