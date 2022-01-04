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
    maxHeight: "100%",
  },
  cardContainer: {
    margin: "10px 10px",
    display: "flex",
    flexWrap: "wrap",
  },
  card: {
    margin: "0px 5px",
    maxWidth: "150px",
    maxHeight: "400px",
    height: "500px",
  },
});

const ListMeal = ({ posts, loading, handleRecipe }) => {
  const classes = useStyles();
  if (!loading) {
    return <h2>Pick your Cuisine</h2>;
  }

  return (
    <div>
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
    </div>
  );
};

export default ListMeal;
