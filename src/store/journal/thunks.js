import { collection, doc, setDoc } from "firebase/firestore/lite";
import { firebaseDB } from "../../firebase/config";
import { addNewNote } from "./journalSlice";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    // console.log("🚀 ~ file: thunks.js:7 ~ return ~ getState", getState());
    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(firebaseDB, `${uid}/journal/notas`));
    console.log("🚀 ~ file: thunks.js:9 ~ startNewNote ~ newDoc", newDoc);

    await setDoc(newDoc, newNote);

    // dispatch(addNewNote());
  };
};
