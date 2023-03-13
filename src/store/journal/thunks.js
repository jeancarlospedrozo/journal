import { async } from "@firebase/util";
import { collection, doc, setDoc } from "firebase/firestore/lite";
import { firebaseDB } from "../../firebase/config";
import { loadNotes } from "../../helpers";
import {
  addNewNote,
  createNote,
  saveNotes,
  setActiveNote,
  setSaving,
  updateNote,
} from "./journalSlice";

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

    await setDoc(newDoc, newNote);

    newNote.id = newDoc.id;

    dispatch(addNewNote(newNote));
    dispatch(setActiveNote(newNote));
  };
};

export const startLoadingNotes = () => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const notes = await loadNotes(uid);

    dispatch(saveNotes(notes));
  };
};

export const startSavingNote = () => {
  return async (dispatch, getState) => {
    dispatch(setSaving())
    const { uid } = getState().auth;
    const { active: noteActive } = getState().journal;

    const noteToFirestore = { ...noteActive };
    delete noteToFirestore.id;

    const docRef = doc(firebaseDB, `${uid}/journal/notas/${noteActive.id}`);
    await setDoc(docRef, noteToFirestore, { merge: true });

    dispatch(updateNote(noteActive))
  };
};
