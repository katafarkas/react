import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function DogCard({ dog, deleteDog }) {
  const navigate = useNavigate();

  return (
    <Grid>
      <Card>
        <CardMedia component={"img"} image={dog.img} height="250" />
        <CardContent>
          <Typography textAlign={"center"} variant={"h4"}>
            {dog.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button fullWidth variant={"contained"} onClick={() => navigate(`/edit/${dog.id}`)}>
            Edit
          </Button>
          <Button fullWidth variant={"contained"} color={"error"} onClick={() => deleteDog(dog.id)}>
            Delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default DogCard;
