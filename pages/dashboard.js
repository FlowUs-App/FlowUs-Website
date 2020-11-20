import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, TextField, Button } from "@material-ui/core";

function dashboard() {
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(localStorage.getItem("userdata"));
  }, []);

  return <Typography>{user}</Typography>;
}

export default dashboard;
