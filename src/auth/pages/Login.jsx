import { Google } from "@mui/icons-material";
import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import * as Yup from "yup";

import { checkingCredentials } from "../../store/auth/authSlice";
import {
  checkingAuthentication,
  startEmailSignIn,
  startGoogleSingIn,
} from "../../store/auth/thunks";
import { AuthLayout } from "../layout/AuthLayout";

export const Login = () => {
  const { status, errorMessage } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <AuthLayout title="Login">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          // console.log(values);
          dispatch(startEmailSignIn(values));
        }}
        validationSchema={Yup.object({
          email: Yup.string("Enter your email")
            .email("Enter a valid email")
            .required("Email is required"),
          password: Yup.string("Enter your password").required(
            "Password is required"
          ),
        })}
      >
        {({ errors, touched }) => (
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
              autoComplete="current-password"
              error={touched.password && Boolean(errors.password)}
              helperText={touched.password && errors.password}
            />
            <Grid item xs={12} display={!!errorMessage ? "" : "none"}>
              <Alert severity="error">{errorMessage}</Alert>
            </Grid>
            <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>
              <Grid item xs={6}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  // onClick={() => dispatch(checkingAuthentication())}
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
        )}
      </Formik>
    </AuthLayout>
  );
};
