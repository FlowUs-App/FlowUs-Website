import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CoverText from "../components/covertext";
import SideDrawer from "./sidedrawer";
import useWindowDimensions from "../hooks/windowsize";

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 1,
    position: "relative",
    backgroundImage: "url(./mountain.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
  },
  appbar: {
    background: "none",
    boxShadow: "none",
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
  navtext: {
    marginTop: "3rem",
    fontFamily:
      "Poppins, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif",
    fontWeight: "200",
    color: "#D9F0FF",
    marginRight: "0.8rem",
    fontSize: "1rem",
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
      fontSize: "0.3rem",
    },
    ["@media (max-width: 300px)"]: {
      fontSize: "0.1rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 1000px)"]: {
      fontSize: "1rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 900px)"]: {
      fontSize: "0.8rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 800px)"]: {
      fontSize: "0.6rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 700px)"]: {
      fontSize: "0.5rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 400px)"]: {
      fontSize: "0.3rem",
    },
  },
  imageLogo: {
    marginTop: "3rem",
    width: "20%",
    minWidth: "0.3rem",
    marginRight: theme.spacing(80),
    ["@media (max-width: 1500px)"]: {
      marginRight: theme.spacing(50),
    },
    ["@media (max-width: 1300px)"]: {
      marginRight: theme.spacing(40),
    },
    ["@media (max-width: 1200px)"]: {
      marginRight: theme.spacing(30),
    },
    ["@media (max-width: 1000px)"]: {
      marginRight: theme.spacing(20),
    },
    ["@media (max-width: 800px)"]: {
      marginRight: theme.spacing(5),
    },
    ["@media (max-width: 700px)"]: {
      marginRight: theme.spacing(5),
    },
    ["@media (max-width: 600px)"]: {
      marginRight: theme.spacing(1),
    },
    ["@media (max-width: 500px)"]: {
      marginRight: theme.spacing(0),
    },
  },
  loginButton: {
    marginTop: "3rem",
    width: "6.5rem",
    letterSpacing: "0em",
    color: "#405FB1",
    background: "#D9F0FF",
    border: "10px solid #D9F0FF",
    borderRadius: "20px",
    lineHeight: "0px",
    fontSize: "0.9rem",
    fontWeight: "200",
    "&:hover":{
      background: "#D9F0FF",
    },
    ["@media (max-width: 800px)"]: {
      width: "5.5rem",
      fontSize: "0.7rem",
    },
    ["@media (max-width: 700px)"]: {
      width: "4.5rem",
      fontSize: "0.6rem",
    },
    ["@media (max-width: 600px)"]: {
      width: "3.5rem",
    },
    ["@media (max-width: 500px)"]: {
      width: "2.5rem",
    },
    ["@media (max-width: 400px)"]: {
      width: "0.3rem",
      fontSize: "0.5rem",
      border: "2px solid #D9F0FF",
    },
    ["@media (max-width: 300px)"]: {
      width: "0.3rem",
      fontSize: "0.3rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 1000px)"]: {
      fontSize: "1rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 900px)"]: {
      fontSize: "0.8rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 800px)"]: {
      fontSize: "0.6rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 700px)"]: {
      fontSize: "0.5rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 400px)"]: {
      fontSize: "0.3rem",
    },
  },
}));

const navLinks = [
  { title: `Login`, path: `#login` },
  { title: `Mission`, path: `#mission` },
  { title: `Features`, path: `#features` },
  { title: `Community`, path: `#community` },
  { title: `Contact Us`, path: `#contact` },
  { title: `Terms of services`, path: `#tos` },
];

