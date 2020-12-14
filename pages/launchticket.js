import { Button, Grid, TextField, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Footer from "../containers/Footer";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { useRouter } from "next/router";
import firebase from "firebase/app";
import initFirebase from "../res/ApiKey";

initFirebase();

const useStyles = makeStyles((theme) => ({
  width: {
    width: "100%",
  },
  grid: {
    marginTop: "1rem",
    overflow: "hidden",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
    "& label.Mui-focused": {
      color: "purple",
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "purple",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "purple",
      },
      "&:hover fieldset": {
        borderColor: "purple",
      },
      "&.Mui-focused fieldset": {
        borderColor: "purple",
      },
    },
    "& .MuiCheckbox-colorSecondary.Mui-checked": {
      color: "purple",
    },
  },
  mainButton: {
    backgroundColor: "#56377E",
    position: "center",
    fontFamily:
      "Lato, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif",
    color: "#FFF",
    width: "7rem",
    marginRight: "3rem",
    borderRadius: "30px",
    [theme.breakpoints.down("md")]: {
      marginRight: "1rem",
    },
    "&:hover": {
      background: "#56377E",
    },
  },
  launchButton: {
    marginTop: "2rem",
    backgroundColor: "#56377E",
    position: "center",
    fontFamily:
      "Lato, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif",
    color: "#FFF",
    width: "30rem",
    marginRight: "3rem",
    borderRadius: "30px",
    [theme.breakpoints.down("md")]: {
      width: "25rem",
      marginLeft: "3rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "20rem",
      marginLeft: "3rem",
    },

    "&:hover": {
      background: "#56377E",
    },
  },
  title: {
    fontSize: "3rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
    },
    color: "#56377E",
    fontFamily:
      "Open Sans, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif, Arial",
    fontWeight: "bold",
  },
  descr: {
    [theme.breakpoints.down("md")]: {
      fontSize: "1rem",
    },
    fontSize: "1.5rem",
    color: "#56377E",
    fontFamily:
      "Open Sans, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif, Arial",
    fontWeight: "lighter",
  },
  InputField: {
    marginTop: "5rem",
    width: "30rem",
    [theme.breakpoints.down("md")]: {
      width: "25rem",
    },
    [theme.breakpoints.down("sm")]: {
      width: "20rem",
    },
  },
  note: {
    marginTop: "1rem",
    fontSize: "1rem",
    color: "#56377E",
    fontFamily:
      "Open Sans, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif, Arial",
    fontWeight: "lighter",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.8rem",
    },
  },
  bold: {
    fontWeight: "bold",
  },
  pic: {
    marginLeft: "2rem",
  },
  mobilePic: {
    marginTop: "3rem",
    marginBottom: "1rem",
    marginLeft: "-5rem",
  },
  moblieNote: {
    marginTop: "2rem",
    marginBottom: "3rem",
    fontSize: "1rem",
    color: "#56377E",
    fontFamily:
      "Open Sans, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif, Arial",
    fontWeight: "lighter",
    [theme.breakpoints.down("md")]: {
      fontSize: "0.8rem",
    },
  },
  mobTitle: {
    fontSize: "3rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "2rem",
    },
    color: "#56377E",
    fontFamily:
      "Open Sans, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif, Arial",
    fontWeight: "bold",
    marginTop: "3rem",
  },
}));

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function launchticket() {
  const classes = useStyles();
  const router = useRouter();
  const [info, setInfo] = useState("");
  useEffect(() => {
    setTouchDevice("ontouchstart" in document.documentElement);
  }, []);
  const [touchDevice, setTouchDevice] = useState(false);
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState("error");

  const handleClick = () => {
    if (info.includes("@")) {
      const mail = validateEmail(info);
      if (mail) {
        setSuccess("success");
      } else {
        setSuccess("error");
      }
    } else {
      if (info.length > 5) {
        setSuccess("success");
      } else {
        setSuccess("error");
      }
    }
    setOpen(true);
  };

  function validateEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(input).toLowerCase());
  }

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <>
      {touchDevice ? (
        <>
          <Grid
            container
            direction="column"
            className={classes.grid}
            justify="center"
            alignContent="center"
            alignItems="center"
          >
            <Grid item className={classes.width}>
              <Grid
                container
                justify="space-between"
                alignContent="center"
                alignItems="center"
              >
                <Grid item>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="193"
                    height="41"
                    viewBox="0 0 193 41"
                  >
                    <rect
                      id="Rechteck_1062"
                      data-name="Rechteck 1062"
                      width="41"
                      height="8"
                      transform="translate(0 41) rotate(-90)"
                      fill="#56377e"
                    />
                    <g
                      id="Gruppe_70166"
                      data-name="Gruppe 70166"
                      transform="translate(-58 -53)"
                    >
                      <rect
                        id="Rechteck_1060"
                        data-name="Rechteck 1060"
                        width="29"
                        height="7"
                        transform="translate(61 87)"
                        fill="#56377e"
                      />
                      <rect
                        id="Rechteck_1061"
                        data-name="Rechteck 1061"
                        width="21"
                        height="7"
                        transform="translate(69 70)"
                        fill="#56377e"
                      />
                      <rect
                        id="Rechteck_1063"
                        data-name="Rechteck 1063"
                        width="28"
                        height="7"
                        transform="translate(69 53)"
                        fill="#56377e"
                      />
                      <rect
                        id="Rechteck_1064"
                        data-name="Rechteck 1064"
                        width="41"
                        height="8"
                        transform="translate(93 94) rotate(-90)"
                        fill="#56377e"
                      />
                      <text
                        id="LiFit_App"
                        data-name="LiFit App"
                        transform="translate(119 85)"
                        fill="#56377e"
                        fontSize="30"
                        fontFamily="OpenSans-Bold, Open Sans, Arial"
                        fontWeight="700"
                      >
                        <tspan x="0" y="0">
                          LiFit App
                        </tspan>
                      </text>
                    </g>
                  </svg>
                </Grid>
                <Grid item>
                  <Button
                    size="medium"
                    className={classes.mainButton}
                    onClick={() => router.push("/")}
                  >
                    Main
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Typography component="h1" className={classes.mobTitle}>
                LiFit App Launch Ticket
              </Typography>
            </Grid>
            <Grid item>
              <Typography component="h2" className={classes.descr}>
                The first Social Media Fitness App on the market! <br /> <br />
                Compare with your friends, create sport
                <br /> communities, use fitness tools and much more
              </Typography>
            </Grid>
            <Grid item>
              <img
                className={classes.mobilePic}
                src="./launchticket.svg"
                alt="Two Phones with Screenshots of the LiFit App"
              />
            </Grid>
            <Grid item>
              <TextField
                label="Email / Phone number"
                variant="outlined"
                type="email"
                className={classes.InputField}
                value={info}
                onChange={(event) => setInfo(event.target.value)}
              />
            </Grid>
            <Grid item>
              <Button
                className={classes.launchButton}
                size="large"
                onClick={() => handleClick()}
              >
                Receive a ticket at launch
              </Button>
            </Grid>
            <Grid item>
              <Typography component="h2" className={classes.moblieNote}>
                <span className={classes.bold}>Info:</span> The first 100 people
                that sign up, will receive a prototype
                <br /> launch ticket. You can help to create the best app on the
                market by
                <br /> giving your feedback and voting for the best features.
              </Typography>
            </Grid>
          </Grid>
        </>
      ) : (
        <>
          <Grid container direction="column" className={classes.grid}>
            <Grid item className={classes.width}>
              <Grid
                container
                justify="space-between"
                alignContent="center"
                alignItems="center"
              >
                <Grid item>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="193"
                    height="41"
                    viewBox="0 0 193 41"
                  >
                    <rect
                      id="Rechteck_1062"
                      data-name="Rechteck 1062"
                      width="41"
                      height="8"
                      transform="translate(0 41) rotate(-90)"
                      fill="#56377e"
                    />
                    <g
                      id="Gruppe_70166"
                      data-name="Gruppe 70166"
                      transform="translate(-58 -53)"
                    >
                      <rect
                        id="Rechteck_1060"
                        data-name="Rechteck 1060"
                        width="29"
                        height="7"
                        transform="translate(61 87)"
                        fill="#56377e"
                      />
                      <rect
                        id="Rechteck_1061"
                        data-name="Rechteck 1061"
                        width="21"
                        height="7"
                        transform="translate(69 70)"
                        fill="#56377e"
                      />
                      <rect
                        id="Rechteck_1063"
                        data-name="Rechteck 1063"
                        width="28"
                        height="7"
                        transform="translate(69 53)"
                        fill="#56377e"
                      />
                      <rect
                        id="Rechteck_1064"
                        data-name="Rechteck 1064"
                        width="41"
                        height="8"
                        transform="translate(93 94) rotate(-90)"
                        fill="#56377e"
                      />
                      <text
                        id="LiFit_App"
                        data-name="LiFit App"
                        transform="translate(119 85)"
                        fill="#56377e"
                        fontSize="30"
                        fontFamily="OpenSans-Bold, Open Sans, Arial"
                        fontWeight="700"
                      >
                        <tspan x="0" y="0">
                          LiFit App
                        </tspan>
                      </text>
                    </g>
                  </svg>
                </Grid>
                <Grid item>
                  <Button
                    size="medium"
                    className={classes.mainButton}
                    onClick={() => router.push("/")}
                  >
                    Main
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container direction="row" alignItems="center">
                <Grid item md={6}>
                  <Grid
                    container
                    alignItems="flex-start"
                    alignContent="center"
                    direction="column"
                  >
                    <Grid item>
                      <Typography component="h1" className={classes.title}>
                        LiFit App Launch Ticket
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography component="h2" className={classes.descr}>
                        The first Social Media Fitness App on the market! <br />{" "}
                        <br />
                        Compare with your friends, create sport
                        <br /> communities, use fitness tools and much more
                      </Typography>
                    </Grid>
                    <Grid item>
                      <TextField
                        label="Email / Phone number"
                        variant="outlined"
                        type="email"
                        className={classes.InputField}
                        value={info}
                        onChange={(event) => setInfo(event.target.value)}
                      />
                    </Grid>
                    <Grid item>
                      <Button
                        className={classes.launchButton}
                        size="large"
                        onClick={() => handleClick()}
                      >
                        Receive a ticket at launch
                      </Button>
                    </Grid>
                    <Grid item>
                      <Typography component="h2" className={classes.note}>
                        <span className={classes.bold}>Info:</span> The first
                        100 people that sign up, will receive a prototype
                        <br /> launch ticket. You can help to create the best
                        app on the market by
                        <br /> giving your feedback and voting for the best
                        features.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={6}>
                  <img
                    className={classes.pic}
                    src="./launchticket.svg"
                    alt="Two Phones with Screenshots of the LiFit App"
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </>
      )}
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        {success === "success" ? (
          <Alert onClose={handleClose} severity={success}>
            Successfully registered!
          </Alert>
        ) : (
          <Alert onClose={handleClose} severity={success}>
            Please fill out the Inputfield correctly before submiting!
          </Alert>
        )}
      </Snackbar>

      <Footer />
    </>
  );
}

export default launchticket;
