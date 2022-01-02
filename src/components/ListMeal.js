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
  },
});

const ListMeal = ({ posts, loading }) => {
  const classes = useStyles();
  if (!loading) {
    return <h2>Pick your Cuisine</h2>;
  }
  console.log(posts);
  console.log(posts.results);
  return (
    <div>
      <Box className={classes.cardContainer}>
        {posts.results.map((item) => {
          return (
            <FoodCard ket={item.id} image={item.image} title={item.title} />
          );
        })}
      </Box>
    </div>
  );
};

export default ListMeal;
