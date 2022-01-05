import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import FoodCard from "./FoodCard";

const useStyles = makeStyles({
  foodContainer: {
    flex: 3,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
  },
  cardContainer: {
    margin: "10px 10px",
  },
});

const RandomMeal = ({ food, handleRecipe }) => {
  const classes = useStyles();
  const { image, title } = food;

  return (
    <div>
      <Box className={classes.cardContainer}>
        <FoodCard image={image} title={title} handleRecipe={handleRecipe} />
      </Box>
    </div>
  );
};

export default RandomMeal;
