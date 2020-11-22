import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextField, Button } from "@material-ui/core";
import DashboardNavbar from "../components/dashboard_navbar";
import useWindowDimensions from "../hooks/windowsize";

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
  BigPic: {
    width: "50%",

    ["@media (max-width: 800px)"]: {
      transform: "scale(1.5)",
    },
  },
  coverTitle: {
    marginTop: "5rem",
    color: "#FFFFFF",
    "-moz-user-select": "-moz-none",
    "-khtml-user-select": "none",
    "-webkit-user-select": "none",
    "-ms-user-select": "none",
    fontFamily:
      "Lato, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif",
    fontWeight: "300",
    fontSize: "7rem",
    ["@media (max-width: 4000px)"]: {
      marginTop: "15rem",
      fontSize: "15rem",
    },
    ["@media (max-width: 3500px)"]: {
      marginTop: "13rem",
      fontSize: "11rem",
    },
    ["@media (max-width: 3000px)"]: {
      fontSize: "9rem",
    },
    ["@media (max-width: 2500px)"]: {
      marginTop: "10rem",
      fontSize: "7rem",
    },
    ["@media (max-width: 2000px)"]: {
      marginTop: "0rem",
      fontSize: "5rem",
    },
    ["@media (max-width: 1000px)"]: {
      fontSize: "5rem",
    },
    ["@media (max-width: 800px)"]: {
      fontSize: "4.5rem",
    },
    ["@media (max-width: 600px)"]: {
      fontSize: "3.5rem",
    },
    ["@media (max-width: 400px)"]: {
      fontSize: "2.5rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 1000px)"]: {
      fontSize: "5rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 900px)"]: {
      fontSize: "4rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 800px)"]: {
      fontSize: "3rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 700px)"]: {
      fontSize: "2rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 400px)"]: {
      fontSize: "1.5rem",
    },
  },
  MobCoverTitle: {
    padding: 5,
    marginTop: "5rem",
    color: "#FFFFFF",
    "-moz-user-select": "-moz-none",
    "-khtml-user-select": "none",
    "-webkit-user-select": "none",
    "-ms-user-select": "none",
    fontFamily:
      "Lato, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif",
    fontWeight: "300",
    fontSize: "7rem",
    ["@media (max-width: 4000px)"]: {
      marginTop: "16rem",
      fontSize: "20rem",
    },
    ["@media (max-width: 3500px)"]: {
      marginTop: "16rem",
      fontSize: "17rem",
    },
    ["@media (max-width: 3000px)"]: {
      fontSize: "14rem",
    },
    ["@media (max-width: 2500px)"]: {
      marginTop: "15rem",
      fontSize: "12rem",
    },
    ["@media (max-width: 2000px)"]: {
      marginTop: "5rem",
      fontSize: "7rem",
    },
    ["@media (max-width: 1000px)"]: {
      fontSize: "5.5rem",
    },
    ["@media (max-width: 800px)"]: {
      fontSize: "4.5rem",
    },
    ["@media (max-width: 600px)"]: {
      fontSize: "3.5rem",
    },
    ["@media (max-width: 400px)"]: {
      fontSize: "2.5rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 1000px)"]: {
      fontSize: "5rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 900px)"]: {
      fontSize: "4rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 800px)"]: {
      fontSize: "3rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 700px)"]: {
      fontSize: "2rem",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 400px)"]: {
      fontSize: "1.5rem",
    },
  },
  belowBar: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  coverButton: {
    backgroundColor: "#56377E",
    fontFamily:
      "Lato, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif",
    color: "#FFF",
    width: "20rem",
    height: "4rem",
    marginTop: "4rem",
    borderRadius: "30px",
    ["@media (max-width: 4000px)"]: {
      height: "11rem",
      width: "43rem",
      fontSize: "3rem",
    },
    ["@media (max-width: 3500px)"]: {
      height: "10rem",
      width: "40rem",
    },
    ["@media (max-width: 3000px)"]: {
      height: "9rem",
      width: "35rem",
      fontSize: "2.5rem",
    },
    ["@media (max-width: 2500px)"]: {
      height: "7rem",
      width: "25rem",
      fontSize: "2rem",
    },
    ["@media (max-width: 2000px)"]: {
      height: "4rem",
      width: "20rem",
      fontSize: "1rem",
    },
    ["@media (max-width: 500px)"]: {
      height: "4rem",
      width: "80%",
      fontSize: "1rem",
    },
    ["@media (max-width: 400px)"]: {
      height: "3.5rem",
      width: "80%",
      fontSize: "1rem",
    },
    ["@media (max-width: 300px)"]: {
      height: "3rem",
      width: "80%",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 1000px)"]: {
      marginTop: "4rem",
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
    "&:hover": {
      background: "#56377E",
    },
  },
  coverButton: {
    backgroundColor: "#56377E",
    fontFamily:
      "Lato, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif",
    color: "#FFF",
    width: "20rem",
    height: "4rem",
    marginTop: "4rem",
    borderRadius: "30px",
    ["@media (max-width: 4000px)"]: {
      height: "11rem",
      width: "43rem",
      fontSize: "3rem",
    },
    ["@media (max-width: 3500px)"]: {
      height: "10rem",
      width: "40rem",
    },
    ["@media (max-width: 3000px)"]: {
      height: "9rem",
      width: "35rem",
      fontSize: "2.5rem",
    },
    ["@media (max-width: 2500px)"]: {
      height: "7rem",
      width: "25rem",
      fontSize: "2rem",
    },
    ["@media (max-width: 2000px)"]: {
      height: "4rem",
      width: "20rem",
      fontSize: "1rem",
    },
    ["@media (max-width: 500px)"]: {
      height: "4rem",
      width: "80%",
      fontSize: "1rem",
    },
    ["@media (max-width: 400px)"]: {
      height: "3.5rem",
      width: "80%",
      fontSize: "1rem",
    },
    ["@media (max-width: 300px)"]: {
      height: "3rem",
      width: "80%",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 1000px)"]: {
      marginTop: "4rem",
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
    "&:hover": {
      background: "#56377E",
    },
  },
  OtherCoverButton: {
    backgroundColor: "#9E4EBD",
    fontFamily:
      "Lato, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif",
    color: "#FFF",
    width: "20rem",
    height: "4rem",
    marginTop: "4rem",
    borderRadius: "30px",
    ["@media (max-width: 4000px)"]: {
      height: "11rem",
      width: "43rem",
      fontSize: "3rem",
    },
    ["@media (max-width: 3500px)"]: {
      height: "10rem",
      width: "40rem",
    },
    ["@media (max-width: 3000px)"]: {
      height: "9rem",
      width: "35rem",
      fontSize: "2.5rem",
    },
    ["@media (max-width: 2500px)"]: {
      height: "7rem",
      width: "25rem",
      fontSize: "2rem",
    },
    ["@media (max-width: 2000px)"]: {
      height: "4rem",
      width: "20rem",
      fontSize: "1rem",
    },
    ["@media (max-width: 500px)"]: {
      height: "4rem",
      width: "80%",
      fontSize: "1rem",
    },
    ["@media (max-width: 400px)"]: {
      height: "3.5rem",
      width: "80%",
      fontSize: "1rem",
    },
    ["@media (max-width: 300px)"]: {
      height: "3rem",
      width: "80%",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 1000px)"]: {
      marginTop: "4rem",
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
    "&:hover": {
      backgroundColor: "#9E4EBD",
    },
  },
  MobOtherCoverButton: {
    backgroundColor: "#9E4EBD",
    fontFamily:
      "Lato, -apple-system, Helvetica Neue, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, sans-serif",
    color: "#FFF",
    width: "20rem",
    height: "4rem",
    marginTop: "1rem",
    borderRadius: "30px",
    ["@media (max-width: 4000px)"]: {
      height: "11rem",
      width: "43rem",
      fontSize: "3rem",
    },
    ["@media (max-width: 3500px)"]: {
      height: "10rem",
      width: "40rem",
    },
    ["@media (max-width: 3000px)"]: {
      height: "9rem",
      width: "35rem",
      fontSize: "2.5rem",
    },
    ["@media (max-width: 2500px)"]: {
      height: "7rem",
      width: "25rem",
      fontSize: "2rem",
    },
    ["@media (max-width: 2000px)"]: {
      height: "4rem",
      width: "20rem",
      fontSize: "1rem",
    },
    ["@media (max-width: 500px)"]: {
      height: "4rem",
      width: "80%",
      fontSize: "1rem",
    },
    ["@media (max-width: 400px)"]: {
      height: "3.5rem",
      width: "80%",
      fontSize: "1rem",
    },
    ["@media (max-width: 300px)"]: {
      height: "3rem",
      width: "80%",
    },
    ["@media screen and (orientation: landscape) and (max-device-width: 1000px)"]: {
      marginTop: "4rem",
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
    "&:hover": {
      backgroundColor: "#9E4EBD",
    },
  },
}));

