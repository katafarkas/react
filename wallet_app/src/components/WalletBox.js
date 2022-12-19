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

function WalletBox({ title, value, id, handleDeleteWallet }) {
  const navigate = useNavigate();

  function handleSelect() {
    navigate(`/wallets/wallet/${id}`)
  }

  return (
    <Card sx={{ width: 250, height: 200, m: 2 }}>
      <CardHeader
        action={
          <IconButton onClick={() => handleDeleteWallet(id)} aria-label="settings">
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
