import { CircularProgress, Grid } from "@mui/material";
import React from "react";

export const CheckingAuthentication = () => {
  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{
        width: "100%",
        height: "100vh",
        backgroundColor: "#F4F6F7",
      }}
    >
      <Grid item>
        <CircularProgress color="primary" />
      </Grid>
    </Grid>
  );
};
