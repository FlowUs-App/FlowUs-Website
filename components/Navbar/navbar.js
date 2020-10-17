import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {},
  appbar: {
    background: "#56377E",
  },
  menuButton: {
    marginRight: theme.spacing(4),
  },
  navtext: {
    color: "white",
    marginRight: "0.8rem",
    fontSize: "1.2rem",
    ["@media (max-width: 800px)"]: {
      fontSize: "1.2rem",
    },
    ["@media (max-width: 700px)"]: {
      fontSize: "1rem",
    },
    ["@media (max-width: 600px)"]: {
      fontSize: "0.7rem",
    },
    ["@media (max-width: 500px)"]: {
      fontSize: "0.6rem",
    },
    ["@media (max-width: 400px)"]: {
      fontSize: "0.5rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 1000px)"]: {
      fontSize: "0.5rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 900px)"]: {
      fontSize: "0.5rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 800px)"]: {
      fontSize: "0.5rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 700px)"]: {
      fontSize: "0.5rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 600px)"]: {
      fontSize: "0.5rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 500px)"]: {
      fontSize: "0.5rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 400px)"]: {
      fontSize: "0.5rem",
    },
  },
}));

function navbar() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h2" className={classes.navtext}>
              Mission
            </Typography>
            <Typography variant="h1" className={classes.navtext}>
              Features
            </Typography>
            <Typography variant="h1" className={classes.navtext}>
              Community
            </Typography>
            <Typography variant="h1" className={classes.navtext}>
              Contact Us
            </Typography>
            <Typography variant="h1" className={classes.navtext}>
              Terms of services
            </Typography>
            <Button className={classes.navtext}>Login</Button>
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}

export default navbar;
