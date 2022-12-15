import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import { checkingCredentials } from "../../store/auth/authSlice";
import {
  checkingAuthentication,
  startGoogleSingIn,
} from "../../store/auth/thunks";
import { AuthLayout } from "../layout/AuthLayout";

export const Login = () => {
  const { status } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <AuthLayout title="Login">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <Field
            as={TextField}
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <Field
            as={TextField}
            margin="normal"
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>
            <Grid item xs={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={() => dispatch(checkingAuthentication())}
                disabled={status === "checking"}
              >
                Sign In
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                onClick={() => dispatch(startGoogleSingIn())}
                disabled={status === "checking"}
              >
                <Google />
                <Typography sx={{ ml: 1 }}>Google</Typography>
              </Button>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <Link
                component={RouterLink}
                to="/auth/register"
                variant="body2"
                underline="none"
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Form>
      </Formik>
    </AuthLayout>
  );
};
