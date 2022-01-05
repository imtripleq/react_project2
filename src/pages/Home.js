import { Box } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import RandomMeal from "../components/RandomMeal";
import SideMenu from "../components/SideMenu";
import { makeStyles } from "@mui/styles";
import Footer from "../components/Footer";
import axios from "axios";
import CustomRecipe from "../components/CustomRecipe";
import Welcome from "../components/Welcome";

const useStyles = makeStyles({
  page: { height: "100vh", display: "flex", flexDirection: "column" },
  container: {
    height: "100%",
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
    overflow: "auto",
  },
});
const Home = () => {
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState({ recipes: [] });
  const [recipeLoading, setRecipeLoading] = useState(false);

  const handleClick = async () => {
    const res = await axios.get(
      "https://api.spoonacular.com/recipes/random?apiKey=2d6e32c38391484998e157bd4097cd33"
    );

    setRecipe(res.data.recipes[0]);
    setLoading(true);
  };

  const handleRecipe = () => {
    setRecipeLoading(true);
    setLoading(false);
  };
  console.log(recipe);

  const classes = useStyles();

  return (
    <Box className={classes.page}>
      <Navbar />
      <Box className={classes.container}>
        <Box className={classes.selectorContainer}>
          <SideMenu pickNow={handleClick} />
        </Box>
        <Box className={classes.foodContainer}>
          {!loading ? <Welcome /> : null}
          {loading ? (
            <RandomMeal
              food={recipe}
              handleRecipe={handleRecipe}
              loading={loading}
            />
          ) : null}
          {recipeLoading ? (
            <CustomRecipe recipe={recipe} recipeLoading={recipeLoading} />
          ) : null}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
