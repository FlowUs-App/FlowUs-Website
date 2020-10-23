import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import useWindowDimensions from "../hooks/windowsize";
import { CardContent } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { urlObjectKeys } from "next/dist/next-server/lib/utils";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#FAFAFA",
    marginTop: "5rem",
    textAlign: "center",
    width: "100%",
  },
  card: {
    width: "100%",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundImage: "url(./DSC_5350.jpeg)",
    backgroundPosition: "center",
  },
  slideTitle: {
    marginTop: "3rem",
    color: "white",
    fontFamily:
      "Lato, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif",
    fontWeight: 300,
    fontSize: "3rem",
    ["@media (max-width: 4000px)"]: {
      marginTop: "5rem",
      fontSize: "10rem",
    },
    ["@media (max-width: 3500px)"]: {
      fontSize: "8rem",
    },
    ["@media (max-width: 3000px)"]: {
      fontSize: "7rem",
    },
    ["@media (max-width: 2500px)"]: {
      fontSize: "5rem",
    },
    ["@media (max-width: 2000px)"]: {
      marginTop: "3rem",
      fontSize: "3rem",
    },
    ["@media (max-width: 500px)"]: {
      fontSize: "3rem",
    },
    ["@media (max-width: 400px)"]: {
      fontSize: "2rem",
    },
    ["@media (max-width: 300px)"]: {
      fontSize: "1.5rem",
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
  },
  slideSubTitle: {
    marginTop: "3rem",
    color: "white",
    fontFamily:
      "Poppins, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif",
    fontWeight: 400,
    fontSize: "1rem",
    ["@media (max-width: 4000px)"]: {
      fontSize: "2rem",
    },
    ["@media (max-width: 3500px)"]: {
      fontSize: "1.7rem",
    },
    ["@media (max-width: 3000px)"]: {
      fontSize: "1.5rem",
    },
    ["@media (max-width: 2500px)"]: {
      fontSize: "1.2rem",
    },
    ["@media (max-width: 2000px)"]: {
      marginTop: "3rem",
      fontSize: "1rem",
    },
  },
  fav: {
    transform: "scale(5)",
    ["@media (max-width: 4000px)"]: {
      transform: "scale(10)",
    },
    ["@media (max-width: 3500px)"]: {
      transform: "scale(8)",
    },
    ["@media (max-width: 3000px)"]: {
      transform: "scale(7)",
    },
    ["@media (max-width: 2500px)"]: {
      transform: "scale(6)",
    },
    ["@media (max-width: 2000px)"]: {
      transform: "scale(5)",
    },
  },
}));

function PageFour() {
  const classes = useStyles();
  const { height } = useWindowDimensions();
  const halfHeight = height / 3;
  const [touchDevice, setTouchDevice] = useState(false);
  useEffect(() => {
    setTouchDevice("ontouchstart" in document.documentElement);
  }, []);
  return (
    <>
      <div className={classes.root}>
        <Card
          className={classes.card}
          style={{
            height: height,
          }}
        >
          <CardContent>
            <FavoriteBorderIcon
              className={classes.fav}
              htmlColor="white"
              style={{ marginTop: halfHeight }}
            />
            <Typography variant="h2" className={classes.slideTitle}>
              We love our Community
            </Typography>
            <Typography
              variant="body2"
              className={classes.slideSubTitle}
              style={{ textAlign: touchDevice ? "start" : "center" }}
            >
              We are only as strong as our network, therefore we decided to
              engage with the community and help where we can. See our projects
              below.
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default PageFour;
