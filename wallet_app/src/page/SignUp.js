import { Button, Container, Grid, Typography } from "@mui/material";
import { useState } from "react";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import CheckIcon from "@mui/icons-material/Check";
import { doApiCall, AXIOS_METHOD } from "../hooks/useApi";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function SignUp() {
  const [password, setPassword] = useState();
  const [termsAccept, setTermsAccept] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const { handleLoginResult } = useAuth()
  const navigate = useNavigate();
  const { logout } = useAuth()

  useEffect(() => {
    logout()
  }, [logout])

  function usernameValidate(value) {
    if (!/^[a-zA-Z0-9]{3,20}$/.test(value)) {
      return "Karakterek száma: 3-20, tartalmazhat: kis/nagybetű és szám ";
    }
  }

  function emailValidate(value) {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      return "Helytelen email cím ";
    }
  }

  function passwordValidate(value) {
    setPassword(value);
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{5,}$/.test(value)) {
      return "Karakterek száma: legalább 5, tartalmaznia kell: kis és nagybetű, szám ";
    }
  }

  function confirmPasswordValidate(value) {
    if (value !== password) {
      return "A jelszó nem egyezik ";
    }
  }

  function handleShowPassword(value) {
    setShowPassword(value);
  }

  return (
    <Container sx={{ display: "flex", alignItems: "center" }}>
      <Grid
        container
        justifyContent={"center"}
        textAlign={"center"}
        height={300}
      >
        <Grid item>
          <h2>Regisztráció</h2>
        </Grid>
        <Grid item container>
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
              password2: "",
              showPawssword: showPassword,
            }}
            onSubmit={(value, { setFieldError, setSubmitting }) => {
              setSubmitting(true);
              const onFailure = (apiError) => {
                setFieldError('name', apiError);
                setSubmitting(false);
              };

              doApiCall(AXIOS_METHOD.POST, '/reg', (_unusedRegData) => {
                doApiCall(AXIOS_METHOD.POST, '/login', (data) => {
                  handleLoginResult(data);
                  setSubmitting(false);
                  navigate('/wallets')
                }, onFailure, value);
              }, onFailure, value);
            }}
          >
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    name="name"
                    type="text"
                    label={"Felhasználónév"}
                    validate={usernameValidate}
                    component={TextField}
                  ></Field>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="email"
                    validate={emailValidate}
                    type="text"
                    component={TextField}
                    label={"Email"}
                  ></Field>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="password"
                    type={showPassword ? "text" : "password"}
                    label={"Jelszó"}
                    validate={passwordValidate}
                    component={TextField}
                  ></Field>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="password2"
                    type={showPassword ? "text" : "password"}
                    label={"Jelszó megerősítése"}
                    validate={confirmPasswordValidate}
                    component={TextField}
                  ></Field>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="showPawssword"
                    type="checkbox"
                    validate={handleShowPassword}
                  ></Field>
                  <Typography variant={"p"}>Jelszó megjelenítése </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Field name="terms" type="checkbox" onClick={() => setTermsAccept(!termsAccept)}></Field>
                  <Typography variant={"p"}>
                    Elfogadom a feltételeket
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  {!termsAccept ?
                    <Button type="submit" color="primary" variant={"contained"} disabled>
                      <CheckIcon />
                    </Button> :
                    <Button type="submit" color="primary" variant={"contained"}>
                      <CheckIcon />
                    </Button>}
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SignUp;
