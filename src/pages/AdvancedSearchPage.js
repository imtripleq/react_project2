import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";
import AdvancedSideMenu from "../components/AdvancedSideMenu";
import Navbar from "../components/Navbar";
import RandomMeal from "../components/RandomMeal";
import axios from "axios";
import ListMeal from "../components/ListMeal";

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
const AdvancedSearch = ({}) => {
  const [posts, setPosts] = useState({ data: "", loading: false });
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const fetchPosts = async (cuisine = "Chinese") => {
    setLoading(true);
    const res = await axios.get(
      `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisine}&apiKey=2d6e32c38391484998e157bd4097cd33`
    );
    setPosts({ data: res.data, loading: true });
  };

  console.log(posts.loading);
  const classes = useStyles();
  return (
    <div>
      <Navbar />
      <Box className={classes.container}>
        <Box className={classes.selectorContainer}>
          <AdvancedSideMenu pickNow={fetchPosts} />
        </Box>
        <Box className={classes.foodContainer}>
          <ListMeal posts={posts.data} loading={posts.loading} />
        </Box>
      </Box>
    </div>
  );
};

export default AdvancedSearch;
