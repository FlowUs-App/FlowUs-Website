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
    background: "#FFF",
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
    ["@media (max-width: 4000px)"]: {
      fontSize: "8rem",
    },
    ["@media (max-width: 3500px)"]: {
      fontSize: "7rem",
    },
    ["@media (max-width: 3000px)"]: {
      fontSize: "6rem",
    },
    ["@media (max-width: 2500px)"]: {
      fontSize: "5rem",
    },
    ["@media (max-width: 2000px)"]: {
      fontSize: "4rem",
    },
    ["@media (max-width: 1000px)"]: {
      fontSize: "4rem",
    },
    ["@media (max-width: 800px)"]: {
      textAlign: "start",
      fontSize: "3.5rem",
    },
    ["@media (max-width: 600px)"]: {
      fontSize: "3rem",
    },
    ["@media (max-width: 400px)"]: {
      fontSize: "2.5rem",
    },
    ["@media (max-width: 300px)"]: {
      fontSize: "2rem",
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
  mobileComTitle: {
    marginTop: "5rem",
    padding: 10,
    color: "black",
    fontFamily:
      "Lato, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif",
    fontWeight: "300",
    fontSize: "3rem",
    ["@media (max-width: 4000px)"]: {
      fontSize: "8rem",
    },
    ["@media (max-width: 3500px)"]: {
      fontSize: "7rem",
    },
    ["@media (max-width: 3000px)"]: {
      fontSize: "6rem",
    },
    ["@media (max-width: 2500px)"]: {
      fontSize: "5rem",
    },
    ["@media (max-width: 2000px)"]: {
      fontSize: "4rem",
    },
    ["@media (max-width: 1000px)"]: {
      fontSize: "4rem",
    },
    ["@media (max-width: 800px)"]: {
      textAlign: "start",
      fontSize: "3.5rem",
    },
    ["@media (max-width: 600px)"]: {
      fontSize: "3rem",
    },
    ["@media (max-width: 400px)"]: {
      fontSize: "2.5rem",
    },
    ["@media (max-width: 300px)"]: {
      fontSize: "2rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 1000px)"]: {
      fontSize: "5.5rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 900px)"]: {
      fontSize: "5rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 800px)"]: {
      fontSize: "4.5rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 700px)"]: {
      fontSize: "3rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 400px)"]: {
      fontSize: "2rem",
    },
  },
  comSubTitle: {
    color: "black",
    fontFamily:
      "Poppins, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif",
    fontWeight: "300",
    fontSize: "1rem",
    marginBottom: "4rem",
    ["@media (max-width: 4000px)"]: {
      fontSize: "2rem",
    },
    ["@media (max-width: 3500px)"]: {
      fontSize: "1.6rem",
    },
    ["@media (max-width: 3000px)"]: {
      fontSize: "1.4rem",
    },
    ["@media (max-width: 2500px)"]: {
      fontSize: "1.2rem",
    },
    ["@media (max-width: 2000px)"]: {
      fontSize: "1rem",
    },
    ["@media (max-width: 800px)"]: {
      textAlign: "start",
      marginTop: "1.5rem",
      fontSize: "1rem",
    },
    ["@media (max-width: 700px)"]: {
      fontSize: "1rem",
    },
    ["@media (max-width: 600px)"]: {
      fontSize: "1rem",
    },
    ["@media (max-width: 500px)"]: {
      fontSize: "1rem",
    },
    ["@media (max-width: 400px)"]: {
      fontSize: "0.7rem",
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
  mobileComSubTitle: {
    color: "black",
    marginLeft: "1rem",
    fontFamily:
      "Poppins, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif",
    fontWeight: "300",
    fontSize: "1rem",
    marginBottom: "4rem",
    ["@media (max-width: 4000px)"]: {
      fontSize: "2rem",
    },
    ["@media (max-width: 3500px)"]: {
      fontSize: "1.6rem",
    },
    ["@media (max-width: 3000px)"]: {
      fontSize: "1.4rem",
    },
    ["@media (max-width: 2500px)"]: {
      fontSize: "1.2rem",
    },
    ["@media (max-width: 2000px)"]: {
      fontSize: "1rem",
    },
    ["@media (max-width: 800px)"]: {
      textAlign: "start",
      marginTop: "1.5rem",
      fontSize: "1rem",
    },
    ["@media (max-width: 700px)"]: {
      fontSize: "1rem",
    },
    ["@media (max-width: 600px)"]: {
      fontSize: "1rem",
    },
    ["@media (max-width: 500px)"]: {
      fontSize: "1rem",
    },
    ["@media (max-width: 400px)"]: {
      fontSize: "0.7rem",
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
  },
  basketballImg: {
    top: "1px",
    left: "-857px",
    right: "10px",
    bottom: "10px",
    margin: "auto",
    position: "absolute",
    ["@media (max-width: 4000px)"]: {
      position: "absolute",
      top: "-700px",
      left: "-999px",
      right: "-999px",
      bottom: "-999px",
      margin: "auto",
    },
    ["@media (max-width: 2000px)"]: {
      top: "-700px",
      left: "-999px",
      right: "-999px",
      bottom: "-999px",
      margin: "auto",
      position: "absolute",
    },
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
    ["@media (max-width: 4000px)"]: {
      fontSize: "12rem",
    },
    ["@media (max-width: 3500px)"]: {
      fontSize: "10rem",
    },
    ["@media (max-width: 3000px)"]: {
      fontSize: "8rem",
    },
    ["@media (max-width: 2500px)"]: {
      fontSize: "6rem",
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
      fontSize: "3rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 400px)"]: {
      fontSize: "2.5rem",
    },
  },
  MissionsSubTitle: {
    color: "black",
    marginTop: "5rem",
    fontFamily:
      "Poppins, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif",
    fontSize: "1rem",
    fontWeight: "normal",
    ["@media (max-width: 4000px)"]: {
      fontSize: "3.5rem",
    },
    ["@media (max-width: 3500px)"]: {
      fontSize: "3rem",
    },
    ["@media (max-width: 3000px)"]: {
      fontSize: "2.8rem",
    },
    ["@media (max-width: 2500px)"]: {
      fontSize: "2.6rem",
    },
    ["@media (max-width: 2000px)"]: {
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
  card: {
    marginLeft: "5rem",
    background: "#fff",
  },
}));

function PageFive() {
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
          <Grid container direction="column">
            <d id="community"></d>
            <Typography align="center" className={classes.mobileComTitle}>
              Community Projects
            </Typography>
            <Typography align="center" className={classes.mobileComSubTitle}>
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
                        Once a month we launch a Cooking Competition
                        <br /> in our Community. The winners get featured on our
                        <br /> instagram channel.
                      </Typography>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Grid item xs={12}>
                      <Button
                        href="https://www.instagram.com/lifit.magazine/"
                        target="_blank"
                        variant="contained"
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
            <d id="community"></d>
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
                    Once a month we launch a Cooking Competition
                    <br /> in our Community. The winners get featured on our
                    <br /> instagram channel.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    href="https://www.instagram.com/lifit.magazine/"
                    target="_blank"
                    variant="contained"
                    className={classes.featButton}
                  >
                    INSTAGRAM
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
                src="./veggie.jpg"
                style={{ height: imgHeight }}
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
                        Like our Cooking Competitions we also launch every
                        <br /> other week a Sports Challenge, where each
                        individual
                        <br /> from our community can take part. See more on our
                        <br /> instagram channel. channel.
                      </Typography>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Grid item xs={12}>
                      <Button
                        href="https://www.instagram.com/lifit.magazine/"
                        target="_blank"
                        variant="contained"
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
                    Like our Cooking Competitions we also launch every
                    <br /> other week a Sports Challenge, where each individual
                    <br /> from our community can take part. See more on our
                    <br /> instagram channel.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    href="https://www.instagram.com/lifit.magazine/"
                    target="_blank"
                    variant="contained"
                    className={classes.featButton}
                  >
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
              style={{ marginLeft: "0rem", marginBottom: "5rem" }}
            >
              <Grid item xs={12}>
                <Card className={classes.root} elevation={0}>
                  <CardContent>
                    <Typography
                      variant="h5"
                      component="h2"
                      style={{ marginBottom: "3rem" }}
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
                        <br />
                        therefore we launch giveaways to appreciate
                        <br /> loyal members of our community.
                        <br /> The prizes are always fitness related and can
                        <br />
                        be put into use immediately.
                      </Typography>
                    </Grid>
                  </CardContent>
                  <CardActions>
                    <Grid item xs={12}>
                      <Button
                        href="https://www.instagram.com/lifit.magazine/"
                        target="_blank"
                        variant="contained"
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
                    <br />
                    therefore we launch giveaways to appreciate
                    <br /> loyal members of our community.
                    <br /> The prizes are always fitness related and can
                    <br />
                    be put into use immediately.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    href="https://www.instagram.com/lifit.magazine/"
                    target="_blank"
                    variant="contained"
                    className={classes.featButton}
                  >
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
