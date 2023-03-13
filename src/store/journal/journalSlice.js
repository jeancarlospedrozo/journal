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
      state.notes = action.payload;
    },
    setSaving: (state) => {
      state.isSave = true;
    },
    updateNote: (state, action) => {
      state.isSave = false
      state.notes = state.notes.map(note => {
        if (note.id === action.payload.id) {
          return action.payload
        }
        return note
      })
    },
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
  setSaving,
  updateNote,
} = journalSlice.actions;
export default journalSlice.reducer;
