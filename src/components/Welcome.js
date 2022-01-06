import { Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const Welcome = () => {
  const useStyles = makeStyles({
    page: {},
    title: { margin: "30px 0px" },
  });

  const classes = useStyles();

  return (
    <Box className={classes.page}>
      <Box className={classes.title}>
        <Typography variant="h2">Welcome!</Typography>
      </Box>
    </Box>
  );
};

export default Welcome;
