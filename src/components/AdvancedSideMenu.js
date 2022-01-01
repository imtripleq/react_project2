import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { cuisine } from "../data";

const useStyles = makeStyles({
  container: {
    display: "flex",
    width: "150px",
    height: "150px",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  buttonContainer: {},
  button: {
    backgroundColor: "white!important",
    "&:hover": { backgroundColor: "yellow!important" },
  },
  selectContainer: { margin: "20px 0px" },
});

const AdvancedSideMenu = ({ pickNow }) => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const classes = useStyles();
  console.log(age);
  return (
    <Box className={classes.container}>
      <Box className={classes.selectContainer} sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Cuisine</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Cuisine"
            onChange={handleChange}
          >
            {cuisine.map((item) => {
              return (
                <MenuItem key={item} value={item}>
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
      <Box className={classes.buttonContainer}>
        <Button className={classes.button} variant="outlined" onClick={pickNow}>
          Pick now
        </Button>
      </Box>
    </Box>
  );
};

export default AdvancedSideMenu;
