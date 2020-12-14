import { Grid } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  width: {
    width: "100%",
  },
  grid: {
    marginTop: "1rem",
  },
}));

function launchticket() {
  const classes = useStyles();
  return (
    <>
      <Grid
        container
        direction="column"
        alignItems="center"
        className={classes.grid}
      >
        <Grid item className={classes.width}>
          <Grid container justify="space-between">
            <Grid item>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="193"
                height="41"
                viewBox="0 0 193 41"
              >
                <rect
                  id="Rechteck_1062"
                  data-name="Rechteck 1062"
                  width="41"
                  height="8"
                  transform="translate(0 41) rotate(-90)"
                  fill="#56377e"
                />
                <g
                  id="Gruppe_70166"
                  data-name="Gruppe 70166"
                  transform="translate(-58 -53)"
                >
                  <rect
                    id="Rechteck_1060"
                    data-name="Rechteck 1060"
                    width="29"
                    height="7"
                    transform="translate(61 87)"
                    fill="#56377e"
                  />
                  <rect
                    id="Rechteck_1061"
                    data-name="Rechteck 1061"
                    width="21"
                    height="7"
                    transform="translate(69 70)"
                    fill="#56377e"
                  />
                  <rect
                    id="Rechteck_1063"
                    data-name="Rechteck 1063"
                    width="28"
                    height="7"
                    transform="translate(69 53)"
                    fill="#56377e"
                  />
                  <rect
                    id="Rechteck_1064"
                    data-name="Rechteck 1064"
                    width="41"
                    height="8"
                    transform="translate(93 94) rotate(-90)"
                    fill="#56377e"
                  />
                  <text
                    id="LiFit_App"
                    data-name="LiFit App"
                    transform="translate(119 85)"
                    fill="#56377e"
                    fontSize="30"
                    fontFamily="OpenSans-Bold, Open Sans"
                    fontWeight="700"
                  >
                    <tspan x="0" y="0">
                      LiFit App
                    </tspan>
                  </text>
                </g>
              </svg>
            </Grid>
            <Grid item>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="193"
                height="41"
                viewBox="0 0 193 41"
              >
                <rect
                  id="Rechteck_1062"
                  data-name="Rechteck 1062"
                  width="41"
                  height="8"
                  transform="translate(0 41) rotate(-90)"
                  fill="#56377e"
                />
                <g
                  id="Gruppe_70166"
                  data-name="Gruppe 70166"
                  transform="translate(-58 -53)"
                >
                  <rect
                    id="Rechteck_1060"
                    data-name="Rechteck 1060"
                    width="29"
                    height="7"
                    transform="translate(61 87)"
                    fill="#56377e"
                  />
                  <rect
                    id="Rechteck_1061"
                    data-name="Rechteck 1061"
                    width="21"
                    height="7"
                    transform="translate(69 70)"
                    fill="#56377e"
                  />
                  <rect
                    id="Rechteck_1063"
                    data-name="Rechteck 1063"
                    width="28"
                    height="7"
                    transform="translate(69 53)"
                    fill="#56377e"
                  />
                  <rect
                    id="Rechteck_1064"
                    data-name="Rechteck 1064"
                    width="41"
                    height="8"
                    transform="translate(93 94) rotate(-90)"
                    fill="#56377e"
                  />
                  <text
                    id="LiFit_App"
                    data-name="LiFit App"
                    transform="translate(119 85)"
                    fill="#56377e"
                    font-size="30"
                    font-family="OpenSans-Bold, Open Sans"
                    font-weight="700"
                  >
                    <tspan x="0" y="0">
                      LiFit App
                    </tspan>
                  </text>
                </g>
              </svg>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid
            container
            direction="row"
            alignContent="center"
            justify="center"
            alignItems="center"
          >
            <Grid item xl={6}>
              yo
            </Grid>
            <Grid item xl={6}>
              <img
                src="./launchticket.svg"
                alt="Two Phones with Screenshots of the LiFit App"
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default launchticket;
