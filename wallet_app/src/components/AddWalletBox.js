import AddIcon from "@mui/icons-material/Add";
import { Box, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";

function AddWalletBox() {
  const navigate = useNavigate();

  function handleAddWallet() {
    navigate("/wallets/newwallet");
  }

  return (
    <Box
      sx={{
        width: 250,
        height: 200,
        m: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      <IconButton sx={{ width: 80, height: 80, border: "1px solid" }} color="primary" onClick={handleAddWallet}>
        <AddIcon fontSize="40" />
      </IconButton>
    </Box>
  );
}

export default AddWalletBox;
