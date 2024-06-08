import { Paper } from "@mui/material";
import React from "react";

const Card = (props) => {
  return (
    <Paper
      sx={{
        ...props.sx,
        bgcolor: props?.sx?.bgcolor ? props.sx.bgcolor : "#0B131E",
        color: "#FFF",
        padding: "1rem",
      }}
      elevation={4}
    >
      {props.children}
    </Paper>
  );
};

export default Card;
