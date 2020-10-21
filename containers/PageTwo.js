import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import useWindowDimensions from "../hooks/windowsize";

const useStyles = makeStyles({
  root: {
    margin: "-0.2rem",
    overflowX: "hidden",
  },
  grid: {},
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  featButton: {
    backgroundColor: "#56377E",
    position: "center",
    fontFamily:
      "Lato, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif",
    color: "#FFF",
    width: "20rem",
    height: "4rem",
    marginTop: "2rem",
    borderRadius: "30px",

    ["@media (max-width: 500px)"]: {
      height: "4rem",
      width: "20rem",
      fontSize: "1rem",
    },
    ["@media (max-width: 400px)"]: {
      height: "3.5rem",
      fontSize: "1rem",
    },
    ["@media (max-width: 300px)"]: {
      height: "3rem",
      fontSize: "0.5rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 1000px)"]: {
      fontSize: "1rem",
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
  basketballcontainer: {
    position: "relative",
    overflow: "hidden",
    height: "100%",
  },
  basketballImg: {
    position: "absolute",
    top: "-700px",
    left: "-999px",
    right: "-999px",
    bottom: "-999px",
    margin: "auto",
  },
  MissionTitle: {
    color: "black",
    fontFamily:
      "Lato, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif",
    fontSize: "4rem",
    fontWeight: 300,
  },
  MissionsSubTitle: {
    color: "black",
    fontFamily:
      "Poppins, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif",
    fontSize: "1rem",
    fontWeight: "normal",
  },
  card: {
    marginLeft: "5rem",
  },
});

function PageTwo() {
  const classes = useStyles();
  const { height } = useWindowDimensions();
  const halfHeight = height / 6;
  useEffect(() => {
    setTouchDevice("ontouchstart" in document.documentElement);
  }, []);
  const [touchDevice, setTouchDevice] = useState(false);
  return (
    <>
      {touchDevice ? (
        <>
          <Container>
            <Grid
              container
              className={classes.grid}
              direction="column"
              justify="center"
              alignContent="center"
              spacing={0}
              style={{ marginLeft: "0rem" }}
            >
              <Grid item xs={12}>
                <Card className={classes.root} elevation={0}>
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="h2"
                      className={classes.MissionTitle}
                    >
                      Our Mission: <br /> Greatness.
                    </Typography>
                    <Grid />
                    <Grid item xs={12}>
                      <Typography
                        variant="body2"
                        component="p"
                        className={classes.MissionsSubTitle}
                      >
                        It doesn´t matter in which domain of your
                        <br /> life, to achieve
                        <br />
                        Greatness you need full focus on your
                        <br /> goals. <br /> <br />
                        We created LiFit to bring you
                        <br /> help to achieve each of
                        <br /> your goals in the fitness-space. <br /> <br />
                        Meanwhile you will meet lots of
                        <br /> like-minded people
                        <br /> on your journey.
                      </Typography>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Grid item xs={12}>
                      <Button
                        variant="contained"
                        style={{ width: "80%" }}
                        className={classes.featButton}
                      >
                        VIEW OUR FEATURES
                      </Button>
                    </Grid>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </>
      ) : (
        <>
          <Grid
            container
            className={classes.grid}
            direction="row"
            spacing={0}
            style={{ height: height }}
          >
            <Grid item xs={6}>
              <Card
                className={(classes.root, classes.card)}
                elevation={0}
                style={{ marginTop: halfHeight }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    component="h2"
                    className={classes.MissionTitle}
                  >
                    Our Mission: <br /> Greatness.
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className={classes.MissionsSubTitle}
                  >
                    It doesn´t matter in which domain of your life, to achieve{" "}
                    <br />
                    Greatness you need full focus on your goals. <br /> <br />
                    We created LiFit to bring you help to
                    <br /> achieve each of your goals in the fitness-space.{" "}
                    <br /> <br />
                    Meanwhile you will meet lots of like-minded people
                    <br /> on your journey.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" className={classes.featButton}>
                    VIEW OUR FEATURES
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6} className={classes.basketballcontainer}>
              <img className={classes.basketballImg} src="./sport.jpg" />
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
}

export default PageTwo;
