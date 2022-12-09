import { Button, Grid, Link, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";

export const Register = () => {
  return (
    <AuthLayout title="Register">
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          autoComplete="given-name"
          name="name"
          required
          fullWidth
          id="name"
          label="Name"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="current-password"
        />
      </Box>
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
    </AuthLayout>
  );
};
