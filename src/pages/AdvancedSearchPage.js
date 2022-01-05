import { Box, Pagination } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import AdvancedSideMenu from "../components/AdvancedSideMenu";
import Navbar from "../components/Navbar";
import axios from "axios";
import ListMeal from "../components/ListMeal";
import Footer from "../components/Footer";
import CustomRecipe from "../components/CustomRecipe";

const useStyles = makeStyles((theme) => ({
  page: { height: "100vh", display: "flex", flexDirection: "column" },
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    [theme.breakpoints.between("xs", "sm")]: {
      flexDirection: "column",
    },
  },
  selectorContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    maxWidth: "400px",
    width: "200px",
    backgroundColor: "#F4F3F3",
    [theme.breakpoints.between("xs", "sm")]: {
      width: "100%",
    },
  },
  foodContainer: {
    backgroundColor: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  listMealContainer: {
    flex: 3,
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
    maxHeight: "80%",
  },
  footerContainer: {
    [theme.breakpoints.between("xs", "sm")]: {
      display: "none",
    },
  },
}));
const AdvancedSearch = () => {
  const [posts, setPosts] = useState({ results: [] });
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);
  const [recipe, setRecipe] = useState({ results: [] });
  const [recipeLoading, setRecipeLoading] = useState(false);

  const fetchPosts = async (cuisine = "Chinese") => {
    const res = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisine}&number=100&apiKey=2d6e32c38391484998e157bd4097cd33`
    );

    setPosts(res.data);
    setLoading(true);
    setRecipeLoading(false);
  };

  //Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.results.slice(indexOfFirstPost, indexOfLastPost);
  const pageNumbers = Math.ceil(posts.results.length / postsPerPage);

  //Change Page
  const handlePage = (e, value) => {
    setCurrentPage(value);
  };

  //Recipe expand

  const handleRecipe = async (id) => {
    const res = await axios.get(
      `https://api.spoonacular.com/recipes/${id}/information?apiKey=2d6e32c38391484998e157bd4097cd33`
    );
    setRecipe(res.data);
    setLoading(false);
    setRecipeLoading(true);
    console.log(recipe);
  };

  const classes = useStyles();
  return (
    <Box className={classes.page}>
      <Navbar />
      <Box className={classes.container}>
        <Box className={classes.selectorContainer}>
          <AdvancedSideMenu pickNow={fetchPosts} />
        </Box>
        <Box className={classes.foodContainer}>
          <Box className={classes.listMealContainer}>
            {!recipeLoading ? (
              <ListMeal
                posts={currentPosts}
                loading={loading}
                handleRecipe={handleRecipe}
              />
            ) : null}

            {recipeLoading ? (
              <CustomRecipe recipe={recipe} recipeLoading={recipeLoading} />
            ) : null}
          </Box>
          <Box className={classes.pagination}>
            {loading ? (
              <Pagination count={pageNumbers} onChange={handlePage} />
            ) : null}
          </Box>
        </Box>
      </Box>
      <Box className={classes.footerContainer}>
        <Footer />
      </Box>
    </Box>
  );
};

export default AdvancedSearch;
