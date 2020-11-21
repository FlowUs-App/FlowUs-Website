import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#FAFAFA",
  },
  featTitle: {
    marginTop: "5rem",
    color: "black",
    fontFamily:
      "Lato, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif",
    fontWeight: "300",
    fontSize: "3rem",
    ["@media (max-width: 4000px)"]: {
      marginTop: "9rem",
      fontSize: "7rem",
    },
    ["@media (max-width: 3000px)"]: {
      fontSize: "6rem",
    },
    ["@media (max-width: 2500px)"]: {
      fontSize: "5rem",
    },
    ["@media (max-width: 2000px)"]: {
      marginTop: "5rem",
      fontSize: "3rem",
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
  featSubTitle: {
    color: "black",
    fontFamily:
      "Poppins, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif",
    fontWeight: "300",
    fontSize: "1rem",
    marginBottom: "4rem",
    ["@media (max-width: 4000px)"]: {
      fontSize: "1.9rem",
    },
    ["@media (max-width: 3500px)"]: {
      fontSize: "1.7rem",
    },
    ["@media (max-width: 3000px)"]: {
      fontSize: "1.5rem",
    },
    ["@media (max-width: 2500px)"]: {
      fontSize: "1.5rem",
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
  paper: {
    background: "#fff",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    height: "22rem",
    ["@media (max-width: 4000px)"]: {
      height: "30rem",
    },
    ["@media (max-width: 3500px)"]: {
      height: "28rem",
    },
    ["@media (max-width: 3000px)"]: {
      height: "26rem",
    },
    ["@media (max-width: 2500px)"]: {
      height: "24rem",
    },
    ["@media (max-width: 2000px)"]: {
      height: "22rem",
    },
  },
  paperImg: {
    marginTop: "3rem",
    marginTop: "3.5rem",
    marginBottom: "2rem",
    ["@media (max-width: 4000px)"]: {
      marginTop: "6rem",
      marginBottom: "7rem",
    },
    ["@media (max-width: 3500px)"]: {
      marginTop: "5rem",
      marginBottom: "6rem",
    },
    ["@media (max-width: 3000px)"]: {
      marginTop: "4rem",
      marginBottom: "5rem",
    },
    ["@media (max-width: 2500px)"]: {
      marginTop: "3.5rem",
      marginBottom: "4rem",
    },
    ["@media (max-width: 2000px)"]: {
      marginBottom: "2rem",
    },
  },
  paperTitle: {
    textAlign: "center",
    fontSize: "1.3rem",
    fontFamily:
      "Lato, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif",
    marginBottom: "2rem",
    fontWeight: "bold",
    ["@media (max-width: 4000px)"]: {
      fontSize: "2.5em",
    },
    ["@media (max-width: 3500px)"]: {
      fontSize: "2rem",
    },
    ["@media (max-width: 3000px)"]: {
      fontSize: "1.8rem",
    },
    ["@media (max-width: 2500px)"]: {
      fontSize: "1.5rem",
    },
    ["@media (max-width: 2000px)"]: {
      fontSize: "1.3rem",
    },
  },
  paperSubTitle: {
    textAlign: "center",
    fontFamily:
      "Poppins, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif",
    fontSize: "1rem",
    marginLeft: "3rem",
    marginRight: "3rem",
    fontWeight: 300,
    ["@media (max-width: 4000px)"]: {
      fontSize: "1.5em",
    },
    ["@media (max-width: 3000px)"]: {
      fontSize: "1.5rem",
    },
    ["@media (max-width: 2500px)"]: {
      fontSize: "1.3rem",
    },
    ["@media (max-width: 2000px)"]: {
      fontSize: "1rem",
    },
  },
}));

function BulletPoints() {
  const classes = useStyles();
  useEffect(() => {
    setTouchDevice("ontouchstart" in document.documentElement);
  }, []);
  const [touchDevice, setTouchDevice] = React.useState(false);
  return (
    <>
      <div className={classes.root}>
        <Container>
          <Grid
            container
            direction="column"
            alignContent="center"
            justify="center"
          >
            <d id="features"></d>
            <Typography align="center" className={classes.featTitle}>
              Why use our Dashboard ?
            </Typography>
            <Grid item>
              <Typography align="center" className={classes.featSubTitle}>
                The Dashboard gives our Users unqiue features. Check them out
                below.
              </Typography>
            </Grid>

            {touchDevice ? (
              <>
                <Grid container direction="column" spacing={3}>
                  <Grid item xs={12}>
                    <Paper
                      className={classes.paper}
                      variant="outlined"
                      elevation={0}
                    >
                      <img
                        src="../market_icon.png"
                        className={classes.paperImg}
                      />
                      <Typography variant="h3" className={classes.paperTitle}>
                        Marketplace
                      </Typography>
                      <Typography
                        variant="h4"
                        className={classes.paperSubTitle}
                      >
                        Find business partners over our marketplace. We also
                        suggest you some.
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper
                      className={classes.paper}
                      variant="outlined"
                      elevation={0}
                    >
                      <img
                        src="../analytics_icon.png"
                        className={classes.paperImg}
                      />

                      <Typography variant="h3" className={classes.paperTitle}>
                        Analytics
                      </Typography>
                      <Typography
                        variant="h4"
                        className={classes.paperSubTitle}
                      >
                        Stay in the loop with everything regarding your presence
                        on the LiFit App.
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper
                      className={classes.paper}
                      variant="outlined"
                      elevation={0}
                    >
                      <img
                        src="../advertisments_icon.png"
                        className={classes.paperImg}
                      />
                      <Typography variant="h3" className={classes.paperTitle}>
                        Advertisments
                      </Typography>
                      <Typography
                        variant="h4"
                        className={classes.paperSubTitle}
                      >
                        Manage all your Advertisements easily and profit from
                        our secure Escrow-Service.
                      </Typography>
                    </Paper>
                  </Grid>

                  <Grid item xs={12}>
                    <Paper
                      className={classes.paper}
                      variant="outlined"
                      elevation={0}
                    >
                      <img src="../new_icon.png" className={classes.paperImg} />
                      <Typography variant="h3" className={classes.paperTitle}>
                        News
                      </Typography>
                      <Typography
                        variant="h4"
                        className={classes.paperSubTitle}
                      >
                        Never miss the latest trends and enjoy curated
                        Blog-Posts for Advertisers and Influencers.
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper
                      className={classes.paper}
                      variant="outlined"
                      elevation={0}
                    >
                      <img
                        src="../profile_icon.png"
                        className={classes.paperImg}
                      />
                      <Typography variant="h3" className={classes.paperTitle}>
                        Profile
                      </Typography>
                      <Typography
                        variant="h4"
                        className={classes.paperSubTitle}
                      >
                        Profit from extended Setting for your profile and an
                        easy way to manage your doings.
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper
                      className={classes.paper}
                      variant="outlined"
                      elevation={0}
                    >
                      <img
                        src="../support_icon.png"
                        className={classes.paperImg}
                      />

                      <Typography variant="h3" className={classes.paperTitle}>
                        Support
                      </Typography>
                      <Typography
                        variant="h4"
                        className={classes.paperSubTitle}
                      >
                        Do you have an issue? Don’t sweat it and contact our
                        competent Helpers via Live-Chat.
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </>
            ) : (
              <>
                <Grid container spacing={3}>
                  <d id="features"></d>
                  <Grid item xs={4}>
                    <Paper
                      className={classes.paper}
                      variant="outlined"
                      elevation={0}
                    >
                      <img
                        src="../market_icon.png"
                        className={classes.paperImg}
                      />
                      <Typography variant="h3" className={classes.paperTitle}>
                        Marketplace
                      </Typography>
                      <Typography
                        variant="h4"
                        className={classes.paperSubTitle}
                      >
                        Find business partners over our marketplace. We also
                        suggest you some.
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper
                      className={classes.paper}
                      variant="outlined"
                      elevation={0}
                    >
                      <img
                        src="../analytics_icon.png"
                        className={classes.paperImg}
                      />

                      <Typography variant="h3" className={classes.paperTitle}>
                        Analytics
                      </Typography>
                      <Typography
                        variant="h4"
                        className={classes.paperSubTitle}
                      >
                        Stay in the loop with everything regarding your presence
                        on the LiFit App.
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper
                      className={classes.paper}
                      variant="outlined"
                      elevation={0}
                    >
                      <img
                        src="../advertisments_icon.png"
                        className={classes.paperImg}
                      />

                      <Typography variant="h3" className={classes.paperTitle}>
                        Advertisments
                      </Typography>
                      <Typography
                        variant="h4"
                        className={classes.paperSubTitle}
                      >
                        Manage all your Advertisements easily and profit from
                        our secure Escrow-Service.
                      </Typography>
                    </Paper>
                  </Grid>

                  <Grid item xs={4}>
                    <Paper
                      className={classes.paper}
                      variant="outlined"
                      elevation={0}
                    >
                      <img src="../new_icon.png" className={classes.paperImg} />
                      <Typography variant="h3" className={classes.paperTitle}>
                        News
                      </Typography>
                      <Typography
                        variant="h4"
                        className={classes.paperSubTitle}
                      >
                        Never miss the latest trends and enjoy curated
                        Blog-Posts for Advertisers and Influencers.
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper
                      className={classes.paper}
                      variant="outlined"
                      elevation={0}
                    >
                      <img
                        src="../profile_icon.png"
                        className={classes.paperImg}
                      />
                      <Typography variant="h3" className={classes.paperTitle}>
                        Profile
                      </Typography>
                      <Typography
                        variant="h4"
                        className={classes.paperSubTitle}
                      >
                        Profit from extended Setting for your profile and an
                        easy way to manage your doings.
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper
                      className={classes.paper}
                      variant="outlined"
                      elevation={0}
                    >
                      <img
                        src="../support_icon.png"
                        className={classes.paperImg}
                      />
                      <Typography variant="h3" className={classes.paperTitle}>
                        Support
                      </Typography>
                      <Typography
                        variant="h4"
                        className={classes.paperSubTitle}
                      >
                        Do you have an issue? Don’t sweat it and contact our
                        competent Helpers via Live-Chat.
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </>
            )}
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default BulletPoints;
