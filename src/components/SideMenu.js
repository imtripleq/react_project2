import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  container: {
    display: "flex",
    width: "150px",
    height: "150px",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {},
  button: {
    backgroundColor: "white!important",
    "&:hover": { backgroundColor: "yellow!important" },
  },
});

const SideMenu = ({ pickNow }) => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.buttonContainer}>
        <Button className={classes.button} variant="outlined" onClick={pickNow}>
          Pick now
        </Button>
      </Box>
    </Box>
  );
};

export default SideMenu;
