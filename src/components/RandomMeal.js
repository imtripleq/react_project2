import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({
  container: { height: "100vh", width: "100%" },
});

const RandomMeal = () => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.container}>
        <Box className={classes.selectorContainer}></Box>
        <Box className={classes.foodContainer}></Box>
      </Box>
    </div>
  );
};

export default RandomMeal;
