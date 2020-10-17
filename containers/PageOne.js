import React from "react";
import Navbar from "../components/Navbar/navbar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {

  },
  bgCover: {
    width: "100%",
  }
}));

function PageOne() {
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <Navbar />
        <img src="./hombre.jpg" className={classes.bgCover}/>
      </div>
    </>
  );
}

export default PageOne;
