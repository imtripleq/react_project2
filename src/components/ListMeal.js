import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import FoodCard from "./FoodCard";

const useStyles = makeStyles({
  cardContainer: {
    margin: "10px 10px",
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "",
    height: "100%",
    width: "100%",
    justifyContent: "space-between",
    maxWidth: "900px",
  },
  card: {
    margin: "20px 30px",
    width: "100%",
    height: "100%",
    maxWidth: "210px",
    maxHeight: "200px",
  },
});

const ListMeal = ({ posts, loading, handleRecipe }) => {
  const classes = useStyles();
  if (!loading) {
    return <h2>Pick your Cuisine</h2>;
  }

  return (
    <Box className={classes.cardContainer}>
      {posts.map((item) => {
        return (
          <Box className={classes.card} key={item.id}>
            <FoodCard
              image={item.image}
              title={item.title}
              handleRecipe={() => handleRecipe(item.id)}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default ListMeal;
