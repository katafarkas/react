import * as React from "react";
import { Container } from "@mui/system";
import { Grid, Typography, Button } from "@mui/material";
import DogCard from "./DogCard";
import { useNavigate } from "react-router-dom";

function AllDogs({ dogs, deleteDog }) {
  const navigate = useNavigate();

  return (
    <Container maxWidth={"lg"}>
      <Grid container>
        <Grid item xs={12} sx={{ my: 3 }}>
          <Typography variant={"h2"}>All dogs</Typography>
        </Grid>
        <Grid item xs={12} sx={{ mb: 5 }}>
          <Button
            variant={"contained"}
            onClick={() => {
              navigate("/add");
            }}
          >
            Add a new dog
          </Button>
        </Grid>
        <Grid item container spacing={3}>
          {dogs.map((dog) => {
            return (
              <Grid item xs={12} sm={6} md={4} key={dog.id}>
                <DogCard dog={dog} key={dog.id} deleteDog={deleteDog} />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </Container>
  );
}

export default AllDogs;
