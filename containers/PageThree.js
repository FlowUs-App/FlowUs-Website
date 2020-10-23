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

function PageThree() {
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
              Features of the LiFit App
            </Typography>
            <Grid item>
              <Typography align="center" className={classes.featSubTitle}>
                Our loyal Users love our manifold features. Below you can get a
                glimpse on a couple of them.
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
                      >
                        <path
                          d="M44 88C68.3005 88 88 68.3005 88 44C88 19.6995 68.3005 0 44 0C19.6995 0 0 19.6995 0 44C0 68.3005 19.6995 88 44 88Z"
                          fill="#9E4EBD"
                        />
                        <path
                          d="M59 52.5C59 54.0913 58.3679 55.6174 57.2426 56.7426C56.1174 57.8679 54.5913 58.5 53 58.5H47C45.4087 58.5 43.8826 57.8679 42.7574 56.7426C41.6321 55.6174 41 54.0913 41 52.5V49.5H59V52.5ZM32 30H47C47.7956 30 48.5587 30.3161 49.1213 30.8787C49.6839 31.4413 50 32.2044 50 33V46.5H38V54H32C31.2044 54 30.4413 53.6839 29.8787 53.1213C29.3161 52.5587 29 51.7956 29 51V33C29 32.2044 29.3161 31.4413 29.8787 30.8787C30.4413 30.3161 31.2044 30 32 30ZM32 34.5V37.5H35V34.5H32ZM47 37.5V34.5H38V37.5H47ZM32 40.5V43.5H35V40.5H32ZM38 40.5V43.5H47V40.5H38ZM32 46.5V49.5H35V46.5H32Z"
                          fill="white"
                        />
                      </svg>
                      <Typography variant="h3" className={classes.paperTitle}>
                        Nutrition
                      </Typography>
                      <Typography
                        variant="h4"
                        className={classes.paperSubTitle}
                      >
                        Keep track of your consumed foods and expand your
                        knowledge with new recipes and blog posts.
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
                          d="M44 88C68.3005 88 88 68.3005 88 44C88 19.6995 68.3005 0 44 0C19.6994 0 -3.05176e-05 19.6995 -3.05176e-05 44C-3.05176e-05 68.3005 19.6994 88 44 88Z"
                          fill="#9E4EBD"
                        />
                        <path
                          d="M44.109 32.0041C43.4717 32.0041 42.8488 32.193 42.319 32.5471C41.7891 32.9011 41.3761 33.4043 41.1323 33.9931C40.8884 34.5818 40.8246 35.2296 40.9489 35.8546C41.0732 36.4796 41.3801 37.0538 41.8307 37.5044C42.2813 37.955 42.8554 38.2618 43.4804 38.3861C44.1054 38.5105 44.7533 38.4467 45.342 38.2028C45.9307 37.9589 46.434 37.546 46.788 37.0161C47.142 36.4863 47.331 35.8633 47.331 35.2261C47.3325 34.8025 47.2501 34.3829 47.0887 33.9913C46.9273 33.5998 46.69 33.244 46.3905 32.9445C46.0911 32.645 45.7353 32.4078 45.3437 32.2464C44.9522 32.085 44.5325 32.0026 44.109 32.0041ZM60.219 25.5601V33.6151H57V30.3931H31.222V33.6151H28V25.5601H31.222V28.7821H57V25.5601H60.222H60.219ZM48.942 42.0881V61.0001H45.72V52.9461H42.5V61.0001H39.277V42.0881C37.5812 41.2016 36.1596 39.8688 35.1658 38.2335C34.1721 36.5982 33.6438 34.7226 33.638 32.8091V32.0041H36.86V32.8091C36.86 34.7319 37.6238 36.5759 38.9835 37.9356C40.3431 39.2952 42.1872 40.0591 44.11 40.0591C46.0328 40.0591 47.8769 39.2952 49.2365 37.9356C50.5962 36.5759 51.36 34.7319 51.36 32.8091V32.0041H54.58V32.8091C54.5743 34.7225 54.0462 36.5981 53.0526 38.2333C52.059 39.8686 50.6377 41.2015 48.942 42.0881Z"
                          fill="white"
                        />
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
                        width="88"
                        height="88"
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
                          d="M59 52.5C59 54.0913 58.3679 55.6174 57.2426 56.7426C56.1174 57.8679 54.5913 58.5 53 58.5H47C45.4087 58.5 43.8826 57.8679 42.7574 56.7426C41.6321 55.6174 41 54.0913 41 52.5V49.5H59V52.5ZM32 30H47C47.7956 30 48.5587 30.3161 49.1213 30.8787C49.6839 31.4413 50 32.2044 50 33V46.5H38V54H32C31.2044 54 30.4413 53.6839 29.8787 53.1213C29.3161 52.5587 29 51.7956 29 51V33C29 32.2044 29.3161 31.4413 29.8787 30.8787C30.4413 30.3161 31.2044 30 32 30ZM32 34.5V37.5H35V34.5H32ZM47 37.5V34.5H38V37.5H47ZM32 40.5V43.5H35V40.5H32ZM38 40.5V43.5H47V40.5H38ZM32 46.5V49.5H35V46.5H32Z"
                          fill="white"
                        />
                      </svg>

                      <Typography variant="h3" className={classes.paperTitle}>
                        Nutrition
                      </Typography>
                      <Typography
                        variant="h4"
                        className={classes.paperSubTitle}
                      >
                        Keep track of your consumed foods and expand your
                        knowledge with new recipes and blog posts.
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
                          d="M44 88C68.3005 88 88 68.3005 88 44C88 19.6995 68.3005 0 44 0C19.6994 0 -3.05176e-05 19.6995 -3.05176e-05 44C-3.05176e-05 68.3005 19.6994 88 44 88Z"
                          fill="#9E4EBD"
                        />
                        <path
                          d="M44.109 32.0041C43.4717 32.0041 42.8488 32.193 42.319 32.5471C41.7891 32.9011 41.3761 33.4043 41.1323 33.9931C40.8884 34.5818 40.8246 35.2296 40.9489 35.8546C41.0732 36.4796 41.3801 37.0538 41.8307 37.5044C42.2813 37.955 42.8554 38.2618 43.4804 38.3861C44.1054 38.5105 44.7533 38.4467 45.342 38.2028C45.9307 37.9589 46.434 37.546 46.788 37.0161C47.142 36.4863 47.331 35.8633 47.331 35.2261C47.3325 34.8025 47.2501 34.3829 47.0887 33.9913C46.9273 33.5998 46.69 33.244 46.3905 32.9445C46.0911 32.645 45.7353 32.4078 45.3437 32.2464C44.9522 32.085 44.5325 32.0026 44.109 32.0041ZM60.219 25.5601V33.6151H57V30.3931H31.222V33.6151H28V25.5601H31.222V28.7821H57V25.5601H60.222H60.219ZM48.942 42.0881V61.0001H45.72V52.9461H42.5V61.0001H39.277V42.0881C37.5812 41.2016 36.1596 39.8688 35.1658 38.2335C34.1721 36.5982 33.6438 34.7226 33.638 32.8091V32.0041H36.86V32.8091C36.86 34.7319 37.6238 36.5759 38.9835 37.9356C40.3431 39.2952 42.1872 40.0591 44.11 40.0591C46.0328 40.0591 47.8769 39.2952 49.2365 37.9356C50.5962 36.5759 51.36 34.7319 51.36 32.8091V32.0041H54.58V32.8091C54.5743 34.7225 54.0462 36.5981 53.0526 38.2333C52.059 39.8686 50.6377 41.2015 48.942 42.0881Z"
                          fill="white"
                        />
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

export default PageThree;
