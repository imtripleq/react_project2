import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import SideMenu from "./SideMenu";

const useStyles = makeStyles({
  container: { height: "100vh", width: "100%", display: "flex" },
  selectorContainer: { flex: 1, backgroundColor: "blue" },
  foodContainer: { flex: 3, backgroundColor: "white" },
});

const RandomMeal = ({ pickNow }) => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.container}>
        <Box className={classes.selectorContainer}>
          <SideMenu pickNow={pickNow} />
        </Box>
        <Box className={classes.foodContainer}></Box>
      </Box>
    </div>
  );
};

export default RandomMeal;
