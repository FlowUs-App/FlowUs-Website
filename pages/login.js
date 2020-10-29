import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import useWindowDimensions from "../hooks/windowsize";

const useStyles = makeStyles((theme) => ({
  grid: {
    backgroundImage: "none",
    background: "#9E4EBD",
  },
}));

function login() {
  const classes = useStyles();
  useEffect(() => {
    setTouchDevice("ontouchstart" in document.documentElement);
  }, []);
  const [touchDevice, setTouchDevice] = useState(false);
  const { height } = useWindowDimensions();
  return (
    <>
      {touchDevice ? (
        <>
          <Grid container className={classes.grid}>
            <Grid item xs={12} style={{ height: height }}>
              hi
            </Grid>
            <Grid item xs={12} style={{ backgroundColor: "white" }}>
              yo
            </Grid>
          </Grid>{" "}
        </>
      ) : (
        <>
          <Grid container className={classes.grid} style={{ height: height }}>
            <Grid item xs={8}>
              hi
            </Grid>
            <Grid item xs={4} style={{ backgroundColor: "white" }}>
              yo
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
}

export default login;
