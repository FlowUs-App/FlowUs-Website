import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
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
    borderRadius: 5,
    padding: "75px 50px",
    margin: "0px 25px",
    width: "90%",
    boxShadow: "20px 20px 20px black",
    display: "flex",
    justifyContent: "center",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  }
}));

function PageFour() {
  const classes = useStyles();
  const [index, setIndex] = useState(0);
  const content = SLIDE_INFO[index];
  const numSlides = SLIDE_INFO.length;
  const onArrowClick = (direction) => {
    const increment = direction === "left" ? -1 : 1;
    const newIndex = (index + increment + numSlides) % numSlides;
    setIndex(newIndex);
  };
  return (
    <>
      <div className={classes.root}>
        <Container className={classes.flex}>
          <Arrow direction="left" clickFunction={() => onArrowClick("left")} />
          <Card
            className={classes.card}
            style={{ backgroundImage: "url(" + SLIDE_INFO[index] + ")" }}
          >
          </Card>
          <Arrow
          direction="right"
          clickFunction={() => onArrowClick("right")}
        />
        </Container>
      </div>
    </>
  );
}

export default PageFour;
