import AddIcon from "@mui/icons-material/Add";
import { Card, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

function AddWalletBox() {
  const navigate = useNavigate();

  function handleAddWallet() {
    navigate("/wallets/newwallet");
  }

  return (
    <Card
      sx={{
        width: 200,
        height: 180,
        m: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      <IconButton onClick={handleAddWallet}>
        <AddIcon />
      </IconButton>
    </Card>
  );
}

export default AddWalletBox;
