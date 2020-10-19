import React from "react";
import Navbar from "../components/navbar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  bgCover: {
    width: "100%",
  }
}));

function PageOne() {
  const classes = useStyles();
  return (
    <>
        <Navbar />
        <img src="./hombre.jpg" className={classes.bgCover}/>
    </>
  );
}

export default PageOne;
