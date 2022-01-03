import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const useStyles = makeStyles({
  page: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  navContainer: {},
  contactContainer: {},
  footerContainer: {},
});

const ContactPage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.page}>
      <Box className={classes.navContainer}>
        <Navbar />
      </Box>
      <Box className={classes.contactContainer}>
        <Contact />
      </Box>
      <Box className={classes.footerContainer}>
        <Footer />
      </Box>
    </Box>
  );
};

export default ContactPage;
