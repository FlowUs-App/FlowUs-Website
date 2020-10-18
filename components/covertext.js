import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    padding: "70px 0",
  },
  coverTitle: {
    color: "#FFFFFF",
    fontFamily: "Lato, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif", 
    fontWeight: "300",
    fontSize: "7rem",
    ["@media (max-width: 1000px)"]: {
      fontSize: "5rem",
    },
    ["@media (max-width: 900px)"]: {
      fontSize: "4.5rem",
    },
    ["@media (max-width: 800px)"]: {
      fontSize: "4rem",
    },
    ["@media (max-width: 700px)"]: {
      fontSize: "3rem",
    },
    ["@media (max-width: 600px)"]: {
      fontSize: "2.5rem",
    },
    ["@media (max-width: 500px)"]: {
      fontSize: "2rem",
    },
    ["@media (max-width: 400px)"]: {
      fontSize: "1.5rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 1000px)"]: {
      fontSize: "5rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 900px)"]: {
      fontSize: "4rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 800px)"]: {
      fontSize: "3rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 700px)"]: {
      fontSize: "2rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 400px)"]: {
      fontSize: "1.5rem",
    },
  },
  coverSubTitle: {
    color: "#FFFFFF",
    fontFamily: "Poppins, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif", 
    fontWeight: "300",
    fontSize: "1.5rem",
    ["@media (max-width: 800px)"]: {
      fontSize: "1rem",
    },
    ["@media (max-width: 700px)"]: {
      fontSize: "0.8rem",
    },
    ["@media (max-width: 600px)"]: {
      fontSize: "0.6rem",
    },
    ["@media (max-width: 500px)"]: {
      fontSize: "0.4rem",
    },
    ["@media (max-width: 400px)"]: {
      fontSize: "0.3rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 1000px)"]: {
      fontSize: "5rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 900px)"]: {
      fontSize: "4rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 800px)"]: {
      fontSize: "3rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 700px)"]: {
      fontSize: "2rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 400px)"]: {
      fontSize: "1.5rem",
    },
  },
  coverButton: {
    backgroundColor: "#56377E",
    fontFamily: "Lato, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif", 
    color: "#FFF",
    width: "20rem",
    height: "4rem",
    marginTop: "2rem",
    borderRadius: "30px",
    ["@media (max-width: 800px)"]: {
      height: "3rem",
      width: "15rem",
      fontSize: "1rem",
    },
    ["@media (max-width: 700px)"]: {
      height: "2.5rem",
      width: "12rem",
      fontSize: "0.8rem",
    },
    ["@media (max-width: 600px)"]: {
      height: "2rem",
      width: "10rem",
      fontSize: "0.6rem",
    },
    ["@media (max-width: 500px)"]: {
      height: "1.5rem",
      width: "8rem",
      fontSize: "0.4rem",
    },
    ["@media (max-width: 400px)"]: {
      height: "1rem",
      width: "5rem",
      fontSize: "0.2rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 1000px)"]: {
      fontSize: "5rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 900px)"]: {
      fontSize: "4rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 800px)"]: {
      fontSize: "3rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 700px)"]: {
      fontSize: "2rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 400px)"]: {
      fontSize: "1.5rem",
    },
    "&:hover": {
      background: "#56377E",
    },
  },
}));

function covertext() {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        className={classes.root}
        direction="column"
        alignContent="center"
      >
        <Grid item>
          <Typography align="center" className={classes.coverTitle}>
            The Fitness Social Network
          </Typography>
        </Grid>
        <Grid item>
          <Typography align="center" className={classes.coverSubTitle}>
            LiFit App gives you the unique opportunity to improve your life in
            the domains of nutrition, workouts and social.
          </Typography>
        </Grid>
        <Grid item>
          <Button variant="contained" className={classes.coverButton}>
            EXPLORE OUR APP
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default covertext;
