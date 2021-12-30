import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  container: {
    display: "flex",
    width: "150px",
    height: "150px",
    backgroundColor: "white",
  },
});

const SideMenu = ({ pickNow }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.buttonContainer}>
        <Button onClick={pickNow}>Pick now</Button>
      </Box>
    </Box>
  );
};

export default SideMenu;
