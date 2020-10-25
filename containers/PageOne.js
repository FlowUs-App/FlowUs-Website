import React from "react";
import Navbar from "../components/navbar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  bgCover: {
    width: "100%",
  ["@media (max-width: 400px)"]: {
    width: "120%",
  },
  ["@media (max-width: 300px)"]: {
    width: "130%",
  },
  }
}));

function PageOne() {
  const classes = useStyles();
  return (
    <>
        <Navbar tos={true}/>
    </>
  );
}

export default PageOne;
