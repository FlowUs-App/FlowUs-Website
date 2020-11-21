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
    marginTop: "3.5rem",
    marginBottom: "2rem",
    transform: "scale(2)",
    ["@media (max-width: 4000px)"]: {
      marginTop: "6rem",
      transform: "scale(4)",
      marginBottom: "7rem",
    },
    ["@media (max-width: 3500px)"]: {
      marginTop: "5rem",
      transform: "scale(3.5)",
      marginBottom: "6rem",
    },
    ["@media (max-width: 3000px)"]: {
      marginTop: "4rem",
      transform: "scale(3)",
      marginBottom: "5rem",
    },
    ["@media (max-width: 2500px)"]: {
      marginTop: "3.5rem",
      transform: "scale(2.5)",
      marginBottom: "4rem",
    },
    ["@media (max-width: 2000px)"]: {
      transform: "scale(2)",
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
                      <svg
                        width="66"
                        height="66"
                        viewBox="0 0 88 88"
                        fill="none"
                        className={classes.paperImg}
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <path
                          d="M44 88C68.3005 88 88 68.3005 88 44C88 19.6995 68.3005 0 44 0C19.6995 0 0 19.6995 0 44C0 68.3005 19.6995 88 44 88Z"
                          fill="#9E4EBD"
                        />
                        <rect
                          x="29"
                          y="30"
                          width="30"
                          height="29"
                          fill="url(#pattern0)"
                        />
                        <defs>
                          <pattern
                            id="pattern0"
                            patternContentUnits="objectBoundingBox"
                            width="1"
                            height="1"
                          >
                            <use
                              xlinkHref="#image0"
                              transform="translate(-0.00726073) scale(0.00478548 0.0049505)"
                            />
                          </pattern>
                          <image
                            id="image0"
                            width="212"
                            height="202"
                            xlinkHref="data:image/png;base64,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"
                          />
                        </defs>
                      </svg>

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
                      <svg
                        width="66"
                        height="66"
                        viewBox="0 0 88 88"
                        fill="none"
                        className={classes.paperImg}
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsx="http://www.w3.org/1999/xlink"
                      >
                        <path
                          d="M44 88C68.3005 88 88 68.3005 88 44C88 19.6995 68.3005 0 44 0C19.6995 0 0 19.6995 0 44C0 68.3005 19.6995 88 44 88Z"
                          fill="#9E4EBD"
                        />
                        <rect
                          x="30"
                          y="29"
                          width="27"
                          height="31"
                          fill="url(#pattern0)"
                        />
                        <defs>
                          <pattern
                            id="pattern0"
                            patternContentUnits="objectBoundingBox"
                            width="1"
                            height="1"
                          >
                            <use
                              xlinkHref="#image0"
                              transform="translate(0 -0.00424448) scale(0.00584795 0.00509338)"
                            />
                          </pattern>
                          <image
                            id="image0"
                            width="171"
                            height="198"
                            xlinkHref="data:image/png;base64,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"
                          />
                        </defs>
                      </svg>

                      <Typography variant="h3" className={classes.paperTitle}>
                        Workouts
                      </Typography>
                      <Typography
                        variant="h4"
                        className={classes.paperSubTitle}
                      >
                        Improve your workouts with our in-built workout coach
                        and discover new exercises or share your own.
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper
                      className={classes.paper}
                      variant="outlined"
                      elevation={0}
                    >
                      <svg
                        width="66"
                        height="66"
                        viewBox="0 0 88 88"
                        fill="none"
                        className={classes.paperImg}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M44 88C68.3005 88 88 68.3005 88 44C88 19.6995 68.3005 0 44 0C19.6995 0 0 19.6995 0 44C0 68.3005 19.6995 88 44 88Z"
                          fill="#9E4EBD"
                        />
                        <path
                          d="M44.47 27.974C45.9393 27.974 47.3756 28.4097 48.5973 29.226C49.819 30.0423 50.7712 31.2026 51.3335 32.56C51.8958 33.9175 52.0429 35.4112 51.7563 36.8523C51.4696 38.2934 50.7621 39.6171 49.7231 40.6561C48.6841 41.6951 47.3604 42.4026 45.9193 42.6893C44.4782 42.9759 42.9845 42.8288 41.627 42.2665C40.2696 41.7042 39.1093 40.752 38.293 39.5303C37.4767 38.3086 37.041 36.8723 37.041 35.403C37.041 33.4327 37.8237 31.5431 39.2169 30.1499C40.6101 28.7567 42.4997 27.974 44.47 27.974ZM29.612 33.28C30.7554 33.2752 31.8782 33.5833 32.859 34.171C32.5484 37.1771 33.4079 40.1872 35.259 42.576C34.7381 43.5777 33.9602 44.4228 33.0049 45.0246C32.0496 45.6264 30.9515 45.9632 29.8231 46.0005C28.6946 46.0378 27.5766 45.7743 26.5837 45.2369C25.5908 44.6995 24.7587 43.9077 24.1727 42.9426C23.5868 41.9775 23.2682 40.8739 23.2496 39.745C23.231 38.6162 23.513 37.5027 24.0667 36.5188C24.6204 35.5349 25.426 34.716 26.4006 34.1461C27.3753 33.5763 28.484 33.276 29.613 33.276L29.612 33.28ZM59.328 33.276C60.458 33.2751 61.5678 33.5749 62.5436 34.1447C63.5195 34.7144 64.3261 35.5336 64.8806 36.5181C65.4352 37.5027 65.7178 38.617 65.6994 39.7469C65.6809 40.8767 65.3622 41.9812 64.7758 42.9471C64.1894 43.9131 63.3565 44.7055 62.3626 45.2431C61.3687 45.7808 60.2497 46.0442 59.1203 46.0064C57.991 45.9687 56.892 45.631 55.9363 45.0281C54.9806 44.4253 54.2025 43.5789 53.682 42.576C55.5331 40.1872 56.3926 37.1771 56.082 34.171C57.0628 33.5833 58.1856 33.2752 59.329 33.28L59.328 33.276ZM30.674 55.036C30.674 50.642 36.85 47.077 44.474 47.077C52.098 47.077 58.274 50.643 58.274 55.036V58.75H30.674V55.036ZM19 58.75V55.566C19 52.616 23.011 50.132 28.445 49.411C27.121 50.9841 26.4057 52.9801 26.429 55.036V58.75H19ZM69.94 58.75H62.511V55.036C62.5343 52.9801 61.819 50.9841 60.495 49.411C65.929 50.133 69.94 52.611 69.94 55.566V58.75Z"
                          fill="white"
                        />
                      </svg>
                      <Typography variant="h3" className={classes.paperTitle}>
                        Groups
                      </Typography>
                      <Typography
                        variant="h4"
                        className={classes.paperSubTitle}
                      >
                        Safe havens to meet like-minded people and places for
                        discussions and shared victories and knowledge.
                      </Typography>
                    </Paper>
                  </Grid>

                  <Grid item xs={12}>
                    <Paper
                      className={classes.paper}
                      variant="outlined"
                      elevation={0}
                    >
                      <svg
                        width="66"
                        height="66"
                        viewBox="0 0 88 88"
                        fill="none"
                        className={classes.paperImg}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M44 88C68.3005 88 88 68.3005 88 44C88 19.6995 68.3005 0 44 0C19.6995 0 0 19.6995 0 44C0 68.3005 19.6995 88 44 88Z"
                          fill="#9E4EBD"
                        />
                        <path
                          d="M44.126 58.375C41.2581 58.375 38.4547 57.5246 36.0702 55.9314C33.6857 54.3381 31.8272 52.0735 30.7297 49.424C29.6323 46.7744 29.3451 43.859 29.9046 41.0462C30.4641 38.2335 31.8451 35.6499 33.8729 33.622C35.9008 31.5941 38.4844 30.2131 41.2972 29.6537C44.1099 29.0942 47.0254 29.3813 49.6749 30.4788C52.3244 31.5763 54.589 33.4348 56.1823 35.8193C57.7756 38.2038 58.626 41.0072 58.626 43.875C58.626 45.7792 58.2509 47.6647 57.5222 49.424C56.7935 51.1832 55.7255 52.7816 54.379 54.1281C53.0326 55.4745 51.4341 56.5426 49.6749 57.2713C47.9157 58 46.0301 58.375 44.126 58.375ZM44.126 25.748C40.541 25.748 37.0365 26.8111 34.0557 28.8028C31.0749 30.7945 28.7517 33.6254 27.3797 36.9375C26.0078 40.2496 25.6489 43.8942 26.3483 47.4103C27.0477 50.9264 28.774 54.1561 31.309 56.6911C33.8439 59.226 37.0737 60.9524 40.5898 61.6518C44.1059 62.3512 47.7504 61.9922 51.0625 60.6203C54.3746 59.2484 57.2055 56.9251 59.1972 53.9443C61.1889 50.9635 62.252 47.459 62.252 43.874C62.252 39.0667 60.3423 34.4563 56.943 31.057C53.5437 27.6577 48.9333 25.748 44.126 25.748ZM51.811 36.189C50.8051 35.1749 49.6078 34.3706 48.2885 33.823C46.9693 33.2754 45.5544 32.9953 44.126 32.999V43.874L36.441 51.559C38.4874 53.5574 41.239 54.6685 44.0992 54.6514C46.9594 54.6344 49.6976 53.4907 51.7201 51.4682C53.7426 49.4457 54.8864 46.7075 54.9034 43.8473C54.9204 40.9871 53.8093 38.2355 51.811 36.189Z"
                          fill="white"
                        />
                      </svg>
                      <Typography variant="h3" className={classes.paperTitle}>
                        Timer
                      </Typography>
                      <Typography
                        variant="h4"
                        className={classes.paperSubTitle}
                      >
                        Always be on time. With our Timer-tools you can get the
                        most out of your workouts and days.
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper
                      className={classes.paper}
                      variant="outlined"
                      elevation={0}
                    >
                      <svg
                        width="66"
                        height="66"
                        viewBox="0 0 88 88"
                        fill="none"
                        className={classes.paperImg}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M44 88C68.3005 88 88 68.3005 88 44C88 19.6995 68.3005 0 44 0C19.6995 0 1.52588e-05 19.6995 1.52588e-05 44C1.52588e-05 68.3005 19.6995 88 44 88Z"
                          fill="#9E4EBD"
                        />
                        <path
                          d="M55 56H34V39.5H55V56ZM50.5 29V32H38.5V29H35.5V32H34C33.6057 31.9987 33.215 32.0754 32.8504 32.2257C32.4858 32.376 32.1546 32.5969 31.8758 32.8757C31.5969 33.1546 31.376 33.4858 31.2257 33.8504C31.0754 34.215 30.9987 34.6057 31 35V56C31 56.7956 31.3161 57.5587 31.8787 58.1213C32.4413 58.6839 33.2044 59 34 59H55C55.7957 59 56.5587 58.6839 57.1213 58.1213C57.6839 57.5587 58 56.7956 58 56V35C58 34.2044 57.6839 33.4413 57.1213 32.8787C56.5587 32.3161 55.7957 32 55 32H53.5V29H50.5ZM52 45.5H44.5V53H52V45.5Z"
                          fill="white"
                        />
                      </svg>
                      <Typography variant="h3" className={classes.paperTitle}>
                        Calendar
                      </Typography>
                      <Typography
                        variant="h4"
                        className={classes.paperSubTitle}
                      >
                        Schedule your coming week or month and never miss any
                        special event, workout or meet-up anymore.
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={12}>
                    <Paper
                      className={classes.paper}
                      variant="outlined"
                      elevation={0}
                    >
                      <svg
                        width="88"
                        height="88"
                        viewBox="0 0 88 88"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <path
                          d="M44 88C68.3005 88 88 68.3005 88 44C88 19.6995 68.3005 0 44 0C19.6995 0 0 19.6995 0 44C0 68.3005 19.6995 88 44 88Z"
                          fill="#9E4EBD"
                        />
                        <rect
                          x="28"
                          y="29"
                          width="31"
                          height="31"
                          fill="url(#pattern0)"
                        />
                        <defs>
                          <pattern
                            id="pattern0"
                            patternContentUnits="objectBoundingBox"
                            width="1"
                            height="1"
                          >
                            <use
                              xlinkHref="#image0"
                              transform="scale(0.00505051)"
                            />
                          </pattern>
                          <image
                            id="image0"
                            width="198"
                            height="198"
                            xlinkHref="data:image/png;base64,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"
                          />
                        </defs>
                      </svg>

                      <Typography variant="h3" className={classes.paperTitle}>
                        Daily Check-Up
                      </Typography>
                      <Typography
                        variant="h4"
                        className={classes.paperSubTitle}
                      >
                        LiFit cares about you. Our Daily Check-Up allows our
                        users to reflect on their mood and mental well-being.
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
                      <svg
                        width="77"
                        height="77"
                        viewBox="0 0 88 88"
                        fill="none"
                        className={classes.paperImg}
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <path
                          d="M44 88C68.3005 88 88 68.3005 88 44C88 19.6995 68.3005 0 44 0C19.6995 0 0 19.6995 0 44C0 68.3005 19.6995 88 44 88Z"
                          fill="#9E4EBD"
                        />
                        <rect
                          x="29"
                          y="30"
                          width="30"
                          height="29"
                          fill="url(#pattern0)"
                        />
                        <defs>
                          <pattern
                            id="pattern0"
                            patternContentUnits="objectBoundingBox"
                            width="1"
                            height="1"
                          >
                            <use
                              xlinkHref="#image0"
                              transform="translate(-0.00726073) scale(0.00478548 0.0049505)"
                            />
                          </pattern>
                          <image
                            id="image0"
                            width="212"
                            height="202"
                            xlinkHref="data:image/png;base64,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"
                          />
                        </defs>
                      </svg>

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
                      <svg
                        width="77"
                        height="77"
                        className={classes.paperImg}
                        viewBox="0 0 88 88"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <path
                          d="M44 88C68.3005 88 88 68.3005 88 44C88 19.6995 68.3005 0 44 0C19.6995 0 0 19.6995 0 44C0 68.3005 19.6995 88 44 88Z"
                          fill="#9E4EBD"
                        />
                        <rect
                          x="30"
                          y="29"
                          width="27"
                          height="31"
                          fill="url(#pattern0)"
                        />
                        <defs>
                          <pattern
                            id="pattern0"
                            patternContentUnits="objectBoundingBox"
                            width="1"
                            height="1"
                          >
                            <use
                              xlinkHref="#image10"
                              transform="translate(0 -0.00424448) scale(0.00584795 0.00509338)"
                            />
                          </pattern>
                          <image
                            id="image10"
                            width="171"
                            height="198"
                            xlinkHref="data:image/png;base64,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"
                          />
                        </defs>
                      </svg>

                      <Typography variant="h3" className={classes.paperTitle}>
                        Workouts
                      </Typography>
                      <Typography
                        variant="h4"
                        className={classes.paperSubTitle}
                      >
                        Improve your workouts with our in-built workout coach
                        and discover new exercises or share your own.
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper
                      className={classes.paper}
                      variant="outlined"
                      elevation={0}
                    >
                      <svg
                        width="77"
                        height="77"
                        viewBox="0 0 88 88"
                        fill="none"
                        className={classes.paperImg}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M44 88C68.3005 88 88 68.3005 88 44C88 19.6995 68.3005 0 44 0C19.6995 0 0 19.6995 0 44C0 68.3005 19.6995 88 44 88Z"
                          fill="#9E4EBD"
                        />
                        <path
                          d="M44.47 27.974C45.9393 27.974 47.3756 28.4097 48.5973 29.226C49.819 30.0423 50.7712 31.2026 51.3335 32.56C51.8958 33.9175 52.0429 35.4112 51.7563 36.8523C51.4696 38.2934 50.7621 39.6171 49.7231 40.6561C48.6841 41.6951 47.3604 42.4026 45.9193 42.6893C44.4782 42.9759 42.9845 42.8288 41.627 42.2665C40.2696 41.7042 39.1093 40.752 38.293 39.5303C37.4767 38.3086 37.041 36.8723 37.041 35.403C37.041 33.4327 37.8237 31.5431 39.2169 30.1499C40.6101 28.7567 42.4997 27.974 44.47 27.974ZM29.612 33.28C30.7554 33.2752 31.8782 33.5833 32.859 34.171C32.5484 37.1771 33.4079 40.1872 35.259 42.576C34.7381 43.5777 33.9602 44.4228 33.0049 45.0246C32.0496 45.6264 30.9515 45.9632 29.8231 46.0005C28.6946 46.0378 27.5766 45.7743 26.5837 45.2369C25.5908 44.6995 24.7587 43.9077 24.1727 42.9426C23.5868 41.9775 23.2682 40.8739 23.2496 39.745C23.231 38.6162 23.513 37.5027 24.0667 36.5188C24.6204 35.5349 25.426 34.716 26.4006 34.1461C27.3753 33.5763 28.484 33.276 29.613 33.276L29.612 33.28ZM59.328 33.276C60.458 33.2751 61.5678 33.5749 62.5436 34.1447C63.5195 34.7144 64.3261 35.5336 64.8806 36.5181C65.4352 37.5027 65.7178 38.617 65.6994 39.7469C65.6809 40.8767 65.3622 41.9812 64.7758 42.9471C64.1894 43.9131 63.3565 44.7055 62.3626 45.2431C61.3687 45.7808 60.2497 46.0442 59.1203 46.0064C57.991 45.9687 56.892 45.631 55.9363 45.0281C54.9806 44.4253 54.2025 43.5789 53.682 42.576C55.5331 40.1872 56.3926 37.1771 56.082 34.171C57.0628 33.5833 58.1856 33.2752 59.329 33.28L59.328 33.276ZM30.674 55.036C30.674 50.642 36.85 47.077 44.474 47.077C52.098 47.077 58.274 50.643 58.274 55.036V58.75H30.674V55.036ZM19 58.75V55.566C19 52.616 23.011 50.132 28.445 49.411C27.121 50.9841 26.4057 52.9801 26.429 55.036V58.75H19ZM69.94 58.75H62.511V55.036C62.5343 52.9801 61.819 50.9841 60.495 49.411C65.929 50.133 69.94 52.611 69.94 55.566V58.75Z"
                          fill="white"
                        />
                      </svg>
                      <Typography variant="h3" className={classes.paperTitle}>
                        Groups
                      </Typography>
                      <Typography
                        variant="h4"
                        className={classes.paperSubTitle}
                      >
                        Safe havens to meet like-minded people and places for
                        discussions and shared victories and knowledge.
                      </Typography>
                    </Paper>
                  </Grid>

                  <Grid item xs={4}>
                    <Paper
                      className={classes.paper}
                      variant="outlined"
                      elevation={0}
                    >
                      <svg
                        width="77"
                        height="77"
                        viewBox="0 0 88 88"
                        fill="none"
                        className={classes.paperImg}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M44 88C68.3005 88 88 68.3005 88 44C88 19.6995 68.3005 0 44 0C19.6995 0 0 19.6995 0 44C0 68.3005 19.6995 88 44 88Z"
                          fill="#9E4EBD"
                        />
                        <path
                          d="M44.126 58.375C41.2581 58.375 38.4547 57.5246 36.0702 55.9314C33.6857 54.3381 31.8272 52.0735 30.7297 49.424C29.6323 46.7744 29.3451 43.859 29.9046 41.0462C30.4641 38.2335 31.8451 35.6499 33.8729 33.622C35.9008 31.5941 38.4844 30.2131 41.2972 29.6537C44.1099 29.0942 47.0254 29.3813 49.6749 30.4788C52.3244 31.5763 54.589 33.4348 56.1823 35.8193C57.7756 38.2038 58.626 41.0072 58.626 43.875C58.626 45.7792 58.2509 47.6647 57.5222 49.424C56.7935 51.1832 55.7255 52.7816 54.379 54.1281C53.0326 55.4745 51.4341 56.5426 49.6749 57.2713C47.9157 58 46.0301 58.375 44.126 58.375ZM44.126 25.748C40.541 25.748 37.0365 26.8111 34.0557 28.8028C31.0749 30.7945 28.7517 33.6254 27.3797 36.9375C26.0078 40.2496 25.6489 43.8942 26.3483 47.4103C27.0477 50.9264 28.774 54.1561 31.309 56.6911C33.8439 59.226 37.0737 60.9524 40.5898 61.6518C44.1059 62.3512 47.7504 61.9922 51.0625 60.6203C54.3746 59.2484 57.2055 56.9251 59.1972 53.9443C61.1889 50.9635 62.252 47.459 62.252 43.874C62.252 39.0667 60.3423 34.4563 56.943 31.057C53.5437 27.6577 48.9333 25.748 44.126 25.748ZM51.811 36.189C50.8051 35.1749 49.6078 34.3706 48.2885 33.823C46.9693 33.2754 45.5544 32.9953 44.126 32.999V43.874L36.441 51.559C38.4874 53.5574 41.239 54.6685 44.0992 54.6514C46.9594 54.6344 49.6976 53.4907 51.7201 51.4682C53.7426 49.4457 54.8864 46.7075 54.9034 43.8473C54.9204 40.9871 53.8093 38.2355 51.811 36.189Z"
                          fill="white"
                        />
                      </svg>
                      <Typography variant="h3" className={classes.paperTitle}>
                        Timer
                      </Typography>
                      <Typography
                        variant="h4"
                        className={classes.paperSubTitle}
                      >
                        Always be on time. With our Timer-tools you can get the
                        most out of your workouts and days.
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper
                      className={classes.paper}
                      variant="outlined"
                      elevation={0}
                    >
                      <svg
                        width="77"
                        height="77"
                        viewBox="0 0 88 88"
                        fill="none"
                        className={classes.paperImg}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M44 88C68.3005 88 88 68.3005 88 44C88 19.6995 68.3005 0 44 0C19.6995 0 1.52588e-05 19.6995 1.52588e-05 44C1.52588e-05 68.3005 19.6995 88 44 88Z"
                          fill="#9E4EBD"
                        />
                        <path
                          d="M55 56H34V39.5H55V56ZM50.5 29V32H38.5V29H35.5V32H34C33.6057 31.9987 33.215 32.0754 32.8504 32.2257C32.4858 32.376 32.1546 32.5969 31.8758 32.8757C31.5969 33.1546 31.376 33.4858 31.2257 33.8504C31.0754 34.215 30.9987 34.6057 31 35V56C31 56.7956 31.3161 57.5587 31.8787 58.1213C32.4413 58.6839 33.2044 59 34 59H55C55.7957 59 56.5587 58.6839 57.1213 58.1213C57.6839 57.5587 58 56.7956 58 56V35C58 34.2044 57.6839 33.4413 57.1213 32.8787C56.5587 32.3161 55.7957 32 55 32H53.5V29H50.5ZM52 45.5H44.5V53H52V45.5Z"
                          fill="white"
                        />
                      </svg>
                      <Typography variant="h3" className={classes.paperTitle}>
                        Calendar
                      </Typography>
                      <Typography
                        variant="h4"
                        className={classes.paperSubTitle}
                      >
                        Schedule your coming week or month and never miss any
                        special event, workout or meet-up anymore.
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={4}>
                    <Paper
                      className={classes.paper}
                      variant="outlined"
                      elevation={0}
                    >
                      <svg
                        width="77"
                        height="77"
                        viewBox="0 0 88 88"
                        fill="none"
                        className={classes.paperImg}
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M44 88C68.3005 88 88 68.3005 88 44C88 19.6995 68.3005 0 44 0C19.6995 0 0 19.6995 0 44C0 68.3005 19.6995 88 44 88Z"
                          fill="#9E4EBD"
                        />
                        <path
                          d="M58 53.5V55H31V53.5L34 50.5V41.5C33.997 39.2378 34.7258 37.0352 36.0775 35.2212C37.4292 33.4072 39.3314 32.079 41.5 31.435V31C41.5 30.2044 41.8161 29.4413 42.3787 28.8787C42.9413 28.3161 43.7044 28 44.5 28C45.2956 28 46.0587 28.3161 46.6213 28.8787C47.1839 29.4413 47.5 30.2044 47.5 31V31.435C49.6686 32.079 51.5708 33.4072 52.9225 35.2212C54.2742 37.0352 55.003 39.2378 55 41.5V50.5L58 53.5ZM47.5 56.5C47.5 57.2956 47.1839 58.0587 46.6213 58.6213C46.0587 59.1839 45.2956 59.5 44.5 59.5C43.7044 59.5 42.9413 59.1839 42.3787 58.6213C41.8161 58.0587 41.5 57.2956 41.5 56.5"
                          fill="white"
                        />
                      </svg>
                      <Typography variant="h3" className={classes.paperTitle}>
                        Daily Check-Up
                      </Typography>
                      <Typography
                        variant="h4"
                        className={classes.paperSubTitle}
                      >
                        LiFit cares about you. Our Daily Check-Up allows our
                        users to reflect on their mood and mental well-being.
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
