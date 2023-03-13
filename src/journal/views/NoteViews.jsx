import { SaveOutlined } from "@mui/icons-material";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Field, Form, Formik, useFormikContext } from "formik";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";
import { startSavingNote } from "../../store/journal/thunks";
import { ImageGallery } from "./ImageGallery";

export const NoteViews = () => {
  const { active: activeNote } = useSelector((state) => state.journal);
  const { title, body, id, date, imageUrls } = activeNote;
  const dispatch = useDispatch();

  const onSaveNote = () => {
    dispatch(startSavingNote());
  };

  const Values = () => {
    const values = useFormikContext();

    useEffect(() => {
      console.log(values);
      if (values.dirty) {
        dispatch(setActiveNote(values.values));
      }
    }, [values.values]);
  };

  // const getValues = (values) => console.log(values);

  return (
    <Formik
      initialValues={{ title, body, id, date, imageUrls }}
      onSubmit={async (values) => {
        console.log(values);
      }}
      enableReinitialize
    >
      {({ values }) => (
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
              <Button variant="contained" onClick={onSaveNote()}>
                <SaveOutlined sx={{ mr: 1 }} />
                Guardar
              </Button>
            </Grid>
            <Grid container>
              <Field
                as={TextField}
                id="title"
                name="title"
                label="Título"
                variant="outlined"
                fullWidth
                sx={{ mb: 2 }}
                // value={formik.values.title}
                // onChange={(e) => {
                //   console.log(e.currentTarget.name, e.currentTarget.value);
                //   formik.handleChange(e);
                // }}
              />
              <Field
                as={TextField}
                id="body"
                name="body"
                label="¿Qué sucedió hoy?"
                variant="outlined"
                fullWidth
                multiline
                minRows={5}
                // value={body}
              />
            </Grid>
            <ImageGallery />
          </Grid>
          <Values />
        </Form>
      )}
    </Formik>
  );
};
