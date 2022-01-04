import { Box } from "@mui/material";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import RandomMeal from "../components/RandomMeal";
import SideMenu from "../components/SideMenu";
import { makeStyles } from "@mui/styles";
import Footer from "../components/Footer";

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
  const [image, setImage] = useState("");
  const [summary, setSummary] = useState("");
  const [instructions, setInstructions] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    fetch(
      "https://api.spoonacular.com/recipes/random?apiKey=2d6e32c38391484998e157bd4097cd33"
    ).then((resp) =>
      resp.json().then((data) => {
        const { image, summary, instructions, title } = data.recipes[0];

        setImage(image);
        setSummary(summary.replace(/<\/?[^>]+(>|$)/g, ""));
        setInstructions(instructions.replace(/<\/?[^>]+(>|$)/g, ""));
        setTitle(title);
        setLoading(true);
      })
    );
  };

  const classes = useStyles();

  return (
    <Box className={classes.page}>
      <Navbar />
      <Box className={classes.container}>
        <Box className={classes.selectorContainer}>
          <SideMenu pickNow={handleClick} />
        </Box>
        <Box className={classes.foodContainer}>
          {loading ? (
            <RandomMeal
              image={image}
              summary={summary}
              instructions={instructions}
              title={title}
            />
          ) : null}
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Home;
