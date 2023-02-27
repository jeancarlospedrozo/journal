import { collection, doc, setDoc } from "firebase/firestore/lite";
import { firebaseDB } from "../../firebase/config";
import { addNewNote, createNote, setActiveNote } from "./journalSlice";

export const startNewNote = () => {
  return async (dispatch, getState) => {
    dispatch(createNote());
    const { uid } = getState().auth;

    const newNote = {
      title: "",
      body: "",
      date: new Date().getTime(),
    };

    const newDoc = doc(collection(firebaseDB, `${uid}/journal/notas`));
    console.log("🚀 ~ file: thunks.js:9 ~ startNewNote ~ newDoc", newDoc);

    await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;

    dispatch(addNewNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};
