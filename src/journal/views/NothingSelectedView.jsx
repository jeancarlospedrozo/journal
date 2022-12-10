import { StarOutline } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import React from "react";

export const NothingSelectedView = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "80vh", backgroundColor: "#F4F6F7", padding: 4 }}
    >
      <Grid item>
        <StarOutline sx={{ fontSize: 120, color: "blue" }} />
      </Grid>
      <Grid item>
        <Typography>Selecciona o crea una opción</Typography>
      </Grid>
    </Grid>
  );
};
