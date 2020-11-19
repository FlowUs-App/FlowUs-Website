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
      width: "20rem",
      height: "4rem",
      fontSize: "1rem",
    },
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
    ["@media (max-width: 2000px)"]: {
      height: "1200px !important",
    },
  },
  MissionTitle: {
    color: "black",
    fontFamily:
      "Lato, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif",
    fontSize: "4rem",
    fontWeight: 300,
    ["@media (max-width: 4000px)"]: {
      fontSize: "14rem",
    },
    ["@media (max-width: 3500px)"]: {
      fontSize: "12rem",
    },
    ["@media (max-width: 3000px)"]: {
      fontSize: "10rem",
    },
    ["@media (max-width: 2500px)"]: {
      fontSize: "8rem",
    },
    ["@media (max-width: 2000px)"]: {
      fontSize: "4rem",
    },
    ["@media (max-width: 800px)"]: {
      textAlign: "start",
      marginTop: "1.5rem",
      fontSize: "4rem",
    },
    ["@media (max-width: 700px)"]: {
      fontSize: "4rem",
    },
    ["@media (max-width: 600px)"]: {
      fontSize: "4rem",
    },
    ["@media (max-width: 500px)"]: {
      fontSize: "3rem",
    },
    ["@media (max-width: 400px)"]: {
      fontSize: "2.5rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 1000px)"]: {
      fontSize: "5rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 900px)"]: {
      fontSize: "4.5rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 800px)"]: {
      fontSize: "4rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 700px)"]: {
      fontSize: "3.5rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 400px)"]: {
      fontSize: "0.5rem",
    },
  },
  MissionsSubTitle: {
    color: "black",
    fontFamily:
      "Poppins, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif",
    fontSize: "1rem",
    fontWeight: "normal",
    ["@media (max-width: 4000px)"]: {
      marginTop: "2.5rem",
      fontSize: "2.6rem",
    },
    ["@media (max-width: 3500px)"]: {
      marginTop: "2.5rem",
      fontSize: "2.5rem",
    },
    ["@media (max-width: 3000px)"]: {
      marginTop: "2rem",
      fontSize: "2.4rem",
    },
    ["@media (max-width: 2500px)"]: {
      marginTop: "2rem",
    },
    ["@media (max-width: 2000px)"]: {
      marginTop: "1.5rem",
      fontSize: "1rem",
    },
    ["@media (max-width: 800px)"]: {
      textAlign: "start",
      marginTop: "1.5rem",
      fontSize: "2.2rem",
    },
    ["@media (max-width: 700px)"]: {
      fontSize: "2rem",
    },
    ["@media (max-width: 600px)"]: {
      fontSize: "1.5rem",
    },
    ["@media (max-width: 500px)"]: {
      fontSize: "1rem",
    },
    ["@media (max-width: 400px)"]: {
      fontSize: "0.8rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 1000px)"]: {
      fontSize: "1.2rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 900px)"]: {
      fontSize: "1.1rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 800px)"]: {
      fontSize: "1rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 700px)"]: {
      fontSize: "0.9rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 400px)"]: {
      fontSize: "0.3rem",
    },
  },
  card: {
    marginLeft: "5rem",
  },
});

function PageTwo() {
  const classes = useStyles();
  const { height } = useWindowDimensions();
  const halfHeight = height / 6;
  const imgHeight = height + halfHeight;
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
              <d id="mission"></d>
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
                        href="#features"
                        variant="contained"
                        style={{ width: "100%" }}
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
            <d id="mission"></d>
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
                  <Button
                    href="#features"
                    variant="contained"
                    className={classes.featButton}
                  >
                    VIEW OUR FEATURES
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid
              item
              xs={6}
              className={classes.basketballcontainer}
              style={{ height: height }}
            >
              <img
                className={classes.basketballImg}
                src="./sport.jpg"
                style={{ height: imgHeight }}
              />
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
}

export default PageTwo;
