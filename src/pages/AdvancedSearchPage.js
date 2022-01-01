import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import AdvancedSideMenu from "../components/AdvancedSideMenu";
import Navbar from "../components/Navbar";
import RandomMeal from "../components/RandomMeal";

const useStyles = makeStyles({
  container: {
    height: "100vh",
    width: "100%",
    display: "flex",
  },
  selectorContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    maxWidth: "200px",
  },
  foodContainer: {
    flex: 3,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    maxHeight: "100%",
  },
});
const AdvancedSearch = ({ pickNow, image, summary, instructions, title }) => {
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Box className={classes.container}>
        <Box className={classes.selectorContainer}>
          <AdvancedSideMenu />
        </Box>
        <Box className={classes.foodContainer}>
          <RandomMeal
            image={image}
            summary={summary}
            instructions={instructions}
            title={title}
          />
        </Box>
      </Box>
    </div>
  );
};

export default AdvancedSearch;
