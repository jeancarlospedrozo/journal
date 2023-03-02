import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import { ImageGallery } from "./ImageGallery";

export const NoteViews = () => {
  const { active: activeNote } = useSelector((state) => state.journal);
  const { title, body, date } = activeNote;

  return (
    <Formik initialValues={{ title, body, date }}>
      {(formik) => (
        <Form>
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
              <Field
                as={TextField}
                id="outlined-basic"
                name="title"
                label="Título"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
                // value={title}
                // onChange={}
              />
              <Field
                as={TextField}
                id="outlined-basic"
                name="body"
                label="¿Qué sucedió hoy?"
                variant="outlined"
                fullWidth
                multiline
                minRows={5}
                // value={body}
                // onChange={}
              />
            </Grid>
            <ImageGallery />
          </Grid>
        </Form>
      )}
    </Formik>
  );
};
