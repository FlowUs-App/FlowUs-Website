import React from "react";
import { Grid } from "@material-ui/core";
import SideBarItem from "./sidebarItem";

function Siderbar() {
  return (
    <Grid direction="column" container alignContent="center" justify="center">
      <Grid item xs={12}>
        SVG
      </Grid>
      <Grid item xs={12}>
        <SideBarItem />
      </Grid>
      <Grid item xs={12}>
        <SideBarItem />
      </Grid>
      <Grid item xs={12}>
        <SideBarItem />
      </Grid>
      <Grid item xs={12}>
        <SideBarItem />
      </Grid>
      <Grid item xs={12}>
        <SideBarItem />
      </Grid>
    </Grid>
  );
}

export default Siderbar;
