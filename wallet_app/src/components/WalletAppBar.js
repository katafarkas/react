import { AppBar, Button, Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { ChevronLeftSharp } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

function WalletAppBar() {
  const navigate = useNavigate();

  function LogOut() {
    navigate("/");
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <ChevronLeftSharp />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Wallet
        </Typography>
        <Button onClick={LogOut} color="inherit">
          Kijelentkezés
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default WalletAppBar;
