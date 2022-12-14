import * as React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container } from "@mui/system";
import { Grid, Typography, Button } from "@mui/material";
import useApi from "./useApi";

function OneRecipe() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [recipe, loading] = useApi(`/recipe/${id}`);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (recipe?.status) {
    return <div>Status: {recipe?.status}</div>;
  }

  return (
    <Container maxWidth={"lg"}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant={"h2"}>{recipe?.recipe?.name}</Typography>
          <img src={recipe?.image} alt={recipe?.recipe?.name} />
          <Typography variant={"h4"}>Ingredients</Typography>
          <ul>
            {recipe?.recipe?.ingredients.map((item, idx) => {
              return <li key={idx}>{item}</li>;
            })}
          </ul>
          <Typography variant={"h4"}>Instructions</Typography>
          <Typography variant={"body1"}>
            {recipe?.recipe?.instructions}
          </Typography>
          OneRecipe: {id}
          <Button
            variant={"contained"}
            fullWidth
            onClick={() => {
              navigate("/");
            }}
          >
            Back to all recipes
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default OneRecipe;
