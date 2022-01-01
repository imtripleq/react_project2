import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import FoodCard from "./FoodCard";
import SideMenu from "./SideMenu";

const useStyles = makeStyles({
  container: {
    height: "100vh",
    width: "100%",
    display: "flex",
  },

  selectorContainer: {
    flex: 1,
    backgroundColor: "blue",
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
  cardContainer: {
    margin: "10px 10px",
  },
});

const RandomMeal = ({ pickNow, image, summary, instructions, title }) => {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.container}>
        <Box className={classes.selectorContainer}>
          <SideMenu pickNow={pickNow} />
        </Box>
        <Box className={classes.foodContainer}>
          <Box className={classes.cardContainer}>
            <FoodCard
              image={image}
              summary={summary}
              instructions={instructions}
              title={title}
            />
          </Box>
          {/* <Box className={classes.cardContainer}>
            <FoodCard />
          </Box>
          <Box className={classes.cardContainer}>
            <FoodCard />
          </Box> */}
        </Box>
      </Box>
    </div>
  );
};

export default RandomMeal;
