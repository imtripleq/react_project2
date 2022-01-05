import {
  Box,
  TableContainer,
  Typography,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  page: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",

    [theme.breakpoints.between("xs", "sm")]: {},
  },
  imageContainer: {
    [theme.breakpoints.between("xs", "sm")]: {},
  },
  titleContainer: { margin: "10px 0px" },
  img: { maxHeight: "180px" },
  tableContainer: { margin: "0px 10px" },
  infoContainer: {
    display: "flex",
    [theme.breakpoints.between("xs", "sm")]: {
      flexDirection: "column",
    },
  },
  tableHead: {
    fontSize: "10pt!important",
    padding: "0px 15px!important",
  },
  tableCell: { fontSize: "8pt!important", padding: "0px 15px!important" },
  summaryContainer: {
    margin: "10px 30px",
    textAlign: "justify",
    maxWidth: "800px",
    [theme.breakpoints.between("xs", "sm")]: {
      margin: "0px 3px",
    },
  },
  instructionsContainer: {
    maxWidth: "800px",

    textAlign: "justify",
    margin: "10px 30px",
  },
}));

const CustomRecipe = ({ recipe, recipeLoading }) => {
  const classes = useStyles();
  const [selected, setSelected] = useState({});

  const {
    cheap,
    dairyFree,
    glutenFree,
    healthScore,
    readyInMinutes,
    servings,
    sourceName,
    sourceUrl,
    spoonacularScore,
    vegetarian,
    veryHealthy,
    title,
    image,
    summary,
    instructions,
  } = recipe;

  useEffect(() => {
    setSelected({
      "Dairy Free": dairyFree,
      "Gluten Free": glutenFree,
      "Health Score": healthScore,
      "Ready in Minutes": readyInMinutes,
      Servings: servings,
      "Source Name": sourceName,
      "Source Website": sourceUrl,
      Score: spoonacularScore,
      Vegetarian: vegetarian,
      Healthy: veryHealthy,
      "Cheap to buy": cheap,
    });
  }, []);

  console.log(recipe);
  console.log(selected);
  console.log(Object.entries(selected));

  return (
    <Box className={classes.page}>
      <Box className={classes.titleContainer}>
        <Typography variant="h5">{title}</Typography>
      </Box>
      <Box className={classes.infoContainer}>
        <Box className={classes.imageContainer}>
          <img className={classes.img} src={image} alt={title} />
        </Box>
        <Box className={classes.tableContainer}>
          <TableContainer component={Paper}>
            <Table
              sx={{ minWidth: 150, maxWidth: 650 }}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow></TableRow>
              </TableHead>
              <TableBody>
                {Object.entries(selected).map(([key, value]) => {
                  return (
                    <TableRow hover key={key} sx={{}}>
                      <TableCell className={classes.tableCell}>{key}</TableCell>

                      <TableCell className={classes.tableCell}>
                        {value
                          ? typeof value === "boolean"
                            ? "Yes"
                            : value
                          : "No"}
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Box>
      <Box className={classes.summaryContainer}>
        <Typography variant="caption">
          {summary.replace(/<\/?[^>]+(>|$)/g, "")}
        </Typography>
      </Box>
      <Box className={classes.titleContainer}>
        <Typography variant="h4">Instructions</Typography>
      </Box>
      <Box className={classes.instructionsContainer}>
        <Typography variant="body2">{instructions}</Typography>
      </Box>
    </Box>
  );
};

export default CustomRecipe;
