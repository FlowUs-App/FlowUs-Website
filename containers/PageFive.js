import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import useWindowDimensions from "../hooks/windowsize";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#FAFAFA",
    textAlign: "center",
    width: "100%",
  },
  comTitle: {
    marginTop: "5rem",
    color: "black",
    fontFamily:
      "Lato, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif",
    fontWeight: "300",
    fontSize: "3rem",
    ["@media (max-width: 1000px)"]: {
      fontSize: "2.5rem",
    },
    ["@media (max-width: 800px)"]: {
      fontSize: "2rem",
    },
    ["@media (max-width: 600px)"]: {
      fontSize: "1.5rem",
    },
    ["@media (max-width: 400px)"]: {
      fontSize: "1.5rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 1000px)"]: {
      fontSize: "3rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 900px)"]: {
      fontSize: "2.5rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 800px)"]: {
      fontSize: "2rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 700px)"]: {
      fontSize: "2rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 400px)"]: {
      fontSize: "1.5rem",
    },
  },
  comSubTitle: {
    color: "black",
    fontFamily:
      "Poppins, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif",
    fontWeight: "300",
    fontSize: "1rem",
    marginBottom: "4rem",
    ["@media (max-width: 800px)"]: {
      fontSize: "0.9rem",
    },
    ["@media (max-width: 700px)"]: {
      fontSize: "0.7rem",
    },
    ["@media (max-width: 600px)"]: {
      fontSize: "0.6rem",
    },
    ["@media (max-width: 500px)"]: {
      fontSize: "0.5rem",
    },
    ["@media (max-width: 400px)"]: {
      fontSize: "0.45rem",
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
  grid2: {
    backgroundColor: "#FAFAFA",
  },
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
    top: "1px",
    left: "-857px",
    right: "10px",
    bottom: "10px",
    margin: "auto",
    position: "absolute",
  },
  sportImg: {
    top: "-700px",
    left: "-px",
    right: "-1000px",
    bottom: "-px",
    margin: "auto",
    position: "absolute",
  },
  basketImg: {
    top: "-300px",
    left: "-px",
    right: "-1000px",
    bottom: "-px",
    margin: "auto",
    position: "absolute",
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
    marginTop: "5rem",
    fontFamily:
      "Poppins, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif",
    fontSize: "1rem",
    fontWeight: "normal",
  },
  card: {
    marginLeft: "5rem",
    background: "#fff",
  },
}));

function PageFive() {
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
          <Grid container direction="column">
            <Typography align="center" className={classes.comTitle}>
              Community Projects
            </Typography>
            <Typography align="center" className={classes.comSubTitle}>
              In the past we have launched and worked on several Community
              Projects.
            </Typography>
          </Grid>
          <Container>
            <Grid
              container
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
                      LiFit Cooking
                      <br /> Competitions.
                    </Typography>
                    <Grid />
                    <Grid item xs={12}>
                      <Typography
                        variant="body2"
                        component="p"
                        className={classes.MissionsSubTitle}
                      >
                        Once a month we launch a Cooking Competition in our
                        Community. The winners get featured on our instagram
                        channel.
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
                        INSTAGRAM
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
          <Grid container direction="column" className={classes.grid2}>
            <Typography align="center" className={classes.comTitle}>
              Community Projects
            </Typography>
            <Typography align="center" className={classes.comSubTitle}>
              In the past we have launched and worked on several Community
              Projects.
            </Typography>
          </Grid>
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
                    LiFit Cooking
                    <br /> Competitions.
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className={classes.MissionsSubTitle}
                  >
                    Once a month we launch a Cooking Competition in our
                    Community. The winners get featured on our instagram
                    channel.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" className={classes.featButton}>
                    INSTAGRAM
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6} className={classes.basketballcontainer}>
              <img className={classes.basketballImg} src="./veggie.jpg" />
            </Grid>
          </Grid>
        </>
      )}

      {touchDevice ? (
        <>
          <Container>
            <Grid
              container
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
                      LiFit Sports Challenges
                    </Typography>
                    <Grid />
                    <Grid item xs={12}>
                      <Typography
                        variant="body2"
                        component="p"
                        className={classes.MissionsSubTitle}
                      >
                        Like our Cooking Competitions we also launch every other
                        week a Sports Challenge, where each individual from our
                        community can take part. See more on our instagram
                        channel.
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
                        INSTAGRAM
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
            direction="row-reverse"
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
                    LiFit Sports Challenges
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className={classes.MissionsSubTitle}
                  >
                    Like our Cooking Competitions we also launch every other
                    week a Sports Challenge, where each individual from our
                    community can take part. See more on our instagram channel.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" className={classes.featButton}>
                    INSTAGRAM
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6} className={classes.basketballcontainer}>
              <img
                className={classes.sportImg}
                src="./skate.jpg"
                style={{ backgroundPosition: "bottom" }}
              />
            </Grid>
          </Grid>
        </>
      )}

      {touchDevice ? (
        <>
          <Container>
            <Grid
              container
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
                      LiFit Giveaways
                    </Typography>
                    <Grid />
                    <Grid item xs={12}>
                      <Typography
                        variant="body2"
                        component="p"
                        className={classes.MissionsSubTitle}
                      >
                        It is important for us to give back to our community,
                        therefore we launch giveaways to appreciate loyal
                        members of our community. The prizes are always fitness
                        related and can be put into use immediately.
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
                        INSTAGRAM
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
                    LiFit Giveaways
                  </Typography>
                  <Typography
                    variant="body2"
                    component="p"
                    className={classes.MissionsSubTitle}
                  >
                    It is important for us to give back to our community,
                    therefore we launch giveaways to appreciate loyal members of
                    our community. The prizes are always fitness related and can
                    be put into use immediately.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" className={classes.featButton}>
                    INSTAGRAM
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={6} className={classes.basketballcontainer}>
              <img
                className={classes.basketImg}
                src="./basket.jpg"
                style={{ backgroundPosition: "bottom" }}
              />
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
}

export default PageFive;
