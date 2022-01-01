import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import RandomMeal from "../components/RandomMeal";

const Home = () => {
  const [image, setImage] = useState("");
  const [summary, setSummary] = useState("");
  const [instructions, setInstructions] = useState("");
  const [title, setTitle] = useState("");

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
        console.log(data);
      })
    );
  };
  console.log(instructions);
  console.log(instructions.replace(/<\/?[^>]+(>|$)/g, ""));
  return (
    <div>
      <Navbar />
      <RandomMeal
        pickNow={handleClick}
        image={image}
        summary={summary}
        instructions={instructions}
        title={title}
      />
    </div>
  );
};

export default Home;
