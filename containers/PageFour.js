import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import useWindowDimensions from "../hooks/windowsize";
import { CardContent, CardActionArea } from "@material-ui/core";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import RadioButtonUncheckedIcon from "@material-ui/icons/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@material-ui/icons/RadioButtonChecked";

const SLIDE_INFO = ["./hombre.jpg", "./sport.jpg", "./mountain.jpg"];

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
  },
  slideTitle: {
    marginTop: "3rem",
    color: "white",
    fontFamily:
      "Lato, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif",
    fontWeight: 300,
    fontSize: "3rem",
    ["@media (max-width: 500px)"]: {
      fontSize: "1rem",
    },
    ["@media (max-width: 400px)"]: {
      fontSize: "2rem",
    },
    ["@media (max-width: 300px)"]: {
      fontSize: "1rem",
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
  },
  fav: {
    transform: "scale(5)",
  },
}));

function PageFour() {
  const classes = useStyles();
  const [radio, setRadio] = useState(0);
  const numSlides = SLIDE_INFO.length;
  const { height } = useWindowDimensions();
  const halfHeight = height / 3;
  const [touchDevice, setTouchDevice] = useState(false);
  const [seconds, setSeconds] = useState(10);
  const [index, setIndex] = useState(0);
  const content = SLIDE_INFO[index];
  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState("right");
  useEffect(() => {
    setTouchDevice("ontouchstart" in document.documentElement);
  }, []);
  useEffect(() => {
    seconds > 0 && setTimeout(() => setSeconds(seconds - 1), 1000);
    if (seconds == 0) {
      setSeconds(10);
      if (slideDirection === "right") {
        onArrowClick("left");
      } else {
        onArrowClick("right");
      }
    }
  }, [seconds]);
  const onArrowClick = (direction) => {
    const increment = direction === "left" ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;
    setIndex(newIndex);
    const oppDirection = direction === "left" ? "right" : "left";
    setSlideDirection(direction);
    setSlideIn(false);
    setTimeout(() => {
      setIndex(newIndex);
      setSlideDirection(oppDirection);
      setSlideIn(true);
    }, 500);
  };
  return (
    <>
      <div className={classes.root}>
        <Slide in={slideIn} direction={slideDirection}>
          <Card
            className={classes.card}
            style={{
              backgroundImage: "url(" + SLIDE_INFO[index] + ")",
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
                engage with the community and help where we can. See our
                projects below.
              </Typography>
            </CardContent>

          </Card>
        </Slide>
      </div>
    </>
  );
}

export default PageFour;
