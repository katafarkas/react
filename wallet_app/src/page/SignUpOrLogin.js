import { Button, Container, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

function SignUpOrLogin() {
  const navigate = useNavigate();
  const { logout } = useAuth()

  useEffect(() => {
    logout()
  }, [logout])

  return (
    <Container sx={{ height: "100%", display: "flex", alignItems: "center" }}>
      <Grid container textAlign={"center"} height={300}>
        <Grid item xs={12}>
          <Typography variant="h3">Van már fiókod?</Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={() => {
              navigate("/login");
            }}
            variant={"contained"}
            style={{ width: 200, marginBottom: "40px" }}
          >
            Jelentkezz be!
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h3">Még nincs?</Typography>
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={() => {
              navigate("/signup");
            }}
            variant={"contained"}
            style={{ width: 200 }}
          >
            Regisztrálj!
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SignUpOrLogin;
