import ClearIcon from "@mui/icons-material/Clear";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Card,
  CardContent,
  CardActions,
  IconButton,
  Typography,
  CardHeader,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function WalletBox({ title, value, id }) {
  const navigate = useNavigate();

  function handleDelete() {
    console.log("DELETE WALLET");
  }

  function handleSelect() {
    navigate(`/wallets/wallet/${id}`)
  }

  return (
    <Card sx={{ width: 200, height: 180, m: 2 }}>
      <CardHeader
        action={
          <IconButton onClick={handleDelete} aria-label="settings">
            <ClearIcon />
          </IconButton>
        }
        title={title}
      />
      <CardContent>
        <Typography variant="h5" color="text.secondary" textAlign="right">
          {value} Ft
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: "end" }}>
        <IconButton onClick={handleSelect} aria-label="add to favorites">
          <ChevronRightIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default WalletBox;
