import * as React from "react";
import { useEffect } from "react";
import {
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function AddOrEditDog({ addNewDog, editDog, currentId, dogs }) {
  const [name, setName] = useState();
  const [edit, setEdit] = useState(false);
  const [picture, setPicture] = useState();
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      const currentDog = dogs.find(
        (dog) => dog.id.toString() === params.id.toString()
      );
      if (currentDog) {
        setName(currentDog.name);
        setPicture(currentDog.img);
        setEdit(true);
      }
    }
  }, [dogs, params, params.id]);

  const handleClick = () => {
    if (edit) {
      editDog(params.id, name, picture);
    } else {
      addNewDog(currentId, name, picture);
    }
    navigate("/");
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", minWidth: "100vw" }}
    >
      <Card variant="outlined">
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {edit ? `Edit ${name}` : "Add new dog to your collections"}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                fullWidth
                placeholder="name"
                value={name || ""}
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                placeholder="picture"
                value={picture || ""}
                onChange={(e) => setPicture(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                variant={"outline"}
                onClick={() => {
                  navigate("/");
                }}
              >
                Back
              </Button>
              <Button variant={"contained"} onClick={handleClick}>
                {edit ? `Edit` : `Add dog`}
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default AddOrEditDog;
