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
import { cuisines } from "../data";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    width: "150px",
    height: "150px",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    [theme.breakpoints.between("xs", "sm")]: {
      flexDirection: "row",
      width: "100%",
      height: "100%",
      justifyContent: "space-between",
    },
  },
  selectContainer: {
    margin: "20px 0px",
    [theme.breakpoints.between("xs", "sm")]: {
      margin: "10px 0px",
    },
  },
  select: {
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "10pt!important",
    },
  },
  buttonContainer: {},
  button: {
    backgroundColor: "#EEEEEE!important",
    "&:hover": { backgroundColor: "#BC8CF2!important" },
    [theme.breakpoints.between("xs", "sm")]: {
      margin: "0px 10px!important",
      padding: "5px 5px!important",
      fontSize: "8pt!important",
    },
  },
}));

const AdvancedSideMenu = ({ pickNow }) => {
  const [cuisine, setCuisine] = useState("");

  const handleChange = (event) => {
    setCuisine(event.target.value);
  };

  const classes = useStyles();

  return (
    <Box className={classes.container}>
      <Box className={classes.selectContainer} sx={{ minWidth: 120 }}>
        <FormControl fullWidth>
          <InputLabel className={classes.select} id="demo-simple-select-label">
            Cuisine
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={cuisine}
            label="Cuisine"
            onChange={handleChange}
            className={classes.select}
          >
            {cuisines.map((item) => {
              return (
                <MenuItem className={classes.select} key={item} value={item}>
                  {item}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Box>
      <Box className={classes.buttonContainer}>
        <Button
          className={classes.button}
          variant="outlined"
          onClick={() => {
            pickNow(cuisine);
          }}
        >
          Search
        </Button>
      </Box>
    </Box>
  );
};

export default AdvancedSideMenu;
