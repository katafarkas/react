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
import { useNavigate, useParams } from "react-router-dom";

function TransactionBox({ transactionId, name, date, value, handleDeleteTransaction }) {
  const navigate = useNavigate();
  const { id } = useParams();

  function handleEditTransaction() {
    navigate(`/wallets/wallet/${id}/edittransaction/${transactionId}`);
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
        <IconButton onClick={() => handleDeleteTransaction(transactionId)} >
          <ClearIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default TransactionBox;
