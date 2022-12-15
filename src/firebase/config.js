// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASeZGuCWMLIM61Tlm1PjutYlQMJ4jM9V8",
  authDomain: "react-project-44495.firebaseapp.com",
  projectId: "react-project-44495",
  storageBucket: "react-project-44495.appspot.com",
  messagingSenderId: "838985491295",
  appId: "1:838985491295:web:5854e89270f12ba9058cea",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);
