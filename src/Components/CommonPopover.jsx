import { Popover, Grid, TextField, MenuItem, Button } from "@mui/material";
import React from "react";

const CommonPopover = ({
  open,
  anchorEl,
  handleClose,
  fields,
  onSubmit,
  onClear,
}) => {
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
      <Grid container direction="column" spacing={2} sx={{ p: 2 }}>
        {fields.map((field, index) => (
          <Grid item key={index}>
            {field.type === "text" && (
              <TextField
                label={field.label}
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                fullWidth
              />
            )}
            {field.type === "select" && (
              <TextField
                select
                label={field.label}
                value={field.value}
                onChange={(e) => field.onChange(e.target.value)}
                fullWidth
              >
                {field.options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.value}
                  </MenuItem>
                ))}
              </TextField>
            )}
          </Grid>
        ))}
        <Grid item>
          <Button onClick={onSubmit} variant="contained">
            Filter
          </Button>
          <Button sx={{ ml: "1rem" }} onClick={onClear} variant="outlined">
            Clear
          </Button>
        </Grid>
      </Grid>
    </Popover>
  );
};

export default CommonPopover;
