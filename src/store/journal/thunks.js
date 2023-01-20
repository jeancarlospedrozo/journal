import { addNewNote } from "./journalSlice";

export const startNewNote = () => async (dispatch) => {
  dispatch(addNewNote());
};
