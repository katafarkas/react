import { Button, Container, Grid, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function handleShowPassword(value) {
    setShowPassword(value);
  }

  function handleLogin() {
    navigate("/wallets")
  }

  return (
    <Container sx={{ display: "flex", alignItems: "center", mt: 5 }}>
      <Grid container justifyContent={"center"} textAlign={"center"}>
        <Grid item xs={12}>
          <h2>Bejelentkezés</h2>
        </Grid>
        <Grid item xs={12}>
          <Formik
            initialValues={{
              username: "",
              password: "",
              checkme: showPassword,
            }}
          >
            <Form>
              <Grid
                container
                justifyContent={"center"}
                textAlign={"center"}
                spacing={3}
              >
                <Grid item xs={12}>
                  <Field
                    name="username"
                    type="text"
                    label={"Felhasználónév"}
                    component={TextField}
                  ></Field>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="password"
                    type={showPassword ? "text" : "password"}
                    label={"Jelszó"}
                    component={TextField}
                  ></Field>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="checkme"
                    type="checkbox"
                    validate={handleShowPassword}
                  ></Field>
                  <Typography variant={"p"}>Jelszó megjelenítése </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    onClick={handleLogin}
                    type="submit"
                    color="primary"
                    variant={"contained"}
                  >
                    <CheckIcon />
                  </Button>
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Login;
