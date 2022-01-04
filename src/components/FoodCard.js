import { makeStyles } from "@mui/styles";
import React from "react";
import { styled } from "@mui/material/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  IconButton,
  Typography,
  Button,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const useStyles = makeStyles({
  foodList: { maxHeight: "100%" },
  extraCardContent: {},
});

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
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
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={classes.foodList}>
      <Card className={classes.card} sx={{ maxWidth: 345 }}>
        <CardHeader title={title} />
        <CardMedia component="img" height="194" image={image} alt={title} />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {summary}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {/* <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore> */}
          <Button onClick={() => handleRecipe()}>Recipe</Button>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent className={classes.extraCardContent}>
            <Typography paragraph>Method:</Typography>
            <Typography paragraph>{instructions}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
};

export default FoodCard;
