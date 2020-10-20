import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles({
  root: {
    margin: "-0.2rem",
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
  basketballImg: {
    width: "100%",
    height: "100%",
  },
  basketballImgMobile: {
    width: "100%",
    height: "100%",
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
  useEffect(() => {
    setTouchDevice("ontouchstart" in document.documentElement);
  }, []);
  const [touchDevice, setTouchDevice] = React.useState(false);
  return (
    <>
      {touchDevice ? (
        <>
          <Grid container className={classes.grid} direction="row" spacing={0}>
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
                      It doesn´t matter in which domain of your life, to achieve
                      Greatness you need full focus on your goals. <br /> <br />
                      We created LiFit to bring you help to achieve each of your
                      goals in the fitness-space. <br /> <br />
                      Meanwhile you will meet lots of like-minded people on your
                      journey.
                    </Typography>
                  </Grid>
                </CardContent>
                <CardActions>
                  <Grid item xs={12}>
                    <Button
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
            <Grid item xs={12}>
              <img
                className={classes.basketballImgMobile}
                src="./baskteball.jpg"
                style={{ width: "100%" }}
              />
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <Grid container className={classes.grid} direction="row" spacing={0}>
            <Grid item xs={6}>
              <Card className={(classes.root, classes.card)} elevation={0}>
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
                    It doesn´t matter in which domain of your life, to achieve
                    Greatness you need full focus on your goals. <br /> <br />
                    We created LiFit to bring you help to achieve each of your
                    goals in the fitness-space. <br /> <br />
                    Meanwhile you will meet lots of like-minded people on your
                    journey.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" className={classes.featButton}>
                    VIEW OUR FEATURES
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6}>
              <img className={classes.basketballImg} src="./baskteball.jpg" />
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
}

export default PageTwo;
