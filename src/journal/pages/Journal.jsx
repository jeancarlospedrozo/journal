import { AddOutlined } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { startNewNote } from "../../store/journal/thunks";
import { JournalLayout } from "../layout/JournalLayout";
import { NoteViews, NothingSelectedView } from "../views";

export const Journal = () => {
  const dispatch = useDispatch();

  const clickNewNote = () => {
    dispatch(startNewNote());
  };

  return (
    <JournalLayout>
      {/* <Typography variant={"h1"}>Journal</Typography> */}
      <NothingSelectedView />
      {/* <NoteViews /> */}
      <IconButton
        onClick={clickNewNote}
        size="large"
        sx={{
          position: "fixed",
          color: "white",
          backgroundColor: "#0063cc",
          ":hover": {
            backgroundColor: "#0069d9",
            borderColor: "#0062cc",
            boxShadow: "none",
          },
          right: 50,
          bottom: 50,
        }}
      >
        <AddOutlined />
      </IconButton>
    </JournalLayout>
  );
};
