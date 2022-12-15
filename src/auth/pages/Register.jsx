import { Button, Grid, Link, TextField } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { createUserEmail } from "../../store/auth/thunks";

export const Register = () => {
  const dispatch = useDispatch();
  return (
    <AuthLayout title="Register">
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          dispatch(createUserEmail(values));
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Name is required"),
          email: Yup.string("Enter your email")
            .email("Enter a valid email")
            .required("Email is required"),
          password: Yup.string("Enter your password")
            .min(8, "Password should be of minimum 8 characters length")
            .required("Password is required"),
        })}
      >
        {({ errors, touched }) => (
          <Form>
            <Field
              as={TextField}
              margin="normal"
              autoComplete="given-name"
              name="name"
              fullWidth
              id="name"
              label="Name"
              autoFocus
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
            />
            <Field
              as={TextField}
              margin="normal"
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
            <Field
              as={TextField}
              margin="normal"
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="new-password"
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />
            <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>
              <Grid item xs={12}>
                <Button type="submit" fullWidth variant="contained">
                  Sign Up
                </Button>
              </Grid>
            </Grid>
            <Grid container>
              <Grid item>
                <Link
                  component={RouterLink}
                  to="/auth/login"
                  variant="body2"
                  underline="none"
                >
                  {"Already have an account? Sign in"}
                </Link>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </AuthLayout>
  );
};
