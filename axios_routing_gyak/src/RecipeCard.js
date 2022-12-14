import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";

function RecipeCard({ recipe, onNavigateToRecipe }) {
  return (
    <Grid item xs={12} md={4} lg={3}>
      <Card>
        <CardMedia component={"img"} image={recipe?.image} height="150" />
        <CardContent>
          <Typography variant={"h5"}>{recipe?.name}</Typography>
        </CardContent>
        <CardActions>
          <Button
            variant={"contained"}
            onClick={() => {
              onNavigateToRecipe(recipe?.id);
            }}
            fullWidth
          >
            Details
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default RecipeCard;
