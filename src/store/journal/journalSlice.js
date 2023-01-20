import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSave: true,
  saveMessage: "",
  notes: [],
  active: null,
};

export const journalSlice = createSlice({
  name: "journal",
  initialState,
  reducers: {
    addNewNote: (state, action) => {},
    setActiveNote: (state, action) => {},
    loadNotes: (state, action) => {},
    saveNotes: (state, action) => {},
    updateNote: (state, action) => {},
    deleteNote: (state, action) => {},
  },
});

export const {
  addNewNote,
  setActiveNote,
  loadNotes,
  saveNotes,
  updateNote,
  deleteNote,
} = journalSlice.actions;
export default journalSlice.reducer;
