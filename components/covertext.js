import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    padding: "70px 0",
    ["@media (max-width: 1300px)"]: {
      marginTop: "0rem",
    },
    ["@media (max-width: 1200px)"]: {
      marginTop: "-3.5rem",
    },
    ["@media (max-width: 1100px)"]: {
      marginTop: "-5rem",
    },
    ["@media (max-width: 1000px)"]: {
      marginTop: "-3rem",
    },
    ["@media (max-width: 900px)"]: {
      marginTop: "-3rem",
    },
    ["@media (max-width: 800px)"]: {
      marginTop: "-4rem",
    },
    ["@media (max-width: 700px)"]: {
      marginTop: "-3rem",
    },
    ["@media (max-width: 600px)"]: {
      marginTop: "-3rem",
    },
    ["@media (max-width: 500px)"]: {
      marginTop: "-3rem",
    },
    ["@media (max-width: 400px)"]: {
      marginTop: "-3rem",
    },
    ["@media (max-width: 300px)"]: {
      marginTop: "-5rem",
    },
  },
  coverTitle: {
    marginTop: "5rem",
    color: "#FFFFFF",
    fontFamily:
      "Lato, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif",
    fontWeight: "300",
    fontSize: "7rem",
    ["@media (max-width: 4000px)"]: {
      marginTop: "16rem",
      fontSize: "20rem",
    },
    ["@media (max-width: 3500px)"]: {
      marginTop: "16rem",
      fontSize: "17rem",
    },
    ["@media (max-width: 3000px)"]: {
      fontSize: "14rem",
    },
    ["@media (max-width: 2500px)"]: {
      marginTop: "15rem",
      fontSize: "12rem",
    },
    ["@media (max-width: 2000px)"]: {
      marginTop: "5rem",
      fontSize: "7rem",
    },
    ["@media (max-width: 1000px)"]: {
      fontSize: "5.5rem",
    },
    ["@media (max-width: 800px)"]: {
      fontSize: "4.5rem",
    },
    ["@media (max-width: 600px)"]: {
      fontSize: "3.5rem",
    },
    ["@media (max-width: 400px)"]: {
      fontSize: "2.5rem",
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
    fontFamily:
      "Poppins, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif",
    fontWeight: "300",
    fontSize: "1.3rem",
    ["@media (max-width: 4000px)"]: {
      fontSize: "3.5rem",
    },
    ["@media (max-width: 3500px)"]: {
      fontSize: "3rem",
    },
    ["@media (max-width: 3000px)"]: {
      fontSize: "2.5rem",
    },
    ["@media (max-width: 2500px)"]: {
      fontSize: "2rem",
    },
    ["@media (max-width: 2000px)"]: {
      fontSize: "1.3rem",
    },
    ["@media (max-width: 800px)"]: {
      fontSize: "0.9rem",
    },
    ["@media (max-width: 700px)"]: {
      fontSize: "0.8rem",
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
      fontSize: "1.2rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 900px)"]: {
      fontSize: "0.9rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 800px)"]: {
      fontSize: "0.75rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 700px)"]: {
      fontSize: "0.6rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 400px)"]: {
      fontSize: "0.3rem",
    },
  },
  coverButton: {
    backgroundColor: "#56377E",
    fontFamily:
      "Lato, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif",
    color: "#FFF",
    width: "20rem",
    height: "4rem",
    marginTop: "4rem",
    borderRadius: "30px",
    ["@media (max-width: 4000px)"]: {
      height: "11rem",
      width: "43rem",
      fontSize: "3rem",
    },
    ["@media (max-width: 3500px)"]: {
      height: "10rem",
      width: "40rem",
    },
    ["@media (max-width: 3000px)"]: {
      height: "9rem",
      width: "35rem",
      fontSize: "2.5rem",
    },
    ["@media (max-width: 2500px)"]: {
      height: "7rem",
      width: "25rem",
      fontSize: "2rem",
    },
    ["@media (max-width: 2000px)"]: {
      height: "4rem",
      width: "20rem",
      fontSize: "1rem",
    },
    ["@media (max-width: 500px)"]: {
      height: "4rem",
      width: "80%",
      fontSize: "1rem",
    },
    ["@media (max-width: 400px)"]: {
      height: "3.5rem",
      width: "80%",
      fontSize: "1rem",
    },
    ["@media (max-width: 300px)"]: {
      height: "3rem",
      width: "80%",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 1000px)"]: {
      marginTop: "4rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 900px)"]: {
      fontSize: "1rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 800px)"]: {
      fontSize: "1rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 700px)"]: {
      fontSize: "0.8rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 400px)"]: {
      fontSize: "0.2rem",
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
          <Button
            variant="contained"
            className={classes.coverButton}
            href="#mission"
          >
            EXPLORE OUR APP
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

export default covertext;
