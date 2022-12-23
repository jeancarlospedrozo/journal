import {
  createUserWithEmail,
  logoutFirebase,
  signInWithEmail,
  signInWithGoogle,
} from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice";

export const checkingAuthentication = (email, password) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
  };
};

export const createUserEmail = ({ name, email, password }) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await createUserWithEmail({ name, email, password });
    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};

export const startGoogleSingIn = () => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithGoogle();
    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};

export const startEmailSignIn = (values) => {
  return async (dispatch) => {
    dispatch(checkingCredentials());
    const result = await signInWithEmail(values);
    if (!result.ok) return dispatch(logout(result.errorMessage));

    dispatch(login(result));
  };
};

export const logoutSession = () => {
  return async (dispatch) => {
    await logoutFirebase();
    dispatch(logout());
  };
};
