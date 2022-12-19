import { AppBar, Button, Typography } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import { ChevronLeftSharp } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function WalletAppBar() {
  const navigate = useNavigate();
  const { logout, sessionUser } = useAuth()
  console.log(sessionUser)
  function LogOut() {
    navigate("/");
    logout()
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
          onClick={() => navigate(-1)}
        >
          <ChevronLeftSharp />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          MyWallet
        </Typography>
        {sessionUser.id ?
          <>
            <Button onClick={LogOut} color="inherit">
              Kijelentkezés
            </Button>
          </> : null}

      </Toolbar>
    </AppBar>
  );
}

export default WalletAppBar;
