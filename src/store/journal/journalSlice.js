import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isSave: false,
  saveMessage: "",
  notes: [],
  active: null,
};

export const journalSlice = createSlice({
  name: "journal",
  initialState,
  reducers: {
    createNote: (state) => {
      state.isSave = true;
    },
    addNewNote: (state, action) => {
      state.notes.push(action.payload);
      state.isSave = false;
    },
    setActiveNote: (state, action) => {
      state.active = action.payload;
    },
    loadNotes: (state, action) => {},
    saveNotes: (state, action) => {
      state.notes = action.payload
    },
    updateNote: (state, action) => {},
    deleteNote: (state, action) => {},
  },
});

export const {
  addNewNote,
  createNote,
  deleteNote,
  loadNotes,
  saveNotes,
  setActiveNote,
  updateNote,
} = journalSlice.actions;
export default journalSlice.reducer;