function DashboardTitle() {
  const classes = useStyles();
  const [touchDevice, setTouchDevice] = useState(false);
  const { height } = useWindowDimensions();
  useEffect(() => {
    setTouchDevice("ontouchstart" in document.documentElement);
    var canvas = document.getElementById("canvas"),
      ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var stars = [], // Array that contains the stars
      FPS = 60, // Frames per second
      x = "ontouchstart" in document.documentElement ? 50 : 150, // Number of stars
      mouse = {
        x: 0,
        y: 0,
      }; // mouse location

    // Push stars to array

    for (var i = 0; i < x; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1 + 1,
        vx: Math.floor(Math.random() * 50) - 25,
        vy: Math.floor(Math.random() * 50) - 25,
      });
    }

    // Draw the scene

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.globalCompositeOperation = "lighter";

      for (var i = 0, x = stars.length; i < x; i++) {
        var s = stars[i];

        ctx.fillStyle = "#fff";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.radius, 0, 2 * Math.PI);
        ctx.fill();
        ctx.fillStyle = "black";
        ctx.stroke();
      }

      ctx.beginPath();
      for (var i = 0, x = stars.length; i < x; i++) {
        var starI = stars[i];
        ctx.moveTo(starI.x, starI.y);
        if (distance(mouse, starI) < 150) ctx.lineTo(mouse.x, mouse.y);
        for (var j = 0, x = stars.length; j < x; j++) {
          var starII = stars[j];
          if (distance(starI, starII) < 150) {
            //ctx.globalAlpha = (1 / 150 * distance(starI, starII).toFixed(1));
            ctx.lineTo(starII.x, starII.y);
          }
        }
      }
      ctx.lineWidth = 0.05;
      ctx.strokeStyle = "white";
      ctx.stroke();
    }

    function distance(point1, point2) {
      var xs = 0;
      var ys = 0;

      xs = point2.x - point1.x;
      xs = xs * xs;

      ys = point2.y - point1.y;
      ys = ys * ys;

      return Math.sqrt(xs + ys);
    }

    // Update star locations

    function update() {
      for (var i = 0, x = stars.length; i < x; i++) {
        var s = stars[i];

        s.x += s.vx / FPS;
        s.y += s.vy / FPS;

        if (s.x < 0 || s.x > canvas.width) s.vx = -s.vx;
        if (s.y < 0 || s.y > canvas.height) s.vy = -s.vy;
      }
    }

    canvas.addEventListener("mousemove", function (e) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    });

    // Update and draw

    function tick() {
      draw();
      update();
      requestAnimationFrame(tick);
    }

    tick();
  }, []);
  return (
    <div className={classes.main}>
      <canvas
        id="canvas"
        style={{
          background: "#232323",
          width: "100%",
          height: height,
          position: "absolute",
        }}
      />
      <div className={classes.layout}>
        <DashboardNavbar />

        {touchDevice ? (
          <>
            <div className={classes.belowBar}>
              <Typography align="center" className={classes.MobCoverTitle}>
                We help you find the right people
              </Typography>
              <img className={classes.BigPic} src="../InfAndAdv.png" />
              <Button
                variant="contained"
                className={classes.coverButton}
                href="#mission"
              >
                DISCOVER INFLUENCERS
              </Button>
              <Button
                variant="contained"
                className={classes.MobOtherCoverButton}
                href="#mission"
              >
                CONTACT ADVISERS
              </Button>
            </div>
          </>
        ) : (
          <>
            <div className={classes.belowBar}>
              <Typography align="center" className={classes.coverTitle}>
                We help you find the right people
              </Typography>
              <img className={classes.BigPic} src="../InfAndAdv.png" />
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",

                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  className={classes.coverButton}
                  href="#mission"
                  style={{ marginRight: "1rem" }}
                >
                  DISCOVER INFLUENCERS
                </Button>
                <Button
                  variant="contained"
                  className={classes.OtherCoverButton}
                  href="#mission"
                >
                  CONTACT ADVISERS
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default DashboardTitle;
