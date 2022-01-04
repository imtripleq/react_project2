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

const useStyles = makeStyles({
  page: { display: "flex", flexDirection: "column" },
});

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
  } = recipe;

  useEffect(() => {
    setSelected({
      "Cheap to buy": cheap,
      "Dairy Free": dairyFree,
      "Gluten Free": glutenFree,
      "Health Score": healthScore,
      "Ready in Minutes": readyInMinutes,
      Servings: servings,
      "Source Name": sourceName,
      Url: sourceUrl,
      Score: spoonacularScore,
      Vegetarian: vegetarian,
      Healthy: veryHealthy,
    });
  }, []);

  console.log(selected);
  console.log(Object.entries(selected));

  return (
    <Box className={classes.page}>
      <Typography variant="h2"> Recipe</Typography>
      <Box className={classes.table}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 350 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(selected).map(([key, value]) => {
                return (
                  <TableRow
                    key={key}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>{key}</TableCell>

                    <TableCell>
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
  );
};

export default CustomRecipe;
