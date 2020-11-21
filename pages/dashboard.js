import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextField, Button } from "@material-ui/core";
import DashboardNavbar from "../components/dashboard_navbar";
import useWindowDimensions from "../hooks/windowsize";
import BulletPoints from "../components/BulletPoints";
import BlackFooter from "../containers/BlackFooter";
import { useRouter } from "next/router";
import firebase from "firebase/app";
import DashboardTitle from "../components/DashboardTitle";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#FAFAFA",
  },
  main: {},
  layout: {
    position: "absolute",
    width: "100%",
    height: "100px",
  },
  canvas: {
    position: "absolute",
  },
}));

function dashboard() {
  const classes = useStyles();
  const [user, setUser] = useState("");
  const [touchDevice, setTouchDevice] = useState(false);
  const { height } = useWindowDimensions();

  const router = useRouter();
  useEffect(() => {
    if (localStorage.getItem("userdata") === null) {
      router.push("/login");
    } else {
      setUser(JSON.parse(localStorage.getItem("userdata")));
    }

    //{user.uid}
  }, []);

  return (
    <>
      <DashboardTitle />
      <div style={{ height: height }}></div>
      <BulletPoints />
      <BlackFooter />
    </>
  );
}

export default dashboard;
