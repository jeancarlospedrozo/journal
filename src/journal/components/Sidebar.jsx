import {
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";

export const Sidebar = ({ drawerWidth }) => {
  const dispatch = useDispatch();

  const getInfo = useSelector((state) => state.auth);
  const { notes } = useSelector((state) => state.journal);

  const handleClick = (note) => {
    dispatch(setActiveNote({ ...note, title: note.title, body: note.body }));
  };

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    "& .MuiDrawer-paper": {
      position: "relative",
      whiteSpace: "nowrap",
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: "border-box",
      ...(!open && {
        overflowX: "hidden",
        transition: theme.transitions.create("width", {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
          width: theme.spacing(9),
        },
      }),
    },
  }));

  return (
    <Drawer variant="permanent" open>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          px: [1],
        }}
      >
        <Typography>{getInfo.displayName}</Typography>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
      </Toolbar>
      <Divider />
      <List component="nav">
        {notes.map((note, index) => (
          <ListItem key={note.id} disablePadding>
            <ListItemButton onClick={() => handleClick(note)}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <Grid container>
                <ListItemText primary={note.title} />
                <ListItemText secondary="Lorem ipsum" />
              </Grid>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};
