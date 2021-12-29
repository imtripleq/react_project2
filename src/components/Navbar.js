import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles({});

// Navbar
const Navbar = () => {
  return (
    <Box>
      <AppBar>
        <Container>
          <Toolbar>
            <Typography>hello</Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
