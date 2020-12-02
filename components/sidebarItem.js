import React from "react";
import { Grid } from "@material-ui/core";

function SideBarItem() {
  return (
    <>
      <Grid container direction="row">
        <Grid item xs={6}>
          icon
        </Grid>
        <Grid item xs={6}>
          text
        </Grid>
      </Grid>
    </>
  );
}

export default SideBarItem;
