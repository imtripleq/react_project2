import { MenuOutlined } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";

const pages = ["Home", "Advanced Search", "Contact"];

const useStyles = makeStyles((theme) => ({
  navDiv: { display: "flex" },
  appBar: {
    display: "flex",
    opacity: 1,
    backgroundColor: "red!important",
  },
  toolBar: {},
  navComponent: { flexGrow: 1, display: "flex" },
  navLeft: { flex: 1 },
  navRight: {
    flex: 1,
    justifyContent: "space-between",
  },
}));

// Navbar
const Navbar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const classes = useStyles();
  return (
    <Box className={classes.navDiv}>
      <AppBar className={classes.appBar} position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <Typography
              variant="h4"
              noWrap
              component="div"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "Mohave",
                fontWeight: 600,
              }}
            >
              FOOD PICKER
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuOutlined />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "flex", md: "none" },
                fontFamily: "Mohave",
                fontWeight: 500,
              }}
            >
              FOOD PICKER
            </Typography>
            <Box className={classes.navComponent}>
              <Box className={classes.navLeft}></Box>
              <Box
                sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
                className={classes.navRight}
              >
                {pages.map((page) => (
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "white", display: "block", opacity: 1 }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
