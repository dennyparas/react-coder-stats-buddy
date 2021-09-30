import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { NavLink } from "react-router-dom";
import MobileDrawer from "./MobileDrawer";

const useStyles = makeStyles((theme) => ({
  button: {
    "&.active": {
      background: "rgba(0, 0, 0, 0.04)",
    },
  },
}));

const Navbar: React.FC = () => {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "warning.dark" }}>
        <Container maxWidth="xl">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, fontFamily: "Poppins" }}
            >
              Coder Stats Buddy
            </Typography>
            <Box
              sx={{
                display: { xs: "none", sm: "none", md: "block", lg: "block" },
              }}
            >
              <Button
                sx={{ fontFamily: "Poppins" }}
                className={classes.button}
                color="inherit"
                exact
                component={NavLink}
                to="/"
              >
                Home
              </Button>
              <Button
                sx={{ fontFamily: "Poppins" }}
                className={classes.button}
                color="inherit"
                component={NavLink}
                to="/languages"
              >
                Language
              </Button>
              <Button
                sx={{ fontFamily: "Poppins" }}
                className={classes.button}
                color="inherit"
                component={NavLink}
                to="/repos"
              >
                Repos
              </Button>
              <Button
                sx={{ fontFamily: "Poppins" }}
                className={classes.button}
                color="inherit"
                component={NavLink}
                to="/users"
              >
                Users
              </Button>
            </Box>
            <MobileDrawer />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
