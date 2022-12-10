import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import { ImageGallery } from "./ImageGallery";

export const NoteViews = () => {
  return (
    <Grid
      container
      direction={"row"}
      justifyContent="space-between"
      sx={{ mb: 1 }}
      alignItems="center"
    >
      <Grid item>
        <Typography fontSize={39}>Hola</Typography>
      </Grid>
      <Grid item>
        <Button variant="contained">
          <SaveOutlined sx={{ mr: 1 }} />
          Guardar
        </Button>
      </Grid>
      <Grid container>
        <TextField
          id="outlined-basic"
          label="Título"
          variant="outlined"
          fullWidth
          sx={{ mb: 2 }}
        />
        <TextField
          id="outlined-basic"
          label="¿Qué sucedió hoy?"
          variant="outlined"
          fullWidth
          multiline
          minRows={5}
        />
      </Grid>
      <ImageGallery />
    </Grid>
  );
};
