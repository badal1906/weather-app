import React, { useState, useDeferredValue } from "react";
import TextField from "@mui/material/TextField";
import { Button, Grid } from "@mui/material";
import { apiKey } from "../Modules/Weather/WeatherQuery";

const Search = ({ setLoc }) => {
  const [search, setSearch] = useState("");
  // const deferredSearch = useDeferredValue(search);

  const getLocation = async () => {
    if (!search.trim()) {
      return alert("Search Cannot be empty");
    }
    const loc = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${search}&limit=1&appid=${apiKey}`
    );

    const res = await loc.json();

    if (res.length)
      setLoc({
        lat: res?.[0].lat,
        lon: res?.[0].lon,
        cnt: res?.[0].country,
        name: res?.[0].name,
      });
    else {
      return alert("No Result found");
    }
  };

  return (
    <Grid sx={{ mb: "2rem" }}>
      <TextField
        placeholder="Search City or State"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        InputProps={{
          style: {
            color: "white",
            background: "#212A3B",
            height: "100%",
            padding: "4px",
          },
        }}
        variant="standard"
      />
      <Button
        sx={{ ml: "1rem", height: "100%" }}
        variant="contained"
        onClick={getLocation}
      >
        Search
      </Button>
    </Grid>
  );
};

export default Search;
