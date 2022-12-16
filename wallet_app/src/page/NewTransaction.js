import { Button, Container, Grid } from "@mui/material";
import { Field, Form, Formik } from "formik";
import { TextField } from "formik-mui";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";

function NewTransaction() {
  const navigate = useNavigate();
  function addTransaction() {
    navigate("/wallets/wallet/:id");
  }
  return (
    <Container sx={{ display: "flex", alignItems: "center", mt: 5 }}>
      <Grid container justifyContent={"center"} textAlign={"center"}>
        <Grid item xs={12}>
          <h2>Új tétel</h2>
        </Grid>
        <Grid item xs={12}>
          <Formik
            initialValues={{
              title: "",
              value: "",
              date: "",
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
                    name="title"
                    type="text"
                    label={"Név"}
                    component={TextField}
                  ></Field>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="date"
                    type="text"
                    label={"Dátum"}
                    component={TextField}
                  ></Field>
                </Grid>
                <Grid item xs={12}>
                  <Field
                    name="value"
                    type="number"
                    label={"Összeg"}
                    component={TextField}
                  ></Field>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    onClick={addTransaction}
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

export default NewTransaction;
