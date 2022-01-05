import { makeStyles } from "@mui/styles";
import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  CardActionArea,
  Box,
} from "@mui/material";

const useStyles = makeStyles((theme) => ({
  foodList: {},
  card: { width: "100%" },
  cardHeader: {
    display: "flex",
    height: "120px",
    justifyContent: "center",
    alignItems: "center",
    margin: "5px 10px",
    [theme.breakpoints.between("xs", "sm")]: {
      margin: "0px 0px",
      height: "100%",
    },
  },
  header: {
    [theme.breakpoints.between("xs", "sm")]: {
      fontSize: "13pt!important",
    },
  },
  img: {
    [theme.breakpoints.between("xs", "sm")]: {
      height: "100px",
    },
  },
  cardActions: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "30px 20px!important",
    [theme.breakpoints.between("xs", "sm")]: {
      padding: "0px 0px!important",
    },
  },
}));

const FoodCard = ({
  image,
  summary,
  instructions,
  title,
  handleRecipe,
  id,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.foodList}>
      <Card
        className={classes.card}
        raised
        sx={{ maxWidth: 300, minWidth: 240 }}
      >
        <CardActionArea onClick={() => handleRecipe()}>
          <Box className={classes.cardHeader}>
            <Typography className={classes.header} variant="h5">
              {title}
            </Typography>
          </Box>
          <CardMedia
            className={classes.img}
            component="img"
            height="300"
            image={image}
            alt={title}
          />

          <CardActions className={classes.cardActions} disableSpacing>
            <Button onClick={() => handleRecipe()}>Recipe</Button>
          </CardActions>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default FoodCard;
