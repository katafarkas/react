import { Button, Container, Grid, Typography } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import { useState } from "react";

function Successful() {
  return <Typography variant={"h5"}>Registration is successful</Typography>;
}

function Screen() {
  const [password, setPassword] = useState();
  const [successful, setSuccessful] = useState();
  const [showPassword, setShowPassword] = useState(false);

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

  function handleSubmit(values, formik) {
    formik.setSubmitting(true);
    setTimeout(() => {
      console.log(values);
      formik.setSubmitting(false);
      setSuccessful(true);
    }, 1000);
  }

  return (
    <Container>
      <Grid container justifyContent={"center"} textAlign={"center"}>
        <Grid item>
          <h2>Sign Up</h2>
        </Grid>
        <Grid item container>
          <Formik
            initialValues={{
              username: "",
              email: "",
              password: "",
              password2: "",
              checkme: showPassword,
            }}
            onSubmit={(values, formik) => {
              handleSubmit(values, formik);
            }}
          >
            <Form>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Field
                    name="username"
                    type="text"
                    label={"Username"}
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
                    label={"Password"}
                    validate={passwordValidate}
                    component={TextField}
                  ></Field>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="password2"
                    type={showPassword ? "text" : "password"}
                    label={"Confirm Password"}
                    validate={confirmPasswordValidate}
                    component={TextField}
                  ></Field>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="checkme"
                    type="checkbox"
                    validate={handleShowPassword}
                  ></Field>
                  <Typography variant={"p"}>Show password </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" color="primary" variant={"contained"}>
                    Submit
                  </Button>
                </Grid>
                <Grid item xs={12}>
                  {successful ? <Successful /> : null}
                </Grid>
              </Grid>
            </Form>
          </Formik>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Screen;
