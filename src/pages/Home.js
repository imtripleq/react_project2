import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import RandomMeal from "../components/RandomMeal";

const Home = () => {
  const handleClick = () => {
    fetch(
      "https://api.spoonacular.com/recipes/random?apiKey=2d6e32c38391484998e157bd4097cd33"
    ).then((resp) => resp.json().then((data) => console.log(data)));
  };

  return (
    <div>
      <Navbar />
      <RandomMeal pickNow={handleClick} />
    </div>
  );
};

export default Home;
