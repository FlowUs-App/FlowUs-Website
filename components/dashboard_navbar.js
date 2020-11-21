import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import useWindowDimensions from "../hooks/windowsize";
import DashboardSideDrawer from "./dashboard_sidedrawer";

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: 1,
    position: "relative",
    backgroundImage: "url(./mountain.jpg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
    ["@media screen and (orientation: landscape) and (max-device-width: 1000px)"]: {
      height: "800px !important",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 900px)"]: {
      height: "500px !important",
    },
    "& .MuiAppBar-colorPrimary": {
      backgroundColor: "transparent",
    },
  },
  root2: {
    zIndex: 1,
    "& .MuiAppBar-colorPrimary": {
      backgroundColor: "transparent",
    },
    position: "relative",
  },
  appbar: {
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
    color: "#9E4EBD",
    marginRight: "0.8rem",
    whiteSpace: "nowrap",
    fontSize: "1rem",
    textDecoration: "none",
    ["@media (max-width: 4000px)"]: {
      marginTop: "10rem",
      fontSize: "3.5rem",
    },
    ["@media (max-width: 3500px)"]: {
      marginTop: "10rem",
      fontSize: "3rem",
    },
    ["@media (max-width: 3000px)"]: {
      marginTop: "10rem",
      fontSize: "2.5rem",
    },
    ["@media (max-width: 2500px)"]: {
      marginTop: "10rem",
      fontSize: "2rem",
    },
    ["@media (max-width: 2000px)"]: {
      marginTop: "3rem",
      fontSize: "1rem",
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
    ["@media (max-width: 4000px)"]: {
      transform: "scale(3)",
      marginTop: "13rem",
      marginRight: theme.spacing(180),
    },
    ["@media (max-width: 3500px)"]: {
      transform: "scale(3)",
      marginTop: "10rem",
      marginRight: theme.spacing(130),
    },
    ["@media (max-width: 3000px)"]: {
      transform: "scale(2.5)",
      marginTop: "10rem",
      marginRight: theme.spacing(100),
    },
    ["@media (max-width: 2500px)"]: {
      transform: "scale(2)",
      marginTop: "10rem",
      marginRight: theme.spacing(80),
    },
    ["@media (max-width: 2000px)"]: {
      marginTop: "3rem",
      marginRight: theme.spacing(60),
    },
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
      marginLeft: "0rem",
    },
    ["@media (max-width: 800px)"]: {
      marginRight: theme.spacing(5),
      marginLeft: "5rem",
    },
    ["@media (max-width: 700px)"]: {
      marginRight: theme.spacing(5),
      marginLeft: "4rem",
    },
    ["@media (max-width: 600px)"]: {
      marginRight: theme.spacing(0),
      marginLeft: "3rem",
    },
    ["@media (max-width: 500px)"]: {
      marginRight: theme.spacing(0),
      marginLeft: "2rem",
    },
    ["@media (max-width: 400px)"]: {
      marginRight: theme.spacing(0),
      marginLeft: "1.5rem",
    },
    ["@media (max-width: 350px)"]: {
      marginRight: theme.spacing(-5),
      marginLeft: "1.5rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 1200px)"]: {
      marginRight: theme.spacing(9),
      marginLeft: "5rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 1000px)"]: {
      marginRight: theme.spacing(),
      marginLeft: "3rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 900px)"]: {
      marginRight: theme.spacing(3),
      marginLeft: "3rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 800px)"]: {
      marginRight: theme.spacing(2),
      marginLeft: "1.5rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 700px)"]: {
      marginRight: theme.spacing(1),
      marginLeft: "1.5rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 400px)"]: {
      marginRight: theme.spacing(-3),
      marginLeft: "1.5rem",
    },
  },
}));

const navLinks = [
  { title: `Home`, path: `` },
  { title: `Market`, path: `market` },
  { title: `Analytics`, path: `analytics` },
  { title: `News`, path: `news` },
  { title: `Settings`, path: `settings` },
  { title: `Chats`, path: `chats` },
  { title: `Logout`, path: `login` },
];

