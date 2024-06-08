import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

const Search = () => {
  const [location, setLocation] = useState("");
  return (
    <>
      <TextField
        placeholder="Search City or State"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
      <Button variant="contained"> Search</Button>
    </>
  );
};

export default Search;
