import {
  Divider,
  Drawer,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  button: {
    "&.active": {
      background: "#d8d8d8de",
    },
  },
}));

const MobileDrawer: React.FC = () => {
  const classes = useStyles();
  const [open, setOpen] = useState<boolean>(false);
  return (
    <>
      <IconButton
        sx={{
          display: { xs: "block", sm: "block", md: "none", lg: "none" },
        }}
        edge="start"
        color="inherit"
        aria-label="open drawer"
        onClick={() => setOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box textAlign="center" p={2}>
          Navigation
        </Box>
        <Box sx={{ width: 250 }} onClick={() => setOpen(false)}>
          <Divider />
          <List>
            <ListItem
              exact
              className={classes.button}
              button
              component={NavLink}
              to="/"
            >
              <ListItemText primary={"Home"} />
            </ListItem>
          </List>
          <List>
            <ListItem
              exact
              className={classes.button}
              button
              component={NavLink}
              to="/languages"
            >
              <ListItemText primary={"Language"} />
            </ListItem>
          </List>
          <List>
            <ListItem
              exact
              className={classes.button}
              button
              component={NavLink}
              to="/repos"
            >
              <ListItemText primary={"Repos"} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default MobileDrawer;
