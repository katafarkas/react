import {
  Card,
  CardActions,
  CardContent,
  Typography,
  Grid,
  IconButton,
} from "@mui/material";
import CreateIcon from "@mui/icons-material/Create";
import ClearIcon from "@mui/icons-material/Clear";
import { useNavigate } from "react-router-dom";

function TransactionBox({ name, date, value }) {
  const navigate = useNavigate();
  function handleNewTransaction() {
    navigate("/wallets/wallet/:id/newtransaction");
  }
  function handleEditTransaction() {
    navigate("/wallets/wallet/:id/edittransaction/:id");
  }
  function handleDeleteTransaction() {
    console.log("DELETE");
  }
  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        mb: 2,
      }}
    >
      <CardContent
        sx={{ display: "flex", alignItems: "center", width: "100%" }}
      >
        <Grid container>
          <Grid item xs={3}>
            <Typography>{name}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>{date}</Typography>
          </Grid>
          <Grid item xs={3}>
            <Typography>{value} Ft</Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions>
        <IconButton onClick={handleEditTransaction}>
          <CreateIcon />
        </IconButton>
        <IconButton onClick={handleDeleteTransaction}>
          <ClearIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default TransactionBox;
