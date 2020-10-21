import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import Arrow from "../components/arrow";

const SLIDE_INFO = ["./hombre.jpg", "./sport.jpg", "./mountain.jpg"];

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#FAFAFA",
    textAlign: "center",
    padding: "100px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    padding: "75px 50px",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
}));

function PageFour() {
  const classes = useStyles();
  const content = SLIDE_INFO[index];
  const numSlides = SLIDE_INFO.length;
  const [seconds, setSeconds] = useState(10);
  const [index, setIndex] = useState(0);
  const [slideIn, setSlideIn] = useState(true);
  const [slideDirection, setSlideDirection] = useState("right");
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
        <Container className={classes.flex}>
          <Slide in={slideIn} direction={slideDirection}>
            <Card
              className={classes.card}
              style={{ backgroundImage: "url(" + SLIDE_INFO[index] + ")" }}
            />
          </Slide>
        </Container>
      </div>
    </>
  );
}

export default PageFour;
