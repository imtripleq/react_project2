import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({ foodList: {} });

const Food = () => {
  const classes = useStyles();
  return <div className={classes.foodList}></div>;
};

export default Food;