function navbar() {
  const classes = useStyles();
  const { height } = useWindowDimensions();
  useEffect(() => {
    setTouchDevice("ontouchstart" in document.documentElement);
  }, []);
  const [touchDevice, setTouchDevice] = React.useState(false);
  return (
    <>
      <div className={classes.root} style={{ height: height }}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <svg
              width="168"
              height="37"
              viewBox="0 0 168 37"
              fill="none"
              className={classes.imageLogo}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M62.8789 24.7051H71.5879V28H58.7773V8.09375H62.8789V24.7051ZM77.8633 28H73.8984V13.207H77.8633V28ZM73.666 9.37891C73.666 8.78646 73.862 8.29883 74.2539 7.91602C74.6549 7.5332 75.1973 7.3418 75.8809 7.3418C76.5553 7.3418 77.0931 7.5332 77.4941 7.91602C77.8952 8.29883 78.0957 8.78646 78.0957 9.37891C78.0957 9.98047 77.8906 10.4727 77.4805 10.8555C77.0794 11.2383 76.5462 11.4297 75.8809 11.4297C75.2155 11.4297 74.6777 11.2383 74.2676 10.8555C73.8665 10.4727 73.666 9.98047 73.666 9.37891ZM93.3672 19.8652H85.4922V28H81.3906V8.09375H94.3516V11.416H85.4922V16.5566H93.3672V19.8652ZM100.641 28H96.6758V13.207H100.641V28ZM96.4434 9.37891C96.4434 8.78646 96.6393 8.29883 97.0312 7.91602C97.4323 7.5332 97.9746 7.3418 98.6582 7.3418C99.3327 7.3418 99.8704 7.5332 100.271 7.91602C100.673 8.29883 100.873 8.78646 100.873 9.37891C100.873 9.98047 100.668 10.4727 100.258 10.8555C99.8568 11.2383 99.3236 11.4297 98.6582 11.4297C97.9928 11.4297 97.4551 11.2383 97.0449 10.8555C96.6439 10.4727 96.4434 9.98047 96.4434 9.37891ZM108.639 9.57031V13.207H111.168V16.1055H108.639V23.4883C108.639 24.0352 108.743 24.4271 108.953 24.6641C109.163 24.901 109.564 25.0195 110.156 25.0195C110.594 25.0195 110.981 24.9876 111.318 24.9238V27.918C110.544 28.1549 109.746 28.2734 108.926 28.2734C106.155 28.2734 104.742 26.8743 104.688 24.0762V16.1055H102.527V13.207H104.688V9.57031H108.639ZM131.84 23.8984H124.648L123.281 28H118.92L126.33 8.09375H130.131L137.582 28H133.221L131.84 23.8984ZM125.756 20.5762H130.732L128.23 13.125L125.756 20.5762ZM151.842 20.7402C151.842 23.0189 151.322 24.8464 150.283 26.2227C149.253 27.5898 147.859 28.2734 146.1 28.2734C144.605 28.2734 143.397 27.7539 142.477 26.7148V33.6875H138.525V13.207H142.189L142.326 14.6562C143.283 13.5078 144.532 12.9336 146.072 12.9336C147.895 12.9336 149.312 13.6081 150.324 14.957C151.336 16.306 151.842 18.1654 151.842 20.5352V20.7402ZM147.891 20.4531C147.891 19.0768 147.645 18.015 147.152 17.2676C146.669 16.5202 145.963 16.1465 145.033 16.1465C143.794 16.1465 142.941 16.6204 142.477 17.5684V23.625C142.96 24.6003 143.821 25.0879 145.061 25.0879C146.947 25.0879 147.891 23.543 147.891 20.4531ZM167.619 20.7402C167.619 23.0189 167.1 24.8464 166.061 26.2227C165.031 27.5898 163.636 28.2734 161.877 28.2734C160.382 28.2734 159.174 27.7539 158.254 26.7148V33.6875H154.303V13.207H157.967L158.104 14.6562C159.061 13.5078 160.309 12.9336 161.85 12.9336C163.673 12.9336 165.09 13.6081 166.102 14.957C167.113 16.306 167.619 18.1654 167.619 20.5352V20.7402ZM163.668 20.4531C163.668 19.0768 163.422 18.015 162.93 17.2676C162.447 16.5202 161.74 16.1465 160.811 16.1465C159.571 16.1465 158.719 16.6204 158.254 17.5684V23.625C158.737 24.6003 159.598 25.0879 160.838 25.0879C162.725 25.0879 163.668 23.543 163.668 20.4531Z"
                fill="#D9F0FF"
              />
              <path d="M28 30H7V37H28V30Z" fill="#D9F0FF" />
              <path d="M28 16H10V22H28V16Z" fill="#D9F0FF" />
              <path d="M0 0L0 37H7L7 0H0Z" fill="#D9F0FF" />
              <path d="M31 0H10V7H31V0Z" fill="#D9F0FF" />
              <path d="M31 0L31 37H38V0H31Z" fill="#D9F0FF" />
            </svg>

            {touchDevice ? (
              <>
                <SideDrawer navLinks={navLinks} />
              </>
            ) : (
              <>
                <Typography variant="h2" className={classes.navtext}>
                  MISSION
                </Typography>
                <Typography variant="h1" className={classes.navtext}>
                  FEATURES
                </Typography>
                <Typography variant="h1" className={classes.navtext}>
                  COMMUNITY
                </Typography>
                <Typography variant="h1" className={classes.navtext}>
                  CONTACT US
                </Typography>
                <Typography variant="h1" className={classes.navtext}>
                  TERMS OF SERVICES
                </Typography>
                <Button
                  
                  className={classes.loginButton}
                  disableElevation
                >
                  Login
                </Button>
              </>
            )}
          </Toolbar>
        </AppBar>
        <CoverText />
      </div>
    </>
  );
}

export default navbar;
