import { Button, Container, Grid, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";
import { AXIOS_METHOD, doApiCall } from "../hooks/useApi";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { handleLoginResult, logout } = useAuth();

  useEffect(() => {
    logout()
  }, [logout])

  function handleShowPassword(value) {
    setShowPassword(value);
  }

  return (
    <Container sx={{ display: "flex", alignItems: "center", mt: 5 }}>
      <Grid container justifyContent={"center"} textAlign={"center"}>
        <Grid item xs={12}>
          <h2>Bejelentkezés</h2>
        </Grid>
        <Grid item xs={12}>
          <Formik
            onSubmit={(value, { setFieldError, setSubmitting }) => {
              setSubmitting(true);
              doApiCall(AXIOS_METHOD.POST, '/login', (data) => {
                handleLoginResult(data);
                setSubmitting(false);
                navigate('/wallets')
              }, (apiError) => {
                setFieldError('password', apiError);
                setSubmitting(false);
              }, value);
            }}
            initialValues={{
              name: "",
              password: ""
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
                    name="name"
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
                    name="show-password"
                    type="checkbox"
                    validate={handleShowPassword}
                  ></Field>
                  <Typography variant={"p"}>Jelszó megjelenítése </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Button
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
