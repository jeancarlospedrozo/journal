import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { firebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(firebaseAuth, googleProvider);
    const credentials = GoogleAuthProvider.credentialFromResult(result);

    // The signed-in user info.
    const { displayName, email, photoURL, uid } = result.user;

    return {
      ok: true,
      displayName,
      email,
      photoURL,
      uid,
    };
  } catch (error) {
    const errorCode = error.code;
    const errorMessage = error.message;

    return {
      ok: false,
      errorCode,
      errorMessage,
    };
  }
};

export const createUserWithEmail = async ({ name, email, password }) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password
    );

    const user = userCredential.user;
    await updateProfile(firebaseAuth.currentUser, {
      displayName: name,
    });

    return { ok: true, ...user };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

export const signInWithEmail = async (userValues) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      firebaseAuth,
      userValues.email,
      userValues.password
    );
    const user = userCredential.user;
    return { ok: true, ...user };
  } catch (error) {
    return {
      ok: false,
      errorMessage: error.message,
    };
  }
};

export const logoutFirebase = async () => {
  return await firebaseAuth.signOut();
};