function DashboardNavbar() {
  const classes = useStyles();
  const { height } = useWindowDimensions();
  useEffect(() => {
    setTouchDevice("ontouchstart" in document.documentElement);
  }, []);
  const [touchDevice, setTouchDevice] = React.useState(false);
  return (
    <>
      <div className={classes.root2} style={{ marginBottom: "5rem" }}>
        <AppBar position="static" className={classes.appbar}>
          <Toolbar>
            <svg
              width="195"
              height="37"
              viewBox="0 0 195 37"
              fill="none"
              className={classes.imageLogo}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M28 30H7V37H28V30Z" fill="#9E4EBD" />
              <path d="M28 16H10V22H28V16Z" fill="#9E4EBD" />
              <path d="M0 0L0 37H7L7 0H0Z" fill="#9E4EBD" />
              <path d="M31 0H10V7H31V0Z" fill="#9E4EBD" />
              <path d="M31 0L31 37H38V0H31Z" fill="#9E4EBD" />
              <path
                d="M61.7773 29V9.09375H67.9023C69.6523 9.09375 71.2155 9.49023 72.5918 10.2832C73.9772 11.0671 75.0573 12.1882 75.832 13.6465C76.6068 15.0957 76.9941 16.7454 76.9941 18.5957V19.5117C76.9941 21.362 76.6113 23.0072 75.8457 24.4473C75.0892 25.8874 74.0182 27.0039 72.6328 27.7969C71.2474 28.5898 69.6842 28.9909 67.9434 29H61.7773ZM65.8789 12.416V25.7051H67.8613C69.4655 25.7051 70.6914 25.181 71.5391 24.1328C72.3867 23.0846 72.8197 21.5853 72.8379 19.6348V18.582C72.8379 16.5586 72.4186 15.0273 71.5801 13.9883C70.7415 12.9401 69.5156 12.416 67.9023 12.416H65.8789ZM88.3008 29C88.1185 28.6445 87.9863 28.2025 87.9043 27.6738C86.9473 28.7402 85.7031 29.2734 84.1719 29.2734C82.7227 29.2734 81.5195 28.8542 80.5625 28.0156C79.6146 27.1771 79.1406 26.1198 79.1406 24.8438C79.1406 23.276 79.7194 22.0729 80.877 21.2344C82.0436 20.3958 83.7253 19.972 85.9219 19.9629H87.7402V19.1152C87.7402 18.4316 87.5625 17.8848 87.207 17.4746C86.8607 17.0645 86.3092 16.8594 85.5527 16.8594C84.8874 16.8594 84.3633 17.0189 83.9805 17.3379C83.6068 17.6569 83.4199 18.0944 83.4199 18.6504H79.4688C79.4688 17.7936 79.7331 17.0007 80.2617 16.2715C80.7904 15.5423 81.5378 14.9727 82.5039 14.5625C83.4701 14.1432 84.5547 13.9336 85.7578 13.9336C87.5807 13.9336 89.0254 14.3939 90.0918 15.3145C91.1673 16.2259 91.7051 17.5111 91.7051 19.1699V25.582C91.7142 26.9857 91.9102 28.0475 92.293 28.7676V29H88.3008ZM85.0332 26.252C85.6165 26.252 86.1543 26.1243 86.6465 25.8691C87.1387 25.6048 87.5033 25.2539 87.7402 24.8164V22.2734H86.2637C84.2858 22.2734 83.2331 22.957 83.1055 24.3242L83.0918 24.5566C83.0918 25.0488 83.265 25.4544 83.6113 25.7734C83.9577 26.0924 84.4316 26.252 85.0332 26.252ZM102.752 24.9121C102.752 24.429 102.51 24.0508 102.027 23.7773C101.553 23.4948 100.788 23.2441 99.7305 23.0254C96.2122 22.2871 94.4531 20.7923 94.4531 18.541C94.4531 17.2285 94.9954 16.1348 96.0801 15.2598C97.1738 14.3757 98.6003 13.9336 100.359 13.9336C102.237 13.9336 103.736 14.3757 104.857 15.2598C105.988 16.1439 106.553 17.2923 106.553 18.7051H102.602C102.602 18.14 102.419 17.6751 102.055 17.3105C101.69 16.9368 101.12 16.75 100.346 16.75C99.6803 16.75 99.1654 16.9004 98.8008 17.2012C98.4362 17.502 98.2539 17.8848 98.2539 18.3496C98.2539 18.7871 98.459 19.1426 98.8691 19.416C99.2884 19.6803 99.9902 19.9128 100.975 20.1133C101.959 20.3047 102.788 20.5234 103.463 20.7695C105.55 21.5352 106.594 22.8613 106.594 24.748C106.594 26.097 106.015 27.1908 104.857 28.0293C103.7 28.8587 102.205 29.2734 100.373 29.2734C99.1335 29.2734 98.0306 29.0547 97.0645 28.6172C96.1074 28.1706 95.3555 27.5645 94.8086 26.7988C94.2617 26.0241 93.9883 25.1901 93.9883 24.2969H97.7344C97.7708 24.9987 98.0306 25.5365 98.5137 25.9102C98.9967 26.2839 99.6439 26.4707 100.455 26.4707C101.212 26.4707 101.781 26.3294 102.164 26.0469C102.556 25.7552 102.752 25.377 102.752 24.9121ZM113.006 15.8203C114.054 14.5625 115.371 13.9336 116.957 13.9336C120.165 13.9336 121.792 15.7975 121.838 19.5254V29H117.887V19.6348C117.887 18.7871 117.704 18.1628 117.34 17.7617C116.975 17.3516 116.369 17.1465 115.521 17.1465C114.364 17.1465 113.525 17.5931 113.006 18.4863V29H109.055V8H113.006V15.8203ZM138.148 21.7402C138.148 24.11 137.643 25.9603 136.631 27.291C135.619 28.6126 134.206 29.2734 132.393 29.2734C130.788 29.2734 129.508 28.6582 128.551 27.4277L128.373 29H124.818V8H128.77V15.5332C129.681 14.4668 130.88 13.9336 132.365 13.9336C134.17 13.9336 135.583 14.599 136.604 15.9297C137.633 17.2513 138.148 19.1152 138.148 21.5215V21.7402ZM134.197 21.4531C134.197 19.9583 133.96 18.8691 133.486 18.1855C133.012 17.4928 132.306 17.1465 131.367 17.1465C130.109 17.1465 129.243 17.6615 128.77 18.6914V24.5293C129.253 25.5684 130.128 26.0879 131.395 26.0879C132.671 26.0879 133.509 25.459 133.91 24.2012C134.102 23.5996 134.197 22.6836 134.197 21.4531ZM139.98 21.4668C139.98 19.9993 140.263 18.6914 140.828 17.543C141.393 16.3945 142.204 15.5059 143.262 14.877C144.328 14.248 145.563 13.9336 146.967 13.9336C148.963 13.9336 150.59 14.5443 151.848 15.7656C153.115 16.987 153.821 18.6458 153.967 20.7422L153.994 21.7539C153.994 24.0234 153.361 25.8464 152.094 27.2227C150.827 28.5898 149.127 29.2734 146.994 29.2734C144.861 29.2734 143.157 28.5898 141.881 27.2227C140.614 25.8555 139.98 23.9961 139.98 21.6445V21.4668ZM143.932 21.7539C143.932 23.1576 144.196 24.2331 144.725 24.9805C145.253 25.7188 146.01 26.0879 146.994 26.0879C147.951 26.0879 148.699 25.7233 149.236 24.9941C149.774 24.2559 150.043 23.0801 150.043 21.4668C150.043 20.0905 149.774 19.0241 149.236 18.2676C148.699 17.5111 147.942 17.1328 146.967 17.1328C146.001 17.1328 145.253 17.5111 144.725 18.2676C144.196 19.015 143.932 20.1771 143.932 21.7539ZM165 29C164.818 28.6445 164.686 28.2025 164.604 27.6738C163.646 28.7402 162.402 29.2734 160.871 29.2734C159.422 29.2734 158.219 28.8542 157.262 28.0156C156.314 27.1771 155.84 26.1198 155.84 24.8438C155.84 23.276 156.419 22.0729 157.576 21.2344C158.743 20.3958 160.424 19.972 162.621 19.9629H164.439V19.1152C164.439 18.4316 164.262 17.8848 163.906 17.4746C163.56 17.0645 163.008 16.8594 162.252 16.8594C161.587 16.8594 161.062 17.0189 160.68 17.3379C160.306 17.6569 160.119 18.0944 160.119 18.6504H156.168C156.168 17.7936 156.432 17.0007 156.961 16.2715C157.49 15.5423 158.237 14.9727 159.203 14.5625C160.169 14.1432 161.254 13.9336 162.457 13.9336C164.28 13.9336 165.725 14.3939 166.791 15.3145C167.867 16.2259 168.404 17.5111 168.404 19.1699V25.582C168.413 26.9857 168.609 28.0475 168.992 28.7676V29H165ZM161.732 26.252C162.316 26.252 162.854 26.1243 163.346 25.8691C163.838 25.6048 164.202 25.2539 164.439 24.8164V22.2734H162.963C160.985 22.2734 159.932 22.957 159.805 24.3242L159.791 24.5566C159.791 25.0488 159.964 25.4544 160.311 25.7734C160.657 26.0924 161.131 26.252 161.732 26.252ZM179.752 17.9121C179.214 17.8392 178.74 17.8027 178.33 17.8027C176.835 17.8027 175.855 18.3086 175.391 19.3203V29H171.439V14.207H175.172L175.281 15.9707C176.074 14.6126 177.173 13.9336 178.576 13.9336C179.014 13.9336 179.424 13.9928 179.807 14.1113L179.752 17.9121ZM180.777 21.4941C180.777 19.1882 181.292 17.3516 182.322 15.9844C183.361 14.6172 184.779 13.9336 186.574 13.9336C188.014 13.9336 189.204 14.4714 190.143 15.5469V8H194.107V29H190.539L190.348 27.4277C189.363 28.6582 188.096 29.2734 186.547 29.2734C184.806 29.2734 183.407 28.5898 182.35 27.2227C181.301 25.8464 180.777 23.9368 180.777 21.4941ZM184.729 21.7812C184.729 23.1667 184.97 24.2285 185.453 24.9668C185.936 25.7051 186.638 26.0742 187.559 26.0742C188.78 26.0742 189.641 25.5592 190.143 24.5293V18.6914C189.65 17.6615 188.798 17.1465 187.586 17.1465C185.681 17.1465 184.729 18.6914 184.729 21.7812Z"
                fill="#9E4EBD"
              />
            </svg>

            {touchDevice ? (
              <>
                <DashboardSideDrawer navLinks={navLinks} />
              </>
            ) : (
              <>
                <a href="/#mission" style={{ textDecoration: "none" }}>
                  <Typography variant="h2" className={classes.navtext}>
                    HOME
                  </Typography>
                </a>
                <a href="/#features" style={{ textDecoration: "none" }}>
                  <Typography variant="h1" className={classes.navtext}>
                    MARKET
                  </Typography>
                </a>
                <a href="/#community" style={{ textDecoration: "none" }}>
                  <Typography variant="h1" className={classes.navtext}>
                    ANALYTICS
                  </Typography>
                </a>
                <a href="/#contact" style={{ textDecoration: "none" }}>
                  <Typography variant="h1" className={classes.navtext}>
                    NEWS
                  </Typography>
                </a>
                <a href="tos" style={{ textDecoration: "none" }}>
                  <Typography variant="h1" className={classes.navtext}>
                    SETTINGS
                  </Typography>
                </a>
                <a href="tos" style={{ textDecoration: "none" }}>
                  <Typography variant="h1" className={classes.navtext}>
                    CHATS
                  </Typography>
                </a>
                <a href="tos" style={{ textDecoration: "none" }}>
                  <Typography variant="h1" className={classes.navtext}>
                    LOGOUT
                  </Typography>
                </a>
              </>
            )}
          </Toolbar>
        </AppBar>
      </div>
    </>
  );
}

export default DashboardNavbar;
