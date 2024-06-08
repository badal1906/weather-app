import { Grid, InputLabel, TextField } from "@mui/material";
import React from "react";

const CommonInput = ({ state, setState, name, label, ...rest }) => {
  return (
    <Grid sx={{ mb: "1rem" }}>
      <InputLabel sx={{ color: "#fff", marginBottom: "4px" }}>
        {label}
      </InputLabel>
      <TextField
        fullWidth
        value={state}
        onChange={(e) => setState(e.target.value)}
        InputProps={{
          style: {
            color: "white",
            background: "#212A3B",
            height: "100%",
            padding: "4px",
          },
        }}
        variant="standard"
        {...rest}
      />
    </Grid>
  );
};

export default CommonInput;
